import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatReducer";

export const store = configureStore({
    reducer: {
        chats: chatReducer
    },
})