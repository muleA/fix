import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../shared/utility/axios-base-query';


export const apiSlice = createApi({

  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});
