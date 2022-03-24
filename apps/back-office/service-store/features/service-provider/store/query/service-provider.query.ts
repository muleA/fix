import { apiSlice } from '../../../../store/app.api';
import ServiceProvider from '../../../../models/publication/service-providers/service-provider';
import ServiceProvidersEndPoint from '../../service-providers.endpoints';
const ServiceProviderApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getServiceProviders: build.query<any, void>({
      query: () => ({
        url: ServiceProvidersEndPoint.getServiceProviders,
        method: 'GET',
      }),
    }),
    addNewServiceProvider: build.mutation<ServiceProvider, any>({
      query: (newServiceProvider) => ({
        url: ServiceProvidersEndPoint.createServiceProvider,
        method: 'POST',
        data: newServiceProvider,
      }),
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            ServiceProviderApi.util.updateQueryData(
              'getServiceProviders',
              undefined,
              (draft) => {
                draft.concat(data);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    updateServiceProvider: build.mutation<ServiceProvider, any>({
      query: (updatedServiceProvider) => ({
        url: ServiceProvidersEndPoint.updateServiceProvider,
        method: 'POST',
        data: updatedServiceProvider,
      }),
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            ServiceProviderApi.util.updateQueryData(
              'getServiceProviders',
              undefined,
              (draft) => {
                const index = draft.data.findIndex(
                  (element: ServiceProvider) => element.id === data.id
                );
                draft.data[index] = data;
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* delete service owner begin here*/

    deleteServiceProvider: build.mutation<any, any>({
      query: (id) => ({
        url: `${ServiceProvidersEndPoint.deleteServiceProvider}/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            ServiceProviderApi.util.updateQueryData(
              'getServiceProviders',
              undefined,
              (draft) => {
                draft = draft.data.filter(
                  (element: ServiceProvider) => element.id !== id
                );
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
    /*  */
  }),
  overrideExisting: false,
});
export const {
  useGetServiceProvidersQuery,
  useAddNewServiceProviderMutation,
  useUpdateServiceProviderMutation,
  useDeleteServiceProviderMutation,
} = ServiceProviderApi;
