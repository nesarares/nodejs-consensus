"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../models/model");
const uuid_1 = require("uuid");
const net_1 = __importDefault(require("net"));
class PerfectLink {
    constructor(system) {
        this.system = system;
    }
    static sendMessage(args) {
        args.message.messageUuid = uuid_1.v4();
        const client = new net_1.default.Socket();
        client.connect({
            port: args.port,
            host: args.host,
        });
        client.on("connect", () => {
            const networkMessage = model_1.NetworkMessage.create({
                rendezvousPort: args.rendevouzPort,
                message: args.message,
            });
            const bytes = model_1.NetworkMessage.encode(networkMessage).finish();
            client.write(bytes);
            client.end();
        });
        client.on("error", () => {
            var _a;
            console.error("--------- ⚠ PL SEND ERROR ---------");
            console.error(`Could not send message type ${(_a = args.message) === null || _a === void 0 ? void 0 : _a.type} to client ${args.host} port ${args.port}`);
        });
        client.on("end", () => {
            var _a;
            console.log(`Sent message type ${(_a = args.message) === null || _a === void 0 ? void 0 : _a.type} to client ${args.host} port ${args.port}`);
        });
    }
    handle(message) {
        if (message.type === model_1.Message.Type.PL_SEND) {
            this.send(message.plSend);
            return true;
        }
        else if (message.type === model_1.Message.Type.PL_DELIVER) {
            this.deliver(message.plDeliver);
            return true;
        }
        return false;
    }
    send(plSend) {
        var _a, _b;
        console.log({ plSend });
        plSend.message.systemId = this.system.systemId;
        plSend.message.abstractionId = plSend.message.abstractionId || "0";
        PerfectLink.sendMessage({
            host: (_a = plSend.destination) === null || _a === void 0 ? void 0 : _a.host,
            port: (_b = plSend.destination) === null || _b === void 0 ? void 0 : _b.port,
            rendevouzPort: this.system.port,
            message: plSend.message,
        });
    }
    deliver(plDeliver) {
        console.log({ plDeliver });
        this.system.newMessage(plDeliver.message);
    }
}
exports.PerfectLink = PerfectLink;
//# sourceMappingURL=perfect-link.js.map