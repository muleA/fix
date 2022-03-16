const serviceEndpoints={
    getservices:`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}`,
    createservice:`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/create-service/`,
    updateservice:`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/update-service/`,
    deleteservice:`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/delete-service`,
    getservice:`${process.env.NEXT_PUBLIC_BACKEND_BASEURL}/get-service`, 
   }
export default serviceEndpoints;
