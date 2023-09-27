const express = require("express");
const router = express.Router();
const stripeControllers = require("../controllers/StripeController/StripeController");
router.post("/create-payment-intent", stripeControllers.getpublishablekeys);
router.post("/addaccount", stripeControllers.updateUser);
router.delete("/delete/:id", stripeControllers.removeaccount);

module.exports = router;
