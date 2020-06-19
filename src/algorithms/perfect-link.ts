import net from "net";
import { v4 as uuidv4 } from "uuid";

import { IMessage, IPlSend, Message, NetworkMessage } from "../models/model";
import { Algorithm } from "../system/algorithm";
import { System } from "../system/system";
import { Utils } from "../utils/utils";

export class PerfectLink implements Algorithm {
  constructor(private system: System) {}

  public static sendMessage(args: { host: string; port: number; rendevouzPort: number; message: IMessage }) {
    args.message.messageUuid = uuidv4();

    const client = new net.Socket();
    client.connect({
      port: args.port,
      host: args.host,
    });

    client.on("connect", () => {
      const networkMessage = NetworkMessage.create({
        senderListeningPort: args.rendevouzPort,
        message: args.message,
      });

      const toSendMessage = Message.create({
        messageUuid: uuidv4(),
        abstractionId: networkMessage.message?.abstractionId,
        systemId: networkMessage.message?.systemId,
        type: Message.Type.NETWORK_MESSAGE,
        networkMessage,
      });

      const bytes: Uint8Array = Message.encode(toSendMessage).finish();
      const contentLength = Buffer.alloc(4);
      contentLength.writeInt32BE(bytes.length);

      client.write(contentLength);
      client.write(bytes);
      client.end();
    });

    client.on("error", () => {
      console.error("🔥 Pl.Send error");
      console.error(`Could not send ${Message.Type[args.message?.type!]} to client ${args.host} port ${args.port}`);
    });
  }

  public handle(message: IMessage): boolean {
    switch (message.type) {
      case Message.Type.PL_SEND:
        this.send(message.plSend!);
        return true;
      default:
        return false;
    }
  }

  private send(plSend: IPlSend) {
    plSend.message!.systemId = this.system.systemId;
    plSend.message!.abstractionId = plSend.message!.abstractionId || "app";

    PerfectLink.sendMessage({
      host: plSend.destination?.host!,
      port: plSend.destination?.port!,
      rendevouzPort: this.system.port,
      message: plSend.message!,
    });

    if (Utils.shouldLog(plSend.message?.type!)) {
      console.log(
        `👉 ${Message.Type[plSend.message?.type!]} ➡ ${plSend.destination?.owner}-${plSend.destination?.index}`
      );
    }
  }
}
