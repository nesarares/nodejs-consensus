/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const ProcessId = $root.ProcessId = (() => {

    /**
     * Properties of a ProcessId.
     * @exports IProcessId
     * @interface IProcessId
     * @property {string|null} [host] ProcessId host
     * @property {number|null} [port] ProcessId port
     * @property {string|null} [owner] ProcessId owner
     * @property {number|null} [index] ProcessId index
     * @property {number|null} [rank] ProcessId rank
     */

    /**
     * Constructs a new ProcessId.
     * @exports ProcessId
     * @classdesc Represents a ProcessId.
     * @implements IProcessId
     * @constructor
     * @param {IProcessId=} [properties] Properties to set
     */
    function ProcessId(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ProcessId host.
     * @member {string} host
     * @memberof ProcessId
     * @instance
     */
    ProcessId.prototype.host = "";

    /**
     * ProcessId port.
     * @member {number} port
     * @memberof ProcessId
     * @instance
     */
    ProcessId.prototype.port = 0;

    /**
     * ProcessId owner.
     * @member {string} owner
     * @memberof ProcessId
     * @instance
     */
    ProcessId.prototype.owner = "";

    /**
     * ProcessId index.
     * @member {number} index
     * @memberof ProcessId
     * @instance
     */
    ProcessId.prototype.index = 0;

    /**
     * ProcessId rank.
     * @member {number} rank
     * @memberof ProcessId
     * @instance
     */
    ProcessId.prototype.rank = 0;

    /**
     * Creates a new ProcessId instance using the specified properties.
     * @function create
     * @memberof ProcessId
     * @static
     * @param {IProcessId=} [properties] Properties to set
     * @returns {ProcessId} ProcessId instance
     */
    ProcessId.create = function create(properties) {
        return new ProcessId(properties);
    };

    /**
     * Encodes the specified ProcessId message. Does not implicitly {@link ProcessId.verify|verify} messages.
     * @function encode
     * @memberof ProcessId
     * @static
     * @param {IProcessId} message ProcessId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProcessId.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.host != null && Object.hasOwnProperty.call(message, "host"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.host);
        if (message.port != null && Object.hasOwnProperty.call(message, "port"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
        if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.owner);
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.index);
        if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.rank);
        return writer;
    };

    /**
     * Encodes the specified ProcessId message, length delimited. Does not implicitly {@link ProcessId.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ProcessId
     * @static
     * @param {IProcessId} message ProcessId message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ProcessId.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ProcessId message from the specified reader or buffer.
     * @function decode
     * @memberof ProcessId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ProcessId} ProcessId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProcessId.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProcessId();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.host = reader.string();
                break;
            case 2:
                message.port = reader.int32();
                break;
            case 3:
                message.owner = reader.string();
                break;
            case 4:
                message.index = reader.int32();
                break;
            case 5:
                message.rank = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ProcessId message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ProcessId
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ProcessId} ProcessId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ProcessId.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ProcessId message.
     * @function verify
     * @memberof ProcessId
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ProcessId.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.host != null && message.hasOwnProperty("host"))
            if (!$util.isString(message.host))
                return "host: string expected";
        if (message.port != null && message.hasOwnProperty("port"))
            if (!$util.isInteger(message.port))
                return "port: integer expected";
        if (message.owner != null && message.hasOwnProperty("owner"))
            if (!$util.isString(message.owner))
                return "owner: string expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.rank != null && message.hasOwnProperty("rank"))
            if (!$util.isInteger(message.rank))
                return "rank: integer expected";
        return null;
    };

    /**
     * Creates a ProcessId message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ProcessId
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ProcessId} ProcessId
     */
    ProcessId.fromObject = function fromObject(object) {
        if (object instanceof $root.ProcessId)
            return object;
        let message = new $root.ProcessId();
        if (object.host != null)
            message.host = String(object.host);
        if (object.port != null)
            message.port = object.port | 0;
        if (object.owner != null)
            message.owner = String(object.owner);
        if (object.index != null)
            message.index = object.index | 0;
        if (object.rank != null)
            message.rank = object.rank | 0;
        return message;
    };

    /**
     * Creates a plain object from a ProcessId message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ProcessId
     * @static
     * @param {ProcessId} message ProcessId
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ProcessId.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.host = "";
            object.port = 0;
            object.owner = "";
            object.index = 0;
            object.rank = 0;
        }
        if (message.host != null && message.hasOwnProperty("host"))
            object.host = message.host;
        if (message.port != null && message.hasOwnProperty("port"))
            object.port = message.port;
        if (message.owner != null && message.hasOwnProperty("owner"))
            object.owner = message.owner;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.rank != null && message.hasOwnProperty("rank"))
            object.rank = message.rank;
        return object;
    };

    /**
     * Converts this ProcessId to JSON.
     * @function toJSON
     * @memberof ProcessId
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ProcessId.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ProcessId;
})();

export const UcPropose = $root.UcPropose = (() => {

    /**
     * Properties of an UcPropose.
     * @exports IUcPropose
     * @interface IUcPropose
     * @property {number|null} [value] UcPropose value
     */

    /**
     * Constructs a new UcPropose.
     * @exports UcPropose
     * @classdesc Represents an UcPropose.
     * @implements IUcPropose
     * @constructor
     * @param {IUcPropose=} [properties] Properties to set
     */
    function UcPropose(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UcPropose value.
     * @member {number} value
     * @memberof UcPropose
     * @instance
     */
    UcPropose.prototype.value = 0;

    /**
     * Creates a new UcPropose instance using the specified properties.
     * @function create
     * @memberof UcPropose
     * @static
     * @param {IUcPropose=} [properties] Properties to set
     * @returns {UcPropose} UcPropose instance
     */
    UcPropose.create = function create(properties) {
        return new UcPropose(properties);
    };

    /**
     * Encodes the specified UcPropose message. Does not implicitly {@link UcPropose.verify|verify} messages.
     * @function encode
     * @memberof UcPropose
     * @static
     * @param {IUcPropose} message UcPropose message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UcPropose.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
        return writer;
    };

    /**
     * Encodes the specified UcPropose message, length delimited. Does not implicitly {@link UcPropose.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UcPropose
     * @static
     * @param {IUcPropose} message UcPropose message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UcPropose.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UcPropose message from the specified reader or buffer.
     * @function decode
     * @memberof UcPropose
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UcPropose} UcPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UcPropose.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UcPropose();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UcPropose message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UcPropose
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UcPropose} UcPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UcPropose.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UcPropose message.
     * @function verify
     * @memberof UcPropose
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UcPropose.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates an UcPropose message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UcPropose
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UcPropose} UcPropose
     */
    UcPropose.fromObject = function fromObject(object) {
        if (object instanceof $root.UcPropose)
            return object;
        let message = new $root.UcPropose();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };

    /**
     * Creates a plain object from an UcPropose message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UcPropose
     * @static
     * @param {UcPropose} message UcPropose
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UcPropose.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this UcPropose to JSON.
     * @function toJSON
     * @memberof UcPropose
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UcPropose.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UcPropose;
})();

export const EcStartEpoch = $root.EcStartEpoch = (() => {

    /**
     * Properties of an EcStartEpoch.
     * @exports IEcStartEpoch
     * @interface IEcStartEpoch
     * @property {number|null} [newTimestamp] EcStartEpoch newTimestamp
     * @property {IProcessId|null} [newLeader] EcStartEpoch newLeader
     */

    /**
     * Constructs a new EcStartEpoch.
     * @exports EcStartEpoch
     * @classdesc Represents an EcStartEpoch.
     * @implements IEcStartEpoch
     * @constructor
     * @param {IEcStartEpoch=} [properties] Properties to set
     */
    function EcStartEpoch(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EcStartEpoch newTimestamp.
     * @member {number} newTimestamp
     * @memberof EcStartEpoch
     * @instance
     */
    EcStartEpoch.prototype.newTimestamp = 0;

    /**
     * EcStartEpoch newLeader.
     * @member {IProcessId|null|undefined} newLeader
     * @memberof EcStartEpoch
     * @instance
     */
    EcStartEpoch.prototype.newLeader = null;

    /**
     * Creates a new EcStartEpoch instance using the specified properties.
     * @function create
     * @memberof EcStartEpoch
     * @static
     * @param {IEcStartEpoch=} [properties] Properties to set
     * @returns {EcStartEpoch} EcStartEpoch instance
     */
    EcStartEpoch.create = function create(properties) {
        return new EcStartEpoch(properties);
    };

    /**
     * Encodes the specified EcStartEpoch message. Does not implicitly {@link EcStartEpoch.verify|verify} messages.
     * @function encode
     * @memberof EcStartEpoch
     * @static
     * @param {IEcStartEpoch} message EcStartEpoch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EcStartEpoch.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.newTimestamp != null && Object.hasOwnProperty.call(message, "newTimestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.newTimestamp);
        if (message.newLeader != null && Object.hasOwnProperty.call(message, "newLeader"))
            $root.ProcessId.encode(message.newLeader, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EcStartEpoch message, length delimited. Does not implicitly {@link EcStartEpoch.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EcStartEpoch
     * @static
     * @param {IEcStartEpoch} message EcStartEpoch message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EcStartEpoch.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EcStartEpoch message from the specified reader or buffer.
     * @function decode
     * @memberof EcStartEpoch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EcStartEpoch} EcStartEpoch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EcStartEpoch.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EcStartEpoch();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.newTimestamp = reader.int32();
                break;
            case 2:
                message.newLeader = $root.ProcessId.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EcStartEpoch message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EcStartEpoch
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EcStartEpoch} EcStartEpoch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EcStartEpoch.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EcStartEpoch message.
     * @function verify
     * @memberof EcStartEpoch
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EcStartEpoch.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.newTimestamp != null && message.hasOwnProperty("newTimestamp"))
            if (!$util.isInteger(message.newTimestamp))
                return "newTimestamp: integer expected";
        if (message.newLeader != null && message.hasOwnProperty("newLeader")) {
            let error = $root.ProcessId.verify(message.newLeader);
            if (error)
                return "newLeader." + error;
        }
        return null;
    };

    /**
     * Creates an EcStartEpoch message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EcStartEpoch
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EcStartEpoch} EcStartEpoch
     */
    EcStartEpoch.fromObject = function fromObject(object) {
        if (object instanceof $root.EcStartEpoch)
            return object;
        let message = new $root.EcStartEpoch();
        if (object.newTimestamp != null)
            message.newTimestamp = object.newTimestamp | 0;
        if (object.newLeader != null) {
            if (typeof object.newLeader !== "object")
                throw TypeError(".EcStartEpoch.newLeader: object expected");
            message.newLeader = $root.ProcessId.fromObject(object.newLeader);
        }
        return message;
    };

    /**
     * Creates a plain object from an EcStartEpoch message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EcStartEpoch
     * @static
     * @param {EcStartEpoch} message EcStartEpoch
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EcStartEpoch.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.newTimestamp = 0;
            object.newLeader = null;
        }
        if (message.newTimestamp != null && message.hasOwnProperty("newTimestamp"))
            object.newTimestamp = message.newTimestamp;
        if (message.newLeader != null && message.hasOwnProperty("newLeader"))
            object.newLeader = $root.ProcessId.toObject(message.newLeader, options);
        return object;
    };

    /**
     * Converts this EcStartEpoch to JSON.
     * @function toJSON
     * @memberof EcStartEpoch
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EcStartEpoch.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EcStartEpoch;
})();

export const EpAbort = $root.EpAbort = (() => {

    /**
     * Properties of an EpAbort.
     * @exports IEpAbort
     * @interface IEpAbort
     */

    /**
     * Constructs a new EpAbort.
     * @exports EpAbort
     * @classdesc Represents an EpAbort.
     * @implements IEpAbort
     * @constructor
     * @param {IEpAbort=} [properties] Properties to set
     */
    function EpAbort(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EpAbort instance using the specified properties.
     * @function create
     * @memberof EpAbort
     * @static
     * @param {IEpAbort=} [properties] Properties to set
     * @returns {EpAbort} EpAbort instance
     */
    EpAbort.create = function create(properties) {
        return new EpAbort(properties);
    };

    /**
     * Encodes the specified EpAbort message. Does not implicitly {@link EpAbort.verify|verify} messages.
     * @function encode
     * @memberof EpAbort
     * @static
     * @param {IEpAbort} message EpAbort message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpAbort.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified EpAbort message, length delimited. Does not implicitly {@link EpAbort.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpAbort
     * @static
     * @param {IEpAbort} message EpAbort message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpAbort.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpAbort message from the specified reader or buffer.
     * @function decode
     * @memberof EpAbort
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpAbort} EpAbort
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpAbort.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpAbort();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EpAbort message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EpAbort
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpAbort} EpAbort
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpAbort.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EpAbort message.
     * @function verify
     * @memberof EpAbort
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EpAbort.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an EpAbort message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EpAbort
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpAbort} EpAbort
     */
    EpAbort.fromObject = function fromObject(object) {
        if (object instanceof $root.EpAbort)
            return object;
        return new $root.EpAbort();
    };

    /**
     * Creates a plain object from an EpAbort message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpAbort
     * @static
     * @param {EpAbort} message EpAbort
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EpAbort.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this EpAbort to JSON.
     * @function toJSON
     * @memberof EpAbort
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpAbort.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpAbort;
})();

export const EpInit = $root.EpInit = (() => {

    /**
     * Properties of an EpInit.
     * @exports IEpInit
     * @interface IEpInit
     * @property {number|null} [valueTimestamp] EpInit valueTimestamp
     * @property {number|null} [value] EpInit value
     */

    /**
     * Constructs a new EpInit.
     * @exports EpInit
     * @classdesc Represents an EpInit.
     * @implements IEpInit
     * @constructor
     * @param {IEpInit=} [properties] Properties to set
     */
    function EpInit(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EpInit valueTimestamp.
     * @member {number} valueTimestamp
     * @memberof EpInit
     * @instance
     */
    EpInit.prototype.valueTimestamp = 0;

    /**
     * EpInit value.
     * @member {number} value
     * @memberof EpInit
     * @instance
     */
    EpInit.prototype.value = 0;

    /**
     * Creates a new EpInit instance using the specified properties.
     * @function create
     * @memberof EpInit
     * @static
     * @param {IEpInit=} [properties] Properties to set
     * @returns {EpInit} EpInit instance
     */
    EpInit.create = function create(properties) {
        return new EpInit(properties);
    };

    /**
     * Encodes the specified EpInit message. Does not implicitly {@link EpInit.verify|verify} messages.
     * @function encode
     * @memberof EpInit
     * @static
     * @param {IEpInit} message EpInit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpInit.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.valueTimestamp != null && Object.hasOwnProperty.call(message, "valueTimestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.valueTimestamp);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
        return writer;
    };

    /**
     * Encodes the specified EpInit message, length delimited. Does not implicitly {@link EpInit.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpInit
     * @static
     * @param {IEpInit} message EpInit message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpInit.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpInit message from the specified reader or buffer.
     * @function decode
     * @memberof EpInit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpInit} EpInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpInit.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpInit();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.valueTimestamp = reader.int32();
                break;
            case 2:
                message.value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EpInit message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EpInit
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpInit} EpInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpInit.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EpInit message.
     * @function verify
     * @memberof EpInit
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EpInit.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.valueTimestamp != null && message.hasOwnProperty("valueTimestamp"))
            if (!$util.isInteger(message.valueTimestamp))
                return "valueTimestamp: integer expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates an EpInit message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EpInit
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpInit} EpInit
     */
    EpInit.fromObject = function fromObject(object) {
        if (object instanceof $root.EpInit)
            return object;
        let message = new $root.EpInit();
        if (object.valueTimestamp != null)
            message.valueTimestamp = object.valueTimestamp | 0;
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };

    /**
     * Creates a plain object from an EpInit message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpInit
     * @static
     * @param {EpInit} message EpInit
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EpInit.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.valueTimestamp = 0;
            object.value = 0;
        }
        if (message.valueTimestamp != null && message.hasOwnProperty("valueTimestamp"))
            object.valueTimestamp = message.valueTimestamp;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this EpInit to JSON.
     * @function toJSON
     * @memberof EpInit
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpInit.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpInit;
})();

export const EpAborted = $root.EpAborted = (() => {

    /**
     * Properties of an EpAborted.
     * @exports IEpAborted
     * @interface IEpAborted
     * @property {number|null} [valueTimestamp] EpAborted valueTimestamp
     * @property {number|null} [value] EpAborted value
     */

    /**
     * Constructs a new EpAborted.
     * @exports EpAborted
     * @classdesc Represents an EpAborted.
     * @implements IEpAborted
     * @constructor
     * @param {IEpAborted=} [properties] Properties to set
     */
    function EpAborted(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EpAborted valueTimestamp.
     * @member {number} valueTimestamp
     * @memberof EpAborted
     * @instance
     */
    EpAborted.prototype.valueTimestamp = 0;

    /**
     * EpAborted value.
     * @member {number} value
     * @memberof EpAborted
     * @instance
     */
    EpAborted.prototype.value = 0;

    /**
     * Creates a new EpAborted instance using the specified properties.
     * @function create
     * @memberof EpAborted
     * @static
     * @param {IEpAborted=} [properties] Properties to set
     * @returns {EpAborted} EpAborted instance
     */
    EpAborted.create = function create(properties) {
        return new EpAborted(properties);
    };

    /**
     * Encodes the specified EpAborted message. Does not implicitly {@link EpAborted.verify|verify} messages.
     * @function encode
     * @memberof EpAborted
     * @static
     * @param {IEpAborted} message EpAborted message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpAborted.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.valueTimestamp != null && Object.hasOwnProperty.call(message, "valueTimestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.valueTimestamp);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
        return writer;
    };

    /**
     * Encodes the specified EpAborted message, length delimited. Does not implicitly {@link EpAborted.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpAborted
     * @static
     * @param {IEpAborted} message EpAborted message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpAborted.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpAborted message from the specified reader or buffer.
     * @function decode
     * @memberof EpAborted
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpAborted} EpAborted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpAborted.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpAborted();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.valueTimestamp = reader.int32();
                break;
            case 2:
                message.value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EpAborted message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EpAborted
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpAborted} EpAborted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpAborted.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EpAborted message.
     * @function verify
     * @memberof EpAborted
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EpAborted.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.valueTimestamp != null && message.hasOwnProperty("valueTimestamp"))
            if (!$util.isInteger(message.valueTimestamp))
                return "valueTimestamp: integer expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates an EpAborted message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EpAborted
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpAborted} EpAborted
     */
    EpAborted.fromObject = function fromObject(object) {
        if (object instanceof $root.EpAborted)
            return object;
        let message = new $root.EpAborted();
        if (object.valueTimestamp != null)
            message.valueTimestamp = object.valueTimestamp | 0;
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };

    /**
     * Creates a plain object from an EpAborted message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpAborted
     * @static
     * @param {EpAborted} message EpAborted
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EpAborted.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.valueTimestamp = 0;
            object.value = 0;
        }
        if (message.valueTimestamp != null && message.hasOwnProperty("valueTimestamp"))
            object.valueTimestamp = message.valueTimestamp;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this EpAborted to JSON.
     * @function toJSON
     * @memberof EpAborted
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpAborted.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpAborted;
})();

export const EpPropose = $root.EpPropose = (() => {

    /**
     * Properties of an EpPropose.
     * @exports IEpPropose
     * @interface IEpPropose
     * @property {number|null} [value] EpPropose value
     */

    /**
     * Constructs a new EpPropose.
     * @exports EpPropose
     * @classdesc Represents an EpPropose.
     * @implements IEpPropose
     * @constructor
     * @param {IEpPropose=} [properties] Properties to set
     */
    function EpPropose(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EpPropose value.
     * @member {number} value
     * @memberof EpPropose
     * @instance
     */
    EpPropose.prototype.value = 0;

    /**
     * Creates a new EpPropose instance using the specified properties.
     * @function create
     * @memberof EpPropose
     * @static
     * @param {IEpPropose=} [properties] Properties to set
     * @returns {EpPropose} EpPropose instance
     */
    EpPropose.create = function create(properties) {
        return new EpPropose(properties);
    };

    /**
     * Encodes the specified EpPropose message. Does not implicitly {@link EpPropose.verify|verify} messages.
     * @function encode
     * @memberof EpPropose
     * @static
     * @param {IEpPropose} message EpPropose message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpPropose.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
        return writer;
    };

    /**
     * Encodes the specified EpPropose message, length delimited. Does not implicitly {@link EpPropose.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpPropose
     * @static
     * @param {IEpPropose} message EpPropose message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpPropose.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpPropose message from the specified reader or buffer.
     * @function decode
     * @memberof EpPropose
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpPropose} EpPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpPropose.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpPropose();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EpPropose message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EpPropose
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpPropose} EpPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpPropose.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EpPropose message.
     * @function verify
     * @memberof EpPropose
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EpPropose.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates an EpPropose message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EpPropose
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpPropose} EpPropose
     */
    EpPropose.fromObject = function fromObject(object) {
        if (object instanceof $root.EpPropose)
            return object;
        let message = new $root.EpPropose();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };

    /**
     * Creates a plain object from an EpPropose message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpPropose
     * @static
     * @param {EpPropose} message EpPropose
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EpPropose.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this EpPropose to JSON.
     * @function toJSON
     * @memberof EpPropose
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpPropose.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpPropose;
})();

export const EpDecide = $root.EpDecide = (() => {

    /**
     * Properties of an EpDecide.
     * @exports IEpDecide
     * @interface IEpDecide
     * @property {number|null} [value] EpDecide value
     */

    /**
     * Constructs a new EpDecide.
     * @exports EpDecide
     * @classdesc Represents an EpDecide.
     * @implements IEpDecide
     * @constructor
     * @param {IEpDecide=} [properties] Properties to set
     */
    function EpDecide(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EpDecide value.
     * @member {number} value
     * @memberof EpDecide
     * @instance
     */
    EpDecide.prototype.value = 0;

    /**
     * Creates a new EpDecide instance using the specified properties.
     * @function create
     * @memberof EpDecide
     * @static
     * @param {IEpDecide=} [properties] Properties to set
     * @returns {EpDecide} EpDecide instance
     */
    EpDecide.create = function create(properties) {
        return new EpDecide(properties);
    };

    /**
     * Encodes the specified EpDecide message. Does not implicitly {@link EpDecide.verify|verify} messages.
     * @function encode
     * @memberof EpDecide
     * @static
     * @param {IEpDecide} message EpDecide message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpDecide.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
        return writer;
    };

    /**
     * Encodes the specified EpDecide message, length delimited. Does not implicitly {@link EpDecide.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpDecide
     * @static
     * @param {IEpDecide} message EpDecide message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpDecide.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpDecide message from the specified reader or buffer.
     * @function decode
     * @memberof EpDecide
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpDecide} EpDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpDecide.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpDecide();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EpDecide message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EpDecide
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpDecide} EpDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpDecide.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EpDecide message.
     * @function verify
     * @memberof EpDecide
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EpDecide.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates an EpDecide message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EpDecide
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpDecide} EpDecide
     */
    EpDecide.fromObject = function fromObject(object) {
        if (object instanceof $root.EpDecide)
            return object;
        let message = new $root.EpDecide();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };

    /**
     * Creates a plain object from an EpDecide message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpDecide
     * @static
     * @param {EpDecide} message EpDecide
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EpDecide.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this EpDecide to JSON.
     * @function toJSON
     * @memberof EpDecide
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpDecide.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpDecide;
})();

export const UcDecide = $root.UcDecide = (() => {

    /**
     * Properties of an UcDecide.
     * @exports IUcDecide
     * @interface IUcDecide
     * @property {number|null} [value] UcDecide value
     */

    /**
     * Constructs a new UcDecide.
     * @exports UcDecide
     * @classdesc Represents an UcDecide.
     * @implements IUcDecide
     * @constructor
     * @param {IUcDecide=} [properties] Properties to set
     */
    function UcDecide(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UcDecide value.
     * @member {number} value
     * @memberof UcDecide
     * @instance
     */
    UcDecide.prototype.value = 0;

    /**
     * Creates a new UcDecide instance using the specified properties.
     * @function create
     * @memberof UcDecide
     * @static
     * @param {IUcDecide=} [properties] Properties to set
     * @returns {UcDecide} UcDecide instance
     */
    UcDecide.create = function create(properties) {
        return new UcDecide(properties);
    };

    /**
     * Encodes the specified UcDecide message. Does not implicitly {@link UcDecide.verify|verify} messages.
     * @function encode
     * @memberof UcDecide
     * @static
     * @param {IUcDecide} message UcDecide message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UcDecide.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
        return writer;
    };

    /**
     * Encodes the specified UcDecide message, length delimited. Does not implicitly {@link UcDecide.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UcDecide
     * @static
     * @param {IUcDecide} message UcDecide message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UcDecide.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an UcDecide message from the specified reader or buffer.
     * @function decode
     * @memberof UcDecide
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UcDecide} UcDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UcDecide.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UcDecide();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an UcDecide message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UcDecide
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UcDecide} UcDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UcDecide.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an UcDecide message.
     * @function verify
     * @memberof UcDecide
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UcDecide.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates an UcDecide message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UcDecide
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UcDecide} UcDecide
     */
    UcDecide.fromObject = function fromObject(object) {
        if (object instanceof $root.UcDecide)
            return object;
        let message = new $root.UcDecide();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };

    /**
     * Creates a plain object from an UcDecide message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UcDecide
     * @static
     * @param {UcDecide} message UcDecide
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UcDecide.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this UcDecide to JSON.
     * @function toJSON
     * @memberof UcDecide
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UcDecide.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return UcDecide;
})();

export const EpRead_ = $root.EpRead_ = (() => {

    /**
     * Properties of an EpRead_.
     * @exports IEpRead_
     * @interface IEpRead_
     */

    /**
     * Constructs a new EpRead_.
     * @exports EpRead_
     * @classdesc Represents an EpRead_.
     * @implements IEpRead_
     * @constructor
     * @param {IEpRead_=} [properties] Properties to set
     */
    function EpRead_(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EpRead_ instance using the specified properties.
     * @function create
     * @memberof EpRead_
     * @static
     * @param {IEpRead_=} [properties] Properties to set
     * @returns {EpRead_} EpRead_ instance
     */
    EpRead_.create = function create(properties) {
        return new EpRead_(properties);
    };

    /**
     * Encodes the specified EpRead_ message. Does not implicitly {@link EpRead_.verify|verify} messages.
     * @function encode
     * @memberof EpRead_
     * @static
     * @param {IEpRead_} message EpRead_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpRead_.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified EpRead_ message, length delimited. Does not implicitly {@link EpRead_.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpRead_
     * @static
     * @param {IEpRead_} message EpRead_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpRead_.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpRead_ message from the specified reader or buffer.
     * @function decode
     * @memberof EpRead_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpRead_} EpRead_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpRead_.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpRead_();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EpRead_ message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EpRead_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpRead_} EpRead_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpRead_.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EpRead_ message.
     * @function verify
     * @memberof EpRead_
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EpRead_.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an EpRead_ message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EpRead_
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpRead_} EpRead_
     */
    EpRead_.fromObject = function fromObject(object) {
        if (object instanceof $root.EpRead_)
            return object;
        return new $root.EpRead_();
    };

    /**
     * Creates a plain object from an EpRead_ message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpRead_
     * @static
     * @param {EpRead_} message EpRead_
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EpRead_.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this EpRead_ to JSON.
     * @function toJSON
     * @memberof EpRead_
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpRead_.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpRead_;
})();

export const EpState_ = $root.EpState_ = (() => {

    /**
     * Properties of an EpState_.
     * @exports IEpState_
     * @interface IEpState_
     * @property {number|null} [valueTimestamp] EpState_ valueTimestamp
     * @property {number|null} [value] EpState_ value
     */

    /**
     * Constructs a new EpState_.
     * @exports EpState_
     * @classdesc Represents an EpState_.
     * @implements IEpState_
     * @constructor
     * @param {IEpState_=} [properties] Properties to set
     */
    function EpState_(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EpState_ valueTimestamp.
     * @member {number} valueTimestamp
     * @memberof EpState_
     * @instance
     */
    EpState_.prototype.valueTimestamp = 0;

    /**
     * EpState_ value.
     * @member {number} value
     * @memberof EpState_
     * @instance
     */
    EpState_.prototype.value = 0;

    /**
     * Creates a new EpState_ instance using the specified properties.
     * @function create
     * @memberof EpState_
     * @static
     * @param {IEpState_=} [properties] Properties to set
     * @returns {EpState_} EpState_ instance
     */
    EpState_.create = function create(properties) {
        return new EpState_(properties);
    };

    /**
     * Encodes the specified EpState_ message. Does not implicitly {@link EpState_.verify|verify} messages.
     * @function encode
     * @memberof EpState_
     * @static
     * @param {IEpState_} message EpState_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpState_.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.valueTimestamp != null && Object.hasOwnProperty.call(message, "valueTimestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.valueTimestamp);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.value);
        return writer;
    };

    /**
     * Encodes the specified EpState_ message, length delimited. Does not implicitly {@link EpState_.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpState_
     * @static
     * @param {IEpState_} message EpState_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpState_.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpState_ message from the specified reader or buffer.
     * @function decode
     * @memberof EpState_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpState_} EpState_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpState_.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpState_();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.valueTimestamp = reader.int32();
                break;
            case 2:
                message.value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EpState_ message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EpState_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpState_} EpState_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpState_.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EpState_ message.
     * @function verify
     * @memberof EpState_
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EpState_.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.valueTimestamp != null && message.hasOwnProperty("valueTimestamp"))
            if (!$util.isInteger(message.valueTimestamp))
                return "valueTimestamp: integer expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates an EpState_ message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EpState_
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpState_} EpState_
     */
    EpState_.fromObject = function fromObject(object) {
        if (object instanceof $root.EpState_)
            return object;
        let message = new $root.EpState_();
        if (object.valueTimestamp != null)
            message.valueTimestamp = object.valueTimestamp | 0;
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };

    /**
     * Creates a plain object from an EpState_ message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpState_
     * @static
     * @param {EpState_} message EpState_
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EpState_.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.valueTimestamp = 0;
            object.value = 0;
        }
        if (message.valueTimestamp != null && message.hasOwnProperty("valueTimestamp"))
            object.valueTimestamp = message.valueTimestamp;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this EpState_ to JSON.
     * @function toJSON
     * @memberof EpState_
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpState_.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpState_;
})();

export const EpWrite_ = $root.EpWrite_ = (() => {

    /**
     * Properties of an EpWrite_.
     * @exports IEpWrite_
     * @interface IEpWrite_
     * @property {number|null} [value] EpWrite_ value
     */

    /**
     * Constructs a new EpWrite_.
     * @exports EpWrite_
     * @classdesc Represents an EpWrite_.
     * @implements IEpWrite_
     * @constructor
     * @param {IEpWrite_=} [properties] Properties to set
     */
    function EpWrite_(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EpWrite_ value.
     * @member {number} value
     * @memberof EpWrite_
     * @instance
     */
    EpWrite_.prototype.value = 0;

    /**
     * Creates a new EpWrite_ instance using the specified properties.
     * @function create
     * @memberof EpWrite_
     * @static
     * @param {IEpWrite_=} [properties] Properties to set
     * @returns {EpWrite_} EpWrite_ instance
     */
    EpWrite_.create = function create(properties) {
        return new EpWrite_(properties);
    };

    /**
     * Encodes the specified EpWrite_ message. Does not implicitly {@link EpWrite_.verify|verify} messages.
     * @function encode
     * @memberof EpWrite_
     * @static
     * @param {IEpWrite_} message EpWrite_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpWrite_.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
        return writer;
    };

    /**
     * Encodes the specified EpWrite_ message, length delimited. Does not implicitly {@link EpWrite_.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpWrite_
     * @static
     * @param {IEpWrite_} message EpWrite_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpWrite_.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpWrite_ message from the specified reader or buffer.
     * @function decode
     * @memberof EpWrite_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpWrite_} EpWrite_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpWrite_.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpWrite_();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EpWrite_ message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EpWrite_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpWrite_} EpWrite_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpWrite_.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EpWrite_ message.
     * @function verify
     * @memberof EpWrite_
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EpWrite_.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates an EpWrite_ message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EpWrite_
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpWrite_} EpWrite_
     */
    EpWrite_.fromObject = function fromObject(object) {
        if (object instanceof $root.EpWrite_)
            return object;
        let message = new $root.EpWrite_();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };

    /**
     * Creates a plain object from an EpWrite_ message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpWrite_
     * @static
     * @param {EpWrite_} message EpWrite_
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EpWrite_.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this EpWrite_ to JSON.
     * @function toJSON
     * @memberof EpWrite_
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpWrite_.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpWrite_;
})();

export const EpAccept_ = $root.EpAccept_ = (() => {

    /**
     * Properties of an EpAccept_.
     * @exports IEpAccept_
     * @interface IEpAccept_
     */

    /**
     * Constructs a new EpAccept_.
     * @exports EpAccept_
     * @classdesc Represents an EpAccept_.
     * @implements IEpAccept_
     * @constructor
     * @param {IEpAccept_=} [properties] Properties to set
     */
    function EpAccept_(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EpAccept_ instance using the specified properties.
     * @function create
     * @memberof EpAccept_
     * @static
     * @param {IEpAccept_=} [properties] Properties to set
     * @returns {EpAccept_} EpAccept_ instance
     */
    EpAccept_.create = function create(properties) {
        return new EpAccept_(properties);
    };

    /**
     * Encodes the specified EpAccept_ message. Does not implicitly {@link EpAccept_.verify|verify} messages.
     * @function encode
     * @memberof EpAccept_
     * @static
     * @param {IEpAccept_} message EpAccept_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpAccept_.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified EpAccept_ message, length delimited. Does not implicitly {@link EpAccept_.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpAccept_
     * @static
     * @param {IEpAccept_} message EpAccept_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpAccept_.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpAccept_ message from the specified reader or buffer.
     * @function decode
     * @memberof EpAccept_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpAccept_} EpAccept_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpAccept_.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpAccept_();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EpAccept_ message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EpAccept_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpAccept_} EpAccept_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpAccept_.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EpAccept_ message.
     * @function verify
     * @memberof EpAccept_
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EpAccept_.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an EpAccept_ message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EpAccept_
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpAccept_} EpAccept_
     */
    EpAccept_.fromObject = function fromObject(object) {
        if (object instanceof $root.EpAccept_)
            return object;
        return new $root.EpAccept_();
    };

    /**
     * Creates a plain object from an EpAccept_ message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpAccept_
     * @static
     * @param {EpAccept_} message EpAccept_
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EpAccept_.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this EpAccept_ to JSON.
     * @function toJSON
     * @memberof EpAccept_
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpAccept_.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpAccept_;
})();

export const EpDecided_ = $root.EpDecided_ = (() => {

    /**
     * Properties of an EpDecided_.
     * @exports IEpDecided_
     * @interface IEpDecided_
     * @property {number|null} [value] EpDecided_ value
     */

    /**
     * Constructs a new EpDecided_.
     * @exports EpDecided_
     * @classdesc Represents an EpDecided_.
     * @implements IEpDecided_
     * @constructor
     * @param {IEpDecided_=} [properties] Properties to set
     */
    function EpDecided_(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EpDecided_ value.
     * @member {number} value
     * @memberof EpDecided_
     * @instance
     */
    EpDecided_.prototype.value = 0;

    /**
     * Creates a new EpDecided_ instance using the specified properties.
     * @function create
     * @memberof EpDecided_
     * @static
     * @param {IEpDecided_=} [properties] Properties to set
     * @returns {EpDecided_} EpDecided_ instance
     */
    EpDecided_.create = function create(properties) {
        return new EpDecided_(properties);
    };

    /**
     * Encodes the specified EpDecided_ message. Does not implicitly {@link EpDecided_.verify|verify} messages.
     * @function encode
     * @memberof EpDecided_
     * @static
     * @param {IEpDecided_} message EpDecided_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpDecided_.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
        return writer;
    };

    /**
     * Encodes the specified EpDecided_ message, length delimited. Does not implicitly {@link EpDecided_.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EpDecided_
     * @static
     * @param {IEpDecided_} message EpDecided_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EpDecided_.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EpDecided_ message from the specified reader or buffer.
     * @function decode
     * @memberof EpDecided_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EpDecided_} EpDecided_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpDecided_.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EpDecided_();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EpDecided_ message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EpDecided_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EpDecided_} EpDecided_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EpDecided_.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EpDecided_ message.
     * @function verify
     * @memberof EpDecided_
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EpDecided_.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates an EpDecided_ message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EpDecided_
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EpDecided_} EpDecided_
     */
    EpDecided_.fromObject = function fromObject(object) {
        if (object instanceof $root.EpDecided_)
            return object;
        let message = new $root.EpDecided_();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };

    /**
     * Creates a plain object from an EpDecided_ message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EpDecided_
     * @static
     * @param {EpDecided_} message EpDecided_
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EpDecided_.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this EpDecided_ to JSON.
     * @function toJSON
     * @memberof EpDecided_
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EpDecided_.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EpDecided_;
})();

export const EcNewEpoch_ = $root.EcNewEpoch_ = (() => {

    /**
     * Properties of an EcNewEpoch_.
     * @exports IEcNewEpoch_
     * @interface IEcNewEpoch_
     * @property {number|null} [timestamp] EcNewEpoch_ timestamp
     */

    /**
     * Constructs a new EcNewEpoch_.
     * @exports EcNewEpoch_
     * @classdesc Represents an EcNewEpoch_.
     * @implements IEcNewEpoch_
     * @constructor
     * @param {IEcNewEpoch_=} [properties] Properties to set
     */
    function EcNewEpoch_(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EcNewEpoch_ timestamp.
     * @member {number} timestamp
     * @memberof EcNewEpoch_
     * @instance
     */
    EcNewEpoch_.prototype.timestamp = 0;

    /**
     * Creates a new EcNewEpoch_ instance using the specified properties.
     * @function create
     * @memberof EcNewEpoch_
     * @static
     * @param {IEcNewEpoch_=} [properties] Properties to set
     * @returns {EcNewEpoch_} EcNewEpoch_ instance
     */
    EcNewEpoch_.create = function create(properties) {
        return new EcNewEpoch_(properties);
    };

    /**
     * Encodes the specified EcNewEpoch_ message. Does not implicitly {@link EcNewEpoch_.verify|verify} messages.
     * @function encode
     * @memberof EcNewEpoch_
     * @static
     * @param {IEcNewEpoch_} message EcNewEpoch_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EcNewEpoch_.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.timestamp);
        return writer;
    };

    /**
     * Encodes the specified EcNewEpoch_ message, length delimited. Does not implicitly {@link EcNewEpoch_.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EcNewEpoch_
     * @static
     * @param {IEcNewEpoch_} message EcNewEpoch_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EcNewEpoch_.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EcNewEpoch_ message from the specified reader or buffer.
     * @function decode
     * @memberof EcNewEpoch_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EcNewEpoch_} EcNewEpoch_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EcNewEpoch_.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EcNewEpoch_();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timestamp = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EcNewEpoch_ message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EcNewEpoch_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EcNewEpoch_} EcNewEpoch_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EcNewEpoch_.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EcNewEpoch_ message.
     * @function verify
     * @memberof EcNewEpoch_
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EcNewEpoch_.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            if (!$util.isInteger(message.timestamp))
                return "timestamp: integer expected";
        return null;
    };

    /**
     * Creates an EcNewEpoch_ message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EcNewEpoch_
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EcNewEpoch_} EcNewEpoch_
     */
    EcNewEpoch_.fromObject = function fromObject(object) {
        if (object instanceof $root.EcNewEpoch_)
            return object;
        let message = new $root.EcNewEpoch_();
        if (object.timestamp != null)
            message.timestamp = object.timestamp | 0;
        return message;
    };

    /**
     * Creates a plain object from an EcNewEpoch_ message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EcNewEpoch_
     * @static
     * @param {EcNewEpoch_} message EcNewEpoch_
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EcNewEpoch_.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.timestamp = 0;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = message.timestamp;
        return object;
    };

    /**
     * Converts this EcNewEpoch_ to JSON.
     * @function toJSON
     * @memberof EcNewEpoch_
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EcNewEpoch_.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EcNewEpoch_;
})();

export const EcNack_ = $root.EcNack_ = (() => {

    /**
     * Properties of an EcNack_.
     * @exports IEcNack_
     * @interface IEcNack_
     */

    /**
     * Constructs a new EcNack_.
     * @exports EcNack_
     * @classdesc Represents an EcNack_.
     * @implements IEcNack_
     * @constructor
     * @param {IEcNack_=} [properties] Properties to set
     */
    function EcNack_(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EcNack_ instance using the specified properties.
     * @function create
     * @memberof EcNack_
     * @static
     * @param {IEcNack_=} [properties] Properties to set
     * @returns {EcNack_} EcNack_ instance
     */
    EcNack_.create = function create(properties) {
        return new EcNack_(properties);
    };

    /**
     * Encodes the specified EcNack_ message. Does not implicitly {@link EcNack_.verify|verify} messages.
     * @function encode
     * @memberof EcNack_
     * @static
     * @param {IEcNack_} message EcNack_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EcNack_.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified EcNack_ message, length delimited. Does not implicitly {@link EcNack_.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EcNack_
     * @static
     * @param {IEcNack_} message EcNack_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EcNack_.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EcNack_ message from the specified reader or buffer.
     * @function decode
     * @memberof EcNack_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EcNack_} EcNack_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EcNack_.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EcNack_();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EcNack_ message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EcNack_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EcNack_} EcNack_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EcNack_.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EcNack_ message.
     * @function verify
     * @memberof EcNack_
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EcNack_.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an EcNack_ message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EcNack_
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EcNack_} EcNack_
     */
    EcNack_.fromObject = function fromObject(object) {
        if (object instanceof $root.EcNack_)
            return object;
        return new $root.EcNack_();
    };

    /**
     * Creates a plain object from an EcNack_ message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EcNack_
     * @static
     * @param {EcNack_} message EcNack_
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EcNack_.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this EcNack_ to JSON.
     * @function toJSON
     * @memberof EcNack_
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EcNack_.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EcNack_;
})();

export const BebBroadcast = $root.BebBroadcast = (() => {

    /**
     * Properties of a BebBroadcast.
     * @exports IBebBroadcast
     * @interface IBebBroadcast
     * @property {IMessage|null} [message] BebBroadcast message
     */

    /**
     * Constructs a new BebBroadcast.
     * @exports BebBroadcast
     * @classdesc Represents a BebBroadcast.
     * @implements IBebBroadcast
     * @constructor
     * @param {IBebBroadcast=} [properties] Properties to set
     */
    function BebBroadcast(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BebBroadcast message.
     * @member {IMessage|null|undefined} message
     * @memberof BebBroadcast
     * @instance
     */
    BebBroadcast.prototype.message = null;

    /**
     * Creates a new BebBroadcast instance using the specified properties.
     * @function create
     * @memberof BebBroadcast
     * @static
     * @param {IBebBroadcast=} [properties] Properties to set
     * @returns {BebBroadcast} BebBroadcast instance
     */
    BebBroadcast.create = function create(properties) {
        return new BebBroadcast(properties);
    };

    /**
     * Encodes the specified BebBroadcast message. Does not implicitly {@link BebBroadcast.verify|verify} messages.
     * @function encode
     * @memberof BebBroadcast
     * @static
     * @param {IBebBroadcast} message BebBroadcast message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BebBroadcast.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            $root.Message.encode(message.message, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified BebBroadcast message, length delimited. Does not implicitly {@link BebBroadcast.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BebBroadcast
     * @static
     * @param {IBebBroadcast} message BebBroadcast message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BebBroadcast.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BebBroadcast message from the specified reader or buffer.
     * @function decode
     * @memberof BebBroadcast
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BebBroadcast} BebBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BebBroadcast.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BebBroadcast();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.message = $root.Message.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BebBroadcast message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BebBroadcast
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BebBroadcast} BebBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BebBroadcast.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BebBroadcast message.
     * @function verify
     * @memberof BebBroadcast
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BebBroadcast.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message")) {
            let error = $root.Message.verify(message.message);
            if (error)
                return "message." + error;
        }
        return null;
    };

    /**
     * Creates a BebBroadcast message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BebBroadcast
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BebBroadcast} BebBroadcast
     */
    BebBroadcast.fromObject = function fromObject(object) {
        if (object instanceof $root.BebBroadcast)
            return object;
        let message = new $root.BebBroadcast();
        if (object.message != null) {
            if (typeof object.message !== "object")
                throw TypeError(".BebBroadcast.message: object expected");
            message.message = $root.Message.fromObject(object.message);
        }
        return message;
    };

    /**
     * Creates a plain object from a BebBroadcast message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BebBroadcast
     * @static
     * @param {BebBroadcast} message BebBroadcast
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BebBroadcast.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.message = null;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = $root.Message.toObject(message.message, options);
        return object;
    };

    /**
     * Converts this BebBroadcast to JSON.
     * @function toJSON
     * @memberof BebBroadcast
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BebBroadcast.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BebBroadcast;
})();

export const BebDeliver = $root.BebDeliver = (() => {

    /**
     * Properties of a BebDeliver.
     * @exports IBebDeliver
     * @interface IBebDeliver
     * @property {IMessage|null} [message] BebDeliver message
     * @property {IProcessId|null} [sender] BebDeliver sender
     */

    /**
     * Constructs a new BebDeliver.
     * @exports BebDeliver
     * @classdesc Represents a BebDeliver.
     * @implements IBebDeliver
     * @constructor
     * @param {IBebDeliver=} [properties] Properties to set
     */
    function BebDeliver(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BebDeliver message.
     * @member {IMessage|null|undefined} message
     * @memberof BebDeliver
     * @instance
     */
    BebDeliver.prototype.message = null;

    /**
     * BebDeliver sender.
     * @member {IProcessId|null|undefined} sender
     * @memberof BebDeliver
     * @instance
     */
    BebDeliver.prototype.sender = null;

    /**
     * Creates a new BebDeliver instance using the specified properties.
     * @function create
     * @memberof BebDeliver
     * @static
     * @param {IBebDeliver=} [properties] Properties to set
     * @returns {BebDeliver} BebDeliver instance
     */
    BebDeliver.create = function create(properties) {
        return new BebDeliver(properties);
    };

    /**
     * Encodes the specified BebDeliver message. Does not implicitly {@link BebDeliver.verify|verify} messages.
     * @function encode
     * @memberof BebDeliver
     * @static
     * @param {IBebDeliver} message BebDeliver message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BebDeliver.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            $root.Message.encode(message.message, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
            $root.ProcessId.encode(message.sender, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified BebDeliver message, length delimited. Does not implicitly {@link BebDeliver.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BebDeliver
     * @static
     * @param {IBebDeliver} message BebDeliver message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BebDeliver.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BebDeliver message from the specified reader or buffer.
     * @function decode
     * @memberof BebDeliver
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BebDeliver} BebDeliver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BebDeliver.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BebDeliver();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.message = $root.Message.decode(reader, reader.uint32());
                break;
            case 2:
                message.sender = $root.ProcessId.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BebDeliver message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BebDeliver
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BebDeliver} BebDeliver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BebDeliver.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BebDeliver message.
     * @function verify
     * @memberof BebDeliver
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BebDeliver.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.message != null && message.hasOwnProperty("message")) {
            let error = $root.Message.verify(message.message);
            if (error)
                return "message." + error;
        }
        if (message.sender != null && message.hasOwnProperty("sender")) {
            let error = $root.ProcessId.verify(message.sender);
            if (error)
                return "sender." + error;
        }
        return null;
    };

    /**
     * Creates a BebDeliver message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BebDeliver
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BebDeliver} BebDeliver
     */
    BebDeliver.fromObject = function fromObject(object) {
        if (object instanceof $root.BebDeliver)
            return object;
        let message = new $root.BebDeliver();
        if (object.message != null) {
            if (typeof object.message !== "object")
                throw TypeError(".BebDeliver.message: object expected");
            message.message = $root.Message.fromObject(object.message);
        }
        if (object.sender != null) {
            if (typeof object.sender !== "object")
                throw TypeError(".BebDeliver.sender: object expected");
            message.sender = $root.ProcessId.fromObject(object.sender);
        }
        return message;
    };

    /**
     * Creates a plain object from a BebDeliver message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BebDeliver
     * @static
     * @param {BebDeliver} message BebDeliver
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BebDeliver.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.message = null;
            object.sender = null;
        }
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = $root.Message.toObject(message.message, options);
        if (message.sender != null && message.hasOwnProperty("sender"))
            object.sender = $root.ProcessId.toObject(message.sender, options);
        return object;
    };

    /**
     * Converts this BebDeliver to JSON.
     * @function toJSON
     * @memberof BebDeliver
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BebDeliver.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BebDeliver;
})();

export const EldRecovery = $root.EldRecovery = (() => {

    /**
     * Properties of an EldRecovery.
     * @exports IEldRecovery
     * @interface IEldRecovery
     */

    /**
     * Constructs a new EldRecovery.
     * @exports EldRecovery
     * @classdesc Represents an EldRecovery.
     * @implements IEldRecovery
     * @constructor
     * @param {IEldRecovery=} [properties] Properties to set
     */
    function EldRecovery(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EldRecovery instance using the specified properties.
     * @function create
     * @memberof EldRecovery
     * @static
     * @param {IEldRecovery=} [properties] Properties to set
     * @returns {EldRecovery} EldRecovery instance
     */
    EldRecovery.create = function create(properties) {
        return new EldRecovery(properties);
    };

    /**
     * Encodes the specified EldRecovery message. Does not implicitly {@link EldRecovery.verify|verify} messages.
     * @function encode
     * @memberof EldRecovery
     * @static
     * @param {IEldRecovery} message EldRecovery message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EldRecovery.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified EldRecovery message, length delimited. Does not implicitly {@link EldRecovery.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EldRecovery
     * @static
     * @param {IEldRecovery} message EldRecovery message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EldRecovery.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EldRecovery message from the specified reader or buffer.
     * @function decode
     * @memberof EldRecovery
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EldRecovery} EldRecovery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EldRecovery.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EldRecovery();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EldRecovery message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EldRecovery
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EldRecovery} EldRecovery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EldRecovery.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EldRecovery message.
     * @function verify
     * @memberof EldRecovery
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EldRecovery.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an EldRecovery message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EldRecovery
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EldRecovery} EldRecovery
     */
    EldRecovery.fromObject = function fromObject(object) {
        if (object instanceof $root.EldRecovery)
            return object;
        return new $root.EldRecovery();
    };

    /**
     * Creates a plain object from an EldRecovery message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EldRecovery
     * @static
     * @param {EldRecovery} message EldRecovery
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EldRecovery.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this EldRecovery to JSON.
     * @function toJSON
     * @memberof EldRecovery
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EldRecovery.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EldRecovery;
})();

export const EldTimeout = $root.EldTimeout = (() => {

    /**
     * Properties of an EldTimeout.
     * @exports IEldTimeout
     * @interface IEldTimeout
     */

    /**
     * Constructs a new EldTimeout.
     * @exports EldTimeout
     * @classdesc Represents an EldTimeout.
     * @implements IEldTimeout
     * @constructor
     * @param {IEldTimeout=} [properties] Properties to set
     */
    function EldTimeout(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EldTimeout instance using the specified properties.
     * @function create
     * @memberof EldTimeout
     * @static
     * @param {IEldTimeout=} [properties] Properties to set
     * @returns {EldTimeout} EldTimeout instance
     */
    EldTimeout.create = function create(properties) {
        return new EldTimeout(properties);
    };

    /**
     * Encodes the specified EldTimeout message. Does not implicitly {@link EldTimeout.verify|verify} messages.
     * @function encode
     * @memberof EldTimeout
     * @static
     * @param {IEldTimeout} message EldTimeout message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EldTimeout.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified EldTimeout message, length delimited. Does not implicitly {@link EldTimeout.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EldTimeout
     * @static
     * @param {IEldTimeout} message EldTimeout message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EldTimeout.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EldTimeout message from the specified reader or buffer.
     * @function decode
     * @memberof EldTimeout
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EldTimeout} EldTimeout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EldTimeout.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EldTimeout();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EldTimeout message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EldTimeout
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EldTimeout} EldTimeout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EldTimeout.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EldTimeout message.
     * @function verify
     * @memberof EldTimeout
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EldTimeout.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an EldTimeout message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EldTimeout
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EldTimeout} EldTimeout
     */
    EldTimeout.fromObject = function fromObject(object) {
        if (object instanceof $root.EldTimeout)
            return object;
        return new $root.EldTimeout();
    };

    /**
     * Creates a plain object from an EldTimeout message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EldTimeout
     * @static
     * @param {EldTimeout} message EldTimeout
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EldTimeout.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this EldTimeout to JSON.
     * @function toJSON
     * @memberof EldTimeout
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EldTimeout.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EldTimeout;
})();

export const EldTrust = $root.EldTrust = (() => {

    /**
     * Properties of an EldTrust.
     * @exports IEldTrust
     * @interface IEldTrust
     * @property {IProcessId|null} [processId] EldTrust processId
     */

    /**
     * Constructs a new EldTrust.
     * @exports EldTrust
     * @classdesc Represents an EldTrust.
     * @implements IEldTrust
     * @constructor
     * @param {IEldTrust=} [properties] Properties to set
     */
    function EldTrust(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EldTrust processId.
     * @member {IProcessId|null|undefined} processId
     * @memberof EldTrust
     * @instance
     */
    EldTrust.prototype.processId = null;

    /**
     * Creates a new EldTrust instance using the specified properties.
     * @function create
     * @memberof EldTrust
     * @static
     * @param {IEldTrust=} [properties] Properties to set
     * @returns {EldTrust} EldTrust instance
     */
    EldTrust.create = function create(properties) {
        return new EldTrust(properties);
    };

    /**
     * Encodes the specified EldTrust message. Does not implicitly {@link EldTrust.verify|verify} messages.
     * @function encode
     * @memberof EldTrust
     * @static
     * @param {IEldTrust} message EldTrust message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EldTrust.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.processId != null && Object.hasOwnProperty.call(message, "processId"))
            $root.ProcessId.encode(message.processId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EldTrust message, length delimited. Does not implicitly {@link EldTrust.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EldTrust
     * @static
     * @param {IEldTrust} message EldTrust message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EldTrust.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EldTrust message from the specified reader or buffer.
     * @function decode
     * @memberof EldTrust
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EldTrust} EldTrust
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EldTrust.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EldTrust();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.processId = $root.ProcessId.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EldTrust message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EldTrust
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EldTrust} EldTrust
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EldTrust.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EldTrust message.
     * @function verify
     * @memberof EldTrust
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EldTrust.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.processId != null && message.hasOwnProperty("processId")) {
            let error = $root.ProcessId.verify(message.processId);
            if (error)
                return "processId." + error;
        }
        return null;
    };

    /**
     * Creates an EldTrust message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EldTrust
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EldTrust} EldTrust
     */
    EldTrust.fromObject = function fromObject(object) {
        if (object instanceof $root.EldTrust)
            return object;
        let message = new $root.EldTrust();
        if (object.processId != null) {
            if (typeof object.processId !== "object")
                throw TypeError(".EldTrust.processId: object expected");
            message.processId = $root.ProcessId.fromObject(object.processId);
        }
        return message;
    };

    /**
     * Creates a plain object from an EldTrust message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EldTrust
     * @static
     * @param {EldTrust} message EldTrust
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EldTrust.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.processId = null;
        if (message.processId != null && message.hasOwnProperty("processId"))
            object.processId = $root.ProcessId.toObject(message.processId, options);
        return object;
    };

    /**
     * Converts this EldTrust to JSON.
     * @function toJSON
     * @memberof EldTrust
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EldTrust.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EldTrust;
})();

export const EldHeartbeat_ = $root.EldHeartbeat_ = (() => {

    /**
     * Properties of an EldHeartbeat_.
     * @exports IEldHeartbeat_
     * @interface IEldHeartbeat_
     * @property {number|null} [epoch] EldHeartbeat_ epoch
     */

    /**
     * Constructs a new EldHeartbeat_.
     * @exports EldHeartbeat_
     * @classdesc Represents an EldHeartbeat_.
     * @implements IEldHeartbeat_
     * @constructor
     * @param {IEldHeartbeat_=} [properties] Properties to set
     */
    function EldHeartbeat_(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EldHeartbeat_ epoch.
     * @member {number} epoch
     * @memberof EldHeartbeat_
     * @instance
     */
    EldHeartbeat_.prototype.epoch = 0;

    /**
     * Creates a new EldHeartbeat_ instance using the specified properties.
     * @function create
     * @memberof EldHeartbeat_
     * @static
     * @param {IEldHeartbeat_=} [properties] Properties to set
     * @returns {EldHeartbeat_} EldHeartbeat_ instance
     */
    EldHeartbeat_.create = function create(properties) {
        return new EldHeartbeat_(properties);
    };

    /**
     * Encodes the specified EldHeartbeat_ message. Does not implicitly {@link EldHeartbeat_.verify|verify} messages.
     * @function encode
     * @memberof EldHeartbeat_
     * @static
     * @param {IEldHeartbeat_} message EldHeartbeat_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EldHeartbeat_.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.epoch != null && Object.hasOwnProperty.call(message, "epoch"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.epoch);
        return writer;
    };

    /**
     * Encodes the specified EldHeartbeat_ message, length delimited. Does not implicitly {@link EldHeartbeat_.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EldHeartbeat_
     * @static
     * @param {IEldHeartbeat_} message EldHeartbeat_ message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EldHeartbeat_.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EldHeartbeat_ message from the specified reader or buffer.
     * @function decode
     * @memberof EldHeartbeat_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EldHeartbeat_} EldHeartbeat_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EldHeartbeat_.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EldHeartbeat_();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.epoch = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EldHeartbeat_ message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EldHeartbeat_
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EldHeartbeat_} EldHeartbeat_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EldHeartbeat_.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EldHeartbeat_ message.
     * @function verify
     * @memberof EldHeartbeat_
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EldHeartbeat_.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.epoch != null && message.hasOwnProperty("epoch"))
            if (!$util.isInteger(message.epoch))
                return "epoch: integer expected";
        return null;
    };

    /**
     * Creates an EldHeartbeat_ message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EldHeartbeat_
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EldHeartbeat_} EldHeartbeat_
     */
    EldHeartbeat_.fromObject = function fromObject(object) {
        if (object instanceof $root.EldHeartbeat_)
            return object;
        let message = new $root.EldHeartbeat_();
        if (object.epoch != null)
            message.epoch = object.epoch | 0;
        return message;
    };

    /**
     * Creates a plain object from an EldHeartbeat_ message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EldHeartbeat_
     * @static
     * @param {EldHeartbeat_} message EldHeartbeat_
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EldHeartbeat_.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.epoch = 0;
        if (message.epoch != null && message.hasOwnProperty("epoch"))
            object.epoch = message.epoch;
        return object;
    };

    /**
     * Converts this EldHeartbeat_ to JSON.
     * @function toJSON
     * @memberof EldHeartbeat_
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EldHeartbeat_.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EldHeartbeat_;
})();

export const PlSend = $root.PlSend = (() => {

    /**
     * Properties of a PlSend.
     * @exports IPlSend
     * @interface IPlSend
     * @property {IProcessId|null} [destination] PlSend destination
     * @property {IMessage|null} [message] PlSend message
     */

    /**
     * Constructs a new PlSend.
     * @exports PlSend
     * @classdesc Represents a PlSend.
     * @implements IPlSend
     * @constructor
     * @param {IPlSend=} [properties] Properties to set
     */
    function PlSend(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlSend destination.
     * @member {IProcessId|null|undefined} destination
     * @memberof PlSend
     * @instance
     */
    PlSend.prototype.destination = null;

    /**
     * PlSend message.
     * @member {IMessage|null|undefined} message
     * @memberof PlSend
     * @instance
     */
    PlSend.prototype.message = null;

    /**
     * Creates a new PlSend instance using the specified properties.
     * @function create
     * @memberof PlSend
     * @static
     * @param {IPlSend=} [properties] Properties to set
     * @returns {PlSend} PlSend instance
     */
    PlSend.create = function create(properties) {
        return new PlSend(properties);
    };

    /**
     * Encodes the specified PlSend message. Does not implicitly {@link PlSend.verify|verify} messages.
     * @function encode
     * @memberof PlSend
     * @static
     * @param {IPlSend} message PlSend message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlSend.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.destination != null && Object.hasOwnProperty.call(message, "destination"))
            $root.ProcessId.encode(message.destination, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            $root.Message.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PlSend message, length delimited. Does not implicitly {@link PlSend.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlSend
     * @static
     * @param {IPlSend} message PlSend message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlSend.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlSend message from the specified reader or buffer.
     * @function decode
     * @memberof PlSend
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlSend} PlSend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlSend.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlSend();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.destination = $root.ProcessId.decode(reader, reader.uint32());
                break;
            case 2:
                message.message = $root.Message.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlSend message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlSend
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlSend} PlSend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlSend.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlSend message.
     * @function verify
     * @memberof PlSend
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlSend.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.destination != null && message.hasOwnProperty("destination")) {
            let error = $root.ProcessId.verify(message.destination);
            if (error)
                return "destination." + error;
        }
        if (message.message != null && message.hasOwnProperty("message")) {
            let error = $root.Message.verify(message.message);
            if (error)
                return "message." + error;
        }
        return null;
    };

    /**
     * Creates a PlSend message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlSend
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlSend} PlSend
     */
    PlSend.fromObject = function fromObject(object) {
        if (object instanceof $root.PlSend)
            return object;
        let message = new $root.PlSend();
        if (object.destination != null) {
            if (typeof object.destination !== "object")
                throw TypeError(".PlSend.destination: object expected");
            message.destination = $root.ProcessId.fromObject(object.destination);
        }
        if (object.message != null) {
            if (typeof object.message !== "object")
                throw TypeError(".PlSend.message: object expected");
            message.message = $root.Message.fromObject(object.message);
        }
        return message;
    };

    /**
     * Creates a plain object from a PlSend message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlSend
     * @static
     * @param {PlSend} message PlSend
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlSend.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.destination = null;
            object.message = null;
        }
        if (message.destination != null && message.hasOwnProperty("destination"))
            object.destination = $root.ProcessId.toObject(message.destination, options);
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = $root.Message.toObject(message.message, options);
        return object;
    };

    /**
     * Converts this PlSend to JSON.
     * @function toJSON
     * @memberof PlSend
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlSend.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlSend;
})();

export const PlDeliver = $root.PlDeliver = (() => {

    /**
     * Properties of a PlDeliver.
     * @exports IPlDeliver
     * @interface IPlDeliver
     * @property {IProcessId|null} [sender] PlDeliver sender
     * @property {IMessage|null} [message] PlDeliver message
     */

    /**
     * Constructs a new PlDeliver.
     * @exports PlDeliver
     * @classdesc Represents a PlDeliver.
     * @implements IPlDeliver
     * @constructor
     * @param {IPlDeliver=} [properties] Properties to set
     */
    function PlDeliver(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlDeliver sender.
     * @member {IProcessId|null|undefined} sender
     * @memberof PlDeliver
     * @instance
     */
    PlDeliver.prototype.sender = null;

    /**
     * PlDeliver message.
     * @member {IMessage|null|undefined} message
     * @memberof PlDeliver
     * @instance
     */
    PlDeliver.prototype.message = null;

    /**
     * Creates a new PlDeliver instance using the specified properties.
     * @function create
     * @memberof PlDeliver
     * @static
     * @param {IPlDeliver=} [properties] Properties to set
     * @returns {PlDeliver} PlDeliver instance
     */
    PlDeliver.create = function create(properties) {
        return new PlDeliver(properties);
    };

    /**
     * Encodes the specified PlDeliver message. Does not implicitly {@link PlDeliver.verify|verify} messages.
     * @function encode
     * @memberof PlDeliver
     * @static
     * @param {IPlDeliver} message PlDeliver message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlDeliver.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sender != null && Object.hasOwnProperty.call(message, "sender"))
            $root.ProcessId.encode(message.sender, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            $root.Message.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PlDeliver message, length delimited. Does not implicitly {@link PlDeliver.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlDeliver
     * @static
     * @param {IPlDeliver} message PlDeliver message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlDeliver.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlDeliver message from the specified reader or buffer.
     * @function decode
     * @memberof PlDeliver
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlDeliver} PlDeliver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlDeliver.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlDeliver();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sender = $root.ProcessId.decode(reader, reader.uint32());
                break;
            case 2:
                message.message = $root.Message.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlDeliver message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlDeliver
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlDeliver} PlDeliver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlDeliver.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlDeliver message.
     * @function verify
     * @memberof PlDeliver
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlDeliver.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sender != null && message.hasOwnProperty("sender")) {
            let error = $root.ProcessId.verify(message.sender);
            if (error)
                return "sender." + error;
        }
        if (message.message != null && message.hasOwnProperty("message")) {
            let error = $root.Message.verify(message.message);
            if (error)
                return "message." + error;
        }
        return null;
    };

    /**
     * Creates a PlDeliver message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlDeliver
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlDeliver} PlDeliver
     */
    PlDeliver.fromObject = function fromObject(object) {
        if (object instanceof $root.PlDeliver)
            return object;
        let message = new $root.PlDeliver();
        if (object.sender != null) {
            if (typeof object.sender !== "object")
                throw TypeError(".PlDeliver.sender: object expected");
            message.sender = $root.ProcessId.fromObject(object.sender);
        }
        if (object.message != null) {
            if (typeof object.message !== "object")
                throw TypeError(".PlDeliver.message: object expected");
            message.message = $root.Message.fromObject(object.message);
        }
        return message;
    };

    /**
     * Creates a plain object from a PlDeliver message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlDeliver
     * @static
     * @param {PlDeliver} message PlDeliver
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlDeliver.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.sender = null;
            object.message = null;
        }
        if (message.sender != null && message.hasOwnProperty("sender"))
            object.sender = $root.ProcessId.toObject(message.sender, options);
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = $root.Message.toObject(message.message, options);
        return object;
    };

    /**
     * Converts this PlDeliver to JSON.
     * @function toJSON
     * @memberof PlDeliver
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlDeliver.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlDeliver;
})();

export const NetworkMessage = $root.NetworkMessage = (() => {

    /**
     * Properties of a NetworkMessage.
     * @exports INetworkMessage
     * @interface INetworkMessage
     * @property {number|null} [rendezvousPort] NetworkMessage rendezvousPort
     * @property {IMessage|null} [message] NetworkMessage message
     */

    /**
     * Constructs a new NetworkMessage.
     * @exports NetworkMessage
     * @classdesc Represents a NetworkMessage.
     * @implements INetworkMessage
     * @constructor
     * @param {INetworkMessage=} [properties] Properties to set
     */
    function NetworkMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NetworkMessage rendezvousPort.
     * @member {number} rendezvousPort
     * @memberof NetworkMessage
     * @instance
     */
    NetworkMessage.prototype.rendezvousPort = 0;

    /**
     * NetworkMessage message.
     * @member {IMessage|null|undefined} message
     * @memberof NetworkMessage
     * @instance
     */
    NetworkMessage.prototype.message = null;

    /**
     * Creates a new NetworkMessage instance using the specified properties.
     * @function create
     * @memberof NetworkMessage
     * @static
     * @param {INetworkMessage=} [properties] Properties to set
     * @returns {NetworkMessage} NetworkMessage instance
     */
    NetworkMessage.create = function create(properties) {
        return new NetworkMessage(properties);
    };

    /**
     * Encodes the specified NetworkMessage message. Does not implicitly {@link NetworkMessage.verify|verify} messages.
     * @function encode
     * @memberof NetworkMessage
     * @static
     * @param {INetworkMessage} message NetworkMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NetworkMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rendezvousPort != null && Object.hasOwnProperty.call(message, "rendezvousPort"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rendezvousPort);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            $root.Message.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified NetworkMessage message, length delimited. Does not implicitly {@link NetworkMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NetworkMessage
     * @static
     * @param {INetworkMessage} message NetworkMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NetworkMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NetworkMessage message from the specified reader or buffer.
     * @function decode
     * @memberof NetworkMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NetworkMessage} NetworkMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NetworkMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetworkMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.rendezvousPort = reader.int32();
                break;
            case 2:
                message.message = $root.Message.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NetworkMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NetworkMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NetworkMessage} NetworkMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NetworkMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NetworkMessage message.
     * @function verify
     * @memberof NetworkMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NetworkMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rendezvousPort != null && message.hasOwnProperty("rendezvousPort"))
            if (!$util.isInteger(message.rendezvousPort))
                return "rendezvousPort: integer expected";
        if (message.message != null && message.hasOwnProperty("message")) {
            let error = $root.Message.verify(message.message);
            if (error)
                return "message." + error;
        }
        return null;
    };

    /**
     * Creates a NetworkMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NetworkMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NetworkMessage} NetworkMessage
     */
    NetworkMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.NetworkMessage)
            return object;
        let message = new $root.NetworkMessage();
        if (object.rendezvousPort != null)
            message.rendezvousPort = object.rendezvousPort | 0;
        if (object.message != null) {
            if (typeof object.message !== "object")
                throw TypeError(".NetworkMessage.message: object expected");
            message.message = $root.Message.fromObject(object.message);
        }
        return message;
    };

    /**
     * Creates a plain object from a NetworkMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NetworkMessage
     * @static
     * @param {NetworkMessage} message NetworkMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NetworkMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.rendezvousPort = 0;
            object.message = null;
        }
        if (message.rendezvousPort != null && message.hasOwnProperty("rendezvousPort"))
            object.rendezvousPort = message.rendezvousPort;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = $root.Message.toObject(message.message, options);
        return object;
    };

    /**
     * Converts this NetworkMessage to JSON.
     * @function toJSON
     * @memberof NetworkMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NetworkMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return NetworkMessage;
})();

export const AppRegistration = $root.AppRegistration = (() => {

    /**
     * Properties of an AppRegistration.
     * @exports IAppRegistration
     * @interface IAppRegistration
     * @property {string|null} [owner] AppRegistration owner
     * @property {number|null} [index] AppRegistration index
     * @property {number|null} [port] AppRegistration port
     */

    /**
     * Constructs a new AppRegistration.
     * @exports AppRegistration
     * @classdesc Represents an AppRegistration.
     * @implements IAppRegistration
     * @constructor
     * @param {IAppRegistration=} [properties] Properties to set
     */
    function AppRegistration(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AppRegistration owner.
     * @member {string} owner
     * @memberof AppRegistration
     * @instance
     */
    AppRegistration.prototype.owner = "";

    /**
     * AppRegistration index.
     * @member {number} index
     * @memberof AppRegistration
     * @instance
     */
    AppRegistration.prototype.index = 0;

    /**
     * AppRegistration port.
     * @member {number} port
     * @memberof AppRegistration
     * @instance
     */
    AppRegistration.prototype.port = 0;

    /**
     * Creates a new AppRegistration instance using the specified properties.
     * @function create
     * @memberof AppRegistration
     * @static
     * @param {IAppRegistration=} [properties] Properties to set
     * @returns {AppRegistration} AppRegistration instance
     */
    AppRegistration.create = function create(properties) {
        return new AppRegistration(properties);
    };

    /**
     * Encodes the specified AppRegistration message. Does not implicitly {@link AppRegistration.verify|verify} messages.
     * @function encode
     * @memberof AppRegistration
     * @static
     * @param {IAppRegistration} message AppRegistration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppRegistration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.owner != null && Object.hasOwnProperty.call(message, "owner"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.owner);
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
        if (message.port != null && Object.hasOwnProperty.call(message, "port"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
        return writer;
    };

    /**
     * Encodes the specified AppRegistration message, length delimited. Does not implicitly {@link AppRegistration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AppRegistration
     * @static
     * @param {IAppRegistration} message AppRegistration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppRegistration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AppRegistration message from the specified reader or buffer.
     * @function decode
     * @memberof AppRegistration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AppRegistration} AppRegistration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppRegistration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AppRegistration();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.owner = reader.string();
                break;
            case 2:
                message.index = reader.int32();
                break;
            case 3:
                message.port = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AppRegistration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AppRegistration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AppRegistration} AppRegistration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppRegistration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AppRegistration message.
     * @function verify
     * @memberof AppRegistration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AppRegistration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.owner != null && message.hasOwnProperty("owner"))
            if (!$util.isString(message.owner))
                return "owner: string expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.port != null && message.hasOwnProperty("port"))
            if (!$util.isInteger(message.port))
                return "port: integer expected";
        return null;
    };

    /**
     * Creates an AppRegistration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AppRegistration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AppRegistration} AppRegistration
     */
    AppRegistration.fromObject = function fromObject(object) {
        if (object instanceof $root.AppRegistration)
            return object;
        let message = new $root.AppRegistration();
        if (object.owner != null)
            message.owner = String(object.owner);
        if (object.index != null)
            message.index = object.index | 0;
        if (object.port != null)
            message.port = object.port | 0;
        return message;
    };

    /**
     * Creates a plain object from an AppRegistration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AppRegistration
     * @static
     * @param {AppRegistration} message AppRegistration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AppRegistration.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.owner = "";
            object.index = 0;
            object.port = 0;
        }
        if (message.owner != null && message.hasOwnProperty("owner"))
            object.owner = message.owner;
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.port != null && message.hasOwnProperty("port"))
            object.port = message.port;
        return object;
    };

    /**
     * Converts this AppRegistration to JSON.
     * @function toJSON
     * @memberof AppRegistration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AppRegistration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AppRegistration;
})();

export const AppPropose = $root.AppPropose = (() => {

    /**
     * Properties of an AppPropose.
     * @exports IAppPropose
     * @interface IAppPropose
     * @property {number|null} [value] AppPropose value
     * @property {string|null} [systemId] AppPropose systemId
     * @property {Array.<IProcessId>|null} [processes] AppPropose processes
     */

    /**
     * Constructs a new AppPropose.
     * @exports AppPropose
     * @classdesc Represents an AppPropose.
     * @implements IAppPropose
     * @constructor
     * @param {IAppPropose=} [properties] Properties to set
     */
    function AppPropose(properties) {
        this.processes = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AppPropose value.
     * @member {number} value
     * @memberof AppPropose
     * @instance
     */
    AppPropose.prototype.value = 0;

    /**
     * AppPropose systemId.
     * @member {string} systemId
     * @memberof AppPropose
     * @instance
     */
    AppPropose.prototype.systemId = "";

    /**
     * AppPropose processes.
     * @member {Array.<IProcessId>} processes
     * @memberof AppPropose
     * @instance
     */
    AppPropose.prototype.processes = $util.emptyArray;

    /**
     * Creates a new AppPropose instance using the specified properties.
     * @function create
     * @memberof AppPropose
     * @static
     * @param {IAppPropose=} [properties] Properties to set
     * @returns {AppPropose} AppPropose instance
     */
    AppPropose.create = function create(properties) {
        return new AppPropose(properties);
    };

    /**
     * Encodes the specified AppPropose message. Does not implicitly {@link AppPropose.verify|verify} messages.
     * @function encode
     * @memberof AppPropose
     * @static
     * @param {IAppPropose} message AppPropose message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppPropose.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
        if (message.systemId != null && Object.hasOwnProperty.call(message, "systemId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.systemId);
        if (message.processes != null && message.processes.length)
            for (let i = 0; i < message.processes.length; ++i)
                $root.ProcessId.encode(message.processes[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AppPropose message, length delimited. Does not implicitly {@link AppPropose.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AppPropose
     * @static
     * @param {IAppPropose} message AppPropose message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppPropose.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AppPropose message from the specified reader or buffer.
     * @function decode
     * @memberof AppPropose
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AppPropose} AppPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppPropose.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AppPropose();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.int32();
                break;
            case 2:
                message.systemId = reader.string();
                break;
            case 3:
                if (!(message.processes && message.processes.length))
                    message.processes = [];
                message.processes.push($root.ProcessId.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AppPropose message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AppPropose
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AppPropose} AppPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppPropose.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AppPropose message.
     * @function verify
     * @memberof AppPropose
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AppPropose.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        if (message.systemId != null && message.hasOwnProperty("systemId"))
            if (!$util.isString(message.systemId))
                return "systemId: string expected";
        if (message.processes != null && message.hasOwnProperty("processes")) {
            if (!Array.isArray(message.processes))
                return "processes: array expected";
            for (let i = 0; i < message.processes.length; ++i) {
                let error = $root.ProcessId.verify(message.processes[i]);
                if (error)
                    return "processes." + error;
            }
        }
        return null;
    };

    /**
     * Creates an AppPropose message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AppPropose
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AppPropose} AppPropose
     */
    AppPropose.fromObject = function fromObject(object) {
        if (object instanceof $root.AppPropose)
            return object;
        let message = new $root.AppPropose();
        if (object.value != null)
            message.value = object.value | 0;
        if (object.systemId != null)
            message.systemId = String(object.systemId);
        if (object.processes) {
            if (!Array.isArray(object.processes))
                throw TypeError(".AppPropose.processes: array expected");
            message.processes = [];
            for (let i = 0; i < object.processes.length; ++i) {
                if (typeof object.processes[i] !== "object")
                    throw TypeError(".AppPropose.processes: object expected");
                message.processes[i] = $root.ProcessId.fromObject(object.processes[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from an AppPropose message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AppPropose
     * @static
     * @param {AppPropose} message AppPropose
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AppPropose.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.processes = [];
        if (options.defaults) {
            object.value = 0;
            object.systemId = "";
        }
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        if (message.systemId != null && message.hasOwnProperty("systemId"))
            object.systemId = message.systemId;
        if (message.processes && message.processes.length) {
            object.processes = [];
            for (let j = 0; j < message.processes.length; ++j)
                object.processes[j] = $root.ProcessId.toObject(message.processes[j], options);
        }
        return object;
    };

    /**
     * Converts this AppPropose to JSON.
     * @function toJSON
     * @memberof AppPropose
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AppPropose.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AppPropose;
})();

export const AppDecide = $root.AppDecide = (() => {

    /**
     * Properties of an AppDecide.
     * @exports IAppDecide
     * @interface IAppDecide
     * @property {number|null} [value] AppDecide value
     */

    /**
     * Constructs a new AppDecide.
     * @exports AppDecide
     * @classdesc Represents an AppDecide.
     * @implements IAppDecide
     * @constructor
     * @param {IAppDecide=} [properties] Properties to set
     */
    function AppDecide(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AppDecide value.
     * @member {number} value
     * @memberof AppDecide
     * @instance
     */
    AppDecide.prototype.value = 0;

    /**
     * Creates a new AppDecide instance using the specified properties.
     * @function create
     * @memberof AppDecide
     * @static
     * @param {IAppDecide=} [properties] Properties to set
     * @returns {AppDecide} AppDecide instance
     */
    AppDecide.create = function create(properties) {
        return new AppDecide(properties);
    };

    /**
     * Encodes the specified AppDecide message. Does not implicitly {@link AppDecide.verify|verify} messages.
     * @function encode
     * @memberof AppDecide
     * @static
     * @param {IAppDecide} message AppDecide message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppDecide.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
        return writer;
    };

    /**
     * Encodes the specified AppDecide message, length delimited. Does not implicitly {@link AppDecide.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AppDecide
     * @static
     * @param {IAppDecide} message AppDecide message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AppDecide.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AppDecide message from the specified reader or buffer.
     * @function decode
     * @memberof AppDecide
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AppDecide} AppDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppDecide.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.AppDecide();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AppDecide message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AppDecide
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AppDecide} AppDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AppDecide.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AppDecide message.
     * @function verify
     * @memberof AppDecide
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AppDecide.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates an AppDecide message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AppDecide
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AppDecide} AppDecide
     */
    AppDecide.fromObject = function fromObject(object) {
        if (object instanceof $root.AppDecide)
            return object;
        let message = new $root.AppDecide();
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };

    /**
     * Creates a plain object from an AppDecide message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AppDecide
     * @static
     * @param {AppDecide} message AppDecide
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AppDecide.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this AppDecide to JSON.
     * @function toJSON
     * @memberof AppDecide
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AppDecide.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return AppDecide;
})();

export const Message = $root.Message = (() => {

    /**
     * Properties of a Message.
     * @exports IMessage
     * @interface IMessage
     * @property {Message.Type|null} [type] Message type
     * @property {string|null} [messageUuid] Message messageUuid
     * @property {string|null} [abstractionId] Message abstractionId
     * @property {string|null} [systemId] Message systemId
     * @property {IAppRegistration|null} [appRegistration] Message appRegistration
     * @property {IAppPropose|null} [appPropose] Message appPropose
     * @property {IAppDecide|null} [appDecide] Message appDecide
     * @property {IBebBroadcast|null} [bebBroadcast] Message bebBroadcast
     * @property {IBebDeliver|null} [bebDeliver] Message bebDeliver
     * @property {IEcNack_|null} [ecNack_] Message ecNack_
     * @property {IEcNewEpoch_|null} [ecNewEpoch_] Message ecNewEpoch_
     * @property {IEcStartEpoch|null} [ecStartEpoch] Message ecStartEpoch
     * @property {IEldHeartbeat_|null} [eldHeartbeat_] Message eldHeartbeat_
     * @property {IEldRecovery|null} [eldRecovery] Message eldRecovery
     * @property {IEldTimeout|null} [eldTimeout] Message eldTimeout
     * @property {IEldTrust|null} [eldTrust] Message eldTrust
     * @property {IEpAbort|null} [epAbort] Message epAbort
     * @property {IEpAborted|null} [epAborted] Message epAborted
     * @property {IEpAccept_|null} [epAccept_] Message epAccept_
     * @property {IEpDecide|null} [epDecide] Message epDecide
     * @property {IEpDecided_|null} [epDecided_] Message epDecided_
     * @property {IEpInit|null} [epInit] Message epInit
     * @property {IEpPropose|null} [epPropose] Message epPropose
     * @property {IEpRead_|null} [epRead_] Message epRead_
     * @property {IEpState_|null} [epState_] Message epState_
     * @property {IEpWrite_|null} [epWrite_] Message epWrite_
     * @property {IPlDeliver|null} [plDeliver] Message plDeliver
     * @property {IPlSend|null} [plSend] Message plSend
     * @property {IUcDecide|null} [ucDecide] Message ucDecide
     * @property {IUcPropose|null} [ucPropose] Message ucPropose
     */

    /**
     * Constructs a new Message.
     * @exports Message
     * @classdesc Represents a Message.
     * @implements IMessage
     * @constructor
     * @param {IMessage=} [properties] Properties to set
     */
    function Message(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Message type.
     * @member {Message.Type} type
     * @memberof Message
     * @instance
     */
    Message.prototype.type = 0;

    /**
     * Message messageUuid.
     * @member {string} messageUuid
     * @memberof Message
     * @instance
     */
    Message.prototype.messageUuid = "";

    /**
     * Message abstractionId.
     * @member {string} abstractionId
     * @memberof Message
     * @instance
     */
    Message.prototype.abstractionId = "";

    /**
     * Message systemId.
     * @member {string} systemId
     * @memberof Message
     * @instance
     */
    Message.prototype.systemId = "";

    /**
     * Message appRegistration.
     * @member {IAppRegistration|null|undefined} appRegistration
     * @memberof Message
     * @instance
     */
    Message.prototype.appRegistration = null;

    /**
     * Message appPropose.
     * @member {IAppPropose|null|undefined} appPropose
     * @memberof Message
     * @instance
     */
    Message.prototype.appPropose = null;

    /**
     * Message appDecide.
     * @member {IAppDecide|null|undefined} appDecide
     * @memberof Message
     * @instance
     */
    Message.prototype.appDecide = null;

    /**
     * Message bebBroadcast.
     * @member {IBebBroadcast|null|undefined} bebBroadcast
     * @memberof Message
     * @instance
     */
    Message.prototype.bebBroadcast = null;

    /**
     * Message bebDeliver.
     * @member {IBebDeliver|null|undefined} bebDeliver
     * @memberof Message
     * @instance
     */
    Message.prototype.bebDeliver = null;

    /**
     * Message ecNack_.
     * @member {IEcNack_|null|undefined} ecNack_
     * @memberof Message
     * @instance
     */
    Message.prototype.ecNack_ = null;

    /**
     * Message ecNewEpoch_.
     * @member {IEcNewEpoch_|null|undefined} ecNewEpoch_
     * @memberof Message
     * @instance
     */
    Message.prototype.ecNewEpoch_ = null;

    /**
     * Message ecStartEpoch.
     * @member {IEcStartEpoch|null|undefined} ecStartEpoch
     * @memberof Message
     * @instance
     */
    Message.prototype.ecStartEpoch = null;

    /**
     * Message eldHeartbeat_.
     * @member {IEldHeartbeat_|null|undefined} eldHeartbeat_
     * @memberof Message
     * @instance
     */
    Message.prototype.eldHeartbeat_ = null;

    /**
     * Message eldRecovery.
     * @member {IEldRecovery|null|undefined} eldRecovery
     * @memberof Message
     * @instance
     */
    Message.prototype.eldRecovery = null;

    /**
     * Message eldTimeout.
     * @member {IEldTimeout|null|undefined} eldTimeout
     * @memberof Message
     * @instance
     */
    Message.prototype.eldTimeout = null;

    /**
     * Message eldTrust.
     * @member {IEldTrust|null|undefined} eldTrust
     * @memberof Message
     * @instance
     */
    Message.prototype.eldTrust = null;

    /**
     * Message epAbort.
     * @member {IEpAbort|null|undefined} epAbort
     * @memberof Message
     * @instance
     */
    Message.prototype.epAbort = null;

    /**
     * Message epAborted.
     * @member {IEpAborted|null|undefined} epAborted
     * @memberof Message
     * @instance
     */
    Message.prototype.epAborted = null;

    /**
     * Message epAccept_.
     * @member {IEpAccept_|null|undefined} epAccept_
     * @memberof Message
     * @instance
     */
    Message.prototype.epAccept_ = null;

    /**
     * Message epDecide.
     * @member {IEpDecide|null|undefined} epDecide
     * @memberof Message
     * @instance
     */
    Message.prototype.epDecide = null;

    /**
     * Message epDecided_.
     * @member {IEpDecided_|null|undefined} epDecided_
     * @memberof Message
     * @instance
     */
    Message.prototype.epDecided_ = null;

    /**
     * Message epInit.
     * @member {IEpInit|null|undefined} epInit
     * @memberof Message
     * @instance
     */
    Message.prototype.epInit = null;

    /**
     * Message epPropose.
     * @member {IEpPropose|null|undefined} epPropose
     * @memberof Message
     * @instance
     */
    Message.prototype.epPropose = null;

    /**
     * Message epRead_.
     * @member {IEpRead_|null|undefined} epRead_
     * @memberof Message
     * @instance
     */
    Message.prototype.epRead_ = null;

    /**
     * Message epState_.
     * @member {IEpState_|null|undefined} epState_
     * @memberof Message
     * @instance
     */
    Message.prototype.epState_ = null;

    /**
     * Message epWrite_.
     * @member {IEpWrite_|null|undefined} epWrite_
     * @memberof Message
     * @instance
     */
    Message.prototype.epWrite_ = null;

    /**
     * Message plDeliver.
     * @member {IPlDeliver|null|undefined} plDeliver
     * @memberof Message
     * @instance
     */
    Message.prototype.plDeliver = null;

    /**
     * Message plSend.
     * @member {IPlSend|null|undefined} plSend
     * @memberof Message
     * @instance
     */
    Message.prototype.plSend = null;

    /**
     * Message ucDecide.
     * @member {IUcDecide|null|undefined} ucDecide
     * @memberof Message
     * @instance
     */
    Message.prototype.ucDecide = null;

    /**
     * Message ucPropose.
     * @member {IUcPropose|null|undefined} ucPropose
     * @memberof Message
     * @instance
     */
    Message.prototype.ucPropose = null;

    /**
     * Creates a new Message instance using the specified properties.
     * @function create
     * @memberof Message
     * @static
     * @param {IMessage=} [properties] Properties to set
     * @returns {Message} Message instance
     */
    Message.create = function create(properties) {
        return new Message(properties);
    };

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @function encode
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.messageUuid != null && Object.hasOwnProperty.call(message, "messageUuid"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.messageUuid);
        if (message.abstractionId != null && Object.hasOwnProperty.call(message, "abstractionId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.abstractionId);
        if (message.systemId != null && Object.hasOwnProperty.call(message, "systemId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.systemId);
        if (message.appRegistration != null && Object.hasOwnProperty.call(message, "appRegistration"))
            $root.AppRegistration.encode(message.appRegistration, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.appPropose != null && Object.hasOwnProperty.call(message, "appPropose"))
            $root.AppPropose.encode(message.appPropose, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.appDecide != null && Object.hasOwnProperty.call(message, "appDecide"))
            $root.AppDecide.encode(message.appDecide, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.bebBroadcast != null && Object.hasOwnProperty.call(message, "bebBroadcast"))
            $root.BebBroadcast.encode(message.bebBroadcast, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.bebDeliver != null && Object.hasOwnProperty.call(message, "bebDeliver"))
            $root.BebDeliver.encode(message.bebDeliver, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.ecNack_ != null && Object.hasOwnProperty.call(message, "ecNack_"))
            $root.EcNack_.encode(message.ecNack_, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.ecNewEpoch_ != null && Object.hasOwnProperty.call(message, "ecNewEpoch_"))
            $root.EcNewEpoch_.encode(message.ecNewEpoch_, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.ecStartEpoch != null && Object.hasOwnProperty.call(message, "ecStartEpoch"))
            $root.EcStartEpoch.encode(message.ecStartEpoch, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.eldHeartbeat_ != null && Object.hasOwnProperty.call(message, "eldHeartbeat_"))
            $root.EldHeartbeat_.encode(message.eldHeartbeat_, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.eldRecovery != null && Object.hasOwnProperty.call(message, "eldRecovery"))
            $root.EldRecovery.encode(message.eldRecovery, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.eldTimeout != null && Object.hasOwnProperty.call(message, "eldTimeout"))
            $root.EldTimeout.encode(message.eldTimeout, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.eldTrust != null && Object.hasOwnProperty.call(message, "eldTrust"))
            $root.EldTrust.encode(message.eldTrust, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.epAbort != null && Object.hasOwnProperty.call(message, "epAbort"))
            $root.EpAbort.encode(message.epAbort, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.epAborted != null && Object.hasOwnProperty.call(message, "epAborted"))
            $root.EpAborted.encode(message.epAborted, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.epAccept_ != null && Object.hasOwnProperty.call(message, "epAccept_"))
            $root.EpAccept_.encode(message.epAccept_, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.epDecide != null && Object.hasOwnProperty.call(message, "epDecide"))
            $root.EpDecide.encode(message.epDecide, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.epDecided_ != null && Object.hasOwnProperty.call(message, "epDecided_"))
            $root.EpDecided_.encode(message.epDecided_, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.epInit != null && Object.hasOwnProperty.call(message, "epInit"))
            $root.EpInit.encode(message.epInit, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.epPropose != null && Object.hasOwnProperty.call(message, "epPropose"))
            $root.EpPropose.encode(message.epPropose, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        if (message.epRead_ != null && Object.hasOwnProperty.call(message, "epRead_"))
            $root.EpRead_.encode(message.epRead_, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        if (message.epState_ != null && Object.hasOwnProperty.call(message, "epState_"))
            $root.EpState_.encode(message.epState_, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.epWrite_ != null && Object.hasOwnProperty.call(message, "epWrite_"))
            $root.EpWrite_.encode(message.epWrite_, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
        if (message.plDeliver != null && Object.hasOwnProperty.call(message, "plDeliver"))
            $root.PlDeliver.encode(message.plDeliver, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
        if (message.plSend != null && Object.hasOwnProperty.call(message, "plSend"))
            $root.PlSend.encode(message.plSend, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
        if (message.ucDecide != null && Object.hasOwnProperty.call(message, "ucDecide"))
            $root.UcDecide.encode(message.ucDecide, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
        if (message.ucPropose != null && Object.hasOwnProperty.call(message, "ucPropose"))
            $root.UcPropose.encode(message.ucPropose, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Message
     * @static
     * @param {IMessage} message Message message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Message.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @function decode
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Message();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.type = reader.int32();
                break;
            case 2:
                message.messageUuid = reader.string();
                break;
            case 3:
                message.abstractionId = reader.string();
                break;
            case 4:
                message.systemId = reader.string();
                break;
            case 5:
                message.appRegistration = $root.AppRegistration.decode(reader, reader.uint32());
                break;
            case 6:
                message.appPropose = $root.AppPropose.decode(reader, reader.uint32());
                break;
            case 7:
                message.appDecide = $root.AppDecide.decode(reader, reader.uint32());
                break;
            case 10:
                message.bebBroadcast = $root.BebBroadcast.decode(reader, reader.uint32());
                break;
            case 11:
                message.bebDeliver = $root.BebDeliver.decode(reader, reader.uint32());
                break;
            case 12:
                message.ecNack_ = $root.EcNack_.decode(reader, reader.uint32());
                break;
            case 13:
                message.ecNewEpoch_ = $root.EcNewEpoch_.decode(reader, reader.uint32());
                break;
            case 14:
                message.ecStartEpoch = $root.EcStartEpoch.decode(reader, reader.uint32());
                break;
            case 15:
                message.eldHeartbeat_ = $root.EldHeartbeat_.decode(reader, reader.uint32());
                break;
            case 16:
                message.eldRecovery = $root.EldRecovery.decode(reader, reader.uint32());
                break;
            case 17:
                message.eldTimeout = $root.EldTimeout.decode(reader, reader.uint32());
                break;
            case 18:
                message.eldTrust = $root.EldTrust.decode(reader, reader.uint32());
                break;
            case 19:
                message.epAbort = $root.EpAbort.decode(reader, reader.uint32());
                break;
            case 20:
                message.epAborted = $root.EpAborted.decode(reader, reader.uint32());
                break;
            case 21:
                message.epAccept_ = $root.EpAccept_.decode(reader, reader.uint32());
                break;
            case 22:
                message.epDecide = $root.EpDecide.decode(reader, reader.uint32());
                break;
            case 23:
                message.epDecided_ = $root.EpDecided_.decode(reader, reader.uint32());
                break;
            case 24:
                message.epInit = $root.EpInit.decode(reader, reader.uint32());
                break;
            case 25:
                message.epPropose = $root.EpPropose.decode(reader, reader.uint32());
                break;
            case 26:
                message.epRead_ = $root.EpRead_.decode(reader, reader.uint32());
                break;
            case 27:
                message.epState_ = $root.EpState_.decode(reader, reader.uint32());
                break;
            case 28:
                message.epWrite_ = $root.EpWrite_.decode(reader, reader.uint32());
                break;
            case 29:
                message.plDeliver = $root.PlDeliver.decode(reader, reader.uint32());
                break;
            case 30:
                message.plSend = $root.PlSend.decode(reader, reader.uint32());
                break;
            case 31:
                message.ucDecide = $root.UcDecide.decode(reader, reader.uint32());
                break;
            case 32:
                message.ucPropose = $root.UcPropose.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Message
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Message} Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Message.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Message message.
     * @function verify
     * @memberof Message
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Message.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 5:
            case 6:
            case 7:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
                break;
            }
        if (message.messageUuid != null && message.hasOwnProperty("messageUuid"))
            if (!$util.isString(message.messageUuid))
                return "messageUuid: string expected";
        if (message.abstractionId != null && message.hasOwnProperty("abstractionId"))
            if (!$util.isString(message.abstractionId))
                return "abstractionId: string expected";
        if (message.systemId != null && message.hasOwnProperty("systemId"))
            if (!$util.isString(message.systemId))
                return "systemId: string expected";
        if (message.appRegistration != null && message.hasOwnProperty("appRegistration")) {
            let error = $root.AppRegistration.verify(message.appRegistration);
            if (error)
                return "appRegistration." + error;
        }
        if (message.appPropose != null && message.hasOwnProperty("appPropose")) {
            let error = $root.AppPropose.verify(message.appPropose);
            if (error)
                return "appPropose." + error;
        }
        if (message.appDecide != null && message.hasOwnProperty("appDecide")) {
            let error = $root.AppDecide.verify(message.appDecide);
            if (error)
                return "appDecide." + error;
        }
        if (message.bebBroadcast != null && message.hasOwnProperty("bebBroadcast")) {
            let error = $root.BebBroadcast.verify(message.bebBroadcast);
            if (error)
                return "bebBroadcast." + error;
        }
        if (message.bebDeliver != null && message.hasOwnProperty("bebDeliver")) {
            let error = $root.BebDeliver.verify(message.bebDeliver);
            if (error)
                return "bebDeliver." + error;
        }
        if (message.ecNack_ != null && message.hasOwnProperty("ecNack_")) {
            let error = $root.EcNack_.verify(message.ecNack_);
            if (error)
                return "ecNack_." + error;
        }
        if (message.ecNewEpoch_ != null && message.hasOwnProperty("ecNewEpoch_")) {
            let error = $root.EcNewEpoch_.verify(message.ecNewEpoch_);
            if (error)
                return "ecNewEpoch_." + error;
        }
        if (message.ecStartEpoch != null && message.hasOwnProperty("ecStartEpoch")) {
            let error = $root.EcStartEpoch.verify(message.ecStartEpoch);
            if (error)
                return "ecStartEpoch." + error;
        }
        if (message.eldHeartbeat_ != null && message.hasOwnProperty("eldHeartbeat_")) {
            let error = $root.EldHeartbeat_.verify(message.eldHeartbeat_);
            if (error)
                return "eldHeartbeat_." + error;
        }
        if (message.eldRecovery != null && message.hasOwnProperty("eldRecovery")) {
            let error = $root.EldRecovery.verify(message.eldRecovery);
            if (error)
                return "eldRecovery." + error;
        }
        if (message.eldTimeout != null && message.hasOwnProperty("eldTimeout")) {
            let error = $root.EldTimeout.verify(message.eldTimeout);
            if (error)
                return "eldTimeout." + error;
        }
        if (message.eldTrust != null && message.hasOwnProperty("eldTrust")) {
            let error = $root.EldTrust.verify(message.eldTrust);
            if (error)
                return "eldTrust." + error;
        }
        if (message.epAbort != null && message.hasOwnProperty("epAbort")) {
            let error = $root.EpAbort.verify(message.epAbort);
            if (error)
                return "epAbort." + error;
        }
        if (message.epAborted != null && message.hasOwnProperty("epAborted")) {
            let error = $root.EpAborted.verify(message.epAborted);
            if (error)
                return "epAborted." + error;
        }
        if (message.epAccept_ != null && message.hasOwnProperty("epAccept_")) {
            let error = $root.EpAccept_.verify(message.epAccept_);
            if (error)
                return "epAccept_." + error;
        }
        if (message.epDecide != null && message.hasOwnProperty("epDecide")) {
            let error = $root.EpDecide.verify(message.epDecide);
            if (error)
                return "epDecide." + error;
        }
        if (message.epDecided_ != null && message.hasOwnProperty("epDecided_")) {
            let error = $root.EpDecided_.verify(message.epDecided_);
            if (error)
                return "epDecided_." + error;
        }
        if (message.epInit != null && message.hasOwnProperty("epInit")) {
            let error = $root.EpInit.verify(message.epInit);
            if (error)
                return "epInit." + error;
        }
        if (message.epPropose != null && message.hasOwnProperty("epPropose")) {
            let error = $root.EpPropose.verify(message.epPropose);
            if (error)
                return "epPropose." + error;
        }
        if (message.epRead_ != null && message.hasOwnProperty("epRead_")) {
            let error = $root.EpRead_.verify(message.epRead_);
            if (error)
                return "epRead_." + error;
        }
        if (message.epState_ != null && message.hasOwnProperty("epState_")) {
            let error = $root.EpState_.verify(message.epState_);
            if (error)
                return "epState_." + error;
        }
        if (message.epWrite_ != null && message.hasOwnProperty("epWrite_")) {
            let error = $root.EpWrite_.verify(message.epWrite_);
            if (error)
                return "epWrite_." + error;
        }
        if (message.plDeliver != null && message.hasOwnProperty("plDeliver")) {
            let error = $root.PlDeliver.verify(message.plDeliver);
            if (error)
                return "plDeliver." + error;
        }
        if (message.plSend != null && message.hasOwnProperty("plSend")) {
            let error = $root.PlSend.verify(message.plSend);
            if (error)
                return "plSend." + error;
        }
        if (message.ucDecide != null && message.hasOwnProperty("ucDecide")) {
            let error = $root.UcDecide.verify(message.ucDecide);
            if (error)
                return "ucDecide." + error;
        }
        if (message.ucPropose != null && message.hasOwnProperty("ucPropose")) {
            let error = $root.UcPropose.verify(message.ucPropose);
            if (error)
                return "ucPropose." + error;
        }
        return null;
    };

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Message
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Message} Message
     */
    Message.fromObject = function fromObject(object) {
        if (object instanceof $root.Message)
            return object;
        let message = new $root.Message();
        switch (object.type) {
        case "DUMMY":
        case 0:
            message.type = 0;
            break;
        case "APP_REGISTRATION":
        case 5:
            message.type = 5;
            break;
        case "APP_PROPOSE":
        case 6:
            message.type = 6;
            break;
        case "APP_DECIDE":
        case 7:
            message.type = 7;
            break;
        case "BEB_BROADCAST":
        case 10:
            message.type = 10;
            break;
        case "BEB_DELIVER":
        case 11:
            message.type = 11;
            break;
        case "EC_NACK_":
        case 12:
            message.type = 12;
            break;
        case "EC_NEW_EPOCH_":
        case 13:
            message.type = 13;
            break;
        case "EC_START_EPOCH":
        case 14:
            message.type = 14;
            break;
        case "ELD_HEARTBEAT_":
        case 15:
            message.type = 15;
            break;
        case "ELD_RECOVERY":
        case 16:
            message.type = 16;
            break;
        case "ELD_TIMEOUT":
        case 17:
            message.type = 17;
            break;
        case "ELD_TRUST":
        case 18:
            message.type = 18;
            break;
        case "EP_ABORT":
        case 19:
            message.type = 19;
            break;
        case "EP_ABORTED":
        case 20:
            message.type = 20;
            break;
        case "EP_ACCEPT_":
        case 21:
            message.type = 21;
            break;
        case "EP_DECIDE":
        case 22:
            message.type = 22;
            break;
        case "EP_DECIDED_":
        case 23:
            message.type = 23;
            break;
        case "EP_INIT":
        case 24:
            message.type = 24;
            break;
        case "EP_PROPOSE":
        case 25:
            message.type = 25;
            break;
        case "EP_READ_":
        case 26:
            message.type = 26;
            break;
        case "EP_STATE_":
        case 27:
            message.type = 27;
            break;
        case "EP_WRITE_":
        case 28:
            message.type = 28;
            break;
        case "PL_DELIVER":
        case 29:
            message.type = 29;
            break;
        case "PL_SEND":
        case 30:
            message.type = 30;
            break;
        case "UC_DECIDE":
        case 31:
            message.type = 31;
            break;
        case "UC_PROPOSE":
        case 32:
            message.type = 32;
            break;
        }
        if (object.messageUuid != null)
            message.messageUuid = String(object.messageUuid);
        if (object.abstractionId != null)
            message.abstractionId = String(object.abstractionId);
        if (object.systemId != null)
            message.systemId = String(object.systemId);
        if (object.appRegistration != null) {
            if (typeof object.appRegistration !== "object")
                throw TypeError(".Message.appRegistration: object expected");
            message.appRegistration = $root.AppRegistration.fromObject(object.appRegistration);
        }
        if (object.appPropose != null) {
            if (typeof object.appPropose !== "object")
                throw TypeError(".Message.appPropose: object expected");
            message.appPropose = $root.AppPropose.fromObject(object.appPropose);
        }
        if (object.appDecide != null) {
            if (typeof object.appDecide !== "object")
                throw TypeError(".Message.appDecide: object expected");
            message.appDecide = $root.AppDecide.fromObject(object.appDecide);
        }
        if (object.bebBroadcast != null) {
            if (typeof object.bebBroadcast !== "object")
                throw TypeError(".Message.bebBroadcast: object expected");
            message.bebBroadcast = $root.BebBroadcast.fromObject(object.bebBroadcast);
        }
        if (object.bebDeliver != null) {
            if (typeof object.bebDeliver !== "object")
                throw TypeError(".Message.bebDeliver: object expected");
            message.bebDeliver = $root.BebDeliver.fromObject(object.bebDeliver);
        }
        if (object.ecNack_ != null) {
            if (typeof object.ecNack_ !== "object")
                throw TypeError(".Message.ecNack_: object expected");
            message.ecNack_ = $root.EcNack_.fromObject(object.ecNack_);
        }
        if (object.ecNewEpoch_ != null) {
            if (typeof object.ecNewEpoch_ !== "object")
                throw TypeError(".Message.ecNewEpoch_: object expected");
            message.ecNewEpoch_ = $root.EcNewEpoch_.fromObject(object.ecNewEpoch_);
        }
        if (object.ecStartEpoch != null) {
            if (typeof object.ecStartEpoch !== "object")
                throw TypeError(".Message.ecStartEpoch: object expected");
            message.ecStartEpoch = $root.EcStartEpoch.fromObject(object.ecStartEpoch);
        }
        if (object.eldHeartbeat_ != null) {
            if (typeof object.eldHeartbeat_ !== "object")
                throw TypeError(".Message.eldHeartbeat_: object expected");
            message.eldHeartbeat_ = $root.EldHeartbeat_.fromObject(object.eldHeartbeat_);
        }
        if (object.eldRecovery != null) {
            if (typeof object.eldRecovery !== "object")
                throw TypeError(".Message.eldRecovery: object expected");
            message.eldRecovery = $root.EldRecovery.fromObject(object.eldRecovery);
        }
        if (object.eldTimeout != null) {
            if (typeof object.eldTimeout !== "object")
                throw TypeError(".Message.eldTimeout: object expected");
            message.eldTimeout = $root.EldTimeout.fromObject(object.eldTimeout);
        }
        if (object.eldTrust != null) {
            if (typeof object.eldTrust !== "object")
                throw TypeError(".Message.eldTrust: object expected");
            message.eldTrust = $root.EldTrust.fromObject(object.eldTrust);
        }
        if (object.epAbort != null) {
            if (typeof object.epAbort !== "object")
                throw TypeError(".Message.epAbort: object expected");
            message.epAbort = $root.EpAbort.fromObject(object.epAbort);
        }
        if (object.epAborted != null) {
            if (typeof object.epAborted !== "object")
                throw TypeError(".Message.epAborted: object expected");
            message.epAborted = $root.EpAborted.fromObject(object.epAborted);
        }
        if (object.epAccept_ != null) {
            if (typeof object.epAccept_ !== "object")
                throw TypeError(".Message.epAccept_: object expected");
            message.epAccept_ = $root.EpAccept_.fromObject(object.epAccept_);
        }
        if (object.epDecide != null) {
            if (typeof object.epDecide !== "object")
                throw TypeError(".Message.epDecide: object expected");
            message.epDecide = $root.EpDecide.fromObject(object.epDecide);
        }
        if (object.epDecided_ != null) {
            if (typeof object.epDecided_ !== "object")
                throw TypeError(".Message.epDecided_: object expected");
            message.epDecided_ = $root.EpDecided_.fromObject(object.epDecided_);
        }
        if (object.epInit != null) {
            if (typeof object.epInit !== "object")
                throw TypeError(".Message.epInit: object expected");
            message.epInit = $root.EpInit.fromObject(object.epInit);
        }
        if (object.epPropose != null) {
            if (typeof object.epPropose !== "object")
                throw TypeError(".Message.epPropose: object expected");
            message.epPropose = $root.EpPropose.fromObject(object.epPropose);
        }
        if (object.epRead_ != null) {
            if (typeof object.epRead_ !== "object")
                throw TypeError(".Message.epRead_: object expected");
            message.epRead_ = $root.EpRead_.fromObject(object.epRead_);
        }
        if (object.epState_ != null) {
            if (typeof object.epState_ !== "object")
                throw TypeError(".Message.epState_: object expected");
            message.epState_ = $root.EpState_.fromObject(object.epState_);
        }
        if (object.epWrite_ != null) {
            if (typeof object.epWrite_ !== "object")
                throw TypeError(".Message.epWrite_: object expected");
            message.epWrite_ = $root.EpWrite_.fromObject(object.epWrite_);
        }
        if (object.plDeliver != null) {
            if (typeof object.plDeliver !== "object")
                throw TypeError(".Message.plDeliver: object expected");
            message.plDeliver = $root.PlDeliver.fromObject(object.plDeliver);
        }
        if (object.plSend != null) {
            if (typeof object.plSend !== "object")
                throw TypeError(".Message.plSend: object expected");
            message.plSend = $root.PlSend.fromObject(object.plSend);
        }
        if (object.ucDecide != null) {
            if (typeof object.ucDecide !== "object")
                throw TypeError(".Message.ucDecide: object expected");
            message.ucDecide = $root.UcDecide.fromObject(object.ucDecide);
        }
        if (object.ucPropose != null) {
            if (typeof object.ucPropose !== "object")
                throw TypeError(".Message.ucPropose: object expected");
            message.ucPropose = $root.UcPropose.fromObject(object.ucPropose);
        }
        return message;
    };

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Message
     * @static
     * @param {Message} message Message
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Message.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "DUMMY" : 0;
            object.messageUuid = "";
            object.abstractionId = "";
            object.systemId = "";
            object.appRegistration = null;
            object.appPropose = null;
            object.appDecide = null;
            object.bebBroadcast = null;
            object.bebDeliver = null;
            object.ecNack_ = null;
            object.ecNewEpoch_ = null;
            object.ecStartEpoch = null;
            object.eldHeartbeat_ = null;
            object.eldRecovery = null;
            object.eldTimeout = null;
            object.eldTrust = null;
            object.epAbort = null;
            object.epAborted = null;
            object.epAccept_ = null;
            object.epDecide = null;
            object.epDecided_ = null;
            object.epInit = null;
            object.epPropose = null;
            object.epRead_ = null;
            object.epState_ = null;
            object.epWrite_ = null;
            object.plDeliver = null;
            object.plSend = null;
            object.ucDecide = null;
            object.ucPropose = null;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.Message.Type[message.type] : message.type;
        if (message.messageUuid != null && message.hasOwnProperty("messageUuid"))
            object.messageUuid = message.messageUuid;
        if (message.abstractionId != null && message.hasOwnProperty("abstractionId"))
            object.abstractionId = message.abstractionId;
        if (message.systemId != null && message.hasOwnProperty("systemId"))
            object.systemId = message.systemId;
        if (message.appRegistration != null && message.hasOwnProperty("appRegistration"))
            object.appRegistration = $root.AppRegistration.toObject(message.appRegistration, options);
        if (message.appPropose != null && message.hasOwnProperty("appPropose"))
            object.appPropose = $root.AppPropose.toObject(message.appPropose, options);
        if (message.appDecide != null && message.hasOwnProperty("appDecide"))
            object.appDecide = $root.AppDecide.toObject(message.appDecide, options);
        if (message.bebBroadcast != null && message.hasOwnProperty("bebBroadcast"))
            object.bebBroadcast = $root.BebBroadcast.toObject(message.bebBroadcast, options);
        if (message.bebDeliver != null && message.hasOwnProperty("bebDeliver"))
            object.bebDeliver = $root.BebDeliver.toObject(message.bebDeliver, options);
        if (message.ecNack_ != null && message.hasOwnProperty("ecNack_"))
            object.ecNack_ = $root.EcNack_.toObject(message.ecNack_, options);
        if (message.ecNewEpoch_ != null && message.hasOwnProperty("ecNewEpoch_"))
            object.ecNewEpoch_ = $root.EcNewEpoch_.toObject(message.ecNewEpoch_, options);
        if (message.ecStartEpoch != null && message.hasOwnProperty("ecStartEpoch"))
            object.ecStartEpoch = $root.EcStartEpoch.toObject(message.ecStartEpoch, options);
        if (message.eldHeartbeat_ != null && message.hasOwnProperty("eldHeartbeat_"))
            object.eldHeartbeat_ = $root.EldHeartbeat_.toObject(message.eldHeartbeat_, options);
        if (message.eldRecovery != null && message.hasOwnProperty("eldRecovery"))
            object.eldRecovery = $root.EldRecovery.toObject(message.eldRecovery, options);
        if (message.eldTimeout != null && message.hasOwnProperty("eldTimeout"))
            object.eldTimeout = $root.EldTimeout.toObject(message.eldTimeout, options);
        if (message.eldTrust != null && message.hasOwnProperty("eldTrust"))
            object.eldTrust = $root.EldTrust.toObject(message.eldTrust, options);
        if (message.epAbort != null && message.hasOwnProperty("epAbort"))
            object.epAbort = $root.EpAbort.toObject(message.epAbort, options);
        if (message.epAborted != null && message.hasOwnProperty("epAborted"))
            object.epAborted = $root.EpAborted.toObject(message.epAborted, options);
        if (message.epAccept_ != null && message.hasOwnProperty("epAccept_"))
            object.epAccept_ = $root.EpAccept_.toObject(message.epAccept_, options);
        if (message.epDecide != null && message.hasOwnProperty("epDecide"))
            object.epDecide = $root.EpDecide.toObject(message.epDecide, options);
        if (message.epDecided_ != null && message.hasOwnProperty("epDecided_"))
            object.epDecided_ = $root.EpDecided_.toObject(message.epDecided_, options);
        if (message.epInit != null && message.hasOwnProperty("epInit"))
            object.epInit = $root.EpInit.toObject(message.epInit, options);
        if (message.epPropose != null && message.hasOwnProperty("epPropose"))
            object.epPropose = $root.EpPropose.toObject(message.epPropose, options);
        if (message.epRead_ != null && message.hasOwnProperty("epRead_"))
            object.epRead_ = $root.EpRead_.toObject(message.epRead_, options);
        if (message.epState_ != null && message.hasOwnProperty("epState_"))
            object.epState_ = $root.EpState_.toObject(message.epState_, options);
        if (message.epWrite_ != null && message.hasOwnProperty("epWrite_"))
            object.epWrite_ = $root.EpWrite_.toObject(message.epWrite_, options);
        if (message.plDeliver != null && message.hasOwnProperty("plDeliver"))
            object.plDeliver = $root.PlDeliver.toObject(message.plDeliver, options);
        if (message.plSend != null && message.hasOwnProperty("plSend"))
            object.plSend = $root.PlSend.toObject(message.plSend, options);
        if (message.ucDecide != null && message.hasOwnProperty("ucDecide"))
            object.ucDecide = $root.UcDecide.toObject(message.ucDecide, options);
        if (message.ucPropose != null && message.hasOwnProperty("ucPropose"))
            object.ucPropose = $root.UcPropose.toObject(message.ucPropose, options);
        return object;
    };

    /**
     * Converts this Message to JSON.
     * @function toJSON
     * @memberof Message
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Message.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Type enum.
     * @name Message.Type
     * @enum {number}
     * @property {number} DUMMY=0 DUMMY value
     * @property {number} APP_REGISTRATION=5 APP_REGISTRATION value
     * @property {number} APP_PROPOSE=6 APP_PROPOSE value
     * @property {number} APP_DECIDE=7 APP_DECIDE value
     * @property {number} BEB_BROADCAST=10 BEB_BROADCAST value
     * @property {number} BEB_DELIVER=11 BEB_DELIVER value
     * @property {number} EC_NACK_=12 EC_NACK_ value
     * @property {number} EC_NEW_EPOCH_=13 EC_NEW_EPOCH_ value
     * @property {number} EC_START_EPOCH=14 EC_START_EPOCH value
     * @property {number} ELD_HEARTBEAT_=15 ELD_HEARTBEAT_ value
     * @property {number} ELD_RECOVERY=16 ELD_RECOVERY value
     * @property {number} ELD_TIMEOUT=17 ELD_TIMEOUT value
     * @property {number} ELD_TRUST=18 ELD_TRUST value
     * @property {number} EP_ABORT=19 EP_ABORT value
     * @property {number} EP_ABORTED=20 EP_ABORTED value
     * @property {number} EP_ACCEPT_=21 EP_ACCEPT_ value
     * @property {number} EP_DECIDE=22 EP_DECIDE value
     * @property {number} EP_DECIDED_=23 EP_DECIDED_ value
     * @property {number} EP_INIT=24 EP_INIT value
     * @property {number} EP_PROPOSE=25 EP_PROPOSE value
     * @property {number} EP_READ_=26 EP_READ_ value
     * @property {number} EP_STATE_=27 EP_STATE_ value
     * @property {number} EP_WRITE_=28 EP_WRITE_ value
     * @property {number} PL_DELIVER=29 PL_DELIVER value
     * @property {number} PL_SEND=30 PL_SEND value
     * @property {number} UC_DECIDE=31 UC_DECIDE value
     * @property {number} UC_PROPOSE=32 UC_PROPOSE value
     */
    Message.Type = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DUMMY"] = 0;
        values[valuesById[5] = "APP_REGISTRATION"] = 5;
        values[valuesById[6] = "APP_PROPOSE"] = 6;
        values[valuesById[7] = "APP_DECIDE"] = 7;
        values[valuesById[10] = "BEB_BROADCAST"] = 10;
        values[valuesById[11] = "BEB_DELIVER"] = 11;
        values[valuesById[12] = "EC_NACK_"] = 12;
        values[valuesById[13] = "EC_NEW_EPOCH_"] = 13;
        values[valuesById[14] = "EC_START_EPOCH"] = 14;
        values[valuesById[15] = "ELD_HEARTBEAT_"] = 15;
        values[valuesById[16] = "ELD_RECOVERY"] = 16;
        values[valuesById[17] = "ELD_TIMEOUT"] = 17;
        values[valuesById[18] = "ELD_TRUST"] = 18;
        values[valuesById[19] = "EP_ABORT"] = 19;
        values[valuesById[20] = "EP_ABORTED"] = 20;
        values[valuesById[21] = "EP_ACCEPT_"] = 21;
        values[valuesById[22] = "EP_DECIDE"] = 22;
        values[valuesById[23] = "EP_DECIDED_"] = 23;
        values[valuesById[24] = "EP_INIT"] = 24;
        values[valuesById[25] = "EP_PROPOSE"] = 25;
        values[valuesById[26] = "EP_READ_"] = 26;
        values[valuesById[27] = "EP_STATE_"] = 27;
        values[valuesById[28] = "EP_WRITE_"] = 28;
        values[valuesById[29] = "PL_DELIVER"] = 29;
        values[valuesById[30] = "PL_SEND"] = 30;
        values[valuesById[31] = "UC_DECIDE"] = 31;
        values[valuesById[32] = "UC_PROPOSE"] = 32;
        return values;
    })();

    return Message;
})();

export { $root as default };
