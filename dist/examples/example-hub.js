"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const model_1 = require("../src/models/model");
const port = 6666;
const server = net_1.default.createServer();
function onClose() {
    console.log("Server closed.");
}
function handleError(error) {
    console.error("--------- ⚠ SOCKET ERROR ---------");
    console.error(error.message);
    console.error(error.stack);
}
function onListen() {
    const address = server.address();
    const port = address.port;
    console.log(`Server listening on port ${port}.`);
}
function handleConnection(socket) {
    socket.setTimeout(3000, () => handleSocketTimeout(socket));
    socket.on("data", (data) => {
        handleSocketData(data, socket);
    });
}
function handleSocketTimeout(socket) {
    console.log(`Client from ip ${socket.remoteAddress}:${socket.remotePort} timed out.`);
    socket.end();
}
function handleSocketData(data, socket) {
    const networkMessage = model_1.NetworkMessage.decode(data);
    socket.end();
    const { message } = networkMessage;
    const client = message.appRegistration;
    switch (message.type) {
        case model_1.Message.Type.APP_REGISTRATION:
            console.log(`Registered new client: { owner: ${client.owner}, port: ${client.port}, index: ${client.index} }`);
            break;
        default:
            console.log(message);
    }
}
server.on("close", () => {
    onClose();
});
server.on("error", (error) => {
    handleError(error);
});
server.on("listening", () => {
    onListen();
});
server.on("connection", (socket) => {
    handleConnection(socket);
});
server.maxConnections = 20;
server.listen(port);
//# sourceMappingURL=example-hub.js.map