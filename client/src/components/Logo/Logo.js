import React from "react";
import { Link } from "react-router-dom";

import flystoneLogo from "../../assets/images/flystone-logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <Link to={props.isAuthenticated ? "/users" : "/"}>
        <img src={flystoneLogo} alt="FLYSTONE" />
      </Link>
    </div>
  );
};

export default Logo;
