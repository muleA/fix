const serviceEndpoints = {
  getservices: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/get-services`,
  createservice: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/create-service`,
  updateservice: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/update-service/`,
  deleteservice: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}api/services/delete-service/`,
};
export default serviceEndpoints;
