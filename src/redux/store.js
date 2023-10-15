import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/auth/userSlice";
import { propertyApi } from "./features/properties/propertyApi";

export const store = configureStore({
  reducer: {
    [propertyApi.reducerPath]: propertyApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertyApi.middleware),
});
