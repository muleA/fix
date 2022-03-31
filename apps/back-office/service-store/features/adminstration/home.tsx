import { Card } from '@mantine/core';
import { IconInbox } from '@tabler/icons';
import AdminstrationSideBar from './components/adminstration-sidebar';

const AdminstrationHome = () => {
  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <AdminstrationSideBar />
        <Card className="tw-ml-4 tw-w-10/12" shadow="sm">
          <Card.Section className="tw-p-4 tw-min-h-[200px]">
            <div className="tw-h-[300px] tw-flex tw-flex-col tw-items-center tw-justify-center">
              <span className="tw-bg-gray-200 tw-rounded-full tw-p-6 tw-mb-4">
                <IconInbox className="tw-flex" color="gray" size={48} />
              </span>
              <p className="tw-text-lg tw-text-gray-500">
                There is no chosen link
              </p>
              <p className="tw-text-sm tw-text-gray-500">
                Please choose one of the items in the side menu.
              </p>
            </div>
          </Card.Section>
        </Card>
      </div>
    </div>
  );
};

export default AdminstrationHome;
