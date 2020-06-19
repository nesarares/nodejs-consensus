import { Algorithm } from "../system/algorithm";
import { Message, IMessage, IPlDeliver, IBebBroadcast, PlSend, BebDeliver } from "../models/model";
import { System } from "../system/system";

// PAGE 76 (pdf 95)
// Algorithm: Basic Broadcast
export class BestEffortBroadcast implements Algorithm {
  public constructor(private system: System) {}

  public handleBebBroadcast(bebBroadcast: IBebBroadcast) {
    this.system.pi.forEach((q) => {
      this.system.trigger(
        Message.create({
          abstractionId: "pl",
          type: Message.Type.PL_SEND,
          plSend: PlSend.create({
            destination: q,
            message: bebBroadcast.message,
          }),
        })
      );
    });
  }

  public handlePlDeliver(plDeliver: IPlDeliver) {
    this.system.trigger(
      Message.create({
        abstractionId: "beb",
        type: Message.Type.BEB_DELIVER,
        bebDeliver: BebDeliver.create({
          sender: plDeliver.sender,
          message: plDeliver.message,
        }),
      })
    );
  }

  public handle(message: IMessage): boolean {
    switch (message.type) {
      case Message.Type.BEB_BROADCAST:
        this.handleBebBroadcast(message.bebBroadcast!);
        return true;
      case Message.Type.PL_DELIVER:
        if (
          [Message.Type.EPFD_HEARTBEAT_REPLY, Message.Type.EPFD_HEARTBEAT_REQUEST, Message.Type.EC_NACK_].includes(
            message.plDeliver!.message!.type!
          )
        ) {
          return false;
        }
        this.handlePlDeliver(message.plDeliver!);
        return true;
      default:
        return false;
    }
  }
}
