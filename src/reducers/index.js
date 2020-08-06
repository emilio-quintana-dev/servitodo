import { combineReducers } from "redux";
import auth from "./auth";
import professionals from "./professionals";
import query from "./query";

export default combineReducers({
  auth: auth,
  professionals: professionals,
  query: query,
});
