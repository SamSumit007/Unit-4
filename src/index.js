const express = require("express");
const app = express();

const userControllers = require("./controllers/user.controllers");
app.use("/users", userControllers);

const galleryController = require("./controllers/gallery.controller");
app.use("/gallery", galleryController);


app.use(express.json());


module.exports = app;
