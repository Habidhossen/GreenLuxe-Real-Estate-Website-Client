import { auth } from "@/config/firebase.init";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

// Declare State Interface
const initialState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

// Create a new User by Firebase authentication
const createUser = createAsyncThunk(
  "user/createUser",
  async ({ name, email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(data.user, { displayName: name });
    return data.user.email;
  }
);

// Login a User by Firebase authentication
const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

// Login with Google Account
const loginWithGoogle = createAsyncThunk("user/loginWithGoogle", async () => {
  const provider = new GoogleAuthProvider();
  const data = await signInWithPopup(auth, provider);
  return data.user?.email;
});

// Create Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // For create user
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      // For login user
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      // For Google login
      .addCase(loginWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.user.email = action.payload;
        state.isLoading = false;
      })
      .addCase(loginWithGoogle.rejected, (state, action) => {
        state.user.email = null;
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
