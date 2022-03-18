import { Accordion, Group, Text } from '@mantine/core';
import ServiceSideTable from '../components/service-side-table';
import ServiceOptionHeader from '../components/service-option-header';
import ServiceDetailForm from '../components/service-details-form';

const NewServicePage = () => {
  const AccordionLabel = () => (
    <>
      <Group noWrap>
        <div>
          <Text>New Service</Text>
          <Text size="sm" color="dimmed" weight={400}>
            Register new Service
          </Text>
        </div>
      </Group>
    </>
  );

  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <ServiceSideTable />
        <div className={` tw-w-9/12 tw-pl-4`}>
          <ServiceOptionHeader title="Service" />

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
                <ServiceDetailForm mode="new" />
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewServicePage;
