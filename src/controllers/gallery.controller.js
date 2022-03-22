const express = require("express");
const Gallery = require("../models/gallery.model");
const router = express.Router();

const upload = require("../middlewares/uploads")

router.post("", upload.any("pictures"), async (req, res) => {
  try {
    const files_paths = req.files.map((file) => file.path);

    const gallery = await Gallery.create({
      user_id: req.body.user_id,
      pictures_urls: files_paths,
    });
    res.send(gallery);
  } catch (e) {
    res.send({ error: e.message });
  }
});
router.get("", async (req, res) => {
  try {
    const gallery = await Gallery.find().lean().exec();
    res.send(gallery);
  } catch (e) {
    res.send({ error: e.message });
  }
});

module.exports = router;
