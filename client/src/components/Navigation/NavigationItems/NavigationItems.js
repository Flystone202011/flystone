import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  console.log(props.isAuthenticated);
  return (
    <ul className={classes.NavigationItems}>
      {props.isAuthenticated && (
        <>
          <NavigationItem link="/signout">Sign Out</NavigationItem>
          <NavigationItem link="/userList">Users</NavigationItem>
        </>
      )}
      {props.isAuthenticated || (
        <>
          <NavigationItem link="/signup">Sign Up</NavigationItem>
          <NavigationItem link="/signin">Sign In</NavigationItem>
        </>
      )}
    </ul>
  );
};

export default NavigationItems;
