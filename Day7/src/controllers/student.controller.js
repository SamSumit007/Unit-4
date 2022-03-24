const express = require("express");

const Student = require("../models/student.model");


const router = express.Router();

router.get("", async (req, res) => {
    try {
      const students = await Student.find()
        .populate({ path: "student_id", select: "user" })
        .lean()
        .exec();
  
      return res.send(students);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const students = await Student.create(req.body);
  
      return res.send(students);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  




module.exports = router;