const express = require("express");
const router = express.Router();
const stripeControllers = require("../controllers/StripeController/StripeController");
router.get("/", stripeControllers.getpublishablekeys);



module.exports = router;
