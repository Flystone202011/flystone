import axios from "axios";
import * as actionTypes from "./types";

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post("/api/signup", formProps);

    dispatch({ type: actionTypes.AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: actionTypes.AUTH_ERROR, payload: "userId in use" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");

  return {
    type: actionTypes.AUTH_USER,
    payload: "",
  };
};

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post("/api/signin", formProps);

    dispatch({ type: actionTypes.AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: actionTypes.AUTH_ERROR,
      payload: "Invalid login credentials",
    });
  }
};
