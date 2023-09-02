const express = require("express");
const router = express.Router();
const friendController = require("../controllers/FriendController.js/FriendController");
router.post("/search", friendController.SearchFriend);
router.post("/add", friendController.AddFriend);
router.post("/get", friendController.PapulateFriend);
router.post("/removefriend", friendController.removeFriend);
router.post("/addreceipt", friendController.addfriendReceipt);


module.exports = router;
