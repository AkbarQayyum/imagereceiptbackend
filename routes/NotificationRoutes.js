const express = require("express");
const router = express.Router();
const NotificationController = require("../controllers/NotificationController/NotificationController");
router.get("/:id", NotificationController.getnotifications);

router.put("/update", NotificationController.updatenotification);

router.delete("/delete/:id", NotificationController.deletenotification);

module.exports = router;
