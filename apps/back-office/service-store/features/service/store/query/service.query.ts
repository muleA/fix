import { apiSlice } from '../../../../store/app.api';
import Service, {
  ServiceFee,
  ProcessingTime,
  SupportedLanguage,
  Media,
  ServiceDependency,
  ServiceResource,
} from '../../../../models/publication/services/service';
import ServiceDelegation from '../../../../models/publication/service-providers/service-provider';
import serviceEndpoints from '../../service.endpoints';
let updatedObject: Service;
let newObject: Service;
let newFee: ServiceFee;
let updatedFeeObject: ServiceFee;
let newProcessingTime: ProcessingTime;
let updatedProcessingTimeObject: ProcessingTime;
let newSupportedLanguage: SupportedLanguage;
let updatedSupportedLanguage: SupportedLanguage;
let newMedia: Media;
let updatedMediaObject: Media;
let newServiceDependency: ServiceDependency;
let updatedDependencyObject: ServiceDependency;
let NewServiceResource: ServiceResource;
let updatedResourceObject: ServiceResource;
const serviceApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query<any, any>({
      query: (search) => ({
        url: `${serviceEndpoints.getServices}?search=${search}`,
        method: 'GET',
      }),
    }),
    getServiceById: build.query<any, any>({
      query: () => ({
        url: `${serviceEndpoints.updateService}${updatedObject.id}`,
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
          console.log(data);
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
    /* service fee query begins */

    addNewServiceFee: build.mutation<any, any>({
      query: (newServiceFee) => {
        newFee = newServiceFee;
        return {
          url: `${serviceEndpoints.createServiceFee}${newServiceFee.id}`,
          method: 'POST',
          data: newServiceFee,
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
                  (element: Service) => element.id === newFee.serviceId
                );
                draft.data[index] = {
                  ...draft.data[index],
                  serviceFee: [...draft.data[index], newFee],
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

    updateServiceFee: build.mutation<any, any>({
      query: (option) => {
        updatedFeeObject = option;
        return {
          url: `${serviceEndpoints.updateServiceFee}${option.serviceId}/${option.id}`,
          method: 'PATCH',
          data: option,
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
                  (element: Service) =>
                    element.id === updatedFeeObject.serviceId
                );
                const feeIndex = draft.data[index].serviceFees.findIndex(
                  (element: ServiceFee) => element.id === updatedFeeObject.id
                );
                console.log(draft.data[index].serviceFees[feeIndex]);
                draft.data[index].serviceFees[feeIndex] = {
                  ...updatedFeeObject,
                };
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* delete service Fee begin here*/

    deleteServiceFee: build.mutation<any, { serviceId: string; feeId: string }>(
      {
        query: (option) => ({
          url: `${serviceEndpoints.deleteServiceFee}${option.serviceId}/${option.feeId}`,
          method: 'DELETE',
        }),
        async onQueryStarted(option, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled;
            dispatch(
              serviceApi.util.updateQueryData(
                'getServices',
                undefined,
                (draft) => {
                  draft.data = draft.data.filter(
                    (element: Service) => element.id !== option.serviceId
                  );
                }
              )
            );
          } catch (err) {
            console.log(err);
          }
        },
      }
    ),
    /*  */

    /* processing times */

    addNewProcessingTime: build.mutation<any, any>({
      query: (newProcessingTime) => {
        newFee = newProcessingTime;
        return {
          url: `${serviceEndpoints.createProcessingTime}${newProcessingTime.id}`,
          method: 'POST',
          data: {
            time: newProcessingTime.time,
            description: newProcessingTime.description,
            currency: newProcessingTime.currency,
          },
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
                  (element: Service) =>
                    element.id === newProcessingTime.serviceId
                );
                draft.data[index] = {
                  ...draft.data[index],
                  newProcessingTime: [...draft.data[index], newFee],
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

    updateProcessingTime: build.mutation<any, any>({
      query: (option) => {
        updatedProcessingTimeObject = option;
        return {
          url: `${serviceEndpoints.updateProcessingTime}${option.serviceId}/${option.id}`,
          method: 'PATCH',
          data: option,
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
                  (element: Service) =>
                    element.id === updatedProcessingTimeObject.serviceId
                );
                const processingTimeIndex = draft.data[
                  index
                ].serviceFees.findIndex(
                  (element: ProcessingTime) =>
                    element.id === updatedProcessingTimeObject.id
                );
                console.log(draft.data[index].serviceFees[processingTimeIndex]);
                draft.data[index].serviceFees[processingTimeIndex] = {
                  ...updatedProcessingTimeObject,
                };
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* delete service Fee begin here*/

    deleteProcessingTime: build.mutation<
      any,
      { serviceId: string; processingTimeId: string }
    >({
      query: (option) => ({
        url: `${serviceEndpoints.deleteProcessingTime}${option.serviceId}/${option.processingTimeId}`,
        method: 'DELETE',
      }),
      async onQueryStarted(option, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            serviceApi.util.updateQueryData(
              'getServices',
              undefined,
              (draft) => {
                draft.data = draft.data.filter(
                  (element: Service) => element.id !== option.serviceId
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

    /* supporteed language  Query */

    /* processing times */

    addNewSupportedLanguage: build.mutation<any, any>({
      query: (newSupportedLanguageObject) => {
        newSupportedLanguage = newSupportedLanguageObject;
        return {
          url: `${serviceEndpoints.addLanguage}${newSupportedLanguage.id}`,
          method: 'POST',
          data: newSupportedLanguage,
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
                  (element: Service) =>
                    element.id === newSupportedLanguage.serviceId
                );
                draft.data[index] = {
                  ...draft.data[index],
                  newSupportedLanguage: [...draft.data[index], newFee],
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

    updatedSupportedLanguage: build.mutation<any, any>({
      query: (option) => {
        updatedSupportedLanguage = option;
        return {
          url: `${serviceEndpoints.editLanguage}${option.serviceId}/${option.id}`,
          method: 'PATCH',
          data: option,
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
                  (element: Service) =>
                    element.id === updatedProcessingTimeObject.serviceId
                );
                const processingTimeIndex = draft.data[
                  index
                ].serviceFees.findIndex(
                  (element: ProcessingTime) =>
                    element.id === updatedProcessingTimeObject.id
                );
                console.log(draft.data[index].serviceFees[processingTimeIndex]);
                draft.data[index].serviceFees[processingTimeIndex] = {
                  ...updatedProcessingTimeObject,
                };
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* delete service Fee begin here*/

    deleteSupportedLanguage: build.mutation<
      any,
      { serviceId: string; languageId: string }
    >({
      query: (option) => ({
        url: `${serviceEndpoints.removeLanguage}${option.serviceId}/${option.languageId}`,
        method: 'DELETE',
      }),
      async onQueryStarted(option, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            serviceApi.util.updateQueryData(
              'getServices',
              undefined,
              (draft) => {
                draft.data = draft.data.filter(
                  (element: Service) => element.id !== option.serviceId
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

    /* service Media Query */

    addNewServiceMedia: build.mutation<any, any>({
      query: (newServiceMedia) => {
        newMedia = newServiceMedia;
        return {
          url: `${serviceEndpoints.addMedia}${newServiceMedia.id}`,
          method: 'POST',
          data: newServiceMedia,
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
                  (element: Service) => element.id === newMedia.serviceId
                );
                draft.data[index] = {
                  ...draft.data[index],
                  serviceMedia: [...draft.data[index], newMedia],
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

    updateServiceMedia: build.mutation<any, any>({
      query: (option) => {
        updatedMediaObject = option;
        return {
          url: `${serviceEndpoints.updateServiceMedia}${option.serviceId}/${option.id}`,
          method: 'PATCH',
          data: option,
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
                  (element: Service) =>
                    element.id === updatedMediaObject.serviceId
                );
                const MediaIndex = draft.data[index].serviceMedias.findIndex(
                  (element: Media) => element.id === updatedMediaObject.id
                );
                console.log(draft.data[index].serviceMedias[MediaIndex]);
                draft.data[index].serviceMedias[MediaIndex] = {
                  ...updatedMediaObject,
                };
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* delete service Media begin here*/

    deleteServiceMedia: build.mutation<
      any,
      { serviceId: string; mediaId: string }
    >({
      query: (option) => ({
        url: `${serviceEndpoints.deleteServiceMedia}${option.serviceId}/${option.mediaId}`,
        method: 'DELETE',
      }),
      async onQueryStarted(option, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            serviceApi.util.updateQueryData(
              'getServices',
              undefined,
              (draft) => {
                draft.data = draft.data.filter(
                  (element: Service) => element.id !== option.serviceId
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

    /* service Dependency */

    addNewServiceDependency: build.mutation<any, any>({
      query: (newDependency) => {
        newDependency = newServiceDependency;
        return {
          url: `${serviceEndpoints.addServiceDependency}${newServiceDependency.id}`,
          method: 'POST',
          data: newServiceDependency,
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
                  (element: Service) =>
                    element.id === newServiceDependency.serviceId
                );
                draft.data[index] = {
                  ...draft.data[index],
                  serviceDependency: [
                    ...draft.data[index],
                    newServiceDependency,
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

    updateServiceDependency: build.mutation<any, any>({
      query: (option) => {
        updatedDependencyObject = option;
        return {
          url: `${serviceEndpoints.editServiceDependency}${option.serviceId}/${option.id}`,
          method: 'PATCH',
          data: option,
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
                  (element: Service) =>
                    element.id === updatedDependencyObject.serviceId
                );
                const DependencyIndex = draft.data[
                  index
                ].serviceDependencys.findIndex(
                  (element: ServiceDependency) =>
                    element.id === updatedDependencyObject.id
                );
                console.log(
                  draft.data[index].serviceDependencys[DependencyIndex]
                );
                draft.data[index].serviceDependencys[DependencyIndex] = {
                  ...updatedDependencyObject,
                };
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* delete service Dependency begin here*/

    deleteServiceDependency: build.mutation<
      any,
      { serviceId: string; DependencyId: string }
    >({
      query: (option) => ({
        url: `${serviceEndpoints.removeServiceDependency}${option.serviceId}/${option.DependencyId}`,
        method: 'DELETE',
      }),
      async onQueryStarted(option, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            serviceApi.util.updateQueryData(
              'getServices',
              undefined,
              (draft) => {
                draft.data = draft.data.filter(
                  (element: Service) => element.id !== option.serviceId
                );
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* service resource */

    addNewServiceResource: build.mutation<any, any>({
      query: (newResource) => {
        newResource = NewServiceResource;
        return {
          url: `${serviceEndpoints.addServiceResource}${NewServiceResource.id}`,
          method: 'POST',
          data: NewServiceResource,
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
                  (element: Service) =>
                    element.id === NewServiceResource.serviceId
                );
                draft.data[index] = {
                  ...draft.data[index],
                  serviceResource: [...draft.data[index], NewServiceResource],
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

    updateServiceResource: build.mutation<any, any>({
      query: (option) => {
        updatedResourceObject = option;
        return {
          url: `${serviceEndpoints.editServiceResource}${option.serviceId}/${option.id}`,
          method: 'PATCH',
          data: option,
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
                  (element: Service) =>
                    element.id === updatedResourceObject.serviceId
                );
                const ResourceIndex = draft.data[
                  index
                ].serviceResources.findIndex(
                  (element: ServiceResource) =>
                    element.id === updatedResourceObject.id
                );
                console.log(draft.data[index].serviceResources[ResourceIndex]);
                draft.data[index].serviceResources[ResourceIndex] = {
                  ...updatedResourceObject,
                };
              }
            )
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),

    /* delete service Resource begin here*/

    deleteServiceResource: build.mutation<
      any,
      { serviceId: string; ResourceId: string }
    >({
      query: (option) => ({
        url: `${serviceEndpoints.removeServiceResource}${option.serviceId}/${option.ResourceId}`,
        method: 'DELETE',
      }),
      async onQueryStarted(option, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            serviceApi.util.updateQueryData(
              'getServices',
              undefined,
              (draft) => {
                draft.data = draft.data.filter(
                  (element: Service) => element.id !== option.serviceId
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
    /*////*/
  }),
  overrideExisting: false,
});
export const {
  /* processing time mutation */
  useDeleteProcessingTimeMutation,
  useAddNewProcessingTimeMutation,
  useUpdateProcessingTimeMutation,
  /*  */
  /* service mutation */
  useGetServicesQuery,
  useAddNewServiceMutation,
  useDeleteServiceMutation,
  useUpdateServiceMutation,
  useGetServiceByIdQuery,
  /*  */
  /* service Delegation mutation */
  useAddNewServiceFeeMutation,
  useDeleteServiceFeeMutation,
  useUpdateServiceFeeMutation,
  /*  */

  /* supported Language Mutation */
  useAddNewSupportedLanguageMutation,
  useDeleteSupportedLanguageMutation,
  useUpdatedSupportedLanguageMutation,

  /*  */

  /* service Resource */
  useAddNewServiceMediaMutation,
  useDeleteServiceMediaMutation,
  useUpdateServiceMediaMutation,

  /*  */

  /*  */
  useAddNewServiceDependencyMutation,
  useDeleteServiceDependencyMutation,
  useUpdateServiceDependencyMutation,
  /*  */

  useAddNewServiceResourceMutation,
  useDeleteServiceResourceMutation,
  useUpdateServiceResourceMutation,

  /*  */


} = serviceApi;
