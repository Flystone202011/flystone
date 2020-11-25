import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import Button from "../../UI/Button/Button";
import * as actions from "../../../store/actions/auth";
import classes from "./Signin.module.css";

const Signin = (props) => {
  const onSubmit = (formProps) => {
    props.signin(formProps, () => {
      props.history.push("/users");
    });
  };

  const { handleSubmit } = props;

  return (
    <div className={classes.Auth}>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={classes.Label}>userId</label>
        <Field
          className={classes.InputElement}
          name="userId"
          type="text"
          component="input"
          autoComplete="none"
        />
        <label className={classes.Label}>Password</label>
        <Field
          className={classes.InputElement}
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
        <div style={{ color: "red" }}>{props.errorMessage}</div>
        <Button btnType="Success">Sign in</Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
  };
};

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signin" })
)(Signin);
