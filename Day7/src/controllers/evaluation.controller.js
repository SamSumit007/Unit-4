const express = require("express");

const Evaluation = require("../models/evaluation.model");


const router = express.Router();

router.post("", async (req, res) => {
    try {
      const evaluation = await Evaluation.create(req.body);
  
      return res.send(evaluation);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  
  
  
  router.get("/:id", async (req, res) => {
    try {
      const user = await Evaluation.findById(req.params.id).lean().exec();
  
      if (user) {
        return res.send(evaluation);
      } else {
        return res.status(404).send({message: "evaluation not found"});
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });




module.exports = router;