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
    let val = data?.map((d)=>{
    return {name:d?.username,id:d?._id}
    })
    console.log(val)
    res.send(val)
  } catch (error) {
    res.send({ Error: error });
  }
};

module.exports = {
  SearchFriend,
};
