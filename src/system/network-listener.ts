import net, { AddressInfo, Server, Socket } from "net";

import { Message, NetworkMessage, PlDeliver } from "../models/model";
import { Constants } from "../utils/constants";
import { Utils } from "../utils/utils";

export class NetworkListener {
  private listeners: { event: string; callback: (...args: any) => void }[] = [];
  private server?: Server;

  constructor(private port: number) {
    this.createServer();
  }

  // Function definitions for method "on"
  public on(
    event: "network-message",
    callback: (message: Message) => void
  ): void;
  public on(event: "listening", callback: () => void): void;

  // Function implementation for method "on"
  public on(event: string, callback: (...args: any) => void) {
    this.listeners.push({ event, callback });
  }

  private notifyListeners(event: string, ...args: any) {
    this.listeners.forEach((listener) => {
      if (listener.event === event) {
        listener.callback(...args);
      }
    });
  }

  private createServer() {
    const server: Server = net.createServer();
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

  private onClose() {
    console.log("😴 Server closed.");
  }

  private handleError(error: Error) {
    console.error("🔥 Socket error");
    console.error(error.message);
    console.error(error.stack);
  }

  private onListen() {
    const address = this.server?.address() as AddressInfo;
    const port = address.port;
    console.log(`⚡ Server listening on port ${port}.`);

    this.notifyListeners("listening");
  }

  private handleConnection(socket: Socket) {
    // const { ip, port } = Utils.getIpPort(socket);
    // console.log(`👋 New connection from ${ip}:${port}`);

    socket.setTimeout(Constants.TIMEOUT_MILLIS, () =>
      this.handleSocketTimeout(socket)
    );

    socket.on("data", (data) => {
      this.handleSocketData(data, socket);
    });
  }

  private handleSocketTimeout(socket: Socket) {
    const { ip, port } = Utils.getIpPort(socket);
    console.log(`😢 Client from ip ${ip}:${port} timed out.`);
    socket.end();
  }

  private handleSocketData(data: Buffer, socket: Socket) {
    // const { ip, port } = Utils.getIpPort(socket);
    // console.log(`📦 Received ${data.byteLength} bytes from ${ip}:${port}`);

    // const contentLength = data.readInt32BE(0);
    let message;
    try {
      message = Message.decode(data.slice(4));
      this.notifyListeners("network-message", message);
    } catch (error) {
      // Try to decode with missing content length
      try {
        message = Message.decode(data);
        this.notifyListeners("network-message", message);
      } catch (error) {
        console.log("Could not decode wire message, showing buffer:");
        console.log(data);
      }
    } finally {
      socket.end();
    }
  }
}
