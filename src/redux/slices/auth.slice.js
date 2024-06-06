import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supabase from "../../supabaseClient";

const initialState = {
  user: null,
  error: null,
  isLoggedIn: false,
  isLoginOpen: false,
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password, nickname }, thunkAPI) => {
    try {
      const { data: user, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `https://www.naver.com/`,
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      const { data, error: insertError } = await supabase
        .from("users")
        .insert({ email, nickname, password })
        .single();

      if (insertError) {
        throw new Error(insertError.message);
      }

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const { data: user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error("로그인에 실패하였습니다. 다시 시도해주세요.");
      }

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signOut = createAsyncThunk("auth/signOut", async (_, thunkAPI) => {
  try {
    await supabase.auth.signOut();
    thunkAPI.dispatch(logout());
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
    },
    setError: (state, action) => {
      state.user = null;
      state.error = action.payload;
      state.isLoggedIn = false;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.isLoggedIn = false;
    },
    setIsLoginOpen: (state, action) => {
      state.isLoginOpen = action.payload;
    },
    setShowError: (state, action) => {
      state.showError = action.payload;
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
        alert(action.payload);
      });
  },
});

export const { setUser, setError, logout, setIsLoginOpen } = authSlice.actions;
export default authSlice.reducer;
