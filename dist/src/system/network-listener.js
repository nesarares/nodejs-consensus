"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const constants_1 = require("../utils/constants");
const model_1 = require("../models/model");
class NetworkListener {
    constructor(port) {
        this.port = port;
        this.listeners = [];
        this.createServer();
    }
    createServer() {
        const server = net_1.default.createServer();
        this.server = server;
        server.on("close", () => {
            this.onClose();
        });
        server.on("error", (error) => {
            this.handleError(error);
        });
        server.on("listening", () => {
            this.onListen();
        });
        server.on("connection", (socket) => {
            this.handleConnection(socket);
        });
        server.maxConnections = 20;
        server.listen(this.port);
    }
    onClose() {
        console.log("Server closed.");
    }
    handleError(error) {
        console.error("--------- ⚠ SOCKET ERROR ---------");
        console.error(error.message);
        console.error(error.stack);
    }
    onListen() {
        var _a;
        const address = (_a = this.server) === null || _a === void 0 ? void 0 : _a.address();
        const port = address.port;
        console.log(`Server listening on port ${port}.`);
    }
    handleConnection(socket) {
        console.log(`New connection from ${socket.remoteAddress}:${socket.remotePort}`);
        socket.setTimeout(constants_1.Constants.TIMEOUT_MILLIS, () => this.handleSocketTimeout(socket));
        socket.on("data", (data) => {
            this.handleSocketData(data, socket);
        });
    }
    handleSocketTimeout(socket) {
        console.log(`Client from ip ${socket.remoteAddress}:${socket.remotePort} timed out.`);
        socket.end();
    }
    handleSocketData(data, socket) {
        console.log(`Received ${data.byteLength} bytes from ${socket.remoteAddress}:${socket.remotePort}`);
        const networkMessage = model_1.NetworkMessage.decode(data);
        socket.end();
        this.listeners.forEach((listener) => {
            if (listener.event === "network-message") {
                listener.callback(networkMessage);
            }
        });
    }
    on(event, callback) {
        this.listeners.push({
            event,
            callback,
        });
    }
}
exports.NetworkListener = NetworkListener;
//# sourceMappingURL=network-listener.js.map