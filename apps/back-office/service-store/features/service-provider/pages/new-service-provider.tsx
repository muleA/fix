import { Accordion, Group, Text } from '@mantine/core';
import ServiceProvidersSideTable from '../components/serviceprovider-side-table';
import ServiceOptionHeader from '../../service/components/service-option-header';
import ServiceProvidersDetailsForm from '../components/new-service-provider-form';
const NewServiceProvidersPage = () => {
  const AccordionLabel = () => (
    <>
      <Group noWrap>
        <div>
          <Text>New Service Provider</Text>
          <Text size="sm" color="dimmed" weight={400}>
            Register new Service Provider
          </Text>
        </div>
      </Group>
    </>
  );

  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <ServiceProvidersSideTable />
        <div className={` tw-w-9/12 tw-pl-4`}>
          <ServiceOptionHeader title="New Service Provider" />

          <div className="tw-flex tw-items-start tw-mt-4">
            <Accordion
              initialItem={0}
              iconPosition="right"
              className={`tw-bg-white 
            tw-w-full
              `}
              styles={{
                itemTitle: { borderBottom: '0.5px solid rgb(229 231 235)' },
              }}
            >
              <Accordion.Item label={<AccordionLabel />}>
                <ServiceProvidersDetailsForm mode="new" />
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewServiceProvidersPage;
