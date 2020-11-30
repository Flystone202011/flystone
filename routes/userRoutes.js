const userList = require("../controllers/user");

module.exports = (app) => {
  //ユーザー周りのAPI
  app
    .route("/api/users")
    .get(userList.all_users)
    .post(userList.create_users)
    .delete(userList.all_delete_user);

  app
    .route("/api/users/:id")
    .get(userList.search_users)
    .put(userList.update_user)
    .delete(userList.delete_user);

  app.route("/api/users/:page").get(userList.all_pagenation);

  app.route("/api/users/:page/:username").get(userList.search_pagenation);
};
