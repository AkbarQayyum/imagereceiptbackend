const mongoose = require("mongoose");

// importing reviews schema

//create new instance of mongoose schema using mongoose internal schema validtion

const ReceiptSchema = new mongoose.Schema({
  ADDRESS: {
    type: String,
  },
  STREET: {
    type: String,
  },
  CITY: {
    type: String,
  },
  STATE: {
    type: String,
  },
  EXPENSE_ROW: {
    type: String,
  },
  PRICE: {
    type: String,
  },
  ITEM: {
    type: String,
  },
  OTHER: {
    type: String,
  },
  VENDOR_URL: {
    type: String,
  },
  VENDOR_PHONE: {
    type: String,
  },
  VENDOR_NAME: {
    type: String,
  },
  VENDOR_ADDRESS: {
    type: String,
  },
  TOTAL: {
    type: String,
  },
  TAX: {
    type: String,
  },
  SUBTOTAL: {
    type: String,
  },
  INVOICE_RECEIPT_ID: {
    type: String,
  },
  INVOICE_RECEIPT_DATE: {
    type: String,
  },
  ADDRESS_BLOCK: {
    type: String,
  },
  NAME: {
    type: String,
  },
  ZIP_CODE: {
    type: String,
  },
});


module.exports = ReceiptSchema;
