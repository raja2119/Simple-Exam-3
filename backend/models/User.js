const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a username"],
  },
  email: {
    type: String,
    unique:true,
    trim: true,
    required: [true, "Please add a eemail"],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
  },
});

module.exports = mongoose.model("User", UserSchema);
