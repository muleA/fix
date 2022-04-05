import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import OrganizationSectionDetails from '../../organization-section/components/organization-section-details';


const SuperAdministrationOrganizationSectionDetailsPage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <div></div>
                <SuperAdministrationSideMenu />
                <div className='tw-ml-4 tw-grow'>
                   <OrganizationSectionDetails/> 
                </div>
                
            </div>


        </div>

    );

}

export default SuperAdministrationOrganizationSectionDetailsPage;