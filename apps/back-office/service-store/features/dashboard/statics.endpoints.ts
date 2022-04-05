const ServiceStaticsEndpoints = {
  getPublicServices: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/services/get-public-services`,
  getPrivateServices: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/services/get-private-services`,
  getArchivedServices: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/services/get-public-services`,
  getPublishedServices: `${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/services/get-published-services`,
};
export default ServiceStaticsEndpoints;
