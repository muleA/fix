import AdminstrationSideBar from '../../adminstration/components/adminstration-sidebar';
import AdminstrationOptionHeader from '../../adminstration/components/adminstration-option-header';
import CategoryForm from '../../service-category/components/service-category-details-form';
import CategorySideTable from '../components/service-category-side-table';
import { useRouter } from 'next/router';
const CategoryyDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <AdminstrationSideBar />
        <CategorySideTable />
        <div className="tw-w-9/12 tw-pl-4">
          <AdminstrationOptionHeader />
          <CategoryForm mode="update" id={id} />
        </div>
      </div>
    </div>
  );
};

export default CategoryyDetails;
