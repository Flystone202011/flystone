const Authentication = require("../controllers/authentication");
const passportService = require("../services/passport");
const passport = require("passport");
const userList = require('../controllers/user.controll');

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = (app) => {
  app.get("/", requireAuth, (req, res) => {
    res.send({ hi: "there" });
  });

  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);

  //ユーザー周りのAPI
  app.route('/users')
      .get(userList.all_users)
      .post(userList.create_users)
      .delete(userList.all_delete_user);

    app.route("/users/:id")
        .get(userList.search_users)
        .put(userList.update_user)
        .delete(userList.delete_user);
    
    app.route("/users/:page")
        .get(userList.all_pagenation);

    app.route("/users/:page/:username")
        .get(userList.search_pagenation);
};
