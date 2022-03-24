const express = require("express");

const Student = require("../models/student.model");


const router = express.Router();

router.get("/students", async (req, res) => {
    try {
      const students = await Students.find()
        .populate({ path: "student_id", select: "user" })
        .lean()
        .exec();
  
      return res.send(students);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.post("/students", async (req, res) => {
    try {
      const students = await Student.create(req.body);
  
      return res.send(students);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  




module.exports = router;