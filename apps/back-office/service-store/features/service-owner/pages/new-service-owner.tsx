import { Accordion, Group, Text } from '@mantine/core';
import dynamic from 'next/dynamic'
const ServiceOwnerSideTable = dynamic(
  () => import('../components/serviceowner-side-table')
);
import ServiceOptionHeader from '../../../shared/components/service-store-option-header';
import ServiceOwnerDetailsForm from '../components/service-owner-details-form';
const NewServiceOwnerPage = () => {
  const AccordionLabel = () => (
    <>
      <Group noWrap>
        <div>
          <Text>New Service Owner</Text>
          <Text size="sm" color="dimmed" weight={400}>
            Register new Service Owner
          </Text>
        </div>
      </Group>
    </>
  );

  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <ServiceOwnerSideTable />
        <div className={` tw-w-9/12 tw-pl-4`}>
          <ServiceOptionHeader title="New Service" />

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
                <ServiceOwnerDetailsForm mode="new" />
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewServiceOwnerPage;
