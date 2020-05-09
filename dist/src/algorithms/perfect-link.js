"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../models/model");
class PerfectLink {
    constructor(system) {
        this.system = system;
    }
    send(plSend) {
        console.log({ plSend });
    }
    deliver(plDeliver) {
        console.log({ plDeliver });
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
}
exports.PerfectLink = PerfectLink;
//# sourceMappingURL=perfect-link.js.map