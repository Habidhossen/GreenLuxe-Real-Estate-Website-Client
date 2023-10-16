import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./features/auth/userApi";
import userReducer from "./features/auth/userSlice";
import { propertyApi } from "./features/properties/propertyApi";

export const store = configureStore({
  reducer: {
    [propertyApi.reducerPath]: propertyApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, propertyApi.middleware),
});
