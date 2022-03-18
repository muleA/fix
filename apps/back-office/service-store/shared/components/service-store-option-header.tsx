import { Tooltip } from '@mantine/core';
import { IconArrowsMaximize } from '@tabler/icons';
type ServiceStoreOptionHeaderProps = {
  title: string;
};
const ServiceStoreOptionHeader = (props: ServiceStoreOptionHeaderProps) => {

  return (
    <div className="tw-p-4 tw-flex tw-bg-white tw-justify-between">
      <span>
        {props.title}
      </span>
      <div className="tw-flex">
        <Tooltip withArrow wrapLines label="Fullscreen" className="tw-mr-2">
          <IconArrowsMaximize className="tw-flex tw-cursor-pointer" size={16} />
        </Tooltip>
      </div>
    </div>
  );
};

export default ServiceStoreOptionHeader;
