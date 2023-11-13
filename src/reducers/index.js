import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import loginLogout from "./loginLogout";

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: loginLogout,
});

export default rootReducer;
