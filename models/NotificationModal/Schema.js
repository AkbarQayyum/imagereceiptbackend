const mongoose = require("mongoose");

// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const NotificationSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  time: {
    type: String,
  },
  userid: {
    type: String,
    require: true,
  },
  isRead:{
    type:Boolean
  }
});

module.exports = NotificationSchema;
