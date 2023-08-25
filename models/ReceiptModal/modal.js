const mongoose = require("mongoose");
const Schema = require("./Schema");
const ReceiptModal = mongoose.model("receipts", Schema);
module.exports = ReceiptModal;
