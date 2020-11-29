import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import userReducer from "./user";

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  user: userReducer,
});

export default rootReducer;
