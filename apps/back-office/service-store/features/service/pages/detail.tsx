import { Accordion, Group, Text } from '@mantine/core';
import ServiceSideTable from '../components/service-side-table';
import ServiceOptionHeader from '../../../shared/components/service-store-option-header';
import ServiceDetailForm from '../components/service-details-form';
import ServiceFeeForm from '../components/service-fee-form';
import ServiceProcessingTimes from '../components/processing-times-form';
import ServiceDependecny from '../components/service-dependency-form';
import Media from '../components/service-media';
import ServiceSupportedLanguages from '../components/supported-languages-form';
import ServiceResourceForm from '../components/service-resource-form';
import { useRouter } from 'next/router';
const ServiceDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const AccordionLabel = (props: { title: string; subTitle: string }) => (
    <>
      <Group noWrap>
        <div>
          <Text>{props.title}</Text>
          <Text size="sm" color="dimmed" weight={400}>
            {props.subTitle}
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
          <ServiceOptionHeader title="Service Details" />

          <div className="tw-flex tw-items-start tw-mt-4">
            <Accordion
              initialItem={0}
              iconPosition="right"
              className="tw-bg-white 
               tw-w-full
              "
              styles={{
                item: { borderBottom: '1rem solid rgb(243 244 246)' },
                itemTitle: { borderBottom: '0.5px solid rgb(229 231 235)' },
              }}
            >
              <Accordion.Item
                label={
                  <AccordionLabel
                    title="Service Detail"
                    subTitle="Modify Service"
                  />
                }
              >
                <ServiceDetailForm mode="update" id={id} />
              </Accordion.Item>
              <Accordion.Item
                label={
                  <AccordionLabel
                    title="Service Fee"
                    subTitle="Add Service Fee"
                  />
                }
              >
                <ServiceFeeForm />
              </Accordion.Item>
              <Accordion.Item
                label={
                  <AccordionLabel
                    title="Service medias"
                    subTitle="Add Medias"
                  />
                }
              >
                <Media />
              </Accordion.Item>
              <Accordion.Item
                label={
                  <AccordionLabel
                    title="Service Processing Times"
                    subTitle="add processing time"
                  />
                }
              >
                <ServiceProcessingTimes />
              </Accordion.Item>
              <Accordion.Item
                label={
                  <AccordionLabel
                    title="Service Dependency"
                    subTitle="assign services which depend on this service "
                  />
                }
              >
                <ServiceDependecny />
              </Accordion.Item>
              <Accordion.Item
                label={
                  <AccordionLabel
                    title="Service Languages"
                    subTitle="assign Service Supported Languages"
                  />
                }
              >
                <ServiceSupportedLanguages />
              </Accordion.Item>
              <Accordion.Item
                label={
                  <AccordionLabel
                    title="Service Resource"
                    subTitle="add service source"
                  />
                }
              >
                <ServiceResourceForm />
              </Accordion.Item>

              <Accordion.Item
                label={
                  <AccordionLabel
                    title="Service Delegation"
                    subTitle="delegate this service to providers"
                  />
                }
              >
                <ServiceResourceForm />
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
