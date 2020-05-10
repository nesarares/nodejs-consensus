import net from "net";
import { NetworkMessage, Message } from "../src/models/model";

const port = 6666;
const server = net.createServer();

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
  console.log(
    `Client from ip ${socket.remoteAddress}:${socket.remotePort} timed out.`
  );
  socket.end();
}

function handleSocketData(data, socket) {
  const networkMessage = NetworkMessage.decode(data);
  socket.end();

  const { message } = networkMessage;
  const client = message.appRegistration;
  switch (message.type) {
    case Message.Type.APP_REGISTRATION:
      console.log(
        `Registered new client: { owner: ${client.owner}, port: ${client.port}, index: ${client.index} }`
      );

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
