"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../models/model");
const perfect_link_1 = require("../algorithms/perfect-link");
class System {
    constructor() {
        this.processes = [];
        this.algorithms = [];
        this.messages = [];
        this.algorithms = [new perfect_link_1.PerfectLink(this)];
    }
    eventLoop() {
        return __awaiter(this, void 0, void 0, function* () {
            this.messages.forEach((message, index) => {
                let isHandled = false;
                this.algorithms.forEach((algorithm) => {
                    isHandled = isHandled || algorithm.handle(message);
                });
                if (isHandled) {
                    this.messages.splice(index, 1);
                }
            });
        });
    }
    newMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            this.messages.push(message);
            this.eventLoop();
        });
    }
    newNetworkMessage(networkMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            const plDeliver = model_1.PlDeliver.create({
                sender: this.processes.find((process) => process.port === networkMessage.rendezvousPort),
                message: networkMessage.message,
            });
            this.newMessage(model_1.Message.create({
                type: model_1.Message.Type.PL_DELIVER,
                plDeliver,
            }));
        });
    }
}
exports.System = System;
//# sourceMappingURL=system.js.map