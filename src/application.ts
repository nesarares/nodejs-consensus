import { NetworkListener } from "./system/network-listener";
import { System } from "./system/system";
import { AppRegistration, Message } from "./models/model";
import { PerfectLink } from "./algorithms/perfect-link";
import { Constants } from "./utils/constants";

export class Application {
  private systems: Map<string, System> = new Map();

  constructor(private hubIp: string, private hubPort: number, private port: number, private index: number) {}

  public run() {
    this.initNetworkListener();
  }

  private initNetworkListener() {
    const networkListener = new NetworkListener(this.port);

    networkListener.on("network-message", async (message: Message) => {
      const systemId = message.systemId!;
      const actualMessage = message?.networkMessage?.message;

      if (!actualMessage) return;
 
      if (actualMessage.type === Message.Type.APP_PROPOSE) {
        this.systems.set(systemId, new System(systemId, this.port, actualMessage.appPropose!));
      } else if (!this.systems.has(systemId)) {
        console.log("Received message for system which has not been initialized. Skipping.");
      } else {
        this.systems.get(systemId)?.newNetworkMessage(message);
      }
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
