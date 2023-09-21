const express = require("express");
const router = express.Router();
const stripeControllers = require("../controllers/StripeController/StripeController");
router.post("/create-payment-intent", stripeControllers.getpublishablekeys);



module.exports = router;
