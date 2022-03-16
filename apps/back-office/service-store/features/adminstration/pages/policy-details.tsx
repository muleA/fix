import AdminstrationSideBar from '../components/adminstration-sidebar';
import AdminstrationOptionHeader from '../components/adminstration-option-header';
import TermsandPolicyForm from '../components/terms-policy-form';
import AdminstrationSideTable from '../components/policy-side-table';
const PolicyDetails = () => {
  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <AdminstrationSideBar />
        <AdminstrationSideTable/>
        <div className="tw-w-9/12 tw-pl-4">
          <AdminstrationOptionHeader />
          <TermsandPolicyForm />
        </div>
      </div>
    </div>
  );
};

export default PolicyDetails;
