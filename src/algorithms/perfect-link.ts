import { Algorithm } from "../system/algorithm";
import { IPlSend, IPlDeliver, IMessage, Message } from "../models/model";
import { System } from "../system/system";

export class PerfectLink implements Algorithm {
  constructor(private system: System) {}

  private send(plSend: IPlSend) {
    console.log({ plSend });
  }

  private deliver(plDeliver: IPlDeliver) {
    console.log({ plDeliver });
  }

  public handle(message: IMessage): boolean {
    if (message.type === Message.Type.PL_SEND) {
      this.send(message.plSend!);
      return true;
    } else if (message.type === Message.Type.PL_DELIVER) {
      this.deliver(message.plDeliver!);
      return true;
    }
    return false;
  }
}
