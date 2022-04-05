type ServiceStoreOptionHeaderProps = {
  title: string;
};
const ServiceStoreOptionHeader = (props: ServiceStoreOptionHeaderProps) => {
  return (
    <div className="tw-p-4 tw-flex tw-bg-white tw-font-xl tw-justify-between tw-font-bold">
      <span>{props.title}</span>
    </div>
  );
};

export default ServiceStoreOptionHeader;
