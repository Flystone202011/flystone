const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

const User = require("../models/User");
const keys = require("../config/keys");
const LocalStrategy = require("passport-local");

//Create local strategy
const localOptions = { usernameField: "userId" };
const localLogin = new LocalStrategy(localOptions, (userId, password, done) => {
  //Verify this userId and password,call done with the user
  //if it is the correct username and password
  //otherwise,call done with false
  User.findOne({ userId }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false);
    }

    //compare password - is `password` equal to user.password?
    user.comparePassword(password, (err, isMatch) => {
      if (err) {
        return done(err);
      }
      if (!isMatch) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
});

//Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: keys.secret,
};

//Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  //See if the user ID in the payload exists in our database
  //If it does,call `done` with that user
  //otherwise,call done without a user object
  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false);
    }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

//Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
