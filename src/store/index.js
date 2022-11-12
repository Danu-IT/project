import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { toggleReducer } from "./tooglerReducer";

export const store = createStore(toggleReducer, composeWithDevTools(applyMiddleware()))