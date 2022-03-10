import { Accordion, Text, Group, Modal } from '@mantine/core';
import { Button } from 'react-bootstrap';
import { IconShieldCheck, IconPlus } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const ServiceQualificationForm = () => {
  const [opened, setOpened] = useState(false);
  const [buttonValue, setButtonValue] = useState<'Collapse' | 'Expand'>(
    'Expand'
  );
  const AccordionLabel = () => (
    <>
      <Group noWrap>
        <div>
          <Text>Service Qualification Lists(Criterias)</Text>
          <Text size="sm" color="dimmed" weight={400}>
            Add Qualifiction Criteria
          </Text>
        </div>
        <div className="ml-auto">
          {buttonValue == 'Expand' ? (
            <Group position="center">
              <Button className="bg-primary" onClick={() => setOpened(true)}>
                <IconPlus />
                add Criteria
              </Button>
            </Group>
          ) : (
            ''
          )}
        </div>
      </Group>
    </>
  );

  return (
    <>
      <Accordion
        disableIconRotation
        offsetIcon={false}
        iconPosition="right"
        icon={
          <Button
            className=" tw-mr-10  tw-text-black"
            onClick={() => {
              const value = buttonValue == 'Expand' ? 'Collapse' : 'Expand';
              setButtonValue(value);
            }}
          >
            {buttonValue}
          </Button>
        }
        className="tw-bg-white tw-mt-4"
        styles={{
          itemTitle: { borderBottom: '0.5px solid rgb(229 231 235)' },
        }}
      >
        <Accordion.Item label={<AccordionLabel />}>
          <fieldset className="form-fieldset">
            <Modal
              centered
              size="md"
              opened={opened}
              onClose={() => setOpened(false)}
              title="Add Qualification Criteria"
            >
              <div className="mb-3">
                <label className="form-label required">Criteria Name </label>
                <textarea
                  className="form-control"
                  name="example-textarea"
                  placeholder="Qualificaiton Criteria List"
                ></textarea>
              </div>
              <div className="tw-mr-auto">
                <Button className="bg-primary">Done</Button>
              </div>
            </Modal>
          </fieldset>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default ServiceQualificationForm;
