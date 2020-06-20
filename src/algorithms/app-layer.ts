import { Algorithm } from "../system/algorithm";
import { System } from "../system/system";
import { IMessage, Message } from "../models/model";

export class AppLayer implements Algorithm {
  constructor(private system: System) {}

  public handle(message: IMessage): boolean {
    switch (message.type) {
      case Message.Type.UC_DECIDE:
        this.system.stopped = true;
        this.system.notifyListeners("decided", message.ucDecide?.value);
        return true;
      default:
        return false;
    }
  }
}
