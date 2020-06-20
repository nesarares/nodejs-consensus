import { Algorithm } from "../system/algorithm";
import {
  IMessage,
  Message,
  IPlDeliver,
  PlSend,
  EpfdHeartbeatReply_,
  IProcessId,
  EpfdSuspect,
  EpfdRestore,
  EpfdHeartbeatRequest_,
} from "../models/model";
import { System } from "../system/system";
import { Constants } from "../utils/constants";
import { ListUtils } from "../utils/list.utils";

// PAGE 55 (pdf 74)
// Algorithm: Increasing Timeout
export class EventuallyPerfectFailureDetector implements Algorithm {
  private alive: IProcessId[];
  private suspected: IProcessId[];
  private delay: number;

  constructor(private system: System) {
    this.alive = system.pi;
    this.suspected = [];
    this.delay = Constants.EPFD_DELTA;
    this.starttimer(this.delay);

		console.log("Init EPFD");
  }

  private starttimer(delay: number) {
    setTimeout(() => {
      this.system.trigger(
        Message.create({
          abstractionId: "epfd",
          type: Message.Type.EPFD_TIMEOUT,
        })
      );
    }, delay);
  }

  private handleTimeout() {
    if (ListUtils.intersection(this.alive, this.suspected).length != 0) {
      this.delay += Constants.EPFD_DELTA;
    }

    this.system.pi.forEach((p) => {
      if (!ListUtils.contains(this.alive, p) && !ListUtils.contains(this.suspected, p)) {
        ListUtils.reunion(this.suspected, [p]);
        this.system.trigger(
          Message.create({
            abstractionId: "epfd",
            type: Message.Type.EPFD_SUSPECT,
            epfdSuspect: EpfdSuspect.create({
              process: p,
            }),
          })
        );
      } else if (ListUtils.contains(this.alive, p) && ListUtils.contains(this.suspected, p)) {
        this.suspected = this.suspected.filter((q) => q != p);
        this.system.trigger(
          Message.create({
            abstractionId: "epfd",
            type: Message.Type.EPFD_RESTORE,
            epfdRestore: EpfdRestore.create({
              process: p,
            }),
          })
        );
      }

      this.system.trigger(
        Message.create({
          abstractionId: "pl",
          type: Message.Type.PL_SEND,
          plSend: PlSend.create({
            destination: p,
            message: Message.create({
              abstractionId: "epfd",
              type: Message.Type.EPFD_HEARTBEAT_REQUEST,
              epfdHeartbeatRequest_: EpfdHeartbeatRequest_.create({}),
            }),
          }),
        })
      );
    });

    this.alive = [];
    this.starttimer(this.delay);
  }

  private handlePlDeliver(plDeliver: IPlDeliver) {
    const message = plDeliver!.message;
    switch (message?.type) {
      case Message.Type.EPFD_HEARTBEAT_REQUEST:
        this.system.trigger(
          Message.create({
            type: Message.Type.PL_SEND,
            plSend: PlSend.create({
              destination: plDeliver.sender,
              message: Message.create({
                abstractionId: "epfd",
                type: Message.Type.EPFD_HEARTBEAT_REPLY,
                epfdHeartbeatReply_: EpfdHeartbeatReply_.create({}),
              }),
            }),
          })
        );
        return true;
      case Message.Type.EPFD_HEARTBEAT_REPLY:
        ListUtils.reunion(this.alive, [plDeliver.sender]);
        return true;
      default:
        return false;
    }
  }

  public handle(message: IMessage): boolean {
    switch (message.type) {
      case Message.Type.PL_DELIVER:
        return this.handlePlDeliver(message.plDeliver!);
      case Message.Type.EPFD_TIMEOUT:
        this.handleTimeout();
        return true;
      default:
        return false;
    }
  }
}
