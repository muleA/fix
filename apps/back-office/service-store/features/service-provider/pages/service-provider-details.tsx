import { Accordion, Group, Text } from '@mantine/core';
import ServiceProvidersSideTable from '../components/serviceprovider-side-table';
import ServiceOptionHeader from '../../../shared/components/service-store-option-header';
import ServiceProvidersDetailsForm from '../components/service-provider-details-form';
import ServiceDelegation from '../components/service-delegation-form';
import { useRouter } from 'next/router';
const ServiceProvidersDetailsPage = () => {
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
        <ServiceProvidersSideTable />
        <div className={` tw-w-9/12 tw-pl-4`}>
          <ServiceOptionHeader title="Service Provider Details" />

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
                    title="Service ProviderDetail"
                    subTitle="Modify  Service Provider "
                  />
                }
              >
                <ServiceProvidersDetailsForm mode="update" id={`${id}`} />
              </Accordion.Item>
              <Accordion.Item
                label={
                  <AccordionLabel
                    title="Service Delegation"
                    subTitle="add services to be delegated to this provider"
                  />
                }
              >
                <ServiceDelegation />
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvidersDetailsPage;
