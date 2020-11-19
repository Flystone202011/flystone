import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Auth from "./containers/Auth";

const App = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth} />
      </Switch>
    </Layout>
  );
};

export default App;
