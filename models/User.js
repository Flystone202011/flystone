const mongoose = require("mongoose");
const { Schema } = mongoose;

var aggregatePaginate = require("mongoose-aggregate-paginate-v2"); 

const userSchema = new Schema({
  userId: String,
  username: String,
  password: String,
});


userSchema.plugin(aggregatePaginate);
//module.exportsなかったので追加2020/11/19 野老
module.exports=mongoose.model("users", userSchema);
