import { apiSlice } from '../../../../store/app.api';
import Service from '../../../../models/publication/services/service';
import ServiceStaticsEndpoints from '../../statics.endpoints';

const serviceApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPublicServices: build.query<Service, any>({
      query: () => ({
        url: `${ServiceStaticsEndpoints.getPublicServices}`,
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetPublicServicesQuery } = serviceApi;
