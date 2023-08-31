const { response } = require("express");
const Users = require("../../models/UserModal");
const ReceiptModal = require("../../models/ReceiptModal/modal");
const jwt = require("jsonwebtoken");

const registerUsers = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body };
    console.log(obj);
    const request = await new Users(obj);
    const data = await request.save();
    res.send({
      isSuccess: true,
      message: "user register successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      Error: error,
      isSuccess: false,
      message: "something went wrong please try again.!",
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const data = await Users.find();

    res.send(data);
  } catch (error) {
    res.send({ Error: error });
  }
};

const getuserById = async (req, res) => {
  try {
    let data = await Users.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    console.log(data);
    if (data) {
      console.log("hello");
      let token = jwt.sign({ ...data }, process.env.SECRET);
      res.send({
        isSuccess: true,
        token: token,
        user: { ...data?._doc, password: null },
        message: "user login successfully",
      });
    } else {
      res.send({
        isSuccess: false,
        message: "email or password does not match.",
      });
    }
  } catch (error) {
    res.send({ Error: error });
  }
};

const updateUser = async (req, res) => {
  try {
    let data = await Users.updateOne(
      { _id: req.body.movieId },
      {
        $set: {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          username: req.body.username,
        },
      }
    );
    res.send("user record updated");
  } catch (error) {
    res.send({ error: error });
  }
};

const SaveReceipt = async (req, res) => {
  try {
    console.log(req.body);
    const obj = { ...req.body };
    console.log(obj);
    const request = await new ReceiptModal(obj);
    const data = await request.save();
    res.send({
      isSuccess: true,
      message: "Receipt Save successfully",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      Error: error,
      isSuccess: false,
      message: "something went wrong please try again.!",
    });
  }
};

const getAllReceipt = async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await ReceiptModal.find({ userid: req.params.id });
    res.send(data);
  } catch (error) {
    res.send({ Error: error });
  }
};

const removeUser = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await Users.findByIdAndRemove(id);
    res.send("Users Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

const RemoveReceipt = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await ReceiptModal.findByIdAndRemove(id);
    res.send("Receipt Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  registerUsers,
  getAllUsers,
  getuserById,
  removeUser,
  SaveReceipt,
  updateUser,
  getAllReceipt,
  RemoveReceipt,
};
