import * as actionTypes from "../actions/types";

const INITIAL_STATE = {
  authenticated: "",
  errorMessage: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTH_USER:
      return { ...state, authenticated: action.payload, errorMessage: "" };
    case actionTypes.AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default reducer;
