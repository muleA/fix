import AdminstrationSideBar from '../components/adminstration-sidebar';
import AdminstrationOptionHeader from '../components/adminstration-option-header';
import LanguageForm from '../components/languages-form';
import SupportedLanguagesSideTable from '../components/supported-languages-side-table';
const SupportedLanguagesDetails = () => {
  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <AdminstrationSideBar />
        <SupportedLanguagesSideTable />
        <div className="tw-w-9/12 tw-pl-4">
          <AdminstrationOptionHeader />
          <LanguageForm />
        </div>
      </div>
    </div>
  );
};

export default SupportedLanguagesDetails;
