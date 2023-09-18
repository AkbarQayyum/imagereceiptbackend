const { response } = require("express");
const Users = require("../../models/UserModal");
const NotiModal = require("../../models/NotificationModal/modal");
const jwt = require("jsonwebtoken");

const updatenotification = async (req, res) => {
  try {
    let data = await NotiModal.updateOne(
      { _id: req.body.id },
      {
        $set: {
          isRead: true,
        },
      }
    );
    res.send("record updated");
  } catch (error) {
    res.send({ error: error });
  }
};

const getnotifications = async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await NotiModal.find({ userid: req.params.id });
    let read = data?.filter((r) => {
      if (r?.isRead === true) {
        return r;
      }
    });
    let unRead = data?.filter((r) => {
      if (r?.isRead === false) {
        return r;
      }
    });

    res.send({
      read: read,
      unread: unRead,
      readcount: read?.length,
      unreadcount: unRead?.length,
    });
  } catch (error) {
    res.send({ Error: error });
  }
};

const deletenotification = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await NotiModal.findByIdAndRemove(id);
    res.send("Record Deleted Successfully");
  } catch (error) {
    res.send({
      Error: error,
    });
  }
};

module.exports = {
  updatenotification,
  getnotifications,
  deletenotification,
};
