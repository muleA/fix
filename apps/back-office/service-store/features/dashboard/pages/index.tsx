import PublicServices from "../components/public-services";
import PrivateServices from "../components/private-services";
import TotalServicesWithOwners from '../components/service-with-owners'
import TotalServicesWithProviders from '../components/service-with-providers'
import DownloadedApplicationForms from "../components/downloaded-application-forms";
import ApprovedServiceProfile from '../components/approved-service-profile'
import AdjustedServiceProfile from "../components/adjusted-service-profile";
import RejectedServiceProfile from "../components/rejected-service-profile";

import Header from '../components/home'
export default function Dashboard() {

  return (
    <>

            <Header />
            <div className="md:tw-flex">
               <PublicServices />
               <PrivateServices/>
               <TotalServicesWithOwners/>
            </div>
            <div className="md:tw-flex">
               <TotalServicesWithProviders/>
               <DownloadedApplicationForms/>
                <ApprovedServiceProfile/>
               </div>

               <div className="md:tw-flex">
               <RejectedServiceProfile/>
                <AdjustedServiceProfile/>
               </div>


     
    </>
  );
}
