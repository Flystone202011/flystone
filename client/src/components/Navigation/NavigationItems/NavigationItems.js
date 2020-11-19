import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/users">Users</NavigationItem>
      <NavigationItem link="/auth">Authenticate</NavigationItem>
      <NavigationItem link="/logout">Login</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
