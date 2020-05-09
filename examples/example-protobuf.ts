import { Message, UcPropose } from "../src/models/model";

const message = Message.create({
  type: Message.Type.UC_PROPOSE,
  ucPropose: UcPropose.create({
    value: 13,
  }),
});

const buffer = Message.encode(message).finish();
const decoded = Message.decode(buffer);

console.log(decoded.toJSON());
