"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const uuid_1 = require("uuid");
const model_1 = require("../src/models/model");
const client = new net_1.default.Socket();
client.connect({ port: 5000, host: "127.0.0.1", localPort: 8888 });
client.on("connect", () => {
    console.log("Connected to server");
    const address = client.address();
    const port = address.port;
    console.log(`Client listening on port ${port}`);
    const networkMessage = model_1.NetworkMessage.create({
        rendezvousPort: 5001,
        message: model_1.Message.create({
            type: model_1.Message.Type.UC_PROPOSE,
            messageUuid: uuid_1.v4(),
            abstractionId: "0",
            systemId: 'INCERCARE-FARA-NUMAR',
            ucPropose: model_1.UcPropose.create({
                value: 3
            })
        }),
    });
    const bytes = model_1.NetworkMessage.encode(networkMessage).finish();
    client.write(bytes);
});
client.on("end", () => {
    console.log("Connection ended");
});
client.on("close", () => {
    console.log("Connection closed");
});
//# sourceMappingURL=example-client.js.map