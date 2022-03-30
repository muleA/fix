import { apiSlice } from '../../../../store/app.api';
import ServiceDelegation from '../../../../models/publication/service-providers/delegated-service';
import ServiceDelegationsEndPoint from '../../service-delegation-endpoints';

let updatedObject: ServiceDelegation;
let newObject: ServiceDelegation;
const ServiceDelegationApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getServiceDelegations: build.query<any, void>({
      query: () => ({
        url: ServiceDelegationsEndPoint.getServiceDelegations,
        method: 'GET',
      }),
    }),
    addNewServiceDelegation: build.mutation<ServiceDelegation, any>({
      query: (newServiceDelegation) => {
        newObject = newServiceDelegation;
        return {
          url: ServiceDelegationsEndPoint.createServiceDelegation,
          method: 'POST',
          data: newServiceDelegation,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            ServiceDelegationApi.util.updateQueryData(
              'getServiceDelegations',
              undefined,
              (draft) => {
                console.log(newObject);
                draft.data = [...draft.data, newObject];
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    updateServiceDelegation: build.mutation<ServiceDelegation, any>({
      query: (updatedServiceDelegation) => {
        updatedObject = updatedServiceDelegation;
        return {
          url: ServiceDelegationsEndPoint.updateServiceDelegation,
          method: 'PUT',
          data: updatedServiceDelegation,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            ServiceDelegationApi.util.updateQueryData(
              'getServiceDelegations',
              undefined,
              (draft) => {
                const index = draft.data.findIndex(
                  (element: ServiceDelegation) => element.id === updatedObject.id
                );
                draft.data[index] = updatedObject;
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* delete service Delegation begin here*/

    deleteServiceDelegation: build.mutation<any, any>({
      query: (id) => ({
        url: `${ServiceDelegationsEndPoint.deleteServiceDelegation}${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            ServiceDelegationApi.util.updateQueryData(
              'getServiceDelegations',
              undefined,
              (draft) => {
                draft.data = draft.data.filter(
                  (element: ServiceDelegation) => element.id !== id
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
  useGetServiceDelegationsQuery,
  useAddNewServiceDelegationMutation,
  useUpdateServiceDelegationMutation,
  useDeleteServiceDelegationMutation,
} = ServiceDelegationApi;
