import * as $protobuf from "protobufjs";
/** Properties of a ProcessId. */
export interface IProcessId {

    /** ProcessId host */
    host?: (string|null);

    /** ProcessId port */
    port?: (number|null);

    /** ProcessId owner */
    owner?: (string|null);

    /** ProcessId index */
    index?: (number|null);

    /** ProcessId rank */
    rank?: (number|null);
}

/** Represents a ProcessId. */
export class ProcessId implements IProcessId {

    /**
     * Constructs a new ProcessId.
     * @param [properties] Properties to set
     */
    constructor(properties?: IProcessId);

    /** ProcessId host. */
    public host: string;

    /** ProcessId port. */
    public port: number;

    /** ProcessId owner. */
    public owner: string;

    /** ProcessId index. */
    public index: number;

    /** ProcessId rank. */
    public rank: number;

    /**
     * Creates a new ProcessId instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ProcessId instance
     */
    public static create(properties?: IProcessId): ProcessId;

    /**
     * Encodes the specified ProcessId message. Does not implicitly {@link ProcessId.verify|verify} messages.
     * @param message ProcessId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IProcessId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ProcessId message, length delimited. Does not implicitly {@link ProcessId.verify|verify} messages.
     * @param message ProcessId message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IProcessId, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ProcessId message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ProcessId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ProcessId;

    /**
     * Decodes a ProcessId message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ProcessId
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ProcessId;

    /**
     * Verifies a ProcessId message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ProcessId message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ProcessId
     */
    public static fromObject(object: { [k: string]: any }): ProcessId;

    /**
     * Creates a plain object from a ProcessId message. Also converts values to other types if specified.
     * @param message ProcessId
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ProcessId, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ProcessId to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UcPropose. */
export interface IUcPropose {

    /** UcPropose value */
    value?: (number|null);
}

/** Represents an UcPropose. */
export class UcPropose implements IUcPropose {

    /**
     * Constructs a new UcPropose.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUcPropose);

    /** UcPropose value. */
    public value: number;

    /**
     * Creates a new UcPropose instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UcPropose instance
     */
    public static create(properties?: IUcPropose): UcPropose;

    /**
     * Encodes the specified UcPropose message. Does not implicitly {@link UcPropose.verify|verify} messages.
     * @param message UcPropose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUcPropose, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UcPropose message, length delimited. Does not implicitly {@link UcPropose.verify|verify} messages.
     * @param message UcPropose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUcPropose, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UcPropose message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UcPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UcPropose;

    /**
     * Decodes an UcPropose message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UcPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UcPropose;

    /**
     * Verifies an UcPropose message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UcPropose message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UcPropose
     */
    public static fromObject(object: { [k: string]: any }): UcPropose;

    /**
     * Creates a plain object from an UcPropose message. Also converts values to other types if specified.
     * @param message UcPropose
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UcPropose, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UcPropose to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EcStartEpoch. */
export interface IEcStartEpoch {

    /** EcStartEpoch newTimestamp */
    newTimestamp?: (number|null);

    /** EcStartEpoch newLeader */
    newLeader?: (IProcessId|null);
}

/** Represents an EcStartEpoch. */
export class EcStartEpoch implements IEcStartEpoch {

    /**
     * Constructs a new EcStartEpoch.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEcStartEpoch);

    /** EcStartEpoch newTimestamp. */
    public newTimestamp: number;

    /** EcStartEpoch newLeader. */
    public newLeader?: (IProcessId|null);

    /**
     * Creates a new EcStartEpoch instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EcStartEpoch instance
     */
    public static create(properties?: IEcStartEpoch): EcStartEpoch;

    /**
     * Encodes the specified EcStartEpoch message. Does not implicitly {@link EcStartEpoch.verify|verify} messages.
     * @param message EcStartEpoch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEcStartEpoch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EcStartEpoch message, length delimited. Does not implicitly {@link EcStartEpoch.verify|verify} messages.
     * @param message EcStartEpoch message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEcStartEpoch, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EcStartEpoch message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EcStartEpoch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EcStartEpoch;

    /**
     * Decodes an EcStartEpoch message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EcStartEpoch
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EcStartEpoch;

    /**
     * Verifies an EcStartEpoch message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EcStartEpoch message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EcStartEpoch
     */
    public static fromObject(object: { [k: string]: any }): EcStartEpoch;

    /**
     * Creates a plain object from an EcStartEpoch message. Also converts values to other types if specified.
     * @param message EcStartEpoch
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EcStartEpoch, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EcStartEpoch to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EpAbort. */
export interface IEpAbort {
}

/** Represents an EpAbort. */
export class EpAbort implements IEpAbort {

    /**
     * Constructs a new EpAbort.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEpAbort);

    /**
     * Creates a new EpAbort instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EpAbort instance
     */
    public static create(properties?: IEpAbort): EpAbort;

    /**
     * Encodes the specified EpAbort message. Does not implicitly {@link EpAbort.verify|verify} messages.
     * @param message EpAbort message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEpAbort, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EpAbort message, length delimited. Does not implicitly {@link EpAbort.verify|verify} messages.
     * @param message EpAbort message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEpAbort, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EpAbort message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EpAbort
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EpAbort;

    /**
     * Decodes an EpAbort message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EpAbort
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EpAbort;

    /**
     * Verifies an EpAbort message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EpAbort message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EpAbort
     */
    public static fromObject(object: { [k: string]: any }): EpAbort;

    /**
     * Creates a plain object from an EpAbort message. Also converts values to other types if specified.
     * @param message EpAbort
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EpAbort, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EpAbort to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EpInit. */
export interface IEpInit {

    /** EpInit valueTimestamp */
    valueTimestamp?: (number|null);

    /** EpInit value */
    value?: (number|null);
}

/** Represents an EpInit. */
export class EpInit implements IEpInit {

    /**
     * Constructs a new EpInit.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEpInit);

    /** EpInit valueTimestamp. */
    public valueTimestamp: number;

    /** EpInit value. */
    public value: number;

    /**
     * Creates a new EpInit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EpInit instance
     */
    public static create(properties?: IEpInit): EpInit;

    /**
     * Encodes the specified EpInit message. Does not implicitly {@link EpInit.verify|verify} messages.
     * @param message EpInit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEpInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EpInit message, length delimited. Does not implicitly {@link EpInit.verify|verify} messages.
     * @param message EpInit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEpInit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EpInit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EpInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EpInit;

    /**
     * Decodes an EpInit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EpInit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EpInit;

    /**
     * Verifies an EpInit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EpInit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EpInit
     */
    public static fromObject(object: { [k: string]: any }): EpInit;

    /**
     * Creates a plain object from an EpInit message. Also converts values to other types if specified.
     * @param message EpInit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EpInit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EpInit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EpAborted. */
export interface IEpAborted {

    /** EpAborted valueTimestamp */
    valueTimestamp?: (number|null);

    /** EpAborted value */
    value?: (number|null);
}

/** Represents an EpAborted. */
export class EpAborted implements IEpAborted {

    /**
     * Constructs a new EpAborted.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEpAborted);

    /** EpAborted valueTimestamp. */
    public valueTimestamp: number;

    /** EpAborted value. */
    public value: number;

    /**
     * Creates a new EpAborted instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EpAborted instance
     */
    public static create(properties?: IEpAborted): EpAborted;

    /**
     * Encodes the specified EpAborted message. Does not implicitly {@link EpAborted.verify|verify} messages.
     * @param message EpAborted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEpAborted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EpAborted message, length delimited. Does not implicitly {@link EpAborted.verify|verify} messages.
     * @param message EpAborted message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEpAborted, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EpAborted message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EpAborted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EpAborted;

    /**
     * Decodes an EpAborted message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EpAborted
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EpAborted;

    /**
     * Verifies an EpAborted message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EpAborted message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EpAborted
     */
    public static fromObject(object: { [k: string]: any }): EpAborted;

    /**
     * Creates a plain object from an EpAborted message. Also converts values to other types if specified.
     * @param message EpAborted
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EpAborted, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EpAborted to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EpPropose. */
export interface IEpPropose {

    /** EpPropose value */
    value?: (number|null);
}

/** Represents an EpPropose. */
export class EpPropose implements IEpPropose {

    /**
     * Constructs a new EpPropose.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEpPropose);

    /** EpPropose value. */
    public value: number;

    /**
     * Creates a new EpPropose instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EpPropose instance
     */
    public static create(properties?: IEpPropose): EpPropose;

    /**
     * Encodes the specified EpPropose message. Does not implicitly {@link EpPropose.verify|verify} messages.
     * @param message EpPropose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEpPropose, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EpPropose message, length delimited. Does not implicitly {@link EpPropose.verify|verify} messages.
     * @param message EpPropose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEpPropose, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EpPropose message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EpPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EpPropose;

    /**
     * Decodes an EpPropose message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EpPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EpPropose;

    /**
     * Verifies an EpPropose message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EpPropose message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EpPropose
     */
    public static fromObject(object: { [k: string]: any }): EpPropose;

    /**
     * Creates a plain object from an EpPropose message. Also converts values to other types if specified.
     * @param message EpPropose
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EpPropose, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EpPropose to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EpDecide. */
export interface IEpDecide {

    /** EpDecide value */
    value?: (number|null);
}

/** Represents an EpDecide. */
export class EpDecide implements IEpDecide {

    /**
     * Constructs a new EpDecide.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEpDecide);

    /** EpDecide value. */
    public value: number;

    /**
     * Creates a new EpDecide instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EpDecide instance
     */
    public static create(properties?: IEpDecide): EpDecide;

    /**
     * Encodes the specified EpDecide message. Does not implicitly {@link EpDecide.verify|verify} messages.
     * @param message EpDecide message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEpDecide, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EpDecide message, length delimited. Does not implicitly {@link EpDecide.verify|verify} messages.
     * @param message EpDecide message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEpDecide, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EpDecide message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EpDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EpDecide;

    /**
     * Decodes an EpDecide message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EpDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EpDecide;

    /**
     * Verifies an EpDecide message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EpDecide message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EpDecide
     */
    public static fromObject(object: { [k: string]: any }): EpDecide;

    /**
     * Creates a plain object from an EpDecide message. Also converts values to other types if specified.
     * @param message EpDecide
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EpDecide, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EpDecide to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an UcDecide. */
export interface IUcDecide {

    /** UcDecide value */
    value?: (number|null);
}

/** Represents an UcDecide. */
export class UcDecide implements IUcDecide {

    /**
     * Constructs a new UcDecide.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUcDecide);

    /** UcDecide value. */
    public value: number;

    /**
     * Creates a new UcDecide instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UcDecide instance
     */
    public static create(properties?: IUcDecide): UcDecide;

    /**
     * Encodes the specified UcDecide message. Does not implicitly {@link UcDecide.verify|verify} messages.
     * @param message UcDecide message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUcDecide, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UcDecide message, length delimited. Does not implicitly {@link UcDecide.verify|verify} messages.
     * @param message UcDecide message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUcDecide, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UcDecide message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UcDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UcDecide;

    /**
     * Decodes an UcDecide message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UcDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UcDecide;

    /**
     * Verifies an UcDecide message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an UcDecide message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UcDecide
     */
    public static fromObject(object: { [k: string]: any }): UcDecide;

    /**
     * Creates a plain object from an UcDecide message. Also converts values to other types if specified.
     * @param message UcDecide
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UcDecide, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UcDecide to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EpRead_. */
export interface IEpRead_ {
}

/** Represents an EpRead_. */
export class EpRead_ implements IEpRead_ {

    /**
     * Constructs a new EpRead_.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEpRead_);

    /**
     * Creates a new EpRead_ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EpRead_ instance
     */
    public static create(properties?: IEpRead_): EpRead_;

    /**
     * Encodes the specified EpRead_ message. Does not implicitly {@link EpRead_.verify|verify} messages.
     * @param message EpRead_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEpRead_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EpRead_ message, length delimited. Does not implicitly {@link EpRead_.verify|verify} messages.
     * @param message EpRead_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEpRead_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EpRead_ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EpRead_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EpRead_;

    /**
     * Decodes an EpRead_ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EpRead_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EpRead_;

    /**
     * Verifies an EpRead_ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EpRead_ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EpRead_
     */
    public static fromObject(object: { [k: string]: any }): EpRead_;

    /**
     * Creates a plain object from an EpRead_ message. Also converts values to other types if specified.
     * @param message EpRead_
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EpRead_, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EpRead_ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EpState_. */
export interface IEpState_ {

    /** EpState_ valueTimestamp */
    valueTimestamp?: (number|null);

    /** EpState_ value */
    value?: (number|null);
}

/** Represents an EpState_. */
export class EpState_ implements IEpState_ {

    /**
     * Constructs a new EpState_.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEpState_);

    /** EpState_ valueTimestamp. */
    public valueTimestamp: number;

    /** EpState_ value. */
    public value: number;

    /**
     * Creates a new EpState_ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EpState_ instance
     */
    public static create(properties?: IEpState_): EpState_;

    /**
     * Encodes the specified EpState_ message. Does not implicitly {@link EpState_.verify|verify} messages.
     * @param message EpState_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEpState_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EpState_ message, length delimited. Does not implicitly {@link EpState_.verify|verify} messages.
     * @param message EpState_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEpState_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EpState_ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EpState_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EpState_;

    /**
     * Decodes an EpState_ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EpState_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EpState_;

    /**
     * Verifies an EpState_ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EpState_ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EpState_
     */
    public static fromObject(object: { [k: string]: any }): EpState_;

    /**
     * Creates a plain object from an EpState_ message. Also converts values to other types if specified.
     * @param message EpState_
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EpState_, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EpState_ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EpWrite_. */
export interface IEpWrite_ {

    /** EpWrite_ value */
    value?: (number|null);
}

/** Represents an EpWrite_. */
export class EpWrite_ implements IEpWrite_ {

    /**
     * Constructs a new EpWrite_.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEpWrite_);

    /** EpWrite_ value. */
    public value: number;

    /**
     * Creates a new EpWrite_ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EpWrite_ instance
     */
    public static create(properties?: IEpWrite_): EpWrite_;

    /**
     * Encodes the specified EpWrite_ message. Does not implicitly {@link EpWrite_.verify|verify} messages.
     * @param message EpWrite_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEpWrite_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EpWrite_ message, length delimited. Does not implicitly {@link EpWrite_.verify|verify} messages.
     * @param message EpWrite_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEpWrite_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EpWrite_ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EpWrite_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EpWrite_;

    /**
     * Decodes an EpWrite_ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EpWrite_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EpWrite_;

    /**
     * Verifies an EpWrite_ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EpWrite_ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EpWrite_
     */
    public static fromObject(object: { [k: string]: any }): EpWrite_;

    /**
     * Creates a plain object from an EpWrite_ message. Also converts values to other types if specified.
     * @param message EpWrite_
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EpWrite_, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EpWrite_ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EpAccept_. */
export interface IEpAccept_ {
}

/** Represents an EpAccept_. */
export class EpAccept_ implements IEpAccept_ {

    /**
     * Constructs a new EpAccept_.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEpAccept_);

    /**
     * Creates a new EpAccept_ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EpAccept_ instance
     */
    public static create(properties?: IEpAccept_): EpAccept_;

    /**
     * Encodes the specified EpAccept_ message. Does not implicitly {@link EpAccept_.verify|verify} messages.
     * @param message EpAccept_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEpAccept_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EpAccept_ message, length delimited. Does not implicitly {@link EpAccept_.verify|verify} messages.
     * @param message EpAccept_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEpAccept_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EpAccept_ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EpAccept_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EpAccept_;

    /**
     * Decodes an EpAccept_ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EpAccept_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EpAccept_;

    /**
     * Verifies an EpAccept_ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EpAccept_ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EpAccept_
     */
    public static fromObject(object: { [k: string]: any }): EpAccept_;

    /**
     * Creates a plain object from an EpAccept_ message. Also converts values to other types if specified.
     * @param message EpAccept_
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EpAccept_, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EpAccept_ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EpDecided_. */
export interface IEpDecided_ {

    /** EpDecided_ value */
    value?: (number|null);
}

/** Represents an EpDecided_. */
export class EpDecided_ implements IEpDecided_ {

    /**
     * Constructs a new EpDecided_.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEpDecided_);

    /** EpDecided_ value. */
    public value: number;

    /**
     * Creates a new EpDecided_ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EpDecided_ instance
     */
    public static create(properties?: IEpDecided_): EpDecided_;

    /**
     * Encodes the specified EpDecided_ message. Does not implicitly {@link EpDecided_.verify|verify} messages.
     * @param message EpDecided_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEpDecided_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EpDecided_ message, length delimited. Does not implicitly {@link EpDecided_.verify|verify} messages.
     * @param message EpDecided_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEpDecided_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EpDecided_ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EpDecided_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EpDecided_;

    /**
     * Decodes an EpDecided_ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EpDecided_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EpDecided_;

    /**
     * Verifies an EpDecided_ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EpDecided_ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EpDecided_
     */
    public static fromObject(object: { [k: string]: any }): EpDecided_;

    /**
     * Creates a plain object from an EpDecided_ message. Also converts values to other types if specified.
     * @param message EpDecided_
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EpDecided_, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EpDecided_ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EcNewEpoch_. */
export interface IEcNewEpoch_ {

    /** EcNewEpoch_ timestamp */
    timestamp?: (number|null);
}

/** Represents an EcNewEpoch_. */
export class EcNewEpoch_ implements IEcNewEpoch_ {

    /**
     * Constructs a new EcNewEpoch_.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEcNewEpoch_);

    /** EcNewEpoch_ timestamp. */
    public timestamp: number;

    /**
     * Creates a new EcNewEpoch_ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EcNewEpoch_ instance
     */
    public static create(properties?: IEcNewEpoch_): EcNewEpoch_;

    /**
     * Encodes the specified EcNewEpoch_ message. Does not implicitly {@link EcNewEpoch_.verify|verify} messages.
     * @param message EcNewEpoch_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEcNewEpoch_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EcNewEpoch_ message, length delimited. Does not implicitly {@link EcNewEpoch_.verify|verify} messages.
     * @param message EcNewEpoch_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEcNewEpoch_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EcNewEpoch_ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EcNewEpoch_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EcNewEpoch_;

    /**
     * Decodes an EcNewEpoch_ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EcNewEpoch_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EcNewEpoch_;

    /**
     * Verifies an EcNewEpoch_ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EcNewEpoch_ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EcNewEpoch_
     */
    public static fromObject(object: { [k: string]: any }): EcNewEpoch_;

    /**
     * Creates a plain object from an EcNewEpoch_ message. Also converts values to other types if specified.
     * @param message EcNewEpoch_
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EcNewEpoch_, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EcNewEpoch_ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EcNack_. */
export interface IEcNack_ {
}

/** Represents an EcNack_. */
export class EcNack_ implements IEcNack_ {

    /**
     * Constructs a new EcNack_.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEcNack_);

    /**
     * Creates a new EcNack_ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EcNack_ instance
     */
    public static create(properties?: IEcNack_): EcNack_;

    /**
     * Encodes the specified EcNack_ message. Does not implicitly {@link EcNack_.verify|verify} messages.
     * @param message EcNack_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEcNack_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EcNack_ message, length delimited. Does not implicitly {@link EcNack_.verify|verify} messages.
     * @param message EcNack_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEcNack_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EcNack_ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EcNack_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EcNack_;

    /**
     * Decodes an EcNack_ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EcNack_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EcNack_;

    /**
     * Verifies an EcNack_ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EcNack_ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EcNack_
     */
    public static fromObject(object: { [k: string]: any }): EcNack_;

    /**
     * Creates a plain object from an EcNack_ message. Also converts values to other types if specified.
     * @param message EcNack_
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EcNack_, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EcNack_ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BebBroadcast. */
export interface IBebBroadcast {

    /** BebBroadcast message */
    message?: (IMessage|null);
}

/** Represents a BebBroadcast. */
export class BebBroadcast implements IBebBroadcast {

    /**
     * Constructs a new BebBroadcast.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBebBroadcast);

    /** BebBroadcast message. */
    public message?: (IMessage|null);

    /**
     * Creates a new BebBroadcast instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BebBroadcast instance
     */
    public static create(properties?: IBebBroadcast): BebBroadcast;

    /**
     * Encodes the specified BebBroadcast message. Does not implicitly {@link BebBroadcast.verify|verify} messages.
     * @param message BebBroadcast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBebBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BebBroadcast message, length delimited. Does not implicitly {@link BebBroadcast.verify|verify} messages.
     * @param message BebBroadcast message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBebBroadcast, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BebBroadcast message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BebBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BebBroadcast;

    /**
     * Decodes a BebBroadcast message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BebBroadcast
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BebBroadcast;

    /**
     * Verifies a BebBroadcast message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BebBroadcast message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BebBroadcast
     */
    public static fromObject(object: { [k: string]: any }): BebBroadcast;

    /**
     * Creates a plain object from a BebBroadcast message. Also converts values to other types if specified.
     * @param message BebBroadcast
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BebBroadcast, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BebBroadcast to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a BebDeliver. */
export interface IBebDeliver {

    /** BebDeliver message */
    message?: (IMessage|null);

    /** BebDeliver sender */
    sender?: (IProcessId|null);
}

/** Represents a BebDeliver. */
export class BebDeliver implements IBebDeliver {

    /**
     * Constructs a new BebDeliver.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBebDeliver);

    /** BebDeliver message. */
    public message?: (IMessage|null);

    /** BebDeliver sender. */
    public sender?: (IProcessId|null);

    /**
     * Creates a new BebDeliver instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BebDeliver instance
     */
    public static create(properties?: IBebDeliver): BebDeliver;

    /**
     * Encodes the specified BebDeliver message. Does not implicitly {@link BebDeliver.verify|verify} messages.
     * @param message BebDeliver message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBebDeliver, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BebDeliver message, length delimited. Does not implicitly {@link BebDeliver.verify|verify} messages.
     * @param message BebDeliver message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBebDeliver, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BebDeliver message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BebDeliver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BebDeliver;

    /**
     * Decodes a BebDeliver message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BebDeliver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BebDeliver;

    /**
     * Verifies a BebDeliver message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BebDeliver message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BebDeliver
     */
    public static fromObject(object: { [k: string]: any }): BebDeliver;

    /**
     * Creates a plain object from a BebDeliver message. Also converts values to other types if specified.
     * @param message BebDeliver
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BebDeliver, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BebDeliver to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EldRecovery. */
export interface IEldRecovery {
}

/** Represents an EldRecovery. */
export class EldRecovery implements IEldRecovery {

    /**
     * Constructs a new EldRecovery.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEldRecovery);

    /**
     * Creates a new EldRecovery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EldRecovery instance
     */
    public static create(properties?: IEldRecovery): EldRecovery;

    /**
     * Encodes the specified EldRecovery message. Does not implicitly {@link EldRecovery.verify|verify} messages.
     * @param message EldRecovery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEldRecovery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EldRecovery message, length delimited. Does not implicitly {@link EldRecovery.verify|verify} messages.
     * @param message EldRecovery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEldRecovery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EldRecovery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EldRecovery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EldRecovery;

    /**
     * Decodes an EldRecovery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EldRecovery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EldRecovery;

    /**
     * Verifies an EldRecovery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EldRecovery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EldRecovery
     */
    public static fromObject(object: { [k: string]: any }): EldRecovery;

    /**
     * Creates a plain object from an EldRecovery message. Also converts values to other types if specified.
     * @param message EldRecovery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EldRecovery, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EldRecovery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EldTimeout. */
export interface IEldTimeout {
}

/** Represents an EldTimeout. */
export class EldTimeout implements IEldTimeout {

    /**
     * Constructs a new EldTimeout.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEldTimeout);

    /**
     * Creates a new EldTimeout instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EldTimeout instance
     */
    public static create(properties?: IEldTimeout): EldTimeout;

    /**
     * Encodes the specified EldTimeout message. Does not implicitly {@link EldTimeout.verify|verify} messages.
     * @param message EldTimeout message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEldTimeout, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EldTimeout message, length delimited. Does not implicitly {@link EldTimeout.verify|verify} messages.
     * @param message EldTimeout message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEldTimeout, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EldTimeout message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EldTimeout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EldTimeout;

    /**
     * Decodes an EldTimeout message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EldTimeout
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EldTimeout;

    /**
     * Verifies an EldTimeout message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EldTimeout message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EldTimeout
     */
    public static fromObject(object: { [k: string]: any }): EldTimeout;

    /**
     * Creates a plain object from an EldTimeout message. Also converts values to other types if specified.
     * @param message EldTimeout
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EldTimeout, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EldTimeout to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EldTrust. */
export interface IEldTrust {

    /** EldTrust processId */
    processId?: (IProcessId|null);
}

/** Represents an EldTrust. */
export class EldTrust implements IEldTrust {

    /**
     * Constructs a new EldTrust.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEldTrust);

    /** EldTrust processId. */
    public processId?: (IProcessId|null);

    /**
     * Creates a new EldTrust instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EldTrust instance
     */
    public static create(properties?: IEldTrust): EldTrust;

    /**
     * Encodes the specified EldTrust message. Does not implicitly {@link EldTrust.verify|verify} messages.
     * @param message EldTrust message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEldTrust, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EldTrust message, length delimited. Does not implicitly {@link EldTrust.verify|verify} messages.
     * @param message EldTrust message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEldTrust, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EldTrust message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EldTrust
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EldTrust;

    /**
     * Decodes an EldTrust message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EldTrust
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EldTrust;

    /**
     * Verifies an EldTrust message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EldTrust message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EldTrust
     */
    public static fromObject(object: { [k: string]: any }): EldTrust;

    /**
     * Creates a plain object from an EldTrust message. Also converts values to other types if specified.
     * @param message EldTrust
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EldTrust, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EldTrust to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an EldHeartbeat_. */
export interface IEldHeartbeat_ {

    /** EldHeartbeat_ epoch */
    epoch?: (number|null);
}

/** Represents an EldHeartbeat_. */
export class EldHeartbeat_ implements IEldHeartbeat_ {

    /**
     * Constructs a new EldHeartbeat_.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEldHeartbeat_);

    /** EldHeartbeat_ epoch. */
    public epoch: number;

    /**
     * Creates a new EldHeartbeat_ instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EldHeartbeat_ instance
     */
    public static create(properties?: IEldHeartbeat_): EldHeartbeat_;

    /**
     * Encodes the specified EldHeartbeat_ message. Does not implicitly {@link EldHeartbeat_.verify|verify} messages.
     * @param message EldHeartbeat_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEldHeartbeat_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EldHeartbeat_ message, length delimited. Does not implicitly {@link EldHeartbeat_.verify|verify} messages.
     * @param message EldHeartbeat_ message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEldHeartbeat_, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EldHeartbeat_ message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EldHeartbeat_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EldHeartbeat_;

    /**
     * Decodes an EldHeartbeat_ message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EldHeartbeat_
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EldHeartbeat_;

    /**
     * Verifies an EldHeartbeat_ message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an EldHeartbeat_ message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EldHeartbeat_
     */
    public static fromObject(object: { [k: string]: any }): EldHeartbeat_;

    /**
     * Creates a plain object from an EldHeartbeat_ message. Also converts values to other types if specified.
     * @param message EldHeartbeat_
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EldHeartbeat_, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EldHeartbeat_ to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlSend. */
export interface IPlSend {

    /** PlSend destination */
    destination?: (IProcessId|null);

    /** PlSend message */
    message?: (IMessage|null);
}

/** Represents a PlSend. */
export class PlSend implements IPlSend {

    /**
     * Constructs a new PlSend.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlSend);

    /** PlSend destination. */
    public destination?: (IProcessId|null);

    /** PlSend message. */
    public message?: (IMessage|null);

    /**
     * Creates a new PlSend instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlSend instance
     */
    public static create(properties?: IPlSend): PlSend;

    /**
     * Encodes the specified PlSend message. Does not implicitly {@link PlSend.verify|verify} messages.
     * @param message PlSend message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlSend, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlSend message, length delimited. Does not implicitly {@link PlSend.verify|verify} messages.
     * @param message PlSend message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlSend, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlSend message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlSend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlSend;

    /**
     * Decodes a PlSend message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlSend
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlSend;

    /**
     * Verifies a PlSend message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlSend message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlSend
     */
    public static fromObject(object: { [k: string]: any }): PlSend;

    /**
     * Creates a plain object from a PlSend message. Also converts values to other types if specified.
     * @param message PlSend
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlSend, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlSend to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlDeliver. */
export interface IPlDeliver {

    /** PlDeliver sender */
    sender?: (IProcessId|null);

    /** PlDeliver message */
    message?: (IMessage|null);
}

/** Represents a PlDeliver. */
export class PlDeliver implements IPlDeliver {

    /**
     * Constructs a new PlDeliver.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlDeliver);

    /** PlDeliver sender. */
    public sender?: (IProcessId|null);

    /** PlDeliver message. */
    public message?: (IMessage|null);

    /**
     * Creates a new PlDeliver instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlDeliver instance
     */
    public static create(properties?: IPlDeliver): PlDeliver;

    /**
     * Encodes the specified PlDeliver message. Does not implicitly {@link PlDeliver.verify|verify} messages.
     * @param message PlDeliver message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlDeliver, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlDeliver message, length delimited. Does not implicitly {@link PlDeliver.verify|verify} messages.
     * @param message PlDeliver message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlDeliver, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlDeliver message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlDeliver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlDeliver;

    /**
     * Decodes a PlDeliver message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlDeliver
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlDeliver;

    /**
     * Verifies a PlDeliver message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlDeliver message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlDeliver
     */
    public static fromObject(object: { [k: string]: any }): PlDeliver;

    /**
     * Creates a plain object from a PlDeliver message. Also converts values to other types if specified.
     * @param message PlDeliver
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlDeliver, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlDeliver to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NetworkMessage. */
export interface INetworkMessage {

    /** NetworkMessage rendezvousPort */
    rendezvousPort?: (number|null);

    /** NetworkMessage message */
    message?: (IMessage|null);
}

/** Represents a NetworkMessage. */
export class NetworkMessage implements INetworkMessage {

    /**
     * Constructs a new NetworkMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: INetworkMessage);

    /** NetworkMessage rendezvousPort. */
    public rendezvousPort: number;

    /** NetworkMessage message. */
    public message?: (IMessage|null);

    /**
     * Creates a new NetworkMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NetworkMessage instance
     */
    public static create(properties?: INetworkMessage): NetworkMessage;

    /**
     * Encodes the specified NetworkMessage message. Does not implicitly {@link NetworkMessage.verify|verify} messages.
     * @param message NetworkMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INetworkMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NetworkMessage message, length delimited. Does not implicitly {@link NetworkMessage.verify|verify} messages.
     * @param message NetworkMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INetworkMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NetworkMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NetworkMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NetworkMessage;

    /**
     * Decodes a NetworkMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NetworkMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NetworkMessage;

    /**
     * Verifies a NetworkMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NetworkMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NetworkMessage
     */
    public static fromObject(object: { [k: string]: any }): NetworkMessage;

    /**
     * Creates a plain object from a NetworkMessage message. Also converts values to other types if specified.
     * @param message NetworkMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NetworkMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NetworkMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AppRegistration. */
export interface IAppRegistration {

    /** AppRegistration owner */
    owner?: (string|null);

    /** AppRegistration index */
    index?: (number|null);

    /** AppRegistration port */
    port?: (number|null);
}

/** Represents an AppRegistration. */
export class AppRegistration implements IAppRegistration {

    /**
     * Constructs a new AppRegistration.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAppRegistration);

    /** AppRegistration owner. */
    public owner: string;

    /** AppRegistration index. */
    public index: number;

    /** AppRegistration port. */
    public port: number;

    /**
     * Creates a new AppRegistration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AppRegistration instance
     */
    public static create(properties?: IAppRegistration): AppRegistration;

    /**
     * Encodes the specified AppRegistration message. Does not implicitly {@link AppRegistration.verify|verify} messages.
     * @param message AppRegistration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAppRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AppRegistration message, length delimited. Does not implicitly {@link AppRegistration.verify|verify} messages.
     * @param message AppRegistration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAppRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AppRegistration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AppRegistration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppRegistration;

    /**
     * Decodes an AppRegistration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AppRegistration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppRegistration;

    /**
     * Verifies an AppRegistration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AppRegistration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AppRegistration
     */
    public static fromObject(object: { [k: string]: any }): AppRegistration;

    /**
     * Creates a plain object from an AppRegistration message. Also converts values to other types if specified.
     * @param message AppRegistration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AppRegistration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AppRegistration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AppPropose. */
export interface IAppPropose {

    /** AppPropose value */
    value?: (number|null);

    /** AppPropose systemId */
    systemId?: (string|null);

    /** AppPropose processes */
    processes?: (IProcessId[]|null);
}

/** Represents an AppPropose. */
export class AppPropose implements IAppPropose {

    /**
     * Constructs a new AppPropose.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAppPropose);

    /** AppPropose value. */
    public value: number;

    /** AppPropose systemId. */
    public systemId: string;

    /** AppPropose processes. */
    public processes: IProcessId[];

    /**
     * Creates a new AppPropose instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AppPropose instance
     */
    public static create(properties?: IAppPropose): AppPropose;

    /**
     * Encodes the specified AppPropose message. Does not implicitly {@link AppPropose.verify|verify} messages.
     * @param message AppPropose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAppPropose, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AppPropose message, length delimited. Does not implicitly {@link AppPropose.verify|verify} messages.
     * @param message AppPropose message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAppPropose, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AppPropose message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AppPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppPropose;

    /**
     * Decodes an AppPropose message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AppPropose
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppPropose;

    /**
     * Verifies an AppPropose message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AppPropose message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AppPropose
     */
    public static fromObject(object: { [k: string]: any }): AppPropose;

    /**
     * Creates a plain object from an AppPropose message. Also converts values to other types if specified.
     * @param message AppPropose
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AppPropose, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AppPropose to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AppDecide. */
export interface IAppDecide {

    /** AppDecide value */
    value?: (number|null);
}

/** Represents an AppDecide. */
export class AppDecide implements IAppDecide {

    /**
     * Constructs a new AppDecide.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAppDecide);

    /** AppDecide value. */
    public value: number;

    /**
     * Creates a new AppDecide instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AppDecide instance
     */
    public static create(properties?: IAppDecide): AppDecide;

    /**
     * Encodes the specified AppDecide message. Does not implicitly {@link AppDecide.verify|verify} messages.
     * @param message AppDecide message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAppDecide, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AppDecide message, length delimited. Does not implicitly {@link AppDecide.verify|verify} messages.
     * @param message AppDecide message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAppDecide, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AppDecide message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AppDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AppDecide;

    /**
     * Decodes an AppDecide message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AppDecide
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AppDecide;

    /**
     * Verifies an AppDecide message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an AppDecide message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AppDecide
     */
    public static fromObject(object: { [k: string]: any }): AppDecide;

    /**
     * Creates a plain object from an AppDecide message. Also converts values to other types if specified.
     * @param message AppDecide
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AppDecide, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AppDecide to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Message. */
export interface IMessage {

    /** Message type */
    type?: (Message.Type|null);

    /** Message messageUuid */
    messageUuid?: (string|null);

    /** Message abstractionId */
    abstractionId?: (string|null);

    /** Message systemId */
    systemId?: (string|null);

    /** Message appRegistration */
    appRegistration?: (IAppRegistration|null);

    /** Message appPropose */
    appPropose?: (IAppPropose|null);

    /** Message appDecide */
    appDecide?: (IAppDecide|null);

    /** Message bebBroadcast */
    bebBroadcast?: (IBebBroadcast|null);

    /** Message bebDeliver */
    bebDeliver?: (IBebDeliver|null);

    /** Message ecNack_ */
    ecNack_?: (IEcNack_|null);

    /** Message ecNewEpoch_ */
    ecNewEpoch_?: (IEcNewEpoch_|null);

    /** Message ecStartEpoch */
    ecStartEpoch?: (IEcStartEpoch|null);

    /** Message eldHeartbeat_ */
    eldHeartbeat_?: (IEldHeartbeat_|null);

    /** Message eldRecovery */
    eldRecovery?: (IEldRecovery|null);

    /** Message eldTimeout */
    eldTimeout?: (IEldTimeout|null);

    /** Message eldTrust */
    eldTrust?: (IEldTrust|null);

    /** Message epAbort */
    epAbort?: (IEpAbort|null);

    /** Message epAborted */
    epAborted?: (IEpAborted|null);

    /** Message epAccept_ */
    epAccept_?: (IEpAccept_|null);

    /** Message epDecide */
    epDecide?: (IEpDecide|null);

    /** Message epDecided_ */
    epDecided_?: (IEpDecided_|null);

    /** Message epInit */
    epInit?: (IEpInit|null);

    /** Message epPropose */
    epPropose?: (IEpPropose|null);

    /** Message epRead_ */
    epRead_?: (IEpRead_|null);

    /** Message epState_ */
    epState_?: (IEpState_|null);

    /** Message epWrite_ */
    epWrite_?: (IEpWrite_|null);

    /** Message plDeliver */
    plDeliver?: (IPlDeliver|null);

    /** Message plSend */
    plSend?: (IPlSend|null);

    /** Message ucDecide */
    ucDecide?: (IUcDecide|null);

    /** Message ucPropose */
    ucPropose?: (IUcPropose|null);
}

/** Represents a Message. */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message type. */
    public type: Message.Type;

    /** Message messageUuid. */
    public messageUuid: string;

    /** Message abstractionId. */
    public abstractionId: string;

    /** Message systemId. */
    public systemId: string;

    /** Message appRegistration. */
    public appRegistration?: (IAppRegistration|null);

    /** Message appPropose. */
    public appPropose?: (IAppPropose|null);

    /** Message appDecide. */
    public appDecide?: (IAppDecide|null);

    /** Message bebBroadcast. */
    public bebBroadcast?: (IBebBroadcast|null);

    /** Message bebDeliver. */
    public bebDeliver?: (IBebDeliver|null);

    /** Message ecNack_. */
    public ecNack_?: (IEcNack_|null);

    /** Message ecNewEpoch_. */
    public ecNewEpoch_?: (IEcNewEpoch_|null);

    /** Message ecStartEpoch. */
    public ecStartEpoch?: (IEcStartEpoch|null);

    /** Message eldHeartbeat_. */
    public eldHeartbeat_?: (IEldHeartbeat_|null);

    /** Message eldRecovery. */
    public eldRecovery?: (IEldRecovery|null);

    /** Message eldTimeout. */
    public eldTimeout?: (IEldTimeout|null);

    /** Message eldTrust. */
    public eldTrust?: (IEldTrust|null);

    /** Message epAbort. */
    public epAbort?: (IEpAbort|null);

    /** Message epAborted. */
    public epAborted?: (IEpAborted|null);

    /** Message epAccept_. */
    public epAccept_?: (IEpAccept_|null);

    /** Message epDecide. */
    public epDecide?: (IEpDecide|null);

    /** Message epDecided_. */
    public epDecided_?: (IEpDecided_|null);

    /** Message epInit. */
    public epInit?: (IEpInit|null);

    /** Message epPropose. */
    public epPropose?: (IEpPropose|null);

    /** Message epRead_. */
    public epRead_?: (IEpRead_|null);

    /** Message epState_. */
    public epState_?: (IEpState_|null);

    /** Message epWrite_. */
    public epWrite_?: (IEpWrite_|null);

    /** Message plDeliver. */
    public plDeliver?: (IPlDeliver|null);

    /** Message plSend. */
    public plSend?: (IPlSend|null);

    /** Message ucDecide. */
    public ucDecide?: (IUcDecide|null);

    /** Message ucPropose. */
    public ucPropose?: (IUcPropose|null);

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Message {

    /** Type enum. */
    enum Type {
        DUMMY = 0,
        APP_REGISTRATION = 5,
        APP_PROPOSE = 6,
        APP_DECIDE = 7,
        BEB_BROADCAST = 10,
        BEB_DELIVER = 11,
        EC_NACK_ = 12,
        EC_NEW_EPOCH_ = 13,
        EC_START_EPOCH = 14,
        ELD_HEARTBEAT_ = 15,
        ELD_RECOVERY = 16,
        ELD_TIMEOUT = 17,
        ELD_TRUST = 18,
        EP_ABORT = 19,
        EP_ABORTED = 20,
        EP_ACCEPT_ = 21,
        EP_DECIDE = 22,
        EP_DECIDED_ = 23,
        EP_INIT = 24,
        EP_PROPOSE = 25,
        EP_READ_ = 26,
        EP_STATE_ = 27,
        EP_WRITE_ = 28,
        PL_DELIVER = 29,
        PL_SEND = 30,
        UC_DECIDE = 31,
        UC_PROPOSE = 32
    }
}
