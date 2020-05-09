import { ProcessId, Message } from "../models/model";
import { Algorithm } from "./algorithm";
import { PerfectLink } from "../algorithms/perfect-link";

export class System {
  private processes: ProcessId[] = [];
  private algorithms: Algorithm[] = [];
  private messages: Message[] = [];

  constructor() {
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

  async newMessage(message: Message) {
    this.messages.push(message);
    this.eventLoop();
  }
}
