const { response } = require("express");
const Users = require("../../models/UserModal");
const ReceiptModal = require("../../models/ReceiptModal/modal");
const NotiModal = require("../../models/NotificationModal/modal");
const jwt = require("jsonwebtoken");

const SearchFriend = async (req, res) => {
  try {
    let data = [];
    if (req.body.searchby === "name") {
      data = await Users.find({
        username: req.body.name,
      });
    } else if (req.body.searchby === "email") {
      data = await Users.find({
        email: req.body.name,
      });
    } else if (req.body.searchby === "phone") {
      data = await Users.find({
        phone: req.body.name,
      });
    } else {
      data = await Users.find({
        username: req.body.name,
      });
    }
    console.log(data);
    let val = data?.map((d) => {
      return { name: d?.username, id: d?._id };
    });
    console.log(val);
    res.send(val);
  } catch (error) {
    res.send({ Error: error });
  }
};

const AddFriend = async (req, res) => {
  try {
    console.log(req.body);
    let value = await Users.updateOne(
      { _id: req.body.userid },
      { $push: { friends: req.body.friendid } }
    );
    let val = await Users.updateOne(
      { _id: req.body.friendid },
      { $push: { friends: req.body.userid } }
    );
    console.log(value);
    console.log(val);

    const data = await Users.findOne({ _id: req.body.userid });
    console.log(data);
    const obj = {
      text: `${data?.username} added you as a friend`,
      time: new Date().toLocaleString(),
      isRead: false,
      userid: req.body.friendid,
    };
    let notival = new NotiModal(obj);
    let noti = await notival.save();
    console.log(noti);

    res.send({ message: "Friend Added Successfully", isSuccess: true });
  } catch (error) {
    res.send({ Error: error });
  }
};

const removeFriend = async (req, res) => {
  try {
    console.log(req.body);
    let value = await Users.updateOne(
      { _id: req.body.userid },
      { $pull: { friends: req.body.friendid } }
    );

    console.log(value);
    res.send(value);
  } catch (error) {
    res.send({ Error: error });
  }
};

const addfriendReceipt = async (req, res) => {
  try {
    console.log(req.body);
    let value = await Users.updateOne(
      { _id: req.body.userid },
      { $push: { receipts: req.body.receipt } }
    );

    const obj = {
      text: `you have been added to a payable receipt please check payable section for further details`,
      time: new Date().toLocaleString(),
      isRead: false,
      userid: req.body.userid,
    };
    let notival = new NotiModal(obj);
    let noti = await notival.save();

    res.send({ message: "Friend Added Successfully", isSuccess: true });
  } catch (error) {
    res.send({ Error: error });
  }
};
const removeFriendReceipt = async (req, res) => {
  try {
    console.log(req.body);
    let value = await Users.updateOne(
      { _id: req.body.userid },
      { $pull: { receipts: req.body.receipt } }
    );
    console.log(value);
    res.send({ message: "receipt remove", isSuccess: true });
  } catch (error) {
    res.send({ Error: error });
  }
};

const PapulateFriend = async (req, res) => {
  try {
    console.log(req.body);
    const data = await Users.findById(req.body.id).populate("friends");
    console.log(data?.friends);
    res.send(data?.friends);
  } catch (error) {
    res.send({ Error: error });
  }
};

module.exports = {
  SearchFriend,
  AddFriend,
  PapulateFriend,
  removeFriend,
  addfriendReceipt,
  removeFriendReceipt,
};
