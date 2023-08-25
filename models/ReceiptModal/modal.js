const mongoose = require("mongoose");
const Schema = require("./Schemas/UserSchemas");
const ReceiptModal = mongoose.model("RegisterUsers", Schema);
module.exports = ReceiptModal;
