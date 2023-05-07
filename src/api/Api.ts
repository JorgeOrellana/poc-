import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const API_BASE_URK = 'https://todo-service-0qq0.onrender.com/api/v1/';

export const Api = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URK}),
  tagTypes: ['Todos'],
  endpoints: () => ({}),
});