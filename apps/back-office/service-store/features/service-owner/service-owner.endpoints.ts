const ServiceOwnersEndPoint = {
  getServiceOwner: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-owners/get-service-owner/{id}`,
  getServiceOwners: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-owners/get-service-owners`,
  createServiceOwner: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-owners/create-service-owner`,
  updateServiceOwner: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-owners/update-service-owner`,
  deleteServiceOwner: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/service-owners/delete-service-owner/{id}`,
};
export default ServiceOwnersEndPoint;
