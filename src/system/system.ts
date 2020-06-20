import { PerfectLink } from "../algorithms/perfect-link";
import { IAppPropose, IMessage, IProcessId, Message, PlDeliver, IValue } from "../models/model";
import { Algorithm } from "./algorithm";
import { EventuallyPerfectFailureDetector } from "../algorithms/eventually-perfect-failure-detector";
import { Utils } from "../utils/utils";
import { EventualLeaderDetector } from "../algorithms/eventual-leader-detector";
import { BestEffortBroadcast } from "../algorithms/best-effort-broadcast";
import { EpochChange } from "../algorithms/epoch-change";
import { UniformConsensus } from "../algorithms/uniform-consensus";
import { AppLayer } from '../algorithms/app-layer';

export class System {
  private processes: IProcessId[] = [];
  private algorithms: Algorithm[] = [];
  private messages: IMessage[] = [];

  private isEventLoopRunning = false;
  private rerunEventLoop = false;

  private listeners: { event: "decided" | string; callback: any }[] = [];

  constructor(public systemId: string, public port: number, appPropose: IAppPropose) {
    this.processes = appPropose.processes!;
    // console.log(this.processes);
    this.algorithms.push(
      new PerfectLink(this),
      new EventualLeaderDetector(this),
      new BestEffortBroadcast(this),
      new EventuallyPerfectFailureDetector(this),
      new EpochChange(this),
      new UniformConsensus(this),
      new AppLayer(this)
    );
    console.log(`Initialized new system "${systemId}" with ${this.processes.length} participants.`);
  }

  public on(event: "decided", callback: (value: IValue) => void): void;
  public on(event: string, callback: (...args: any) => void) {
    this.listeners.push({ event, callback });
  }

  public notifyListeners(event: string, ...args: any) {
    this.listeners.forEach((listener) => {
      if (listener.event === event) {
        listener.callback(...args);
      }
    });
  }

  get pi(): IProcessId[] {
    return [...this.processes];
  }

  get instances(): Algorithm[] {
    return [...this.algorithms];
  }

  get self(): IProcessId {
    return this.processes.find((p) => p.port === this.port)!;
  }

  public addAlgorithm(algorithm: Algorithm) {
    this.algorithms.push(algorithm);
  }

  async eventLoop() {
    // console.log(this.messages.map(m => Message.Type[m.type!]).join(';'));
    // console.log(`${this.messages.length} messages in queue.`);

    this.isEventLoopRunning = true;
    this.rerunEventLoop = false;

    // this.messages.forEach((message, index) => {
    const noMessages = this.messages.length;
    let index = 0;
    let consumed = 0;
    while (consumed < noMessages) {
      let isHandled = false;
      this.algorithms.forEach((algorithm) => {
        isHandled = isHandled || algorithm.handle(this.messages[index]);
      });
      if (isHandled) {
        this.messages.splice(index, 1);
        this.rerunEventLoop = true;
      } else {
        index++;
      }
      consumed++;
    }
    // });

    if (this.rerunEventLoop) {
      setTimeout(() => this.eventLoop(), 0);
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

    if (Utils.shouldLog(actualMessage?.type!)) {
      console.log(`👈 ${Message.Type[actualMessage?.type!]} ⬅ ${plDeliver.sender?.owner}-${plDeliver.sender?.index}`);
      // console.log(actualMessage);
    }

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
