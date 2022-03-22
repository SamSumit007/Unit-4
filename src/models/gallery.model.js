const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
  user_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  pictures_urls: [{ required: true, type: String }],
});
module.exports = mongoose.model("gallery", gallerySchema);
