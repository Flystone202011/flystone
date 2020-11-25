import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";

import UserList from "./components/userList.component";

const App = (props) => {
  return(
    <Router>
      <Route path="/" exact component={UserList}/>
    </Router>
  )
};

export default App;
