import { apiSlice } from '../../../../store/app.api';
import ServiceProvider from '../../../../models/publication/service-providers/service-provider';
import ServiceProvidersEndPoint from '../../service-providers.endpoints';
let updatedObject: ServiceProvider;
let newObject: ServiceProvider;
const ServiceProviderApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getServiceProviders: build.query<any, void>({
      query: () => ({
        url: ServiceProvidersEndPoint.getServiceProviders,
        method: 'GET',
      }),
    }),
    addNewServiceProvider: build.mutation<any, any>({
      query: (newServiceProvider) => {
        newObject = newServiceProvider;
        return {
          url: ServiceProvidersEndPoint.createServiceProvider,
          method: 'POST',
          data: newServiceProvider,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            ServiceProviderApi.util.updateQueryData(
              'getServiceProviders',
              undefined,
              (draft) => {
                draft.data = [
                  ...draft.data,
                  {
                    id: data.data.id,
                    ...newObject,
                    createdAt: data.data.createdAt,
                    updatedAt: data.data.updatedAt,
                  },
                ];
                console.log(data);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    updateServiceProvider: build.mutation<any, any>({
      query: (updatedServiceProvider) => {
        updatedObject = updatedServiceProvider;
        return {
          url: ServiceProvidersEndPoint.updateServiceProvider,
          method: 'PUT',
          data: updatedServiceProvider,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            ServiceProviderApi.util.updateQueryData(
              'getServiceProviders',
              undefined,
              (draft) => {
                const index = draft.data.findIndex(
                  (element: ServiceProvider) => element.id === updatedObject.id
                );
                draft.data[index] = {
                  ...updatedObject,
                  createdAt: draft.data[index].createdAt,
                  updatedAt: `${new Date()}`,
                };
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* delete service Provider begin here*/

    deleteServiceProvider: build.mutation<any, any>({
      query: (id) => ({
        url: `${ServiceProvidersEndPoint.deleteServiceProvider}${id}`,
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
                draft.data = draft.data.filter(
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
