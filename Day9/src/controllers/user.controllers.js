const express = require("express");
const { validationResult, body } = require("express-validator");

const { find } = require("../models/user.model");
const User = require("../models/user.model");
const router = express.Router();
console.log(body("id"));

// first_name => required
// last_name => required
// email => required and should be a valid email
// pincode => required and should be exactly 6 numbers
// age => required and should be between 1 and 100.
// gender => required and should be either Male, Female or Others
router.post(
  "",
  
  body("first_name").isString().withMessage("first_name should be string"),
  body("last_name").isString().withMessage("last_name should be string"),
  body("email").isEmail().withMessage("enter valid mail"),
  body("pincode")
    .isNumeric()
    .isLength(6)
    .withMessage("pincode should be 6 numaric digits"),
  body("age")
    .isNumeric()
    .withMessage("enter valid age")
    .custom((value) => {
      if (value >= 1 && value <= 100) {
        return "valid age";
      } else {
        throw new Error("age should be between 1 to 100");
      }
    }),
  body("gender")
    .notEmpty()
    .isString()
    .withMessage("gender should be string and that to Male OR Female OR Others")
    .custom((value) => {
      if (value !== "Female" && value !== "Male" && value !==  "Others") {
      
        throw new Error("gender should be either Female or Male or others");
      }
      
    else {
      return true;
    }
    }),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      // errors=[];
      // console.log(body("id"));

      // if (!errors.isEmpty()) {
      //     let newErrors;
      //     newErrors = errors.array().map((err) => {
      //       console.log("err", err);
      //       return { key: err.param, message: err.msg };
      //     });
      //     return res.status(400).send({ errors: newErrors });
      //   }
      if (!errors.isEmpty()) {
        let newErrors = errors.array();

        let e = newErrors.map((err) => {
          console.log(err);
          return { key: err.param, message: err.msg };
        });
        return res.send({ errors: e });
      }
      // let users = await User.create(req.body);

      res.send("no error");
    } catch (e) {
      res.send({ "error:": e.message });
    }
  }
);
router.get("", async (req, res) => {
  try {
    let users = await User.find().lean().exec();
    res.send(users);
  } catch (e) {
    res.send({ "error:": e.message });
  }
});

module.exports = router;
