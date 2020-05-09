"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const childPorts = process.argv.slice(2);
if (childPorts.length === 0) {
    console.log("No ports specified, launching 1 process using default port 5000");
    childPorts.push("5000");
}
const childProcesses = [];
const childModulePath = path_1.default.join(__dirname, "process.js");
childPorts
    .map((port) => parseInt(port))
    .forEach((port) => {
    if (isNaN(port)) {
        console.log(`Invalid port ${port}`);
        return;
    }
    if (childProcesses.find((cp) => cp.port === port)) {
        console.log(`Cannot spawn multiple processes using port ${port}`);
        return;
    }
    const child = child_process_1.fork(childModulePath, [
        port.toString(),
        childProcesses.length.toString(),
    ]);
    childProcesses.push({ port, child });
});
//# sourceMappingURL=index.js.map