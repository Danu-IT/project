import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import chatReducer from "./chatReducer";

export const store = configureStore({
    reducer: {
        chats: chatReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({}),
})