import { v4 as uuidv4 } from "uuid";

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
}
