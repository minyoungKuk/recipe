import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../supabaseClient";

const SUPABASE_RECIPE_POSTS = "RECIPE_POSTS";

// Post create
const createPost = createAsyncThunk(
  "posts/createPost",
  async (post, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from(SUPABASE_RECIPE_POSTS)
        .insert(post)
        .select();

      if (error) throw error;

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Post Read
const readPost = createAsyncThunk(
  "posts/readPost",
  async (postId, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from(SUPABASE_RECIPE_POSTS)
        .select()
        .eq("id", postId);

      if (error) throw error;

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  posts: [],
  isPostLoading: false,
  postError: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isPostLoading = false;
        state.posts = [action.payload, ...state.posts];
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isPostLoading = false;
        state.error = action.error.message;
      });
  },
});

const postReducer = postSlice.reducer;
export default postReducer;
