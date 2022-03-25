import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import NewOrganizationSection from '../../organization-section/components/new-organization-section';


const SuperAdministrationNewOrganizationSectionPage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <div></div>
                <SuperAdministrationSideMenu />
                <div className='tw-ml-4 tw-grow'>
                   <NewOrganizationSection/> 
                </div>
                
            </div>


        </div>

    );

}

export default SuperAdministrationNewOrganizationSectionPage;