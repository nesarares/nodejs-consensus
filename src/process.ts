import { NetworkMessage } from "./models/model";
import { NetworkListener } from "./system/network-listener";
import { System } from "./system/system";
import { Utils } from "./utils/utils";

const port = parseInt(process.argv[2]) || 5000;
const processIndex = parseInt(process.argv[3]) || 0;

Utils.setLogPrefix(processIndex, port);

if (!process.argv[2] || isNaN(parseInt(process.argv[2]))) {
  console.log("No port or invalid port specified, default to 5000.");
}

if (!process.argv[3] || isNaN(parseInt(process.argv[3]))) {
  console.log("No process index specified, default to 0");
}

const networkListener = new NetworkListener(port);
const systems: Map<string, System> = new Map();

networkListener.on("network-message", (networkMessage: NetworkMessage) => {
  const systemId = networkMessage.message?.systemId!;
  if (!systems.has(systemId)) {
    systems.set(systemId, new System());
  }
  systems.get(systemId)?.newNetworkMessage(networkMessage);
});
