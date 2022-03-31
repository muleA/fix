import { apiSlice } from '../../../../store/app.api';
import ServiceCategory from '../../../../models/classification/category';
import ServiceCategorysEndPoint from '../../category.endpoints';
let updatedObject: ServiceCategory;
let newObject: ServiceCategory;
const ServiceCategoryApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getServiceCategorys: build.query<any, void>({
      query: () => ({
        url: ServiceCategorysEndPoint.getCategorys,
        method: 'GET',
      }),
    }),
    addNewServiceCategory: build.mutation<any, any>({
      query: (newServiceCategory) => {
        newObject = newServiceCategory;
        return {
          url: ServiceCategorysEndPoint.createCategory,
          method: 'POST',
          data: newServiceCategory,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            ServiceCategoryApi.util.updateQueryData(
              'getServiceCategorys',
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

    updateServiceCategory: build.mutation<any, any>({
      query: (updatedServiceCategory) => {
        updatedObject = updatedServiceCategory;
        return {
          url: `${ServiceCategorysEndPoint.updateCategory}${updatedServiceCategory.id}`,
          method: 'PUT',
          data: updatedServiceCategory,
        };
      },
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            ServiceCategoryApi.util.updateQueryData(
              'getServiceCategorys',
              undefined,
              (draft) => {
                const index = draft.data.findIndex(
                  (element: ServiceCategory) => element.id === updatedObject.id
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

    /* delete service Category begin here*/

    deleteServiceCategory: build.mutation<any, any>({
      query: (id) => ({
        url: `${ServiceCategorysEndPoint.deleteCategory}${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            ServiceCategoryApi.util.updateQueryData(
              'getServiceCategorys',
              undefined,
              (draft) => {
                draft.data = draft.data.filter(
                  (element: ServiceCategory) => element.id !== id
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
  useGetServiceCategorysQuery,
  useAddNewServiceCategoryMutation,
  useUpdateServiceCategoryMutation,
  useDeleteServiceCategoryMutation,
} = ServiceCategoryApi;
