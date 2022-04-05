import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import OrganizationSectionList from '../../organization-section/components/organization-section-list';


const SuperAdministrationOrganizationSectionPage = () => {


    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <SuperAdministrationSideMenu />
                <div className="tw-ml-4 tw-grow">
                    <OrganizationSectionList />
                </div>
            </div>


        </div>

    );

}

export default SuperAdministrationOrganizationSectionPage;