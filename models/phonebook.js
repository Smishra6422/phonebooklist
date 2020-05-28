const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phoneBookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    dob: {
      type: String,
      maxlength: 20,
    },
    mobile: {
      type: String,
      required: true,
      maxlength: 15,
      unique: true,
    },
    alternate_mobile: {
      type: String,
      maxlength: 15,
      default: "",
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      unique: true,
    },
    alternate_email: {
      type: String,
      maxlength: 50,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Phonebook", phoneBookSchema);
