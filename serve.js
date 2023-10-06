const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Note = require("./Note");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const { ReturnDocument } = require("mongodb");
const { where } = require("./Note");
mongoose
  .connect(
    "mongodb+srv://tanujsaini778899:gAXkxelgLnENN5Lm@cluster0.wvpe7e8.mongodb.net/notesdb"
  )
  .then(function () {
    app.get("/", function (req, res) {
      res.send("This is home ");
    });
    app.get("/notes/list/:userid", async function (req, res) {
      var notes = await Note.find({ userid: req.params.userid });
      res.json(notes);
    });

    app.post("/notes/add", async function (req, res) {
      //res.json(req.body);
      await Note.deleteOne({
        id: req.body.id,
      });
      var newnotes = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
      });
      await newnotes.save();

      const response = { message: "New Note Created!" };
      res.json(response); //to print on web
    });
  });

app.listen(2000, function () {
  console.log("server has started");
});
console.log("hello Node js");
