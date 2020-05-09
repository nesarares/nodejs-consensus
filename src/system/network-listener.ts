import net, { Server, Socket, AddressInfo } from "net";
import { Constants } from "../utils/constants";
import { NetworkMessage } from "../models/model";

export class NetworkListener {
  private listeners: { event: string; callback: (arg: any) => void }[] = [];
  private server?: Server;

  constructor(private port: number) {
    this.createServer();
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
    console.log("Server closed.");
  }

  private handleError(error: Error) {
    console.error("--------- ⚠ SOCKET ERROR ---------");
    console.error(error.message);
    console.error(error.stack);
  }

  private onListen() {
    const address: AddressInfo = this.server?.address() as AddressInfo;
    const port = address.port;
    console.log(
      `Server listening on port ${port}.`
    );
  }

  private handleConnection(socket: Socket) {
    console.log(
      `New connection from ${socket.remoteAddress}:${socket.remotePort}`
    );

    socket.setTimeout(Constants.TIMEOUT_MILLIS, () =>
      this.handleSocketTimeout(socket)
    );

    socket.on("data", (data) => {
      this.handleSocketData(data, socket);
    });
  }

  private handleSocketTimeout(socket: Socket) {
    console.log(
      `Client from ip ${socket.remoteAddress}:${socket.remotePort} timed out.`
    );
    socket.end();
  }

  private handleSocketData(data: Buffer, socket: Socket) {
    console.log(
      `Received ${data.byteLength} bytes from ${socket.remoteAddress}:${socket.remotePort}`
    );
    const networkMessage = NetworkMessage.decode(data);
    socket.end();

    this.listeners.forEach((listener) => {
      if (listener.event === "network-message") {
        listener.callback(networkMessage);
      }
    });
  }

  public on(
    event: "network-message",
    callback: (message: NetworkMessage) => void
  ) {
    this.listeners.push({
      event,
      callback,
    });
  }
}
