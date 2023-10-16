import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://greenluxe-real-estate-server.onrender.com/api/v1",
  }),
  tagTypes: ["user"], // tags
  endpoints: (builder) => ({
    // get all user
    getUser: builder.query({
      query: () => "/user",
    }),
    // get one user
    getOneUser: builder.query({
      query: (userId) => `/user/${userId}`,
      providesTags: ["user"],
    }),
    // post user
    postUser: builder.mutation({
      query: (userData) => ({
        url: "/user",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useGetUserQuery, useGetOneUserQuery, usePostUserMutation } =
  userApi;
