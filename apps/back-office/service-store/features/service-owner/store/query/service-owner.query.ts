import { apiSlice } from '../../../../store/app.api';
import ServiceOwner from '../../../../models/publication/service-owners/service-owner';
import ServiceOwnersEndPoint from '../../service-owner.endpoints';
let updatedObject: ServiceOwner;
let newObject: ServiceOwner;
const ServiceOwnerApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getServiceOwners: build.query<any, void>({
      query: () => ({
        url: ServiceOwnersEndPoint.getServiceOwners,
        method: 'GET',
      }),
    }),
    addNewServiceOwner: build.mutation<any, any>({
      query: (newServiceOwner) => {
        newObject = newServiceOwner;
        return {
          url: ServiceOwnersEndPoint.createServiceOwner,
          method: 'POST',
          data: newServiceOwner,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            ServiceOwnerApi.util.updateQueryData(
              'getServiceOwners',
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

    updateServiceOwner: build.mutation<any, any>({
      query: (updatedServiceOwner) => {
        updatedObject = updatedServiceOwner;
        return {
          url: ServiceOwnersEndPoint.updateServiceOwner,
          method: 'PUT',
          data: updatedServiceOwner,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            ServiceOwnerApi.util.updateQueryData(
              'getServiceOwners',
              undefined,
              (draft) => {
                const index = draft.data.findIndex(
                  (element: ServiceOwner) => element.id === updatedObject.id
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

    /* delete service owner begin here*/

    deleteServiceOwner: build.mutation<any, any>({
      query: (id) => ({
        url: `${ServiceOwnersEndPoint.deleteServiceOwner}${id}`,
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
                draft.data = draft.data.filter(
                  (element: ServiceOwner) => element.id !== id
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
