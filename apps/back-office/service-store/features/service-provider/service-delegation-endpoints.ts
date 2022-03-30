const ServiceDelegationsEndPoint = {
  addDelegatedService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/add-delegated-service`,
  updateDelegatedService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/api/service-providers/edit-delegated-service`,
  deleteDelegatedService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-providers/delete-delegated-service`,
};
export default ServiceDelegationsEndPoint;
