import { fork, ChildProcess } from "child_process";
import path from "path";
import net from "net";

if (process.argv.length < 4) {
  console.log("❗ Usage: node index.js <hub_ip> <hub_port> <process_1_port> <process_2_port> ...");
  process.exit(-1);
}

const hubIp = process.argv[2];
if (!net.isIP(hubIp)) {
  console.error(`🔥 Invalid hub ip ${hubIp}`);
  process.exit(-1);
}

const hubPort = parseInt(process.argv[3]);
if (isNaN(hubPort)) {
  console.error(`🔥 Invalid hub port ${hubPort}`);
  process.exit(-1);
}

const childPorts = process.argv.slice(4);
if (childPorts.length === 0) {
  console.log("🔥 No ports specified, launching 1 process using default port 5000");
  childPorts.push("5000");
}

const childProcesses: { child: ChildProcess; port: number }[] = [];
const childModulePath = path.join(__dirname, "process.js");

childPorts
  .map((port) => parseInt(port))
  .forEach((port) => {
    if (isNaN(port)) {
      console.log(`🔥 Invalid port ${port}`);
      return;
    }

    if (childProcesses.find((cp) => cp.port === port)) {
      console.log(`🔥 Cannot spawn multiple processes using port ${port}`);
      return;
    }

    const args = [
      hubIp,
      hubPort.toString(),
      port.toString(), // Child process assigned port
      (childProcesses.length + 1).toString(), // Child process index from 1
    ];
    const child = fork(childModulePath, args);

    childProcesses.push({ port, child });
  });
