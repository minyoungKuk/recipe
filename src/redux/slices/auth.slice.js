import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../supabaseClient";

const initialState = {
  user: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : null,
  error: null,
  isLoggedIn: sessionStorage.getItem("isLoggedIn") === "true",
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password, nickname }, thunkAPI) => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `https://www.naver.com/`,
        },
      });

      // TODO: sign up error new error로 다시 처리하기.
      if (error) {
        throw error;
      }

      const { data, error: insertError } = await supabase
        .from("users")
        .insert({ email, nickname, password })
        .single();

      // TODO: sign up error new error로 다시 처리하기.
      if (insertError) {
        throw Error;
      }

      // return user;
    } catch (error) {
      console.log("error ", error);

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log("error", error);
      if (error) {
        throw error;
      }

      // return user;
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk("auth/signOut", async (_, thunkAPI) => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.log("error", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.isLoggedIn = true;
      sessionStorage.setItem("user", JSON.stringify(action.payload));
      sessionStorage.setItem("isLoggedIn", "true");
    },
    setError: (state, action) => {
      state.user = null;
      state.error = action.payload;
      state.isLoggedIn = false;
      sessionStorage.removeItem("user");
      sessionStorage.setItem("isLoggedIn", "false");
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.isLoggedIn = false;
      sessionStorage.removeItem("user");
      sessionStorage.setItem("isLoggedIn", "false");
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.user = null;
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.user = null;
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
        state.error = null;
        state.isLoggedIn = false;
        sessionStorage.removeItem("user");
        sessionStorage.setItem("isLoggedIn", "false");
      })
      .addCase(signOut.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { setUser, setError, logout } = authSlice.actions;
export default authSlice.reducer;
