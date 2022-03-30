const serviceEndpoints = {
  getServices: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/get-services`,
  createService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/create-service`,
  updateService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/update-service/`,
  deleteService: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/delete-service/`,
};
export default serviceEndpoints;
