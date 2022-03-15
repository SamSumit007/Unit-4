const express = require("express");

const User = require("../models/user.model");
const router = express.Router();

const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
const { sendMail, adminMail, confirmationMail } = require("../utilise");
router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);

    eventEmitter.on("user Regestered", confirmationMail);
    eventEmitter.emit("user Regestered", {
      from: "admin@gmail.com",
      to: user.email,
      user,
    });
    eventEmitter.on("newuser Regestered", adminMail);
    eventEmitter.emit("newuser Regestered", { from: "admin@gmail.com", user });

    return res.send(`mail sent ${user.email}`);
  } catch (e) {
    return res.send({ message: e.message });
  }
});
router.get("", async (req, res) => {
  try {
    const query = { gender: "Female" };
    const page = req.query.page || 1;
    const size = req.query.size || 5;

    const users1 = await User.find()
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();

    const total_pages = Math.ceil(
      (await User.find(query).countDocuments()) / size
    ); //last page number
    return res.send({ users1, total_pages }); //users:users
  } catch (e) {
    return res.send("error occured:", e.message);
  }
});
module.exports = router;
