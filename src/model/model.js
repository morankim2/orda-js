/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.Client = (function() {
    
        /**
         * Properties of a Client.
         * @exports IClient
         * @interface IClient
         * @property {Uint8Array|null} [CUID] Client CUID
         * @property {string|null} [alias] Client alias
         * @property {string|null} [collection] Client collection
         * @property {SyncType|null} [syncType] Client syncType
         */
    
        /**
         * Constructs a new Client.
         * @exports Client
         * @classdesc Represents a Client.
         * @implements IClient
         * @constructor
         * @param {IClient=} [properties] Properties to set
         */
        function Client(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Client CUID.
         * @member {Uint8Array} CUID
         * @memberof Client
         * @instance
         */
        Client.prototype.CUID = $util.newBuffer([]);
    
        /**
         * Client alias.
         * @member {string} alias
         * @memberof Client
         * @instance
         */
        Client.prototype.alias = "";
    
        /**
         * Client collection.
         * @member {string} collection
         * @memberof Client
         * @instance
         */
        Client.prototype.collection = "";
    
        /**
         * Client syncType.
         * @member {SyncType} syncType
         * @memberof Client
         * @instance
         */
        Client.prototype.syncType = 0;
    
        /**
         * Creates a new Client instance using the specified properties.
         * @function create
         * @memberof Client
         * @static
         * @param {IClient=} [properties] Properties to set
         * @returns {Client} Client instance
         */
        Client.create = function create(properties) {
            return new Client(properties);
        };
    
        /**
         * Encodes the specified Client message. Does not implicitly {@link Client.verify|verify} messages.
         * @function encode
         * @memberof Client
         * @static
         * @param {IClient} message Client message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.CUID);
            if (message.alias != null && message.hasOwnProperty("alias"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.alias);
            if (message.collection != null && message.hasOwnProperty("collection"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.collection);
            if (message.syncType != null && message.hasOwnProperty("syncType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.syncType);
            return writer;
        };
    
        /**
         * Encodes the specified Client message, length delimited. Does not implicitly {@link Client.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Client
         * @static
         * @param {IClient} message Client message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Client.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Client message from the specified reader or buffer.
         * @function decode
         * @memberof Client
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Client} Client
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Client();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CUID = reader.bytes();
                    break;
                case 2:
                    message.alias = reader.string();
                    break;
                case 3:
                    message.collection = reader.string();
                    break;
                case 4:
                    message.syncType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Client message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Client
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Client} Client
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Client.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Client message.
         * @function verify
         * @memberof Client
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Client.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                if (!(message.CUID && typeof message.CUID.length === "number" || $util.isString(message.CUID)))
                    return "CUID: buffer expected";
            if (message.alias != null && message.hasOwnProperty("alias"))
                if (!$util.isString(message.alias))
                    return "alias: string expected";
            if (message.collection != null && message.hasOwnProperty("collection"))
                if (!$util.isString(message.collection))
                    return "collection: string expected";
            if (message.syncType != null && message.hasOwnProperty("syncType"))
                switch (message.syncType) {
                default:
                    return "syncType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a Client message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Client
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Client} Client
         */
        Client.fromObject = function fromObject(object) {
            if (object instanceof $root.Client)
                return object;
            var message = new $root.Client();
            if (object.CUID != null)
                if (typeof object.CUID === "string")
                    $util.base64.decode(object.CUID, message.CUID = $util.newBuffer($util.base64.length(object.CUID)), 0);
                else if (object.CUID.length)
                    message.CUID = object.CUID;
            if (object.alias != null)
                message.alias = String(object.alias);
            if (object.collection != null)
                message.collection = String(object.collection);
            switch (object.syncType) {
            case "LOCAL_ONLY":
            case 0:
                message.syncType = 0;
                break;
            case "MANUALLY":
            case 1:
                message.syncType = 1;
                break;
            case "NOTIFIABLE":
            case 2:
                message.syncType = 2;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Client message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Client
         * @static
         * @param {Client} message Client
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Client.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.CUID = "";
                else {
                    object.CUID = [];
                    if (options.bytes !== Array)
                        object.CUID = $util.newBuffer(object.CUID);
                }
                object.alias = "";
                object.collection = "";
                object.syncType = options.enums === String ? "LOCAL_ONLY" : 0;
            }
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                object.CUID = options.bytes === String ? $util.base64.encode(message.CUID, 0, message.CUID.length) : options.bytes === Array ? Array.prototype.slice.call(message.CUID) : message.CUID;
            if (message.alias != null && message.hasOwnProperty("alias"))
                object.alias = message.alias;
            if (message.collection != null && message.hasOwnProperty("collection"))
                object.collection = message.collection;
            if (message.syncType != null && message.hasOwnProperty("syncType"))
                object.syncType = options.enums === String ? $root.SyncType[message.syncType] : message.syncType;
            return object;
        };
    
        /**
         * Converts this Client to JSON.
         * @function toJSON
         * @memberof Client
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Client.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Client;
    })();
    
    /**
     * SyncType enum.
     * @exports SyncType
     * @enum {string}
     * @property {number} LOCAL_ONLY=0 LOCAL_ONLY value
     * @property {number} MANUALLY=1 MANUALLY value
     * @property {number} NOTIFIABLE=2 NOTIFIABLE value
     */
    $root.SyncType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LOCAL_ONLY"] = 0;
        values[valuesById[1] = "MANUALLY"] = 1;
        values[valuesById[2] = "NOTIFIABLE"] = 2;
        return values;
    })();
    
    $root.Timestamp = (function() {
    
        /**
         * Properties of a Timestamp.
         * @exports ITimestamp
         * @interface ITimestamp
         * @property {number|null} [era] Timestamp era
         * @property {number|Long|null} [lamport] Timestamp lamport
         * @property {Uint8Array|null} [CUID] Timestamp CUID
         * @property {number|null} [delimiter] Timestamp delimiter
         */
    
        /**
         * Constructs a new Timestamp.
         * @exports Timestamp
         * @classdesc Represents a Timestamp.
         * @implements ITimestamp
         * @constructor
         * @param {ITimestamp=} [properties] Properties to set
         */
        function Timestamp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Timestamp era.
         * @member {number} era
         * @memberof Timestamp
         * @instance
         */
        Timestamp.prototype.era = 0;
    
        /**
         * Timestamp lamport.
         * @member {number|Long} lamport
         * @memberof Timestamp
         * @instance
         */
        Timestamp.prototype.lamport = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Timestamp CUID.
         * @member {Uint8Array} CUID
         * @memberof Timestamp
         * @instance
         */
        Timestamp.prototype.CUID = $util.newBuffer([]);
    
        /**
         * Timestamp delimiter.
         * @member {number} delimiter
         * @memberof Timestamp
         * @instance
         */
        Timestamp.prototype.delimiter = 0;
    
        /**
         * Creates a new Timestamp instance using the specified properties.
         * @function create
         * @memberof Timestamp
         * @static
         * @param {ITimestamp=} [properties] Properties to set
         * @returns {Timestamp} Timestamp instance
         */
        Timestamp.create = function create(properties) {
            return new Timestamp(properties);
        };
    
        /**
         * Encodes the specified Timestamp message. Does not implicitly {@link Timestamp.verify|verify} messages.
         * @function encode
         * @memberof Timestamp
         * @static
         * @param {ITimestamp} message Timestamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timestamp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.era != null && message.hasOwnProperty("era"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.era);
            if (message.lamport != null && message.hasOwnProperty("lamport"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.lamport);
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.CUID);
            if (message.delimiter != null && message.hasOwnProperty("delimiter"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.delimiter);
            return writer;
        };
    
        /**
         * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link Timestamp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Timestamp
         * @static
         * @param {ITimestamp} message Timestamp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Timestamp message from the specified reader or buffer.
         * @function decode
         * @memberof Timestamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Timestamp} Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timestamp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Timestamp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.era = reader.uint32();
                    break;
                case 2:
                    message.lamport = reader.uint64();
                    break;
                case 3:
                    message.CUID = reader.bytes();
                    break;
                case 4:
                    message.delimiter = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Timestamp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Timestamp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Timestamp} Timestamp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Timestamp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Timestamp message.
         * @function verify
         * @memberof Timestamp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Timestamp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.era != null && message.hasOwnProperty("era"))
                if (!$util.isInteger(message.era))
                    return "era: integer expected";
            if (message.lamport != null && message.hasOwnProperty("lamport"))
                if (!$util.isInteger(message.lamport) && !(message.lamport && $util.isInteger(message.lamport.low) && $util.isInteger(message.lamport.high)))
                    return "lamport: integer|Long expected";
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                if (!(message.CUID && typeof message.CUID.length === "number" || $util.isString(message.CUID)))
                    return "CUID: buffer expected";
            if (message.delimiter != null && message.hasOwnProperty("delimiter"))
                if (!$util.isInteger(message.delimiter))
                    return "delimiter: integer expected";
            return null;
        };
    
        /**
         * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Timestamp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Timestamp} Timestamp
         */
        Timestamp.fromObject = function fromObject(object) {
            if (object instanceof $root.Timestamp)
                return object;
            var message = new $root.Timestamp();
            if (object.era != null)
                message.era = object.era >>> 0;
            if (object.lamport != null)
                if ($util.Long)
                    (message.lamport = $util.Long.fromValue(object.lamport)).unsigned = true;
                else if (typeof object.lamport === "string")
                    message.lamport = parseInt(object.lamport, 10);
                else if (typeof object.lamport === "number")
                    message.lamport = object.lamport;
                else if (typeof object.lamport === "object")
                    message.lamport = new $util.LongBits(object.lamport.low >>> 0, object.lamport.high >>> 0).toNumber(true);
            if (object.CUID != null)
                if (typeof object.CUID === "string")
                    $util.base64.decode(object.CUID, message.CUID = $util.newBuffer($util.base64.length(object.CUID)), 0);
                else if (object.CUID.length)
                    message.CUID = object.CUID;
            if (object.delimiter != null)
                message.delimiter = object.delimiter >>> 0;
            return message;
        };
    
        /**
         * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Timestamp
         * @static
         * @param {Timestamp} message Timestamp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Timestamp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.era = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lamport = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lamport = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.CUID = "";
                else {
                    object.CUID = [];
                    if (options.bytes !== Array)
                        object.CUID = $util.newBuffer(object.CUID);
                }
                object.delimiter = 0;
            }
            if (message.era != null && message.hasOwnProperty("era"))
                object.era = message.era;
            if (message.lamport != null && message.hasOwnProperty("lamport"))
                if (typeof message.lamport === "number")
                    object.lamport = options.longs === String ? String(message.lamport) : message.lamport;
                else
                    object.lamport = options.longs === String ? $util.Long.prototype.toString.call(message.lamport) : options.longs === Number ? new $util.LongBits(message.lamport.low >>> 0, message.lamport.high >>> 0).toNumber(true) : message.lamport;
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                object.CUID = options.bytes === String ? $util.base64.encode(message.CUID, 0, message.CUID.length) : options.bytes === Array ? Array.prototype.slice.call(message.CUID) : message.CUID;
            if (message.delimiter != null && message.hasOwnProperty("delimiter"))
                object.delimiter = message.delimiter;
            return object;
        };
    
        /**
         * Converts this Timestamp to JSON.
         * @function toJSON
         * @memberof Timestamp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Timestamp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Timestamp;
    })();
    
    $root.OperationID = (function() {
    
        /**
         * Properties of an OperationID.
         * @exports IOperationID
         * @interface IOperationID
         * @property {number|null} [era] OperationID era
         * @property {number|Long|null} [lamport] OperationID lamport
         * @property {Uint8Array|null} [CUID] OperationID CUID
         * @property {number|Long|null} [seq] OperationID seq
         */
    
        /**
         * Constructs a new OperationID.
         * @exports OperationID
         * @classdesc Represents an OperationID.
         * @implements IOperationID
         * @constructor
         * @param {IOperationID=} [properties] Properties to set
         */
        function OperationID(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * OperationID era.
         * @member {number} era
         * @memberof OperationID
         * @instance
         */
        OperationID.prototype.era = 0;
    
        /**
         * OperationID lamport.
         * @member {number|Long} lamport
         * @memberof OperationID
         * @instance
         */
        OperationID.prototype.lamport = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * OperationID CUID.
         * @member {Uint8Array} CUID
         * @memberof OperationID
         * @instance
         */
        OperationID.prototype.CUID = $util.newBuffer([]);
    
        /**
         * OperationID seq.
         * @member {number|Long} seq
         * @memberof OperationID
         * @instance
         */
        OperationID.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new OperationID instance using the specified properties.
         * @function create
         * @memberof OperationID
         * @static
         * @param {IOperationID=} [properties] Properties to set
         * @returns {OperationID} OperationID instance
         */
        OperationID.create = function create(properties) {
            return new OperationID(properties);
        };
    
        /**
         * Encodes the specified OperationID message. Does not implicitly {@link OperationID.verify|verify} messages.
         * @function encode
         * @memberof OperationID
         * @static
         * @param {IOperationID} message OperationID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationID.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.era != null && message.hasOwnProperty("era"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.era);
            if (message.lamport != null && message.hasOwnProperty("lamport"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.lamport);
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.CUID);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.seq);
            return writer;
        };
    
        /**
         * Encodes the specified OperationID message, length delimited. Does not implicitly {@link OperationID.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OperationID
         * @static
         * @param {IOperationID} message OperationID message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationID.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an OperationID message from the specified reader or buffer.
         * @function decode
         * @memberof OperationID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OperationID} OperationID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationID.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.OperationID();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.era = reader.uint32();
                    break;
                case 2:
                    message.lamport = reader.uint64();
                    break;
                case 3:
                    message.CUID = reader.bytes();
                    break;
                case 4:
                    message.seq = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an OperationID message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OperationID
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OperationID} OperationID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationID.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an OperationID message.
         * @function verify
         * @memberof OperationID
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperationID.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.era != null && message.hasOwnProperty("era"))
                if (!$util.isInteger(message.era))
                    return "era: integer expected";
            if (message.lamport != null && message.hasOwnProperty("lamport"))
                if (!$util.isInteger(message.lamport) && !(message.lamport && $util.isInteger(message.lamport.low) && $util.isInteger(message.lamport.high)))
                    return "lamport: integer|Long expected";
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                if (!(message.CUID && typeof message.CUID.length === "number" || $util.isString(message.CUID)))
                    return "CUID: buffer expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };
    
        /**
         * Creates an OperationID message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OperationID
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OperationID} OperationID
         */
        OperationID.fromObject = function fromObject(object) {
            if (object instanceof $root.OperationID)
                return object;
            var message = new $root.OperationID();
            if (object.era != null)
                message.era = object.era >>> 0;
            if (object.lamport != null)
                if ($util.Long)
                    (message.lamport = $util.Long.fromValue(object.lamport)).unsigned = true;
                else if (typeof object.lamport === "string")
                    message.lamport = parseInt(object.lamport, 10);
                else if (typeof object.lamport === "number")
                    message.lamport = object.lamport;
                else if (typeof object.lamport === "object")
                    message.lamport = new $util.LongBits(object.lamport.low >>> 0, object.lamport.high >>> 0).toNumber(true);
            if (object.CUID != null)
                if (typeof object.CUID === "string")
                    $util.base64.decode(object.CUID, message.CUID = $util.newBuffer($util.base64.length(object.CUID)), 0);
                else if (object.CUID.length)
                    message.CUID = object.CUID;
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = true;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from an OperationID message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OperationID
         * @static
         * @param {OperationID} message OperationID
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperationID.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.era = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lamport = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lamport = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.CUID = "";
                else {
                    object.CUID = [];
                    if (options.bytes !== Array)
                        object.CUID = $util.newBuffer(object.CUID);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            }
            if (message.era != null && message.hasOwnProperty("era"))
                object.era = message.era;
            if (message.lamport != null && message.hasOwnProperty("lamport"))
                if (typeof message.lamport === "number")
                    object.lamport = options.longs === String ? String(message.lamport) : message.lamport;
                else
                    object.lamport = options.longs === String ? $util.Long.prototype.toString.call(message.lamport) : options.longs === Number ? new $util.LongBits(message.lamport.low >>> 0, message.lamport.high >>> 0).toNumber(true) : message.lamport;
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                object.CUID = options.bytes === String ? $util.base64.encode(message.CUID, 0, message.CUID.length) : options.bytes === Array ? Array.prototype.slice.call(message.CUID) : message.CUID;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber(true) : message.seq;
            return object;
        };
    
        /**
         * Converts this OperationID to JSON.
         * @function toJSON
         * @memberof OperationID
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperationID.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return OperationID;
    })();
    
    $root.Operation = (function() {
    
        /**
         * Properties of an Operation.
         * @exports IOperation
         * @interface IOperation
         * @property {IOperationID|null} [ID] Operation ID
         * @property {TypeOfOperation|null} [opType] Operation opType
         * @property {Uint8Array|null} [body] Operation body
         */
    
        /**
         * Constructs a new Operation.
         * @exports Operation
         * @classdesc Represents an Operation.
         * @implements IOperation
         * @constructor
         * @param {IOperation=} [properties] Properties to set
         */
        function Operation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Operation ID.
         * @member {IOperationID|null|undefined} ID
         * @memberof Operation
         * @instance
         */
        Operation.prototype.ID = null;
    
        /**
         * Operation opType.
         * @member {TypeOfOperation} opType
         * @memberof Operation
         * @instance
         */
        Operation.prototype.opType = 0;
    
        /**
         * Operation body.
         * @member {Uint8Array} body
         * @memberof Operation
         * @instance
         */
        Operation.prototype.body = $util.newBuffer([]);
    
        /**
         * Creates a new Operation instance using the specified properties.
         * @function create
         * @memberof Operation
         * @static
         * @param {IOperation=} [properties] Properties to set
         * @returns {Operation} Operation instance
         */
        Operation.create = function create(properties) {
            return new Operation(properties);
        };
    
        /**
         * Encodes the specified Operation message. Does not implicitly {@link Operation.verify|verify} messages.
         * @function encode
         * @memberof Operation
         * @static
         * @param {IOperation} message Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ID != null && message.hasOwnProperty("ID"))
                $root.OperationID.encode(message.ID, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.opType != null && message.hasOwnProperty("opType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.opType);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.body);
            return writer;
        };
    
        /**
         * Encodes the specified Operation message, length delimited. Does not implicitly {@link Operation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Operation
         * @static
         * @param {IOperation} message Operation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Operation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an Operation message from the specified reader or buffer.
         * @function decode
         * @memberof Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Operation} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = $root.OperationID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.opType = reader.int32();
                    break;
                case 3:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an Operation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Operation} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an Operation message.
         * @function verify
         * @memberof Operation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Operation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ID != null && message.hasOwnProperty("ID")) {
                var error = $root.OperationID.verify(message.ID);
                if (error)
                    return "ID." + error;
            }
            if (message.opType != null && message.hasOwnProperty("opType"))
                switch (message.opType) {
                default:
                    return "opType: enum value expected";
                case 0:
                case 2:
                case 3:
                case 5:
                case 11:
                case 21:
                case 22:
                case 31:
                case 32:
                case 33:
                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                    break;
                }
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };
    
        /**
         * Creates an Operation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Operation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Operation} Operation
         */
        Operation.fromObject = function fromObject(object) {
            if (object instanceof $root.Operation)
                return object;
            var message = new $root.Operation();
            if (object.ID != null) {
                if (typeof object.ID !== "object")
                    throw TypeError(".Operation.ID: object expected");
                message.ID = $root.OperationID.fromObject(object.ID);
            }
            switch (object.opType) {
            case "SNAPSHOT":
            case 0:
                message.opType = 0;
                break;
            case "DELETE":
            case 2:
                message.opType = 2;
                break;
            case "ERROR":
            case 3:
                message.opType = 3;
                break;
            case "TRANSACTION":
            case 5:
                message.opType = 5;
                break;
            case "COUNTER_INCREASE":
            case 11:
                message.opType = 11;
                break;
            case "HASH_MAP_PUT":
            case 21:
                message.opType = 21;
                break;
            case "HASH_MAP_REMOVE":
            case 22:
                message.opType = 22;
                break;
            case "LIST_INSERT":
            case 31:
                message.opType = 31;
                break;
            case "LIST_DELETE":
            case 32:
                message.opType = 32;
                break;
            case "LIST_UPDATE":
            case 33:
                message.opType = 33;
                break;
            case "DOCUMENT_PUT_OBJ":
            case 41:
                message.opType = 41;
                break;
            case "DOCUMENT_DEL_OBJ":
            case 42:
                message.opType = 42;
                break;
            case "DOCUMENT_INS_ARR":
            case 43:
                message.opType = 43;
                break;
            case "DOCUMENT_DEL_ARR":
            case 44:
                message.opType = 44;
                break;
            case "DOCUMENT_UPD_ARR":
            case 45:
                message.opType = 45;
                break;
            }
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };
    
        /**
         * Creates a plain object from an Operation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Operation
         * @static
         * @param {Operation} message Operation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Operation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = null;
                object.opType = options.enums === String ? "SNAPSHOT" : 0;
                if (options.bytes === String)
                    object.body = "";
                else {
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = $root.OperationID.toObject(message.ID, options);
            if (message.opType != null && message.hasOwnProperty("opType"))
                object.opType = options.enums === String ? $root.TypeOfOperation[message.opType] : message.opType;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };
    
        /**
         * Converts this Operation to JSON.
         * @function toJSON
         * @memberof Operation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Operation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return Operation;
    })();
    
    /**
     * TypeOfOperation enum.
     * @exports TypeOfOperation
     * @enum {string}
     * @property {number} SNAPSHOT=0 SNAPSHOT value
     * @property {number} DELETE=2 DELETE value
     * @property {number} ERROR=3 ERROR value
     * @property {number} TRANSACTION=5 TRANSACTION value
     * @property {number} COUNTER_INCREASE=11 COUNTER_INCREASE value
     * @property {number} HASH_MAP_PUT=21 HASH_MAP_PUT value
     * @property {number} HASH_MAP_REMOVE=22 HASH_MAP_REMOVE value
     * @property {number} LIST_INSERT=31 LIST_INSERT value
     * @property {number} LIST_DELETE=32 LIST_DELETE value
     * @property {number} LIST_UPDATE=33 LIST_UPDATE value
     * @property {number} DOCUMENT_PUT_OBJ=41 DOCUMENT_PUT_OBJ value
     * @property {number} DOCUMENT_DEL_OBJ=42 DOCUMENT_DEL_OBJ value
     * @property {number} DOCUMENT_INS_ARR=43 DOCUMENT_INS_ARR value
     * @property {number} DOCUMENT_DEL_ARR=44 DOCUMENT_DEL_ARR value
     * @property {number} DOCUMENT_UPD_ARR=45 DOCUMENT_UPD_ARR value
     */
    $root.TypeOfOperation = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SNAPSHOT"] = 0;
        values[valuesById[2] = "DELETE"] = 2;
        values[valuesById[3] = "ERROR"] = 3;
        values[valuesById[5] = "TRANSACTION"] = 5;
        values[valuesById[11] = "COUNTER_INCREASE"] = 11;
        values[valuesById[21] = "HASH_MAP_PUT"] = 21;
        values[valuesById[22] = "HASH_MAP_REMOVE"] = 22;
        values[valuesById[31] = "LIST_INSERT"] = 31;
        values[valuesById[32] = "LIST_DELETE"] = 32;
        values[valuesById[33] = "LIST_UPDATE"] = 33;
        values[valuesById[41] = "DOCUMENT_PUT_OBJ"] = 41;
        values[valuesById[42] = "DOCUMENT_DEL_OBJ"] = 42;
        values[valuesById[43] = "DOCUMENT_INS_ARR"] = 43;
        values[valuesById[44] = "DOCUMENT_DEL_ARR"] = 44;
        values[valuesById[45] = "DOCUMENT_UPD_ARR"] = 45;
        return values;
    })();
    
    /**
     * TypeOfDatatype enum.
     * @exports TypeOfDatatype
     * @enum {string}
     * @property {number} COUNTER=0 COUNTER value
     * @property {number} HASH_MAP=1 HASH_MAP value
     * @property {number} LIST=2 LIST value
     * @property {number} DOCUMENT=3 DOCUMENT value
     */
    $root.TypeOfDatatype = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "COUNTER"] = 0;
        values[valuesById[1] = "HASH_MAP"] = 1;
        values[valuesById[2] = "LIST"] = 2;
        values[valuesById[3] = "DOCUMENT"] = 3;
        return values;
    })();
    
    /**
     * StateOfDatatype enum.
     * @exports StateOfDatatype
     * @enum {string}
     * @property {number} DUE_TO_CREATE=0 DUE_TO_CREATE value
     * @property {number} DUE_TO_SUBSCRIBE=1 DUE_TO_SUBSCRIBE value
     * @property {number} DUE_TO_SUBSCRIBE_CREATE=2 DUE_TO_SUBSCRIBE_CREATE value
     * @property {number} SUBSCRIBED=4 SUBSCRIBED value
     * @property {number} DUE_TO_UNSUBSCRIBE=5 DUE_TO_UNSUBSCRIBE value
     * @property {number} UNSUBSCRIBED=6 UNSUBSCRIBED value
     * @property {number} DELETED=7 DELETED value
     */
    $root.StateOfDatatype = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DUE_TO_CREATE"] = 0;
        values[valuesById[1] = "DUE_TO_SUBSCRIBE"] = 1;
        values[valuesById[2] = "DUE_TO_SUBSCRIBE_CREATE"] = 2;
        values[valuesById[4] = "SUBSCRIBED"] = 4;
        values[valuesById[5] = "DUE_TO_UNSUBSCRIBE"] = 5;
        values[valuesById[6] = "UNSUBSCRIBED"] = 6;
        values[valuesById[7] = "DELETED"] = 7;
        return values;
    })();
    
    $root.PushPullPack = (function() {
    
        /**
         * Properties of a PushPullPack.
         * @exports IPushPullPack
         * @interface IPushPullPack
         * @property {Uint8Array|null} [DUID] PushPullPack DUID
         * @property {string|null} [key] PushPullPack key
         * @property {number|null} [option] PushPullPack option
         * @property {ICheckPoint|null} [checkPoint] PushPullPack checkPoint
         * @property {number|null} [era] PushPullPack era
         * @property {number|null} [type] PushPullPack type
         * @property {Array.<IOperation>|null} [operations] PushPullPack operations
         */
    
        /**
         * Constructs a new PushPullPack.
         * @exports PushPullPack
         * @classdesc Represents a PushPullPack.
         * @implements IPushPullPack
         * @constructor
         * @param {IPushPullPack=} [properties] Properties to set
         */
        function PushPullPack(properties) {
            this.operations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * PushPullPack DUID.
         * @member {Uint8Array} DUID
         * @memberof PushPullPack
         * @instance
         */
        PushPullPack.prototype.DUID = $util.newBuffer([]);
    
        /**
         * PushPullPack key.
         * @member {string} key
         * @memberof PushPullPack
         * @instance
         */
        PushPullPack.prototype.key = "";
    
        /**
         * PushPullPack option.
         * @member {number} option
         * @memberof PushPullPack
         * @instance
         */
        PushPullPack.prototype.option = 0;
    
        /**
         * PushPullPack checkPoint.
         * @member {ICheckPoint|null|undefined} checkPoint
         * @memberof PushPullPack
         * @instance
         */
        PushPullPack.prototype.checkPoint = null;
    
        /**
         * PushPullPack era.
         * @member {number} era
         * @memberof PushPullPack
         * @instance
         */
        PushPullPack.prototype.era = 0;
    
        /**
         * PushPullPack type.
         * @member {number} type
         * @memberof PushPullPack
         * @instance
         */
        PushPullPack.prototype.type = 0;
    
        /**
         * PushPullPack operations.
         * @member {Array.<IOperation>} operations
         * @memberof PushPullPack
         * @instance
         */
        PushPullPack.prototype.operations = $util.emptyArray;
    
        /**
         * Creates a new PushPullPack instance using the specified properties.
         * @function create
         * @memberof PushPullPack
         * @static
         * @param {IPushPullPack=} [properties] Properties to set
         * @returns {PushPullPack} PushPullPack instance
         */
        PushPullPack.create = function create(properties) {
            return new PushPullPack(properties);
        };
    
        /**
         * Encodes the specified PushPullPack message. Does not implicitly {@link PushPullPack.verify|verify} messages.
         * @function encode
         * @memberof PushPullPack
         * @static
         * @param {IPushPullPack} message PushPullPack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushPullPack.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DUID != null && message.hasOwnProperty("DUID"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.DUID);
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.key);
            if (message.option != null && message.hasOwnProperty("option"))
                writer.uint32(/* id 3, wireType 5 =*/29).fixed32(message.option);
            if (message.checkPoint != null && message.hasOwnProperty("checkPoint"))
                $root.CheckPoint.encode(message.checkPoint, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.era != null && message.hasOwnProperty("era"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.era);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.type);
            if (message.operations != null && message.operations.length)
                for (var i = 0; i < message.operations.length; ++i)
                    $root.Operation.encode(message.operations[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified PushPullPack message, length delimited. Does not implicitly {@link PushPullPack.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PushPullPack
         * @static
         * @param {IPushPullPack} message PushPullPack message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushPullPack.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a PushPullPack message from the specified reader or buffer.
         * @function decode
         * @memberof PushPullPack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PushPullPack} PushPullPack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushPullPack.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PushPullPack();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.DUID = reader.bytes();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.option = reader.fixed32();
                    break;
                case 4:
                    message.checkPoint = $root.CheckPoint.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.era = reader.uint32();
                    break;
                case 6:
                    message.type = reader.int32();
                    break;
                case 7:
                    if (!(message.operations && message.operations.length))
                        message.operations = [];
                    message.operations.push($root.Operation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a PushPullPack message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PushPullPack
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PushPullPack} PushPullPack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushPullPack.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a PushPullPack message.
         * @function verify
         * @memberof PushPullPack
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushPullPack.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.DUID != null && message.hasOwnProperty("DUID"))
                if (!(message.DUID && typeof message.DUID.length === "number" || $util.isString(message.DUID)))
                    return "DUID: buffer expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.option != null && message.hasOwnProperty("option"))
                if (!$util.isInteger(message.option))
                    return "option: integer expected";
            if (message.checkPoint != null && message.hasOwnProperty("checkPoint")) {
                var error = $root.CheckPoint.verify(message.checkPoint);
                if (error)
                    return "checkPoint." + error;
            }
            if (message.era != null && message.hasOwnProperty("era"))
                if (!$util.isInteger(message.era))
                    return "era: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.operations != null && message.hasOwnProperty("operations")) {
                if (!Array.isArray(message.operations))
                    return "operations: array expected";
                for (var i = 0; i < message.operations.length; ++i) {
                    var error = $root.Operation.verify(message.operations[i]);
                    if (error)
                        return "operations." + error;
                }
            }
            return null;
        };
    
        /**
         * Creates a PushPullPack message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PushPullPack
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PushPullPack} PushPullPack
         */
        PushPullPack.fromObject = function fromObject(object) {
            if (object instanceof $root.PushPullPack)
                return object;
            var message = new $root.PushPullPack();
            if (object.DUID != null)
                if (typeof object.DUID === "string")
                    $util.base64.decode(object.DUID, message.DUID = $util.newBuffer($util.base64.length(object.DUID)), 0);
                else if (object.DUID.length)
                    message.DUID = object.DUID;
            if (object.key != null)
                message.key = String(object.key);
            if (object.option != null)
                message.option = object.option >>> 0;
            if (object.checkPoint != null) {
                if (typeof object.checkPoint !== "object")
                    throw TypeError(".PushPullPack.checkPoint: object expected");
                message.checkPoint = $root.CheckPoint.fromObject(object.checkPoint);
            }
            if (object.era != null)
                message.era = object.era >>> 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.operations) {
                if (!Array.isArray(object.operations))
                    throw TypeError(".PushPullPack.operations: array expected");
                message.operations = [];
                for (var i = 0; i < object.operations.length; ++i) {
                    if (typeof object.operations[i] !== "object")
                        throw TypeError(".PushPullPack.operations: object expected");
                    message.operations[i] = $root.Operation.fromObject(object.operations[i]);
                }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a PushPullPack message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PushPullPack
         * @static
         * @param {PushPullPack} message PushPullPack
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushPullPack.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.operations = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.DUID = "";
                else {
                    object.DUID = [];
                    if (options.bytes !== Array)
                        object.DUID = $util.newBuffer(object.DUID);
                }
                object.key = "";
                object.option = 0;
                object.checkPoint = null;
                object.era = 0;
                object.type = 0;
            }
            if (message.DUID != null && message.hasOwnProperty("DUID"))
                object.DUID = options.bytes === String ? $util.base64.encode(message.DUID, 0, message.DUID.length) : options.bytes === Array ? Array.prototype.slice.call(message.DUID) : message.DUID;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.option != null && message.hasOwnProperty("option"))
                object.option = message.option;
            if (message.checkPoint != null && message.hasOwnProperty("checkPoint"))
                object.checkPoint = $root.CheckPoint.toObject(message.checkPoint, options);
            if (message.era != null && message.hasOwnProperty("era"))
                object.era = message.era;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.operations && message.operations.length) {
                object.operations = [];
                for (var j = 0; j < message.operations.length; ++j)
                    object.operations[j] = $root.Operation.toObject(message.operations[j], options);
            }
            return object;
        };
    
        /**
         * Converts this PushPullPack to JSON.
         * @function toJSON
         * @memberof PushPullPack
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushPullPack.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return PushPullPack;
    })();
    
    $root.CheckPoint = (function() {
    
        /**
         * Properties of a CheckPoint.
         * @exports ICheckPoint
         * @interface ICheckPoint
         * @property {number|Long|null} [sseq] CheckPoint sseq
         * @property {number|Long|null} [cseq] CheckPoint cseq
         */
    
        /**
         * Constructs a new CheckPoint.
         * @exports CheckPoint
         * @classdesc Represents a CheckPoint.
         * @implements ICheckPoint
         * @constructor
         * @param {ICheckPoint=} [properties] Properties to set
         */
        function CheckPoint(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * CheckPoint sseq.
         * @member {number|Long} sseq
         * @memberof CheckPoint
         * @instance
         */
        CheckPoint.prototype.sseq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * CheckPoint cseq.
         * @member {number|Long} cseq
         * @memberof CheckPoint
         * @instance
         */
        CheckPoint.prototype.cseq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new CheckPoint instance using the specified properties.
         * @function create
         * @memberof CheckPoint
         * @static
         * @param {ICheckPoint=} [properties] Properties to set
         * @returns {CheckPoint} CheckPoint instance
         */
        CheckPoint.create = function create(properties) {
            return new CheckPoint(properties);
        };
    
        /**
         * Encodes the specified CheckPoint message. Does not implicitly {@link CheckPoint.verify|verify} messages.
         * @function encode
         * @memberof CheckPoint
         * @static
         * @param {ICheckPoint} message CheckPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckPoint.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sseq != null && message.hasOwnProperty("sseq"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.sseq);
            if (message.cseq != null && message.hasOwnProperty("cseq"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.cseq);
            return writer;
        };
    
        /**
         * Encodes the specified CheckPoint message, length delimited. Does not implicitly {@link CheckPoint.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CheckPoint
         * @static
         * @param {ICheckPoint} message CheckPoint message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CheckPoint.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a CheckPoint message from the specified reader or buffer.
         * @function decode
         * @memberof CheckPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CheckPoint} CheckPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckPoint.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CheckPoint();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sseq = reader.uint64();
                    break;
                case 2:
                    message.cseq = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a CheckPoint message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CheckPoint
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CheckPoint} CheckPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CheckPoint.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a CheckPoint message.
         * @function verify
         * @memberof CheckPoint
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CheckPoint.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sseq != null && message.hasOwnProperty("sseq"))
                if (!$util.isInteger(message.sseq) && !(message.sseq && $util.isInteger(message.sseq.low) && $util.isInteger(message.sseq.high)))
                    return "sseq: integer|Long expected";
            if (message.cseq != null && message.hasOwnProperty("cseq"))
                if (!$util.isInteger(message.cseq) && !(message.cseq && $util.isInteger(message.cseq.low) && $util.isInteger(message.cseq.high)))
                    return "cseq: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a CheckPoint message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CheckPoint
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CheckPoint} CheckPoint
         */
        CheckPoint.fromObject = function fromObject(object) {
            if (object instanceof $root.CheckPoint)
                return object;
            var message = new $root.CheckPoint();
            if (object.sseq != null)
                if ($util.Long)
                    (message.sseq = $util.Long.fromValue(object.sseq)).unsigned = true;
                else if (typeof object.sseq === "string")
                    message.sseq = parseInt(object.sseq, 10);
                else if (typeof object.sseq === "number")
                    message.sseq = object.sseq;
                else if (typeof object.sseq === "object")
                    message.sseq = new $util.LongBits(object.sseq.low >>> 0, object.sseq.high >>> 0).toNumber(true);
            if (object.cseq != null)
                if ($util.Long)
                    (message.cseq = $util.Long.fromValue(object.cseq)).unsigned = true;
                else if (typeof object.cseq === "string")
                    message.cseq = parseInt(object.cseq, 10);
                else if (typeof object.cseq === "number")
                    message.cseq = object.cseq;
                else if (typeof object.cseq === "object")
                    message.cseq = new $util.LongBits(object.cseq.low >>> 0, object.cseq.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a CheckPoint message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CheckPoint
         * @static
         * @param {CheckPoint} message CheckPoint
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CheckPoint.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sseq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sseq = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cseq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cseq = options.longs === String ? "0" : 0;
            }
            if (message.sseq != null && message.hasOwnProperty("sseq"))
                if (typeof message.sseq === "number")
                    object.sseq = options.longs === String ? String(message.sseq) : message.sseq;
                else
                    object.sseq = options.longs === String ? $util.Long.prototype.toString.call(message.sseq) : options.longs === Number ? new $util.LongBits(message.sseq.low >>> 0, message.sseq.high >>> 0).toNumber(true) : message.sseq;
            if (message.cseq != null && message.hasOwnProperty("cseq"))
                if (typeof message.cseq === "number")
                    object.cseq = options.longs === String ? String(message.cseq) : message.cseq;
                else
                    object.cseq = options.longs === String ? $util.Long.prototype.toString.call(message.cseq) : options.longs === Number ? new $util.LongBits(message.cseq.low >>> 0, message.cseq.high >>> 0).toNumber(true) : message.cseq;
            return object;
        };
    
        /**
         * Converts this CheckPoint to JSON.
         * @function toJSON
         * @memberof CheckPoint
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CheckPoint.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return CheckPoint;
    })();
    
    $root.NotificationPushPull = (function() {
    
        /**
         * Properties of a NotificationPushPull.
         * @exports INotificationPushPull
         * @interface INotificationPushPull
         * @property {string|null} [CUID] NotificationPushPull CUID
         * @property {string|null} [DUID] NotificationPushPull DUID
         * @property {number|Long|null} [sseq] NotificationPushPull sseq
         */
    
        /**
         * Constructs a new NotificationPushPull.
         * @exports NotificationPushPull
         * @classdesc Represents a NotificationPushPull.
         * @implements INotificationPushPull
         * @constructor
         * @param {INotificationPushPull=} [properties] Properties to set
         */
        function NotificationPushPull(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * NotificationPushPull CUID.
         * @member {string} CUID
         * @memberof NotificationPushPull
         * @instance
         */
        NotificationPushPull.prototype.CUID = "";
    
        /**
         * NotificationPushPull DUID.
         * @member {string} DUID
         * @memberof NotificationPushPull
         * @instance
         */
        NotificationPushPull.prototype.DUID = "";
    
        /**
         * NotificationPushPull sseq.
         * @member {number|Long} sseq
         * @memberof NotificationPushPull
         * @instance
         */
        NotificationPushPull.prototype.sseq = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
        /**
         * Creates a new NotificationPushPull instance using the specified properties.
         * @function create
         * @memberof NotificationPushPull
         * @static
         * @param {INotificationPushPull=} [properties] Properties to set
         * @returns {NotificationPushPull} NotificationPushPull instance
         */
        NotificationPushPull.create = function create(properties) {
            return new NotificationPushPull(properties);
        };
    
        /**
         * Encodes the specified NotificationPushPull message. Does not implicitly {@link NotificationPushPull.verify|verify} messages.
         * @function encode
         * @memberof NotificationPushPull
         * @static
         * @param {INotificationPushPull} message NotificationPushPull message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotificationPushPull.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.CUID);
            if (message.DUID != null && message.hasOwnProperty("DUID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.DUID);
            if (message.sseq != null && message.hasOwnProperty("sseq"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.sseq);
            return writer;
        };
    
        /**
         * Encodes the specified NotificationPushPull message, length delimited. Does not implicitly {@link NotificationPushPull.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NotificationPushPull
         * @static
         * @param {INotificationPushPull} message NotificationPushPull message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotificationPushPull.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a NotificationPushPull message from the specified reader or buffer.
         * @function decode
         * @memberof NotificationPushPull
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NotificationPushPull} NotificationPushPull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotificationPushPull.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotificationPushPull();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CUID = reader.string();
                    break;
                case 2:
                    message.DUID = reader.string();
                    break;
                case 3:
                    message.sseq = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a NotificationPushPull message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NotificationPushPull
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NotificationPushPull} NotificationPushPull
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotificationPushPull.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a NotificationPushPull message.
         * @function verify
         * @memberof NotificationPushPull
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotificationPushPull.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                if (!$util.isString(message.CUID))
                    return "CUID: string expected";
            if (message.DUID != null && message.hasOwnProperty("DUID"))
                if (!$util.isString(message.DUID))
                    return "DUID: string expected";
            if (message.sseq != null && message.hasOwnProperty("sseq"))
                if (!$util.isInteger(message.sseq) && !(message.sseq && $util.isInteger(message.sseq.low) && $util.isInteger(message.sseq.high)))
                    return "sseq: integer|Long expected";
            return null;
        };
    
        /**
         * Creates a NotificationPushPull message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NotificationPushPull
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NotificationPushPull} NotificationPushPull
         */
        NotificationPushPull.fromObject = function fromObject(object) {
            if (object instanceof $root.NotificationPushPull)
                return object;
            var message = new $root.NotificationPushPull();
            if (object.CUID != null)
                message.CUID = String(object.CUID);
            if (object.DUID != null)
                message.DUID = String(object.DUID);
            if (object.sseq != null)
                if ($util.Long)
                    (message.sseq = $util.Long.fromValue(object.sseq)).unsigned = true;
                else if (typeof object.sseq === "string")
                    message.sseq = parseInt(object.sseq, 10);
                else if (typeof object.sseq === "number")
                    message.sseq = object.sseq;
                else if (typeof object.sseq === "object")
                    message.sseq = new $util.LongBits(object.sseq.low >>> 0, object.sseq.high >>> 0).toNumber(true);
            return message;
        };
    
        /**
         * Creates a plain object from a NotificationPushPull message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NotificationPushPull
         * @static
         * @param {NotificationPushPull} message NotificationPushPull
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotificationPushPull.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CUID = "";
                object.DUID = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.sseq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sseq = options.longs === String ? "0" : 0;
            }
            if (message.CUID != null && message.hasOwnProperty("CUID"))
                object.CUID = message.CUID;
            if (message.DUID != null && message.hasOwnProperty("DUID"))
                object.DUID = message.DUID;
            if (message.sseq != null && message.hasOwnProperty("sseq"))
                if (typeof message.sseq === "number")
                    object.sseq = options.longs === String ? String(message.sseq) : message.sseq;
                else
                    object.sseq = options.longs === String ? $util.Long.prototype.toString.call(message.sseq) : options.longs === Number ? new $util.LongBits(message.sseq.low >>> 0, message.sseq.high >>> 0).toNumber(true) : message.sseq;
            return object;
        };
    
        /**
         * Converts this NotificationPushPull to JSON.
         * @function toJSON
         * @memberof NotificationPushPull
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotificationPushPull.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return NotificationPushPull;
    })();
    
    $root.DatatypeMeta = (function() {
    
        /**
         * Properties of a DatatypeMeta.
         * @exports IDatatypeMeta
         * @interface IDatatypeMeta
         * @property {string|null} [key] DatatypeMeta key
         * @property {Uint8Array|null} [DUID] DatatypeMeta DUID
         * @property {IOperationID|null} [opID] DatatypeMeta opID
         * @property {TypeOfDatatype|null} [typeOf] DatatypeMeta typeOf
         * @property {StateOfDatatype|null} [state] DatatypeMeta state
         */
    
        /**
         * Constructs a new DatatypeMeta.
         * @exports DatatypeMeta
         * @classdesc Represents a DatatypeMeta.
         * @implements IDatatypeMeta
         * @constructor
         * @param {IDatatypeMeta=} [properties] Properties to set
         */
        function DatatypeMeta(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * DatatypeMeta key.
         * @member {string} key
         * @memberof DatatypeMeta
         * @instance
         */
        DatatypeMeta.prototype.key = "";
    
        /**
         * DatatypeMeta DUID.
         * @member {Uint8Array} DUID
         * @memberof DatatypeMeta
         * @instance
         */
        DatatypeMeta.prototype.DUID = $util.newBuffer([]);
    
        /**
         * DatatypeMeta opID.
         * @member {IOperationID|null|undefined} opID
         * @memberof DatatypeMeta
         * @instance
         */
        DatatypeMeta.prototype.opID = null;
    
        /**
         * DatatypeMeta typeOf.
         * @member {TypeOfDatatype} typeOf
         * @memberof DatatypeMeta
         * @instance
         */
        DatatypeMeta.prototype.typeOf = 0;
    
        /**
         * DatatypeMeta state.
         * @member {StateOfDatatype} state
         * @memberof DatatypeMeta
         * @instance
         */
        DatatypeMeta.prototype.state = 0;
    
        /**
         * Creates a new DatatypeMeta instance using the specified properties.
         * @function create
         * @memberof DatatypeMeta
         * @static
         * @param {IDatatypeMeta=} [properties] Properties to set
         * @returns {DatatypeMeta} DatatypeMeta instance
         */
        DatatypeMeta.create = function create(properties) {
            return new DatatypeMeta(properties);
        };
    
        /**
         * Encodes the specified DatatypeMeta message. Does not implicitly {@link DatatypeMeta.verify|verify} messages.
         * @function encode
         * @memberof DatatypeMeta
         * @static
         * @param {IDatatypeMeta} message DatatypeMeta message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DatatypeMeta.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.DUID != null && message.hasOwnProperty("DUID"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.DUID);
            if (message.opID != null && message.hasOwnProperty("opID"))
                $root.OperationID.encode(message.opID, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.typeOf != null && message.hasOwnProperty("typeOf"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.typeOf);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
            return writer;
        };
    
        /**
         * Encodes the specified DatatypeMeta message, length delimited. Does not implicitly {@link DatatypeMeta.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DatatypeMeta
         * @static
         * @param {IDatatypeMeta} message DatatypeMeta message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DatatypeMeta.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a DatatypeMeta message from the specified reader or buffer.
         * @function decode
         * @memberof DatatypeMeta
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DatatypeMeta} DatatypeMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DatatypeMeta.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DatatypeMeta();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.DUID = reader.bytes();
                    break;
                case 3:
                    message.opID = $root.OperationID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.typeOf = reader.int32();
                    break;
                case 5:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a DatatypeMeta message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DatatypeMeta
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DatatypeMeta} DatatypeMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DatatypeMeta.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a DatatypeMeta message.
         * @function verify
         * @memberof DatatypeMeta
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DatatypeMeta.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.DUID != null && message.hasOwnProperty("DUID"))
                if (!(message.DUID && typeof message.DUID.length === "number" || $util.isString(message.DUID)))
                    return "DUID: buffer expected";
            if (message.opID != null && message.hasOwnProperty("opID")) {
                var error = $root.OperationID.verify(message.opID);
                if (error)
                    return "opID." + error;
            }
            if (message.typeOf != null && message.hasOwnProperty("typeOf"))
                switch (message.typeOf) {
                default:
                    return "typeOf: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };
    
        /**
         * Creates a DatatypeMeta message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DatatypeMeta
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DatatypeMeta} DatatypeMeta
         */
        DatatypeMeta.fromObject = function fromObject(object) {
            if (object instanceof $root.DatatypeMeta)
                return object;
            var message = new $root.DatatypeMeta();
            if (object.key != null)
                message.key = String(object.key);
            if (object.DUID != null)
                if (typeof object.DUID === "string")
                    $util.base64.decode(object.DUID, message.DUID = $util.newBuffer($util.base64.length(object.DUID)), 0);
                else if (object.DUID.length)
                    message.DUID = object.DUID;
            if (object.opID != null) {
                if (typeof object.opID !== "object")
                    throw TypeError(".DatatypeMeta.opID: object expected");
                message.opID = $root.OperationID.fromObject(object.opID);
            }
            switch (object.typeOf) {
            case "COUNTER":
            case 0:
                message.typeOf = 0;
                break;
            case "HASH_MAP":
            case 1:
                message.typeOf = 1;
                break;
            case "LIST":
            case 2:
                message.typeOf = 2;
                break;
            case "DOCUMENT":
            case 3:
                message.typeOf = 3;
                break;
            }
            switch (object.state) {
            case "DUE_TO_CREATE":
            case 0:
                message.state = 0;
                break;
            case "DUE_TO_SUBSCRIBE":
            case 1:
                message.state = 1;
                break;
            case "DUE_TO_SUBSCRIBE_CREATE":
            case 2:
                message.state = 2;
                break;
            case "SUBSCRIBED":
            case 4:
                message.state = 4;
                break;
            case "DUE_TO_UNSUBSCRIBE":
            case 5:
                message.state = 5;
                break;
            case "UNSUBSCRIBED":
            case 6:
                message.state = 6;
                break;
            case "DELETED":
            case 7:
                message.state = 7;
                break;
            }
            return message;
        };
    
        /**
         * Creates a plain object from a DatatypeMeta message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DatatypeMeta
         * @static
         * @param {DatatypeMeta} message DatatypeMeta
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DatatypeMeta.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                if (options.bytes === String)
                    object.DUID = "";
                else {
                    object.DUID = [];
                    if (options.bytes !== Array)
                        object.DUID = $util.newBuffer(object.DUID);
                }
                object.opID = null;
                object.typeOf = options.enums === String ? "COUNTER" : 0;
                object.state = options.enums === String ? "DUE_TO_CREATE" : 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.DUID != null && message.hasOwnProperty("DUID"))
                object.DUID = options.bytes === String ? $util.base64.encode(message.DUID, 0, message.DUID.length) : options.bytes === Array ? Array.prototype.slice.call(message.DUID) : message.DUID;
            if (message.opID != null && message.hasOwnProperty("opID"))
                object.opID = $root.OperationID.toObject(message.opID, options);
            if (message.typeOf != null && message.hasOwnProperty("typeOf"))
                object.typeOf = options.enums === String ? $root.TypeOfDatatype[message.typeOf] : message.typeOf;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.StateOfDatatype[message.state] : message.state;
            return object;
        };
    
        /**
         * Converts this DatatypeMeta to JSON.
         * @function toJSON
         * @memberof DatatypeMeta
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DatatypeMeta.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        return DatatypeMeta;
    })();

    return $root;
});
