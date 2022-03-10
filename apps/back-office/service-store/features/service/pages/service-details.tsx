import ServiceQualificationForm from '../../../features/service/components/service-qualificationlist-form';
import ServiceInstructionForm from '../../../features/service/components/service-instruction-form';
import ServiceDependencyForm from '../../../features/service/components/service-dependency-form';
import ServiceRichContentForm from '../../../features/service/components/service-rich-content-form';
import RelatedServiceForm from '../../../features/service/components/related-service-form';
import SupportedLanguageForm from '../../../features/service/components/supported-languages-form';
import ServiceSideTable from '../components/service-side-table';
import ServiceOptionHeader from '../components/service-option-header';
import NewServiceForm from '../components/new-service-form';
const ServiceDetails = () => {
  return (
    <>
      <div className="tw-w-full tw-min-h-screen tw-p-4">
        <div className="tw-flex tw-items-start">
          <ServiceSideTable />
          <div className="tw-w-9/12 tw-pl-4">
            <ServiceOptionHeader />
            <NewServiceForm />
            <ServiceQualificationForm />
            <ServiceInstructionForm />
            <ServiceDependencyForm />
            <ServiceRichContentForm />
            <RelatedServiceForm />
            <SupportedLanguageForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
