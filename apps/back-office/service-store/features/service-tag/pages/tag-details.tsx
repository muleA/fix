import AdminstrationSideBar from '../../adminstration/components/adminstration-sidebar';
import AdminstrationOptionHeader from '../../../features/adminstration/components/adminstration-option-header';
import ServiceTagForm from '../components/service-tag-details-form';
import TagSideTable from '../components/service-tag-side-table';
import { useRouter } from 'next/router';
const ServiceTagDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <AdminstrationSideBar />
        <TagSideTable />
        <div className="tw-w-9/12 tw-pl-4">
          <AdminstrationOptionHeader />
          <ServiceTagForm mode="update" id={id} />
        </div>
      </div>
    </div>
  );
};

export default ServiceTagDetails;
