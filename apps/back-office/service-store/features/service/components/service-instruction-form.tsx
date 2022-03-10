import { Accordion, Group, Text, Divider } from '@mantine/core';
import { Button } from 'react-bootstrap';
import { IconCircleCheck, IconEditCircle, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AccordionControlButton from './accordion-control-button'
const ServiceInstructionForm = () => {
  const AccordionLabel = () => (
    <>
      <Group noWrap>
        <div>
          <Text>Service Instruction</Text>
          <Text size="sm" color="dimmed" weight={400}>
            Add Instruction regarding service requisition & delivery
          </Text>
        </div>
      </Group>
    </>
  );

  return (
    <Accordion disableIconRotation offsetIcon={false} iconPosition="right"
    icon={<AccordionControlButton/>}
      className="tw-bg-white tw-mt-4"
      styles={{
        itemTitle: { borderBottom: '0.5px solid rgb(229 231 235)' },
      }}
    >
      <Accordion.Item label={<AccordionLabel />}>
        <fieldset className="form-fieldset">
          <div className="mb-3">
            <label className="form-label required">Procedure</label>
            <input
              type="text"
              className="form-control"
              placeholder="procedure"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">Processing Time(month/week/day/</label>
            <input
              type="text"
              className="form-control"
              placeholder="processing Time"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">Service Fee </label>
            <input
              type="text"
              className="form-control"
              placeholder="Service Fee"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">Target Customers</label>
            <input
              type="text"
              className="form-control"
              placeholder="Target Customers"
              autoComplete="off"
            />
          </div>
          <div>
            <Button className="bg-primary ">
              <IconCircleCheck />
            save
            </Button>
          </div>
        </fieldset>
      </Accordion.Item>
    </Accordion>
  );
};

export default ServiceInstructionForm;
