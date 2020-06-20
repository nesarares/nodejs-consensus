import { NetworkListener } from "./system/network-listener";
import { System } from "./system/system";
import { AppRegistration, Message, IValue, AppDecide } from "./models/model";
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
        const newSystem = new System(systemId, this.port, actualMessage.appPropose!);
        newSystem.on("decided", (value) => this.sendDecisionToHub(systemId, value));
        this.systems.set(systemId, newSystem);
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
    const message = Message.create({
      abstractionId: "app",
      type: Message.Type.APP_REGISTRATION,
      appRegistration: AppRegistration.create({
        owner: Constants.OWNER,
        index: this.index,
      }),
    });

    PerfectLink.sendMessage({
      host: this.hubIp,
      port: this.hubPort,
      rendevouzPort: this.port,
      message,
    });
  }

  private sendDecisionToHub(systemId: string, value: IValue) {
    const message = Message.create({
      systemId,
      abstractionId: "app",
      type: Message.Type.APP_DECIDE,
      appDecide: AppDecide.create({ value }),
    });

    PerfectLink.sendMessage({
      host: this.hubIp,
      port: this.hubPort,
      rendevouzPort: this.port,
      message,
    });
  }
}
