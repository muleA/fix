import AdminstrationSideBar from '../components/adminstration-sidebar';
import AdminstrationOptionHeader from '../components/adminstration-option-header';
import ServiceTagForm from '../components/Tags-form';
import TagSideTable from '../components/tag-side-table';
const ServiceTagDetails = () => {
  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <AdminstrationSideBar />
        <TagSideTable />
        <div className="tw-w-9/12 tw-pl-4">
          <AdminstrationOptionHeader />
          <ServiceTagForm />
        </div>
      </div>
    </div>
  );
};

export default ServiceTagDetails;
