"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Utils {
    static generateId() {
        return uuid_1.v4();
    }
    static setLogPrefix(processIndex, port) {
        const log = console.log;
        console.log = function () {
            const args = Array.from(arguments);
            args.unshift(`[Child ${processIndex}] `);
            log.apply(console, args);
        };
    }
}
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map