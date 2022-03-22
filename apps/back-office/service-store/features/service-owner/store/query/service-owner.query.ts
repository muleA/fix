import { apiSlice } from '../../../../store/app.api';
import ServiceOwner from '../../../../models/publication/service-owners/service-owner';
import ServiceOwnersEndPoint from '../../service-owner.endpoints';

const ServiceOwnerApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getServiceOwners: build.query<any, void>({
      query: () => ({
        url: ServiceOwnersEndPoint.getServiceOwners,
        method: 'GET',
      }),
    }),
    addNewServiceOwner: build.mutation<ServiceOwner, any>({
      query: (newServiceOwner) => ({
        url: ServiceOwnersEndPoint.createServiceOwner,
        method: 'POST',
        data: newServiceOwner,
      }),
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            ServiceOwnerApi.util.updateQueryData(
              'getServiceOwners',
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

    updateServiceOwner: build.mutation<ServiceOwner, any>({
      query: (updatedServiceOwner) => ({
        url: ServiceOwnersEndPoint.updateServiceOwner,
        method: 'POST',
        data: updatedServiceOwner,
      }),
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            ServiceOwnerApi.util.updateQueryData(
              'getServiceOwners',
              undefined,
              (draft) => {
                const index = draft.items.findIndex(
                  (element: ServiceOwner) =>
                    element.organizationId === data.organizationId
                );
                draft.items[index] = data;
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* delete service owner begin here*/

    deleteServiceOwner: build.mutation<any, any>({
      query: (id) => ({
        url: `${ServiceOwnersEndPoint.deleteServiceOwner}/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            ServiceOwnerApi.util.updateQueryData(
              'getServiceOwners',
              undefined,
              (draft) => {
                draft.items = draft.items.filter(
                  (element: ServiceOwner) => element.organizationId !== id
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
  useGetServiceOwnersQuery,
  useAddNewServiceOwnerMutation,
  useUpdateServiceOwnerMutation,
  useDeleteServiceOwnerMutation,
} = ServiceOwnerApi;
