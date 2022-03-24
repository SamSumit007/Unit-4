const express = require("express");

const Submission = require("../models/submission.model");


const router = express.Router();


router.get("", async (req, res) => {
    try {
      const Submissions = await Submission.find()
        .populate({ path: "student_id", select: "user" })
        .lean()
        .exec();
  
      return res.send(Submissions);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const submission = await Submission.create(req.body);
  
      return res.send(submission);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  




module.exports = router;