import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Welcome from "./components/Welcome/Welcome";
import Singup from "./components/Auth/Signup/Signup";
import Feature from "./components/Feature";
import Signout from "./components/Auth/Signout";
import Signin from "./components/Auth/Signin/Signin";

import userList from "./components/User/usersList/usersList";
import userNew from "./components/User/userForm/UserFormNew/userNew";
import userUpdate from "./components/User/userForm/UserFormUpdate/userUpdate";

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Singup} />
        <Route path="/users" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        <Route path="/userList" component={userList} />
        <Route path="/user/create" component={userNew} />
        <Route path="/user/edit/:id" component={userUpdate} />
      </Switch>
    </Layout>
  );
  }
export default App;