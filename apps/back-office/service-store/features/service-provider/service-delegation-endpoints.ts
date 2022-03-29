const ServiceDelegationsEndPoint = {
  getServiceDelegation: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-Delegations/get-service-Delegation/`,
  getServiceDelegations: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-Delegations/get-service-Delegations`,
  createServiceDelegation: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-Delegations/create-service-Delegation`,
  updateServiceDelegation: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-Delegations/update-service-Delegation`,
  deleteServiceDelegation: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-Delegations/delete-service-Delegation/`,
};
export default ServiceDelegationsEndPoint;
