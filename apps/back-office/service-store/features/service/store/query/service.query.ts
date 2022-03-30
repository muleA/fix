import { apiSlice } from '../../../../store/app.api';
import Service from '../../../../models/publication/services/service';
import serviceEndpoints from '../../service.endpoints';
let updatedObject: Service;
let newObject: Service;
const serviceApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query<any, string>({
      query: (search = '') => ({
        url: `${serviceEndpoints.getServices}?search=${search}`,
        method: 'GET',
      }),
    }),
    addNewService: build.mutation<any, any>({
      query: (newService) => {
        newObject = newService;
        return {
          url: serviceEndpoints.createService,
          method: 'POST',
          data: newService,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            serviceApi.util.updateQueryData(
              'getServices',
              undefined,
              (draft) => {
                draft.data = [
                  ...draft.data,
                  {
                    id: data.data.id,
                    ...newObject,
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

    updateService: build.mutation<any, any>({
      query: (updatedService) => {
        updatedObject = updatedService;
        return {
          url: `${serviceEndpoints.updateService}${updatedService.id}`,
          method: 'PUT',
          data: updatedService,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            serviceApi.util.updateQueryData(
              'getServices',
              undefined,
              (draft) => {
                const index = draft.data.findIndex(
                  (element: Service) => element.id === updatedObject.id
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

    /* delete service  begin here*/

    deleteService: build.mutation<any, any>({
      query: (id) => ({
        url: `${serviceEndpoints.deleteService}${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            serviceApi.util.updateQueryData(
              'getServices',
              undefined,
              (draft) => {
                draft.data = draft.data.filter(
                  (element: Service) => element.id !== id
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
});
export const {
  useGetServicesQuery,
  useAddNewServiceMutation,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
} = serviceApi;
