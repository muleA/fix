import AdminstrationSideBar from '../components/adminstration-sidebar';
import AdminstrationOptionHeader from '../components/adminstration-option-header';
import CategoryForm from '../components/category-form';
import CategorySideTable from '../components/category-side-table';
const PolicyDetails = () => {
  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <AdminstrationSideBar />
        <CategorySideTable />
        <div className="tw-w-9/12 tw-pl-4">
          <AdminstrationOptionHeader />
          <CategoryForm />
        </div>
      </div>
    </div>
  );
};

export default PolicyDetails;
