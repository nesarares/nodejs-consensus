import { NetworkListener } from "./system/network-listener";
import { System } from "./system/system";
import { AppRegistration, Message } from "./models/model";
import { PerfectLink } from "./algorithms/perfect-link";
import { Constants } from "./utils/constants";

export class Application {
  private systems: Map<string, System> = new Map();

  constructor(
    private hubIp: string,
    private hubPort: number,
    private port: number,
    private index: number
  ) {}

  public run() {
    this.initNetworkListener();
  }

  private initNetworkListener() {
    const networkListener = new NetworkListener(this.port);

    networkListener.on("network-message", async (message: Message) => {
      const systemId = message.systemId!;
      const actualMessage = message?.networkMessage?.message;

      if (!actualMessage) return;

      if (actualMessage?.type === Message.Type.EPFD_HEARTBEAT_REQUEST) return;
      console.log(actualMessage);

      if (!this.systems.has(systemId)) {
        this.systems.set(systemId, new System(systemId, this.port));
      }

      this.systems.get(systemId)?.newNetworkMessage(message);
    });

    networkListener.on("listening", () => {
      this.registerProcessToHub();
    });
  }

  private registerProcessToHub() {
    const appRegistration = AppRegistration.create({
      owner: Constants.OWNER,
      index: this.index,
    });

    const message = Message.create({
      type: Message.Type.APP_REGISTRATION,
      appRegistration,
    });

    PerfectLink.sendMessage({
      host: this.hubIp,
      port: this.hubPort,
      rendevouzPort: this.port,
      message,
    });
  }
}
