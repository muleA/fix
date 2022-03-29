import AdminstrationSideBar from '../../adminstration/components/adminstration-sidebar';
import AdminstrationOptionHeader from '../../adminstration/components/adminstration-option-header';
import CategorySideTable from '../components/service-category-side-table';
import ServiceCategoryForm from '../components/service-category-details-form';
const NewServiceCategory = () => {
  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <AdminstrationSideBar />
        <CategorySideTable />
        <div className="tw-w-9/12 tw-pl-4">
          <AdminstrationOptionHeader />
          <ServiceCategoryForm mode={'new'} />
        </div>
      </div>
    </div>
  );
};

export default NewServiceCategory;
