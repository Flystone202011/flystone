module.exports = function(app) {
    let userList = require('../controllers/user.controll');
  
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