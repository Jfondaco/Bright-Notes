const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    id: Number,
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    picture:{
        type: String,
        required: true
    } 
  },
  { timestamps: true }
);

var DBBook = mongoose.model("Book", BookSchema);
module.exports = DBBook;