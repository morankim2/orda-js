import * as Long from "long";

import * as $protobuf from "protobufjs";
/** Properties of a Client. */
export interface IClient {

    /** Client CUID */
    CUID?: (Uint8Array|null);

    /** Client alias */
    alias?: (string|null);

    /** Client collection */
    collection?: (string|null);

    /** Client syncType */
    syncType?: (SyncType|null);
}

/** Represents a Client. */
export class Client implements IClient {

    /**
     * Constructs a new Client.
     * @param [properties] Properties to set
     */
    constructor(properties?: IClient);

    /** Client CUID. */
    public CUID: Uint8Array;

    /** Client alias. */
    public alias: string;

    /** Client collection. */
    public collection: string;

    /** Client syncType. */
    public syncType: SyncType;

    /**
     * Creates a new Client instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Client instance
     */
    public static create(properties?: IClient): Client;

    /**
     * Encodes the specified Client message. Does not implicitly {@link Client.verify|verify} messages.
     * @param message Client message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Client message, length delimited. Does not implicitly {@link Client.verify|verify} messages.
     * @param message Client message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IClient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Client message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Client
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Client;

    /**
     * Decodes a Client message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Client
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Client;

    /**
     * Verifies a Client message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Client message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Client
     */
    public static fromObject(object: { [k: string]: any }): Client;

    /**
     * Creates a plain object from a Client message. Also converts values to other types if specified.
     * @param message Client
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Client, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Client to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** SyncType enum. */
export enum SyncType {
    LOCAL_ONLY = 0,
    MANUALLY = 1,
    NOTIFIABLE = 2
}

/** Properties of a Timestamp. */
export interface ITimestamp {

    /** Timestamp era */
    era?: (number|null);

    /** Timestamp lamport */
    lamport?: (number|Long|null);

    /** Timestamp CUID */
    CUID?: (Uint8Array|null);

    /** Timestamp delimiter */
    delimiter?: (number|null);
}

/** Represents a Timestamp. */
export class Timestamp implements ITimestamp {

    /**
     * Constructs a new Timestamp.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITimestamp);

    /** Timestamp era. */
    public era: number;

    /** Timestamp lamport. */
    public lamport: (number|Long);

    /** Timestamp CUID. */
    public CUID: Uint8Array;

    /** Timestamp delimiter. */
    public delimiter: number;

    /**
     * Creates a new Timestamp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Timestamp instance
     */
    public static create(properties?: ITimestamp): Timestamp;

    /**
     * Encodes the specified Timestamp message. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @param message Timestamp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @param message Timestamp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Timestamp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Timestamp;

    /**
     * Decodes a Timestamp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Timestamp;

    /**
     * Verifies a Timestamp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Timestamp
     */
    public static fromObject(object: { [k: string]: any }): Timestamp;

    /**
     * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
     * @param message Timestamp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Timestamp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an OperationID. */
export interface IOperationID {

    /** OperationID era */
    era?: (number|null);

    /** OperationID lamport */
    lamport?: (number|Long|null);

    /** OperationID CUID */
    CUID?: (Uint8Array|null);

    /** OperationID seq */
    seq?: (number|Long|null);
}

/** Represents an OperationID. */
export class OperationID implements IOperationID {

    /**
     * Constructs a new OperationID.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOperationID);

    /** OperationID era. */
    public era: number;

    /** OperationID lamport. */
    public lamport: (number|Long);

    /** OperationID CUID. */
    public CUID: Uint8Array;

    /** OperationID seq. */
    public seq: (number|Long);

    /**
     * Creates a new OperationID instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OperationID instance
     */
    public static create(properties?: IOperationID): OperationID;

    /**
     * Encodes the specified OperationID message. Does not implicitly {@link OperationID.verify|verify} messages.
     * @param message OperationID message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOperationID, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified OperationID message, length delimited. Does not implicitly {@link OperationID.verify|verify} messages.
     * @param message OperationID message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOperationID, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an OperationID message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OperationID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): OperationID;

    /**
     * Decodes an OperationID message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OperationID
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): OperationID;

    /**
     * Verifies an OperationID message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an OperationID message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OperationID
     */
    public static fromObject(object: { [k: string]: any }): OperationID;

    /**
     * Creates a plain object from an OperationID message. Also converts values to other types if specified.
     * @param message OperationID
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: OperationID, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this OperationID to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Operation. */
export interface IOperation {

    /** Operation ID */
    ID?: (IOperationID|null);

    /** Operation opType */
    opType?: (TypeOfOperation|null);

    /** Operation body */
    body?: (Uint8Array|null);
}

/** Represents an Operation. */
export class Operation implements IOperation {

    /**
     * Constructs a new Operation.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOperation);

    /** Operation ID. */
    public ID?: (IOperationID|null);

    /** Operation opType. */
    public opType: TypeOfOperation;

    /** Operation body. */
    public body: Uint8Array;

    /**
     * Creates a new Operation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Operation instance
     */
    public static create(properties?: IOperation): Operation;

    /**
     * Encodes the specified Operation message. Does not implicitly {@link Operation.verify|verify} messages.
     * @param message Operation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Operation message, length delimited. Does not implicitly {@link Operation.verify|verify} messages.
     * @param message Operation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Operation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Operation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Operation;

    /**
     * Decodes an Operation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Operation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Operation;

    /**
     * Verifies an Operation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Operation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Operation
     */
    public static fromObject(object: { [k: string]: any }): Operation;

    /**
     * Creates a plain object from an Operation message. Also converts values to other types if specified.
     * @param message Operation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Operation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** TypeOfOperation enum. */
export enum TypeOfOperation {
    SNAPSHOT = 0,
    DELETE = 2,
    ERROR = 3,
    TRANSACTION = 5,
    COUNTER_INCREASE = 11,
    HASH_MAP_PUT = 21,
    HASH_MAP_REMOVE = 22,
    LIST_INSERT = 31,
    LIST_DELETE = 32,
    LIST_UPDATE = 33,
    DOCUMENT_PUT_OBJ = 41,
    DOCUMENT_DEL_OBJ = 42,
    DOCUMENT_INS_ARR = 43,
    DOCUMENT_DEL_ARR = 44,
    DOCUMENT_UPD_ARR = 45
}

/** TypeOfDatatype enum. */
export enum TypeOfDatatype {
    COUNTER = 0,
    HASH_MAP = 1,
    LIST = 2,
    DOCUMENT = 3
}

/** StateOfDatatype enum. */
export enum StateOfDatatype {
    DUE_TO_CREATE = 0,
    DUE_TO_SUBSCRIBE = 1,
    DUE_TO_SUBSCRIBE_CREATE = 2,
    SUBSCRIBED = 4,
    DUE_TO_UNSUBSCRIBE = 5,
    UNSUBSCRIBED = 6,
    DELETED = 7
}

/** Properties of a PushPullPack. */
export interface IPushPullPack {

    /** PushPullPack DUID */
    DUID?: (Uint8Array|null);

    /** PushPullPack key */
    key?: (string|null);

    /** PushPullPack option */
    option?: (number|null);

    /** PushPullPack checkPoint */
    checkPoint?: (ICheckPoint|null);

    /** PushPullPack era */
    era?: (number|null);

    /** PushPullPack type */
    type?: (number|null);

    /** PushPullPack operations */
    operations?: (IOperation[]|null);
}

/** Represents a PushPullPack. */
export class PushPullPack implements IPushPullPack {

    /**
     * Constructs a new PushPullPack.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPushPullPack);

    /** PushPullPack DUID. */
    public DUID: Uint8Array;

    /** PushPullPack key. */
    public key: string;

    /** PushPullPack option. */
    public option: number;

    /** PushPullPack checkPoint. */
    public checkPoint?: (ICheckPoint|null);

    /** PushPullPack era. */
    public era: number;

    /** PushPullPack type. */
    public type: number;

    /** PushPullPack operations. */
    public operations: IOperation[];

    /**
     * Creates a new PushPullPack instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PushPullPack instance
     */
    public static create(properties?: IPushPullPack): PushPullPack;

    /**
     * Encodes the specified PushPullPack message. Does not implicitly {@link PushPullPack.verify|verify} messages.
     * @param message PushPullPack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPushPullPack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PushPullPack message, length delimited. Does not implicitly {@link PushPullPack.verify|verify} messages.
     * @param message PushPullPack message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPushPullPack, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PushPullPack message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PushPullPack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PushPullPack;

    /**
     * Decodes a PushPullPack message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PushPullPack
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PushPullPack;

    /**
     * Verifies a PushPullPack message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PushPullPack message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PushPullPack
     */
    public static fromObject(object: { [k: string]: any }): PushPullPack;

    /**
     * Creates a plain object from a PushPullPack message. Also converts values to other types if specified.
     * @param message PushPullPack
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PushPullPack, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PushPullPack to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CheckPoint. */
export interface ICheckPoint {

    /** CheckPoint sseq */
    sseq?: (number|Long|null);

    /** CheckPoint cseq */
    cseq?: (number|Long|null);
}

/** Represents a CheckPoint. */
export class CheckPoint implements ICheckPoint {

    /**
     * Constructs a new CheckPoint.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICheckPoint);

    /** CheckPoint sseq. */
    public sseq: (number|Long);

    /** CheckPoint cseq. */
    public cseq: (number|Long);

    /**
     * Creates a new CheckPoint instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CheckPoint instance
     */
    public static create(properties?: ICheckPoint): CheckPoint;

    /**
     * Encodes the specified CheckPoint message. Does not implicitly {@link CheckPoint.verify|verify} messages.
     * @param message CheckPoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICheckPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CheckPoint message, length delimited. Does not implicitly {@link CheckPoint.verify|verify} messages.
     * @param message CheckPoint message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICheckPoint, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CheckPoint message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CheckPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CheckPoint;

    /**
     * Decodes a CheckPoint message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CheckPoint
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CheckPoint;

    /**
     * Verifies a CheckPoint message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CheckPoint message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CheckPoint
     */
    public static fromObject(object: { [k: string]: any }): CheckPoint;

    /**
     * Creates a plain object from a CheckPoint message. Also converts values to other types if specified.
     * @param message CheckPoint
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CheckPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CheckPoint to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a NotificationPushPull. */
export interface INotificationPushPull {

    /** NotificationPushPull CUID */
    CUID?: (string|null);

    /** NotificationPushPull DUID */
    DUID?: (string|null);

    /** NotificationPushPull sseq */
    sseq?: (number|Long|null);
}

/** Represents a NotificationPushPull. */
export class NotificationPushPull implements INotificationPushPull {

    /**
     * Constructs a new NotificationPushPull.
     * @param [properties] Properties to set
     */
    constructor(properties?: INotificationPushPull);

    /** NotificationPushPull CUID. */
    public CUID: string;

    /** NotificationPushPull DUID. */
    public DUID: string;

    /** NotificationPushPull sseq. */
    public sseq: (number|Long);

    /**
     * Creates a new NotificationPushPull instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NotificationPushPull instance
     */
    public static create(properties?: INotificationPushPull): NotificationPushPull;

    /**
     * Encodes the specified NotificationPushPull message. Does not implicitly {@link NotificationPushPull.verify|verify} messages.
     * @param message NotificationPushPull message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INotificationPushPull, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NotificationPushPull message, length delimited. Does not implicitly {@link NotificationPushPull.verify|verify} messages.
     * @param message NotificationPushPull message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INotificationPushPull, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NotificationPushPull message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NotificationPushPull
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NotificationPushPull;

    /**
     * Decodes a NotificationPushPull message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NotificationPushPull
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NotificationPushPull;

    /**
     * Verifies a NotificationPushPull message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NotificationPushPull message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NotificationPushPull
     */
    public static fromObject(object: { [k: string]: any }): NotificationPushPull;

    /**
     * Creates a plain object from a NotificationPushPull message. Also converts values to other types if specified.
     * @param message NotificationPushPull
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NotificationPushPull, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NotificationPushPull to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a DatatypeMeta. */
export interface IDatatypeMeta {

    /** DatatypeMeta key */
    key?: (string|null);

    /** DatatypeMeta DUID */
    DUID?: (Uint8Array|null);

    /** DatatypeMeta opID */
    opID?: (IOperationID|null);

    /** DatatypeMeta typeOf */
    typeOf?: (TypeOfDatatype|null);

    /** DatatypeMeta state */
    state?: (StateOfDatatype|null);
}

/** Represents a DatatypeMeta. */
export class DatatypeMeta implements IDatatypeMeta {

    /**
     * Constructs a new DatatypeMeta.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDatatypeMeta);

    /** DatatypeMeta key. */
    public key: string;

    /** DatatypeMeta DUID. */
    public DUID: Uint8Array;

    /** DatatypeMeta opID. */
    public opID?: (IOperationID|null);

    /** DatatypeMeta typeOf. */
    public typeOf: TypeOfDatatype;

    /** DatatypeMeta state. */
    public state: StateOfDatatype;

    /**
     * Creates a new DatatypeMeta instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DatatypeMeta instance
     */
    public static create(properties?: IDatatypeMeta): DatatypeMeta;

    /**
     * Encodes the specified DatatypeMeta message. Does not implicitly {@link DatatypeMeta.verify|verify} messages.
     * @param message DatatypeMeta message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDatatypeMeta, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DatatypeMeta message, length delimited. Does not implicitly {@link DatatypeMeta.verify|verify} messages.
     * @param message DatatypeMeta message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDatatypeMeta, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DatatypeMeta message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DatatypeMeta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DatatypeMeta;

    /**
     * Decodes a DatatypeMeta message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DatatypeMeta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DatatypeMeta;

    /**
     * Verifies a DatatypeMeta message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DatatypeMeta message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DatatypeMeta
     */
    public static fromObject(object: { [k: string]: any }): DatatypeMeta;

    /**
     * Creates a plain object from a DatatypeMeta message. Also converts values to other types if specified.
     * @param message DatatypeMeta
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DatatypeMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DatatypeMeta to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
