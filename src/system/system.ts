import { ProcessId, Message, NetworkMessage, PlDeliver, IMessage } from "../models/model";
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

  async newNetworkMessage(networkMessage: NetworkMessage) {
    const plDeliver = PlDeliver.create({
      sender: this.processes.find((process) => process.port === networkMessage.rendezvousPort),
      message: networkMessage.message,
    });

    this.newMessage(
      Message.create({
        type: Message.Type.PL_DELIVER,
        plDeliver,
      })
    );
  }
}
