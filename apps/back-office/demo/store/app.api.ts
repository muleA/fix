import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../services/axios-base-query'
// initialize an empty api service that we'll inject endpoints into later as needed
export const appApi = createApi({
  reducerPath: 'demoApi',
  baseQuery: axiosBaseQuery({ baseUrl: process.env.api }),
  endpoints: () => ({}),
})
