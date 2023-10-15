import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://greenluxe-real-estate-server.onrender.com/api/v1",
  }),
  tagTypes: ["properties"], // tags
  endpoints: (builder) => ({
    // get all properties
    getProperties: builder.query({
      query: () => "/properties",
    }),
    // get one Properties
    getOneProperty: builder.query({
      query: (propertyId) => `/properties/${propertyId}`,
      providesTags: ["properties"],
    }),
  }),
});

export const { useGetPropertiesQuery, useGetOnePropertyQuery } = propertyApi;
