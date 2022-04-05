import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import MandateDetails from '../../mandate/components/mandate-details';


const SuperAdministrationMandateDetailsPage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <SuperAdministrationSideMenu />
                <div className='tw-ml-4 tw-grow'>
                   <MandateDetails/> 
                </div>
                
            </div>


        </div>

    );

}

export default SuperAdministrationMandateDetailsPage;