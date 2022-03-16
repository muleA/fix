import AdminstrationSideBar from '../components/adminstration-sidebar';
import { Card } from '@mantine/core';
import { IconInbox } from '@tabler/icons';
export default function PolicyList() {
  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <AdminstrationSideBar />
        <div className="tw-w-10/12 tw-pl-4">
          <div className="tw-w-full tw-min-h-screen ">
            <Card shadow="sm" padding="lg">
              <div className=" tw-flex tw-items-center  tw-justify-center tw-flex-col tw-min-h-[200px] ">
                <span className="tw-rounded-full tw-p-6 tw-bg-gray-200 tw-mb-4">
                  <IconInbox className="tw-flex" size={48} />
                </span>
                <h1 className="tw-text-lg">there is no chosen link</h1>
                <h6>please at least choose one link</h6>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
