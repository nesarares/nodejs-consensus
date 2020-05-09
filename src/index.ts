import { fork, ChildProcess } from "child_process";
import path from "path";

const childPorts = process.argv.slice(2);
if (childPorts.length === 0) {
  console.log(
    "No ports specified, launching 1 process using default port 5000"
  );
  childPorts.push("5000");
}

const childProcesses: { child: ChildProcess; port: number }[] = [];
const childModulePath = path.join(__dirname, "process.js");

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

    const child = fork(childModulePath, [
      port.toString(), // Child process assigned port
      childProcesses.length.toString(), // Child process index
    ]);

    childProcesses.push({ port, child });
  });
