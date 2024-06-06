import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import { modalReducer } from "./slices/modal.slice";
import postReducer from "./slices/post.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    posts: postReducer,
  },
});

export default store;
