import React from "react";
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
        {/* ここの下に野老くんのコンポーネント入れる */}
        <Route path="/users" component={Feature} />
        <Route path="/signout" component={Signout} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Layout>
  );
};

export default App;
