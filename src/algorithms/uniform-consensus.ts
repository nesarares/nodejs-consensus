import {
  EpAbort,
  EpPropose,
  EpState_,
  IEcStartEpoch,
  IEpAborted,
  IEpDecide,
  IMessage,
  IProcessId,
  IUcPropose,
  IValue,
  Message,
  UcDecide,
  Value,
} from "../models/model";
import { Algorithm } from "../system/algorithm";
import { System } from "../system/system";
import { Utils } from "../utils/utils";
import { EpochConsensus } from "./epoch-consensus";

// PAGE 225 (pdf 243)
// Algorithm: Leader-Driven Consensus
export class UniformConsensus implements Algorithm {
  private val: IValue;
  private proposed: boolean;
  private decided: boolean;
  private ets: number;
  private leader: IProcessId | null;
  private newTs: number;
  private newLeader: IProcessId | null;

  constructor(private system: System) {
    this.val = Value.create({ defined: false });
    this.proposed = false;
    this.decided = false;

    const l0 = Utils.maxrank(system.pi);
    const state = EpState_.create({ valueTimestamp: 0, value: Value.create({ defined: false }) });
    this.system.addAlgorithm(new EpochConsensus(system, state, 0, l0));

    this.ets = 0;
    this.leader = l0;
    this.newTs = 0;
    this.newLeader = null;
  }

  private handleUcPropose(ucPropose: IUcPropose) {
    this.val = ucPropose.value!;
    return true;
  }

  private handleEcStartEpoch(ecStartEpoch: IEcStartEpoch) {
    this.newTs = ecStartEpoch.newTimestamp!;
    this.newLeader = ecStartEpoch.newLeader!;
    this.system.trigger(
      Message.create({
        abstractionId: "ep" + this.ets,
        type: Message.Type.EP_ABORT,
        epAbort: EpAbort.create({}),
      })
    );
    console.log(`🧾 EP_ABORT@ep${this.ets}`);

    return true;
  }

  private handleEpAborted(epAborted: IEpAborted) {
    if (epAborted.ets !== this.ets) return false;
    this.ets = this.newTs;
    this.leader = this.newLeader;
    this.proposed = false;
    const state = EpState_.create({
      value: epAborted.value,
      valueTimestamp: epAborted.valueTimestamp,
    });
    this.system.addAlgorithm(new EpochConsensus(this.system, state, this.ets, this.leader!));
    return true;
  }

  private handleEpDecide(epDecide: IEpDecide) {
    if (epDecide.ets !== this.ets) return false;

    if (this.decided == false) {
      this.decided = true;
      this.system.trigger(
        Message.create({
          abstractionId: "uc",
          type: Message.Type.UC_DECIDE,
          ucDecide: UcDecide.create({
            value: epDecide.value,
          }),
        })
      );
      console.log(`🧾 UC_DECIDE@uc (${epDecide.value?.v})`);
    }
    return true;
  }

  private handleDefault() {
    if (this.leader == this.system.self && this.val.defined && !this.proposed) {
      this.proposed = true;
      this.system.trigger(
        Message.create({
          abstractionId: "ep" + this.ets,
          type: Message.Type.EP_PROPOSE,
          epPropose: EpPropose.create({
            value: this.val,
          }),
        })
      );
      console.log(`🧾 EP_PROPOSE@ep (${this.val.v})`);
      return true;
    }

    return false;
  }

  public handle(message: IMessage): boolean {
    switch (message.type) {
      case Message.Type.UC_PROPOSE:
        return this.handleUcPropose(message.ucPropose!);
      case Message.Type.EC_START_EPOCH:
        return this.handleEcStartEpoch(message.ecStartEpoch!);
      case Message.Type.EP_ABORTED:
        return this.handleEpAborted(message.epAborted!);
      case Message.Type.EP_DECIDE:
        return this.handleEpDecide(message.epDecide!);
      default:
        return this.handleDefault();
    }
  }
}
