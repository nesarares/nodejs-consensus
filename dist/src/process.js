"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const application_1 = require("./application");
const utils_1 = require("./utils/utils");
function validateArgs() {
    if (process.argv.length < 4) {
        console.log("❗ Usage: node process.js <hub_ip> <hub_port> <port> <index>");
        process.exit(-1);
    }
    if (!net_1.default.isIP(process.argv[2])) {
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
utils_1.Utils.setLogPrefix(processIndex, port);
const app = new application_1.Application(hubIp, hubPort, port, processIndex);
app.run();
//# sourceMappingURL=process.js.map