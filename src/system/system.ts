import {
  ProcessId,
  Message,
  PlDeliver,
  IMessage,
  IProcessId,
} from "../models/model";
import { Algorithm } from "./algorithm";
import { PerfectLink } from "../algorithms/perfect-link";
import { throws } from "assert";

export class System {
  private processes: IProcessId[] = [];
  private algorithms: Algorithm[] = [];
  private messages: IMessage[] = [];

  private isEventLoopRunning = false;
  private rerunEventLoop = false;

  constructor(public systemId: string, public port: number) {
    this.algorithms = [new PerfectLink(this)];
  }

  async eventLoop() {
    this.isEventLoopRunning = true;
    this.rerunEventLoop = false;

    this.messages.forEach((message, index) => {
      let isHandled = false;
      this.algorithms.forEach((algorithm) => {
        isHandled = isHandled || algorithm.handle(message);
      });
      if (isHandled) {
        this.messages.splice(index, 1);
        this.rerunEventLoop = true;
      }
    });

    if (this.rerunEventLoop) {
      this.eventLoop();
    } else {
      this.isEventLoopRunning = false;
    }
  }

  async newMessage(message: IMessage) {
    this.messages.push(message);
  }

  async newNetworkMessage(message: Message) {
    const networkMessage = message.networkMessage!;
    const actualMessage = networkMessage.message!;

    if (actualMessage.type === Message.Type.APP_PROPOSE) {
      this.processes = actualMessage.appPropose!.processes!;
    } else {
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

      if (this.isEventLoopRunning) {
        this.rerunEventLoop = true;
      } else {
        this.eventLoop(); 
      }
    }
  }
}
