import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

const Signout = (props) => {
  useEffect(() => {
    props.signout();
  }, [props]);
  return <div>Sorry to see you go</div>;
};

export default connect(null, actions)(Signout);
