const jwt = require("jwt-simple");

const User = require("../models/User");
const keys = require("../config/keys");

const tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.secret);
};

exports.signin = (req, res, next) => {
  //User has already had their userId and password auth`d
  //We just need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = (req, res, next) => {
  const userId = req.body.userId;
  const password = req.body.password;

  if (!userId || !password) {
    return res
      .status(422)
      .send({ error: "You must provide userId and password" });
  }

  //See if a user with given userId exists
  User.findOne({ userId }, (err, existingUser) => {
    if (err) {
      return next(err);
    }

    //If a user with userId does exist,return an error
    if (existingUser) {
      return res.status(422).send({ error: "userId is in use" });
    }

    //If a user with userId does NOT exist,create and save record
    const user = new User({ userId, password });

    user.save((err) => {
      if (err) {
        return next(err);
      }
      //Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};
