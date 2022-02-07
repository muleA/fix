import { Get } from '@nestjs/common';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../../services/axios-base-query';
import { demoApi } from '../../../store/demoApi';
import Department from '../../../models/department';
import { DepartmentEndpoint } from './department.endpoint';
import Notification from '../../../shared/notification';
import { IconCircleCheck, IconInfoCircle } from '@tabler/icons';
import { render } from '@testing-library/react';

const departmentApi = demoApi.injectEndpoints({
  endpoints: (builder) => ({
    createDepartment: builder.mutation<any, Department>({
      query: (department: Department) => ({
        url: `${DepartmentEndpoint.creat}`,
        method: 'POST',
        data: department,
      }),
      async onQueryStarted(department, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(
            departmentApi.util.updateQueryData(
              'getDepartment',
              undefined,
              (draft) => {
                draft.items.push(data);
              }
            )
          );
          render(
            <Notification
              show={true}
              message={'Created successfully '}
              header={
                <div>
                  <IconCircleCheck className="text-green icon-lg" />
                  <strong className="ml-3">New Department</strong>
                </div>
              }
            />
          );
        } catch {
          /**
           * Alternatively, on failure you can invalidate the corresponding cache tags
           * to trigger a re-fetch:
           * dispatch(api.util.invalidateTags(['Post']))
           */
        }
      },
    }),
    getDepartment: builder.query<any, void>({
      query: () => ({
        url: `${DepartmentEndpoint.list}`,
        method: 'GET',
      }),
    }),
    getDepartmentById: builder.query<any, any>({
      query: (id: any) => ({
        url: `${DepartmentEndpoint.getById}/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: Department, meta, arg) => {
        return {
          id: `${response.id}`,
          name: `${response.name} transform`,
          description: `${response.description}`,
          parentDepartmentId: `${response.parentDepartmentId}`,
        };
      },
    }),
    updateDepartment: builder.mutation<any, Department>({
      query: (department: Department) => ({
        url: `${DepartmentEndpoint.update}`,
        method: 'POST',
        data: department,
      }),
      async onQueryStarted(unknown, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            departmentApi.util.updateQueryData(
              'getDepartment',
              undefined,
              (draft) => {
                const Index = draft.items.findIndex(
                  (item) => item.id === data.id
                );
                draft.items[Index] = data;
              }
            )
          );
        } catch {
          /**
           * Alternatively, on failure you can invalidate the corresponding cache tags
           * to trigger a re-fetch:
           * dispatch(api.util.invalidateTags(['Post']))
           */
        }
      },
    }),
    deleteDepartment: builder.mutation<any, any>({
      query: (id: any) => ({
        url: `${DepartmentEndpoint.delete}/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(
            departmentApi.util.updateQueryData(
              'getDepartment',
              undefined,
              (draft) => {
                draft.items = draft.items.filter((item) => item.id !== id);
              }
            )
          );
        } catch {
          /**
           * Alternatively, on failure you can invalidate the corresponding cache tags
           * to trigger a re-fetch:
           * dispatch(api.util.invalidateTags(['Post']))
           */
        }
      },
    }),
  }),
});

export const {
  useGetDepartmentQuery,
  useGetDepartmentByIdQuery,
  useUpdateDepartmentMutation,
  useCreateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
