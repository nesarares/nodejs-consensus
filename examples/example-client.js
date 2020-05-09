const net = require("net");

const client = new net.Socket();

client.connect({ port: 5000, host: "127.0.0.1", localPort: 8888 });

client.on("connect", () => {
  console.log("Connected to server");
  const address = client.address();
  const port = address.port;
  console.log(`Client listening on port ${port}`);

  client.write("Hello from deodorant");
});

client.on("end", () => {
  console.log("Connection ended");
});

client.on("close", () => {
  console.log("Connection closed");
});
