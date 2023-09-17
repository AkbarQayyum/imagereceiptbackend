const mongoose = require("mongoose");

// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion
Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  friends: {
    type: [Schema.Types.ObjectId],
    ref: "RegisterUsers",
  },
  receipts: {
    type: [String],
  },
});

//export schema to use in model file

module.exports = userSchema;
