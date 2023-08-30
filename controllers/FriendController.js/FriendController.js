const { response } = require("express");
const Users = require("../../models/UserModal");
const ReceiptModal = require("../../models/ReceiptModal/modal");
const jwt = require("jsonwebtoken");

const SearchFriend = async (req, res) => {
  try {
    let data = await Users.find({
      username: req.body.name,
    });
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
    res.send({ message: "Friend Added Successfully", isSuccess: true });
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
};
