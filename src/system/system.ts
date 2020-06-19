import { PerfectLink } from "../algorithms/perfect-link";
import { IAppPropose, IMessage, IProcessId, Message, PlDeliver } from "../models/model";
import { Algorithm } from "./algorithm";
import { EventuallyPerfectFailureDetector } from "../algorithms/eventually-perfect-failure-detector";

export class System {
  private processes: IProcessId[] = [];
  private algorithms: Algorithm[] = [];
  private messages: IMessage[] = [];

  private isEventLoopRunning = false;
  private rerunEventLoop = false;

  constructor(public systemId: string, public port: number, appPropose: IAppPropose) {
    this.processes = appPropose.processes!;
    this.algorithms = [new PerfectLink(this), new EventuallyPerfectFailureDetector(this)];
    console.log(`Initialized new system "${systemId}" with ${this.processes.length} participants.`);
  }

  get pi(): IProcessId[] {
    return [...this.processes];
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

  async trigger(message: IMessage) {
    this.messages.push(message);
  }

  async newNetworkMessage(message: Message) {
    const networkMessage = message.networkMessage!;
    const actualMessage = networkMessage.message!;

    const plDeliver = PlDeliver.create({
      sender: this.processes.find((process) => process.port === networkMessage.senderListeningPort),
      message: actualMessage,
    });

    console.log(`👈 ${Message.Type[actualMessage?.type!]} ⬅ ${plDeliver.sender?.owner}-${plDeliver.sender?.index}`);

    const newMessage = Message.create({
      abstractionId: message.abstractionId,
      type: Message.Type.PL_DELIVER,
      plDeliver,
    });

    this.trigger(newMessage);

    if (this.isEventLoopRunning) {
      this.rerunEventLoop = true;
    } else {
      this.eventLoop();
    }
  }
}
