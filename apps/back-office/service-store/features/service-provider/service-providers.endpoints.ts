const ServiceprovidersEndPoint = {
  getServiceProvider: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/get-service-provider/`,
  getServiceProviders: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/get-service-providers`,
  createServiceProvider: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/create-service-provider`,
  updateServiceProvider: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/update-service-provider`,
  deleteServiceProvider: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/delete-service-provider/`,
  /*  */
  addDelegatedService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/add-delegated-service`,
  updateDelegatedService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/api/service-providers/edit-delegated-service`,
  deleteDelegatedService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/delete-delegated-service`,
  /*  */
};
export default ServiceprovidersEndPoint;
