import { apiSlice } from '../../../../store/app.api';
import ServiceProvider from '../../../../models/publication/service-providers/service-provider';
import { DelegatedService } from '../../../../models/publication/service-providers/service-provider';
import ServiceProvidersEndPoint from '../../service-providers.endpoints';
let updatedObject: ServiceProvider;
let newObject: ServiceProvider;
let NewServiceDelegation: DelegatedService;
let updateDelegatedService: DelegatedService;
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
    addNewServiceDelegation: build.mutation<any, any>({
      query: (newDelegation) => {
        newDelegation = NewServiceDelegation;
        console.log(newDelegation);
        return {
          url: `${ServiceProvidersEndPoint.addDelegatedService}`,
          method: 'POST',
          data: newDelegation,
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
                  (element: DelegatedService) =>
                    element.id === NewServiceDelegation.id
                );
                draft.data[index] = {
                  ...draft.data[index],
                  serviceDelegation: [
                    ...draft.data[index],
                    NewServiceDelegation,
                  ],
                  createdAt: draft.data[index].createdAt,
                  updatedAt: `${new Date()}`,
                };
                console.log(data);
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    updateServiceDelegation: build.mutation<any, any>({
      query: (option) => {
        updateDelegatedService = option;
        return {
          url: `${ServiceProvidersEndPoint.updateDelegatedService}${option.serviceId}/${option.id}`,
          method: 'PATCH',
          data: option,
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
                  (element: DelegatedService) =>
                    element.id === updateDelegatedService.id
                );
                const DelegationIndex = draft.data[
                  index
                ].serviceDelegations.findIndex(
                  (element: DelegatedService) =>
                    element.id === updateDelegatedService.id
                );
                console.log(
                  draft.data[index].serviceDelegations[DelegationIndex]
                );
                draft.data[index].serviceDelegations[DelegationIndex] = {
                  ...updateDelegatedService,
                };
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* delete service Delegation begin here*/

    deleteServiceDelegation: build.mutation<
      any,
      { serviceId: string; DelegationId: string }
    >({
      query: (option) => ({
        url: `${ServiceProvidersEndPoint.deleteDelegatedService}${option.serviceId}/${option.DelegationId}`,
        method: 'DELETE',
      }),
      async onQueryStarted(option, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            ServiceProviderApi.util.updateQueryData(
              'getServiceProviders',
              undefined,
              (draft) => {
                draft.data = draft.data.filter(
                  (element: DelegatedService) => element.id !== option.serviceId
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

  /* service Delegation */
  useAddNewServiceDelegationMutation,
  useDeleteServiceDelegationMutation,
  useUpdateServiceDelegationMutation,

  /*  */
} = ServiceProviderApi;
