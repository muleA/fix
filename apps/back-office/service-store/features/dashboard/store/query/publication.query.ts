import { apiSlice } from '../../../../store/app.api';
 import Service from '../../../../models/publication/services/service';
  import serviceEndpoints from '../../publication.endpoints';

const serviceApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query<any, any>({
      query: (setPage=1) => ({ url: `${serviceEndpoints.getservices}?page=${setPage}&_limit=${10}`, method: 'GET' }),
    }),
    createService: build.mutation<any, any>({
      query: (newService) => ({
        url: serviceEndpoints.createservice,
        method: 'POST',
        data: newService,
      }),
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            serviceApi.util.updateQueryData(
              'getServices',
              undefined,
              (draft) => {
                draft.items.push(data);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
export const { useGetServicesQuery,useCreateServiceMutation } = serviceApi;