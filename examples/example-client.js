import net from "net";
import { v4 as uuidv4 } from "uuid";
import { NetworkMessage, Message, UcPropose } from "../src/models/model";

const client = new net.Socket();

client.connect({ port: 5000, host: "127.0.0.1", localPort: 8888 });

client.on("connect", () => {
  console.log("Connected to server");
  const address = client.address();
  const port = address.port;
  console.log(`Client listening on port ${port}`);

  const networkMessage = NetworkMessage.create({
    rendezvousPort: 5001, // assume this is the port we are listening on server
    message: Message.create({
      type: Message.Type.UC_PROPOSE,
      messageUuid: uuidv4(),
      abstractionId: "0",
      systemId: 'INCERCARE-FARA-NUMAR',
      ucPropose: UcPropose.create({
        value: 3
      })
    }),
  });
  const bytes = NetworkMessage.encode(networkMessage).finish();
  client.write(bytes);
});

client.on("end", () => {
  console.log("Connection ended");
});

client.on("close", () => {
  console.log("Connection closed");
});
