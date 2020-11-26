import React from "react";
<<<<<<< HEAD
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Welcome from "./components/Welcome/Welcome";
import Singup from "./components/Auth/Signup/Signup";
import Feature from "./components/Feature";
import Signout from "./components/Auth/Signout";
import Signin from "./components/Auth/Signin/Signin";

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Singup} />
        <Route path="/users" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Layout>
  );
=======
import {BrowserRouter as Router,Route} from "react-router-dom";

import UserList from "./components/userList.component";

const App = (props) => {
  return(
    <Router>
      <Route path="/" exact component={UserList}/>
    </Router>
  )
>>>>>>> users
};

export default App;
