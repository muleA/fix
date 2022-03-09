import OrganizationsSideTable from "../components/organizations-side-table";
import OrganizationOptionHeader from "../components/organization-option-header";
import NewOrganizationForm from "../components/new-organization-form";
const NewOrganizationPage = () => {

    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex">
              <OrganizationsSideTable/>  
              <div className="tw-w-9/12 tw-pl-4">
                  <OrganizationOptionHeader/>
                  <NewOrganizationForm/>
              </div>
            </div>
            
            
        </div>

    );

}

export default NewOrganizationPage;