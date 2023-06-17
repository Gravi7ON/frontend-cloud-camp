import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserProfile } from 'src/types/user-profile';

export const api = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
  }),
  tagTypes: ['Profile'],
  endpoints: (build) => ({
    createProfile: build.mutation<UserProfile, Partial<UserProfile>>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: UserProfile }) => response.data,
      transformErrorResponse: (response: { status: string | number }) =>
        response.status,
      invalidatesTags: ['Profile'],
    }),
  }),
});

export const { useCreateProfileMutation } = api;
