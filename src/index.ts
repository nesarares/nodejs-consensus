import { System } from "./system/system";
import { NetworkListener } from "./system/network-listener";

if (!process.argv[2] || isNaN(parseInt(process.argv[2]))) {
  console.log("No port or invalid port specified, default to 5000.");
}
const port = parseInt(process.argv[2]) || 5000;

const networkListener = new NetworkListener(port);
const system = new System();