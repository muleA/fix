import { Accordion, Group, Text} from '@mantine/core';
import ServiceQualificationForm from './service-qualificationlist-form';
import ServiceInstructionForm from './service-instruction-form';
import ServiceDependencyForm from './service-dependency-form';
import ServiceRichContentForm from './service-rich-content-form';
import RelatedServiceForm from './related-service-form';
import SupportedLanguageForm from './supported-languages-form';
import { Button } from 'react-bootstrap';
import { IconShieldCheck } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const NewServiceForm = () => {
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
    <>
      <Accordion
        iconPosition="right"
        initialItem={0}
        className="tw-bg-white tw-mt-4"
        styles={{
          itemTitle: { borderBottom: '0.5px solid rgb(229 231 235)' },
        }}
      >
        <Accordion.Item label={<AccordionLabel />}>
          <div className="tw-my-4">
            <div className="tw-flex tw-items-center tw-mb-2">
              <span>Basic Service Informations</span>
            </div>
            <fieldset className="form-fieldset">
              <div className="mb-3">
                <label className="form-label required">Code</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="code"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label required">Generic Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="generic name"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label required">
                  FullyQualified Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="fullyQualified Name"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label required">Description</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="description"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label required">version</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="version"
                  autoComplete="off"
                />
              </div>
              <div>
                <Button className="bg-primary ">
                  <IconShieldCheck />
                  save
                </Button>
              </div>
            </fieldset>
          </div>
        </Accordion.Item>
      </Accordion>

      <ServiceQualificationForm />
      <ServiceInstructionForm />
      <ServiceDependencyForm />
      <ServiceRichContentForm />
      <RelatedServiceForm />
      <SupportedLanguageForm />
    </>
  );
};

export default NewServiceForm;
