import { v4 as uuidv4 } from "uuid";
import { Socket } from "net";

export class Utils {
  public static generateId() {
    return uuidv4();
  }

  public static setLogPrefix(processIndex: number, port: number) {
    const log = console.log;
    console.log = function () {
      const args: any = Array.from(arguments);
      args.unshift(`[Child ${processIndex}] `);
      log.apply(console, args);
    };
  }

  public static getIpPort(socket: Socket): { ip: string; port: number } {
    return {
      ip:
        socket.remoteFamily === "IPv6"
          ? Utils.ipv4FromIpv6(socket.remoteAddress!)
          : socket.remoteAddress!,
      port: socket.remotePort!,
    };
  }

  public static ipv4FromIpv6(ipv6Address: string) {
    return ipv6Address.split(":")[3];
  }
}
