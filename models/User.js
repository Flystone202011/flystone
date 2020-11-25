const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt-nodejs");

var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

//Define our model
const userSchema = new Schema({
  userId: { type: String, unique: true, lowercase: true },
  username: String,
  password: String,
});

//On Save Hook, encrypt password
//Before saving a model,run this function
userSchema.pre("save", function (next) {
  //generate a salt then run callback
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    //hash(encrypt) our password using the salt
    bcrypt.hash(this.password, salt, null, (err, hash) => {
      if (err) return next(err);

      //overwrite plain text password with encrypted password
      this.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

userSchema.plugin(aggregatePaginate);

//Create the model class
const ModelClass = mongoose.model("users", userSchema);

//Export the model
module.exports = ModelClass;
