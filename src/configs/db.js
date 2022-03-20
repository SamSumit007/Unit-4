const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb://localhost:27017/web-15"
  );
};

module.exports = connect;
