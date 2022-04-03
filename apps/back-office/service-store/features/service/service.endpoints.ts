const serviceEndpoints = {
  getServices: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/get-services`,
  getServiceById: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/get-service/`,
  createService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/create-service`,
  updateService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/update-service/`,
  deleteService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/delete-service/`,
  /*  service medias */

  createServiceFee: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/add-service-fee/`,
  updateServiceFee: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/edit-service-fee/`,
  deleteServiceFee: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/remove-service-fee/`,

  /* service fee endpoints */
  addServiceMedia: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/add-media/`,
  updateServiceMedia: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/edit-media/`,
  deleteServiceMedia: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/remove-media/`,

  /*  processing time endpoints */
  createProcessingTime: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/add-processing-time/`,
  updateProcessingTime: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/edit-processing-time/`,
  deleteProcessingTime: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/remove-processing-time/`,

  /*  */
  /* media endpoints */
  addMedia: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/add-media/`,
  editMedia: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/edit-media/`,
  deleteMedia: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/remove-media/`,
  /*  */
  /* service resource */

  addServiceResource: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/add-service-resource/`,
  editServiceResource: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/edit-service-resource/`,
  removeServiceResource: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/remove-service-resource/`,

  /* language endpoints */
  addLanguage: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/add-language/`,
  editLanguage: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/edit-language/`,
  removeLanguage: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/remove-language/`,

  /* service dependency endpoints */
  addServiceDependency: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/add-service-dependency/`,
  editServiceDependency: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/edit-service-dependency/`,
  removeServiceDependency: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/remove-service-dependency/`,
  /*  */

  /* service -delegation */

  createServiceDelegation: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/add-service-delegation/`,
  updateServiceDelegation: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/edit-service-delegation/`,
  deleteServiceDelegation: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/remove-service-delegation/`,

  /*  */
};
export default serviceEndpoints;
