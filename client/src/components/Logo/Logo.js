import React from "react";

import flystoneLogo from "../../assets/images/flystone-logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={flystoneLogo} alt="FLYSTONE" />
    </div>
  );
};

export default Logo;
