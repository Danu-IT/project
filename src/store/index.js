import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { chatReducer } from "./chatsReducer";
// import { toggleReducer } from "./tooglerReducer";

export const store = createStore(chatReducer, composeWithDevTools(applyMiddleware()))