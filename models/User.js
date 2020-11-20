const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  username: String,
  password: String,
});

//module.exportsなかったので追加2020/11/19 野老
module.exports=mongoose.model("users", userSchema);
