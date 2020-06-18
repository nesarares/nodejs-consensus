import {
  ProcessId,
  Message,
  NetworkMessage,
  PlDeliver,
  IMessage,
} from "../models/model";
import { Algorithm } from "./algorithm";
import { PerfectLink } from "../algorithms/perfect-link";

export class System {
  private processes: ProcessId[] = [];
  private algorithms: Algorithm[] = [];
  private messages: IMessage[] = [];

  constructor(public systemId: string, public port: number) {
    this.algorithms = [new PerfectLink(this)];
  }

  async eventLoop() {
    this.messages.forEach((message, index) => {
      let isHandled = false;
      this.algorithms.forEach((algorithm) => {
        isHandled = isHandled || algorithm.handle(message);
      });
      if (isHandled) {
        this.messages.splice(index, 1);
      }
    });
  }

  async newMessage(message: IMessage) {
    this.messages.push(message);
    this.eventLoop();
  }

  async newNetworkMessage(message: Message) {
    const networkMessage = message.networkMessage!;
    const actualMessage = networkMessage.message!;
    const plDeliver = PlDeliver.create({
      sender: this.processes.find(
        (process) => process.port === networkMessage.senderListeningPort
      ),
      message: actualMessage,
    });

    const newMessage = Message.create({
      abstractionId: message.abstractionId,
      type: Message.Type.PL_DELIVER,
      plDeliver,
    });

    this.newMessage(newMessage);
  }
}
