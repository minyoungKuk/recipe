import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../supabaseClient";

// user
export const getUser = createAsyncThunk(
  "posts/readPosts",
  async (email, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .eq("email", email)
        .select();

      if (error) throw error;

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: [],
  isUserDataLoading: false,
  errorMessage: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isPostLoading = false;
        state.posts = action.payload;
        console.log(action.payload);
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isPostLoading = false;
        state.errorMessage = action.error.message;
      });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
