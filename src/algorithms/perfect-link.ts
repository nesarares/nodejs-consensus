import { Algorithm } from "../system/algorithm";
import {
  IPlSend,
  IPlDeliver,
  IMessage,
  Message,
  NetworkMessage,
} from "../models/model";
import { System } from "../system/system";
import { v4 as uuidv4 } from "uuid";
import net from "net";

export class PerfectLink implements Algorithm {
  constructor(private system: System) {}

  public static sendMessage(args: {
    host: string;
    port: number;
    rendevouzPort: number;
    message: IMessage;
  }) {
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
      console.error("🔥 Pl.Eend error");
      console.error(
        `Could not send message type ${args.message?.type} to client ${args.host} port ${args.port}`
      );
    });

    client.on("end", () => {
      console.log(
        `👉 Sent message ${Message.Type[args.message?.type!]} to client ${
          args.host
        } port ${args.port}`
      );
    });
  }

  public handle(message: IMessage): boolean {
    if (message.type === Message.Type.PL_SEND) {
      this.send(message.plSend!);
      return true;
    } else if (message.type === Message.Type.PL_DELIVER) {
      this.deliver(message.plDeliver!);
      return true;
    }
    return false;
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
  }

  private deliver(plDeliver: IPlDeliver) {
    this.system.newMessage(plDeliver.message!);
  }
}
