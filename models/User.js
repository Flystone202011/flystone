const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  username: String,
  password: String,
});

mongoose.model("users", userSchema);
