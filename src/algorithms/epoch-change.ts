import {
  BebBroadcast,
  EcNewEpoch_,
  IBebDeliver,
  IEldTrust,
  IMessage,
  IProcessId,
  Message,
  EcStartEpoch,
  PlSend,
  EcNack_,
  IPlDeliver,
} from "../models/model";
import { Algorithm } from "../system/algorithm";
import { System } from "../system/system";
import { Utils } from "../utils/utils";

// PAGE 219 (pdf 237)
// Algorithm: Leader-Based Epoch-Change
export class BestEffortBroadcast implements Algorithm {
  private trusted: IProcessId;
  private lastts: number;
  private ts: number;
  private N: number;

  constructor(private system: System) {
    this.trusted = Utils.maxrank(system.pi);
    this.lastts = 0;
    this.ts = system.self.rank!;
    this.N = system.pi.length;
  }

  private handleTrust(eldTrust: IEldTrust) {
    this.trusted = eldTrust.process!;
    if (this.trusted == this.system.self) {
      this.ts += this.N;
      this.system.trigger(
        Message.create({
          abstractionId: "beb",
          type: Message.Type.BEB_BROADCAST,
          bebBroadcast: BebBroadcast.create({
            message: Message.create({
              abstractionId: "ec" + this.ts,
              type: Message.Type.EC_NEW_EPOCH_,
              ecNewEpoch_: EcNewEpoch_.create({
                timestamp: this.ts,
              }),
            }),
          }),
        })
      );
    }
  }

  private handleBebDeliver(bebDeliver: IBebDeliver) {
    const l = bebDeliver.sender;
    const newts = bebDeliver.message!.ecNewEpoch_!.timestamp!;
    if (l == this.trusted && newts > this.lastts) {
      const lastts = this.lastts;
      this.lastts = newts;
      this.system.trigger(
        Message.create({
          abstractionId: "ec" + lastts,
          type: Message.Type.EC_START_EPOCH,
          ecStartEpoch: EcStartEpoch.create({
            newLeader: l,
            newTimestamp: newts,
          }),
        })
      );
    } else {
      this.system.trigger(
        Message.create({
          abstractionId: "pl",
          type: Message.Type.PL_SEND,
          plSend: PlSend.create({
            destination: l,
            message: Message.create({
              abstractionId: "ec" + newts,
              type: Message.Type.EC_NACK_,
              ecNack_: EcNack_.create({}),
            }),
          }),
        })
      );
    }
  }

  private handlePlDeliver(plDeliver: IPlDeliver) {
    if (this.trusted == this.system.self) {
      this.ts += this.N;
      this.system.trigger(
        Message.create({
          abstractionId: "beb",
          type: Message.Type.BEB_BROADCAST,
          bebBroadcast: BebBroadcast.create({
            message: Message.create({
              abstractionId: "ec" + this.lastts,
              type: Message.Type.EC_NEW_EPOCH_,
              ecNewEpoch_: EcNewEpoch_.create({
                timestamp: this.ts,
              }),
            }),
          }),
        })
      );
    }
  }

  public handle(message: IMessage): boolean {
    switch (message.type) {
      case Message.Type.ELD_TRUST:
        this.handleTrust(message.eldTrust!);
        return true;
      case Message.Type.BEB_DELIVER:
        if (message.bebDeliver?.message?.type !== Message.Type.EC_NEW_EPOCH_) {
          return false;
        }
        this.handleBebDeliver(message.bebDeliver!);
        return true;
      case Message.Type.PL_DELIVER:
        if (message.plDeliver?.message?.type !== Message.Type.EC_NACK_) {
          return false;
        }
        this.handlePlDeliver(message.plDeliver!);
        return true;
      default:
        return false;
    }
  }
}
