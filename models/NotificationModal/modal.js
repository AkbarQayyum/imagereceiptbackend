const mongoose = require("mongoose");
const Schema = require("./Schema");
const NotificationModal = mongoose.model("notifications", Schema);
module.exports = NotificationModal;
