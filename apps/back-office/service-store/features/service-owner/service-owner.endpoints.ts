const ServiceOwnersEndPoint = {
  getService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/service-owners/get-service-owner/{id}`,
  getServices: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/service-owners/get-service-owners`,
  createService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/service-owners/create-service-owner`,
  updateService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/service-owners/update-service-owner`,
  deleteService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/service-owners/delete-service-owner/{id}`,
};
export default ServiceOwnersEndPoint;
console.log(`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}`);
