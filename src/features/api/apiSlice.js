import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63e960e8b120461c6bef046e.mockapi.io/api/v1/',
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => 'users',
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi