import { Accordion, Text, Group, Button } from '@mantine/core';
import { IconShieldCheck } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const ServiceQualificationForm = () => {
  const AccordionLabel = () => (
    <>
      <Group noWrap>
        <div>
          <Text>Service Qualification Lists(Criterias)</Text>
          <Text size="sm" color="dimmed" weight={400}>
            Add Qualifiction Criteria
          </Text>
        </div>
      </Group>
    </>
  );

  return (
    <>
      <Accordion
        iconPosition="right"
        className="tw-bg-white tw-mt-4"
        styles={{
          itemTitle: { borderBottom: '0.5px solid rgb(229 231 235)' },
        }}
      >
        <Accordion.Item label={<AccordionLabel />}>
          <fieldset className="form-fieldset">
            <div className="mb-3">
              <label className="form-label required">
                Qualification Criteria
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder="Criteria"
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
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default ServiceQualificationForm;
