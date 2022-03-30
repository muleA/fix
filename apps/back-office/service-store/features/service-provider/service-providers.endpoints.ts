const ServiceprovidersEndPoint = {
  getServiceProvider: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/get-service-provider/`,
  getServiceProviders: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/get-service-providers`,
  createServiceProvider: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/create-service-provider`,
  updateServiceProvider: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/update-service-provider`,
  deleteServiceProvider: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/delete-service-provider/`,
};
export default ServiceprovidersEndPoint;
