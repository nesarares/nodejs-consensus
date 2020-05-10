"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const network_listener_1 = require("./system/network-listener");
const system_1 = require("./system/system");
const model_1 = require("./models/model");
const perfect_link_1 = require("./algorithms/perfect-link");
const constants_1 = require("./utils/constants");
class Application {
    constructor(hubIp, hubPort, port, index) {
        this.hubIp = hubIp;
        this.hubPort = hubPort;
        this.port = port;
        this.index = index;
        this.systems = new Map();
    }
    run() {
        this.initNetworkListener();
    }
    initNetworkListener() {
        const networkListener = new network_listener_1.NetworkListener(this.port);
        networkListener.on("network-message", (networkMessage) => {
            var _a, _b;
            const systemId = (_a = networkMessage.message) === null || _a === void 0 ? void 0 : _a.systemId;
            if (!this.systems.has(systemId)) {
                this.systems.set(systemId, new system_1.System(systemId, this.port));
            }
            (_b = this.systems.get(systemId)) === null || _b === void 0 ? void 0 : _b.newNetworkMessage(networkMessage);
        });
        networkListener.on("listening", () => {
            this.registerProcessToHub();
        });
    }
    registerProcessToHub() {
        const appRegistration = model_1.AppRegistration.create({
            owner: constants_1.Constants.OWNER,
            index: this.index,
            port: this.port,
        });
        const message = model_1.Message.create({
            type: model_1.Message.Type.APP_REGISTRATION,
            appRegistration,
        });
        perfect_link_1.PerfectLink.sendMessage({
            host: this.hubIp,
            port: this.hubPort,
            rendevouzPort: this.port,
            message,
        });
    }
}
exports.Application = Application;
//# sourceMappingURL=application.js.map