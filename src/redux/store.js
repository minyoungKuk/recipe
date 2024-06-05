import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slices/modal.slice";
import postReducer from "./slices/post.slice";

const store = configureStore({
  reducer: {
    modal: modalReducer,
    posts: postReducer,
  },
});

export default store;
