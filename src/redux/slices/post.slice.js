import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../supabaseClient";

const SUPABASE_RECIPE_POSTS = "RECIPE_POSTS";

// Post create
export const createPost = createAsyncThunk(
  "posts/createPost",
  async (post, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from(SUPABASE_RECIPE_POSTS)
        .insert(post)
        .select();

      console.log(data);

      if (error) throw error;

      return data[0];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Posts Read
export const readPosts = createAsyncThunk(
  "posts/readPosts",
  async (_, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from(SUPABASE_RECIPE_POSTS)
        .select("*");

      if (error) throw error;

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Post Update
export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (changedPost, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from(SUPABASE_RECIPE_POSTS)
        .update(changedPost)
        .eq("id", changedPost.id)
        .select();

      if (error) throw error;

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Post Delete
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (deleteId, { rejectWithValue }) => {
    try {
      const { error } = await supabase
        .from(SUPABASE_RECIPE_POSTS)
        .eq("id", deleteId)
        .delete();

      if (error) throw error;

      return deleteId; // 삭제된 id 반환
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  posts: [],
  isPostLoading: false,
  errorMessage: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create
      .addCase(createPost.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isPostLoading = false;
        state.posts = [action.payload, ...state.posts];
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isPostLoading = false;
        state.errorMessage = action.error.message;
      })
      // read
      .addCase(readPosts.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(readPosts.fulfilled, (state, action) => {
        state.isPostLoading = false;
        state.posts = action.payload;
      })
      .addCase(readPosts.rejected, (state, action) => {
        state.isPostLoading = false;
        state.errorMessage = action.error.message;
      })
      // update
      .addCase(updatePost.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isPostLoading = false;
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isPostLoading = false;
        state.errorMessage = action.error.message;
      })
      // delete
      .addCase(deletePost.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isPostLoading = false;
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isPostLoading = false;
        state.errorMessage = action.error.message;
      });
  },
});

const postReducer = postSlice.reducer;
export default postReducer;
