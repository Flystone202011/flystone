import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Welcome from "./components/Welcome/Welcome";
import Singup from "./components/Auth/Signup/Signup";
import Feature from "./components/Feature";
import Signout from "./components/Auth/Signout";
import Signin from "./components/Auth/Signin/Signin";
import UserList from "./components/userList.component";

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Singup} />
        <Route path="/users" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
        <Route path="/user" exact component={UserList}/>
      </Switch>
    </Layout>
  );
import {BrowserRouter as Router,Route} from "react-router-dom";

export default App;
  }