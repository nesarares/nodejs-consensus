"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const network_listener_1 = require("./system/network-listener");
const system_1 = require("./system/system");
const utils_1 = require("./utils/utils");
const port = parseInt(process.argv[2]) || 5000;
const processIndex = parseInt(process.argv[3]) || 0;
utils_1.Utils.setLogPrefix(processIndex, port);
if (!process.argv[2] || isNaN(parseInt(process.argv[2]))) {
    console.log("No port or invalid port specified, default to 5000.");
}
if (!process.argv[3] || isNaN(parseInt(process.argv[3]))) {
    console.log("No process index specified, default to 0");
}
const networkListener = new network_listener_1.NetworkListener(port);
const systems = new Map();
networkListener.on("network-message", (networkMessage) => {
    var _a, _b;
    const systemId = (_a = networkMessage.message) === null || _a === void 0 ? void 0 : _a.systemId;
    if (!systems.has(systemId)) {
        systems.set(systemId, new system_1.System());
    }
    (_b = systems.get(systemId)) === null || _b === void 0 ? void 0 : _b.newNetworkMessage(networkMessage);
});
//# sourceMappingURL=process.js.map