import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./chatReducer";
import petSlice from "./petReducer";

export const store = configureStore({
    reducer: {
        chats: chatReducer,
        pet: petSlice
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({}),
})