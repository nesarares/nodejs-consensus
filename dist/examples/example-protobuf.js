"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../src/models/model");
const message = model_1.Message.create({
    type: model_1.Message.Type.UC_PROPOSE,
    ucPropose: model_1.UcPropose.create({
        value: 13,
    }),
});
const buffer = model_1.Message.encode(message).finish();
const decoded = model_1.Message.decode(buffer);
console.log(decoded.toJSON());
//# sourceMappingURL=example-protobuf.js.map