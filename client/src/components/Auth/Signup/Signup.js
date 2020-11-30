import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";
import classes from "../Auth.module.css";
import Button from "../../UI/Button/Button";

const Singup = (props) => {
  const onSubmit = (formProps) => {
    props.signup(formProps, () => {
      props.history.push("/users");
    });
  };

  const { handleSubmit } = props;

  return (
    <div className={classes.Auth}>
      <h3>Sign Up</h3>
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
        <Button btnType="Success">Sign up</Button>
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
  reduxForm({ form: "signup" })
)(Singup);
