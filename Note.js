const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  id: {
    type: String,
  },
  userid: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  dateadded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", noteSchema);
