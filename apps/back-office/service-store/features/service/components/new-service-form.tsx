import { Accordion, Group, Text} from '@mantine/core';
import { Button } from 'react-bootstrap';
import { IconShieldCheck, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import AccordionControlButton  from './accordion-control-button'
const NewServiceForm = () => {
  const router=useRouter();
    
  const AccordionLabel = () => (
    <>
      <Group noWrap>
        <div>
          <Text>Service</Text>
          <Text size="sm" color="dimmed" weight={400}>
      {router.pathname==='/service-store/service/new'?'Register new Service':'Modify service'}
          </Text>
        </div>
      </Group>
    </>
  );

  return (
    <>
      <Accordion disableIconRotation offsetIcon={false} iconPosition="right"
      icon={<AccordionControlButton/>}
        initialItem={0}
        className="tw-bg-white tw-mt-4"
        styles={{
          itemTitle: { borderBottom: '0.5px solid rgb(229 231 235)' },
        }}
      >
        <Accordion.Item label={<AccordionLabel />}>
          <div className="tw-my-4">
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

              <div className="mb-3">
                <label className="form-label required">Procedure</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="procedure"
                  autoComplete="off"
                />
              </div>
              <div>
                <Button className="bg-primary ">
                  <IconShieldCheck />
                  {router.pathname==='/service-store/service/new'?'Add New':'update'}
                </Button>
                {router.pathname!==`/service-store/service/new`? (<Button className="bg-danger tw-ml-2">
                  <IconTrash/>delete</Button>):''}

              </div>
            </fieldset>
          </div>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default NewServiceForm;
