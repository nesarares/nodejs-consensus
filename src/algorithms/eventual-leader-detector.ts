import { IEpfdSuspect, IMessage, IProcessId, Message, EldTrust } from "../models/model";
import { Algorithm } from "../system/algorithm";
import { System } from "../system/system";
import { ListUtils } from "../utils/list.utils";
import { Utils } from "../utils/utils";

// PAGE 57 (pdf 76)
// Algorithm: Monarchical Eventual Leader Detection
export class EventualLeaderDetector implements Algorithm {
  private suspected: IProcessId[];
  private leader: IProcessId | null;

  constructor(private system: System) {
    this.suspected = [];
    this.leader = null;

		console.log("Init ELD");
  }

  private handleSuspect(epfdSuspect: IEpfdSuspect) {
    ListUtils.reunion(this.suspected, [epfdSuspect.process]);
  }

  private handleRestore(epfdSuspect: IEpfdSuspect) {
    this.suspected = this.suspected.filter((q) => q != epfdSuspect.process);
  }

  public handle(message: IMessage): boolean {
    switch (message.type) {
      case Message.Type.EPFD_SUSPECT:
        this.handleSuspect(message.epfdSuspect!);
        return true;
      case Message.Type.EPFD_RESTORE:
        this.handleRestore(message.epfdRestore!);
        return true;
      default:
        const maxrankProcess = Utils.maxrank(ListUtils.difference(this.system.pi, this.suspected));
        if (this.leader != maxrankProcess) {
          this.leader = maxrankProcess;
          this.system.trigger(
            Message.create({
              abstractionId: "eld",
              type: Message.Type.ELD_TRUST,
              eldTrust: EldTrust.create({
                process: this.leader,
              }),
            })
          );
          return true;
        }
        return false;
    }
  }
}
