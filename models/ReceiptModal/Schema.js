const mongoose = require("mongoose");

// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const ReceiptSchema = new mongoose.Schema({
  items: {
    type: String,
  },
  userid: {
    type: String,
    require:true
  },
});

module.exports = ReceiptSchema;
