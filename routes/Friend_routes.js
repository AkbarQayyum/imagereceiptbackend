const express = require("express");
const router = express.Router();
const friendController = require("../controllers/FriendController.js/FriendController");
router.post("/search", friendController.SearchFriend);


module.exports = router;
