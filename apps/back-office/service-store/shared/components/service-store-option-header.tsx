type ServiceStoreOptionHeaderProps = {
  title: string;
};
const ServiceStoreOptionHeader = (props: ServiceStoreOptionHeaderProps) => {

  return (
    <div className="tw-p-4 tw-flex tw-bg-white tw-justify-between">
      <span>
        {props.title}
      </span>
    </div>
  );
};

export default ServiceStoreOptionHeader;
