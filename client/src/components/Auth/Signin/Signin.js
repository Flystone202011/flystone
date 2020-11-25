import React from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";

const Signin = (props) => {
  const onSubmit = (formProps) => {
    props.signin(formProps, () => {
      props.history.push("/users");
    });
  };

  const { handleSubmit } = props;

  console.log(props);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>userId</label>
        <Field
          name="userId"
          type="text"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <div>{props.errorMessage}</div>
      <button>Sign in</button>
    </form>
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