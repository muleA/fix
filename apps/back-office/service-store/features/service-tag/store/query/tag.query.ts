import { apiSlice } from '../../../../store/app.api';
import ServiceTag from '../../../../models/classification/tag';
import { ServiceTagEndPoints } from '../../service-tag.endpoints';
let updatedObject: ServiceTag;
let newObject: ServiceTag;
const ServiceTagApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getServiceTags: build.query<any, void>({
      query: () => ({
        url: ServiceTagEndPoints.getTags,
        method: 'GET',
      }),
    }),
    addNewServiceTag: build.mutation<any, any>({
      query: (newServiceTag) => {
        newObject = newServiceTag;
        return {
          url: ServiceTagEndPoints.createTag,
          method: 'POST',
          data: newServiceTag,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            ServiceTagApi.util.updateQueryData(
              'getServiceTags',
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

    updateServiceTag: build.mutation<any, any>({
      query: (updatedServiceTag) => {
        updatedObject = updatedServiceTag;
        return {
          url: `${ServiceTagEndPoints.updateTag}${updatedServiceTag.id}`,
          method: 'PUT',
          data: updatedServiceTag,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            ServiceTagApi.util.updateQueryData(
              'getServiceTags',
              undefined,
              (draft) => {
                const index = draft.data.findIndex(
                  (element: ServiceTag) => element.id === updatedObject.id
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

    /* delete service Tag begin here*/

    deleteServiceTag: build.mutation<any, any>({
      query: (id) => ({
        url: `${ServiceTagEndPoints.deleteTag}${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            ServiceTagApi.util.updateQueryData(
              'getServiceTags',
              undefined,
              (draft) => {
                draft.data = draft.data.filter(
                  (element: ServiceTag) => element.id !== id
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
  useGetServiceTagsQuery,
  useAddNewServiceTagMutation,
  useUpdateServiceTagMutation,
  useDeleteServiceTagMutation,
} = ServiceTagApi;
