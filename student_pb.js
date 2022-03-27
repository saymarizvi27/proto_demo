// source: student.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.Student', null, global);
goog.exportSymbol('proto.Student.GENDER_TYPE', null, global);
goog.exportSymbol('proto.Students', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Student = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Student, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Student.displayName = 'proto.Student';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Students = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Students.repeatedFields_, null);
};
goog.inherits(proto.Students, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Students.displayName = 'proto.Students';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Student.prototype.toObject = function(opt_includeInstance) {
  return proto.Student.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Student} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Student.toObject = function(includeInstance, msg) {
  var f, obj = {
    rollnumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    gender: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pb_class: jspb.Message.getFieldWithDefault(msg, 4, ""),
    section: jspb.Message.getFieldWithDefault(msg, 5, ""),
    totalmarks: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Student}
 */
proto.Student.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Student;
  return proto.Student.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Student} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Student}
 */
proto.Student.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRollnumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.Student.GENDER_TYPE} */ (reader.readEnum());
      msg.setGender(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClass(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSection(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTotalmarks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Student.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Student.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Student} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Student.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRollnumber();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGender();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getClass();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSection();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTotalmarks();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.Student.GENDER_TYPE = {
  FEMALE: 0,
  MALE: 1
};

/**
 * optional int32 rollNumber = 1;
 * @return {number}
 */
proto.Student.prototype.getRollnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Student} returns this
 */
proto.Student.prototype.setRollnumber = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.Student.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.Student} returns this
 */
proto.Student.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional GENDER_TYPE gender = 3;
 * @return {!proto.Student.GENDER_TYPE}
 */
proto.Student.prototype.getGender = function() {
  return /** @type {!proto.Student.GENDER_TYPE} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.Student.GENDER_TYPE} value
 * @return {!proto.Student} returns this
 */
proto.Student.prototype.setGender = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string class = 4;
 * @return {string}
 */
proto.Student.prototype.getClass = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.Student} returns this
 */
proto.Student.prototype.setClass = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string section = 5;
 * @return {string}
 */
proto.Student.prototype.getSection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.Student} returns this
 */
proto.Student.prototype.setSection = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float totalMarks = 6;
 * @return {number}
 */
proto.Student.prototype.getTotalmarks = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.Student} returns this
 */
proto.Student.prototype.setTotalmarks = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Students.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Students.prototype.toObject = function(opt_includeInstance) {
  return proto.Students.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Students} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Students.toObject = function(includeInstance, msg) {
  var f, obj = {
    studentsList: jspb.Message.toObjectList(msg.getStudentsList(),
    proto.Student.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Students}
 */
proto.Students.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Students;
  return proto.Students.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Students} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Students}
 */
proto.Students.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.Student;
      reader.readMessage(value,proto.Student.deserializeBinaryFromReader);
      msg.addStudents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Students.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Students.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Students} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Students.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStudentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Student.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Student students = 1;
 * @return {!Array<!proto.Student>}
 */
proto.Students.prototype.getStudentsList = function() {
  return /** @type{!Array<!proto.Student>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.Student, 1));
};


/**
 * @param {!Array<!proto.Student>} value
 * @return {!proto.Students} returns this
*/
proto.Students.prototype.setStudentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Student=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Student}
 */
proto.Students.prototype.addStudents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Student, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Students} returns this
 */
proto.Students.prototype.clearStudentsList = function() {
  return this.setStudentsList([]);
};


goog.object.extend(exports, proto);
