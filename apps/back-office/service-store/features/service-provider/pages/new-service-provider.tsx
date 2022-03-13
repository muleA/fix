import NewServiceProviderForm from '../components/new-service-provider-form'
import ServiceOptionHeader from "../../service/components/service-option-header";
import ServiceSideTable from '../components/serviceprovider-side-table';
export default function NewServiceProviderPage(){
    return (<>
<div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
              <ServiceSideTable/>  
                 <div className="tw-w-9/12 tw-pl-4">
                  <ServiceOptionHeader/>
                  <NewServiceProviderForm />
              </div>
            </div>
            
            
        </div>
    </>)
}