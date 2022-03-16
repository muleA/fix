import {Tooltip } from '@mantine/core';
import {
  IconArrowsMaximize,

} from '@tabler/icons';
const AdminstrationOptionHeader = () => {
  return (
    <div className="tw-p-4 tw-flex tw-bg-white tw-justify-between">
      <span>
          Adminstration
      </span>
      <div className="tw-flex">
        <Tooltip withArrow wrapLines label="Fullscreen" className="tw-mr-2">
          <IconArrowsMaximize className="tw-flex tw-cursor-pointer" size={16} />
        </Tooltip>
      </div>
    </div>
  );
};

export default AdminstrationOptionHeader;
