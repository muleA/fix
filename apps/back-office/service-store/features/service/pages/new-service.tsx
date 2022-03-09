import ServiceSideTable from "../components/service-side-table";
import ServiceOptionHeader from "../components/service-option-header";
import NewServiceForm from "../components/new-service-form";
const NewServicePage = () => {

    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
              <ServiceSideTable/>  
              <div className="tw-w-9/12 tw-pl-4">
                  <ServiceOptionHeader/>
                  <NewServiceForm/>
              </div>
            </div>
            
            
        </div>

    );

}

export default NewServicePage;