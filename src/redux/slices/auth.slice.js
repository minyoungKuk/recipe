import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../supabaseClient";

const initialState = {
  user: null,
  error: null,
};
export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, nickname, password }, thunkAPI) => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      const { data, error: insertError } = await supabase
        .from("public.users")
        .insert([{ id: user.id, email, nickname }]);

      if (insertError) {
        throw insertError;
      }

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.user = null;
        state.error = action.payload;
      });
  },
});

export const { setUser, setError } = authSlice.actions;
export default authSlice.reducer;
