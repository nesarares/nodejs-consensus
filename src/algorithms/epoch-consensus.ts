import {
  BebBroadcast,
  EpAborted,
  EpAccept_,
  EpDecide,
  EpDecided_,
  EpRead_,
  EpState_,
  EpWrite_,
  IBebDeliver,
  IEpAbort,
  IEpPropose,
  IEpState_,
  IMessage,
  IPlDeliver,
  IProcessId,
  IValue,
  Message,
  PlSend,
  Value,
} from "../models/model";
import { Algorithm } from "../system/algorithm";
import { System } from "../system/system";

// PAGE 223 (pdf 241)
// Algorithm: Read/Write Epoch Consensus
export class EpochConsensus implements Algorithm {
  private halted = false;
  private state: IEpState_;
  private tmpval: IValue;
  private states: IEpState_[];
  private accepted: number;

  constructor(private system: System, state: IEpState_, private ets: number, private leader: IProcessId) {
    this.state = state;
    this.tmpval = Value.create({ defined: false });
    this.states = new Array(system.pi.length).fill(null);
    this.accepted = 0;
  }

  private handleEpPropose(epPropose: IEpPropose) {
    this.tmpval = epPropose.value!;
    this.system.trigger(
      Message.create({
        abstractionId: "beb",
        type: Message.Type.BEB_BROADCAST,
        bebBroadcast: BebBroadcast.create({
          message: Message.create({
            abstractionId: "ep" + this.ets,
            type: Message.Type.EP_READ_,
            epRead_: EpRead_.create({}),
          }),
        }),
      })
    );
    return true;
  }

  private handleBebDeliverRead(bebDeliver: IBebDeliver) {
    this.system.trigger(
      Message.create({
        abstractionId: "pl",
        type: Message.Type.PL_SEND,
        plSend: PlSend.create({
          destination: bebDeliver.sender,
          message: Message.create({
            abstractionId: "ep" + this.ets,
            type: Message.Type.EP_STATE_,
            epState_: EpState_.create({
              value: this.state.value,
              valueTimestamp: this.state.valueTimestamp,
            }),
          }),
        }),
      })
    );
    return true;
  }

  private handlePlDeliverState(plDeliver: IPlDeliver) {
    const q = plDeliver.sender!;
    this.states[q.rank!] = plDeliver.message!.epState_!;
    return true;
  }

  private handleBebDeliverWrite(bebDeliver: IBebDeliver) {
    this.state = EpState_.create({
      value: bebDeliver.message?.epWrite_?.value,
      valueTimestamp: this.ets,
    });
    this.system.trigger(
      Message.create({
        abstractionId: "pl",
        type: Message.Type.PL_SEND,
        plSend: PlSend.create({
          destination: bebDeliver.sender,
          message: Message.create({
            abstractionId: "ep" + this.ets,
            type: Message.Type.EP_ACCEPT_,
            epAccept_: EpAccept_.create({}),
          }),
        }),
      })
    );
    return true;
  }

  private handlePlDeliverAccept(plDeliver: IPlDeliver) {
    this.accepted += 1;
    return true;
  }

  private handleBebDeliverDecided(bebDeliver: IBebDeliver) {
    this.system.trigger({
      abstractionId: "ep" + this.ets,
      type: Message.Type.EP_DECIDE,
      epDecide: EpDecide.create({
        ets: this.ets,
        value: bebDeliver.message?.epDecided_?.value,
      }),
    });
    return true;
  }

  private handleEpAbort(epAbort: IEpAbort) {
    this.system.trigger(
      Message.create({
        abstractionId: "ep" + this.ets,
        type: Message.Type.EP_ABORTED,
        epAborted: EpAborted.create({
          ets: this.ets,
          value: this.state.value,
          valueTimestamp: this.state.valueTimestamp,
        }),
      })
    );
    this.halted = true;
    return true;
  }

  private handleDefault() {
    if (this.states.filter((s) => !!s).length > this.system.pi.length / 2) {
      let highestState: IEpState_;
      this.states.forEach((state) => {
        if (!highestState) {
          highestState = state;
        } else if (state?.valueTimestamp && highestState.valueTimestamp! < state.valueTimestamp) {
          highestState = state;
        }
      });

      // @ts-ignore
      if (highestState?.value?.defined) {
        this.tmpval = highestState.value;
      }

      this.states = new Array(this.system.pi.length).fill(null);
      this.system.trigger(
        Message.create({
          abstractionId: "beb",
          type: Message.Type.BEB_BROADCAST,
          bebBroadcast: BebBroadcast.create({
            message: Message.create({
              abstractionId: "ep" + this.ets,
              type: Message.Type.EP_WRITE_,
              epWrite_: EpWrite_.create({
                value: this.tmpval,
              }),
            }),
          }),
        })
      );
      return true;
    }

    if (this.accepted > this.system.pi.length / 2) {
      this.accepted = 0;
      this.system.trigger(
        Message.create({
          abstractionId: "beb",
          type: Message.Type.BEB_BROADCAST,
          bebBroadcast: BebBroadcast.create({
            message: Message.create({
              abstractionId: "ep" + this.ets,
              type: Message.Type.EP_DECIDED_,
              epDecided_: EpDecided_.create({
                value: this.tmpval,
              }),
            }),
          }),
        })
      );
      return true;
    }

    return false;
  }

  public handle(message: IMessage): boolean {
    if (this.halted) return false;

    // const abstractionId =
    //   message?.bebDeliver?.message?.abstractionId ??
    //   message?.plDeliver?.message?.abstractionId ??
    //   message?.abstractionId;

    // if (abstractionId?.startsWith("ep") && abstractionId !== "ep" + this.ets) {
    //   return false;
    // }

    switch (message.type) {
      case Message.Type.EP_PROPOSE:
        return this.handleEpPropose(message.epPropose!);
      case Message.Type.BEB_DELIVER:
        switch (message.bebDeliver?.message?.type) {
          case Message.Type.EP_READ_:
            return this.handleBebDeliverRead(message.bebDeliver);
          case Message.Type.EP_WRITE_:
            return this.handleBebDeliverWrite(message.bebDeliver);
          case Message.Type.EP_DECIDED_:
            return this.handleBebDeliverDecided(message.bebDeliver);
          default:
            return false;
        }
      case Message.Type.PL_DELIVER:
        switch (message.plDeliver?.message?.type) {
          case Message.Type.EP_STATE_:
            return this.handlePlDeliverState(message.plDeliver);
          case Message.Type.EP_ACCEPT_:
            return this.handlePlDeliverAccept(message.plDeliver);
          default:
            return false;
        }
      case Message.Type.EP_ABORT:
        return this.handleEpAbort(message.epAbort!);
      default:
        return this.handleDefault();
    }
  }
}
