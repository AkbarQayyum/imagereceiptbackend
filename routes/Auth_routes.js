const express = require("express");
const router = express.Router();
const verifyUser = require("../MiddleWares/VerifyUser");
const userControllers = require("../controllers/UserController/UserControllers");
router.get("/", userControllers.getAllUsers);
router.post("/login/", userControllers.getuserById);
router.post("/register", userControllers.registerUsers);
router.put("/update", userControllers.updateUser);
router.post("/receipt", userControllers.SaveReceipt);
router.get("/receipt/:id", userControllers.getAllReceipt);
router.delete("/receipt/:id", userControllers.RemoveReceipt);
router.delete("/delete/:id", userControllers.removeUser);
router.post("/payable", userControllers.getallpayables);
router.post("/updatereceipt", userControllers.getSingleReceipt);


module.exports = router;
