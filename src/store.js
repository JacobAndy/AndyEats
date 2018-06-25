import promisemiddleware from "redux-promise-middleware";
import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./ducks/userReducer";

export default createStore(
  combineReducers({ userReducer }),
  applyMiddleware(promisemiddleware())
);
