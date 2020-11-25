import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Signout = (props) => {
  useEffect(() => {
    props.signout();
  }, [props]);
  return <Redirect to="/" />;
};

export default connect(null, actions)(Signout);
