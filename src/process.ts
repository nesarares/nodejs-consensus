import net from "net";

import { Application } from "./application";
import { Utils } from "./utils/utils";
import { AppPropose } from "./models/model";

function validateArgs() {
  if (process.argv.length < 4) {
    console.log("❗ Usage: node process.js <hub_ip> <hub_port> <port> <index>");
    process.exit(-1);
  }

  if (!net.isIP(process.argv[2])) {
    console.error(`🔥 Invalid hub ip ${hubIp}`);
    process.exit(-1);
  }

  if (isNaN(parseInt(process.argv[3]))) {
    console.error(`🔥 Invalid hub port ${hubPort}`);
    process.exit(-1);
  }

  if (!process.argv[4] || isNaN(parseInt(process.argv[4]))) {
    console.log("🔥 No port or invalid port specified, default to 5000.");
  }

  if (!process.argv[5] || isNaN(parseInt(process.argv[5]))) {
    console.log("🔥 No process index specified, default to 0");
  }
}

validateArgs();

const hubIp = process.argv[2];
const hubPort = parseInt(process.argv[3]);
const port = parseInt(process.argv[4]) || 5000;
const processIndex = parseInt(process.argv[5]) || 0;

Utils.setLogPrefix(processIndex, port);

const app = new Application(hubIp, hubPort, port, processIndex);
app.run();
