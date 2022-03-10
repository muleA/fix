import { Accordion, Group, Text,Card} from '@mantine/core';
import { Button } from 'react-bootstrap';
import { IconPlus, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
const NewServiceOwnerForm = () => {
  const router=useRouter();
    


  return (
    <>
          <Card className="tw-mx-auto ">
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
                <label className="form-label required">Short Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Short name"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label required">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="full Name"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label required">Sector</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="description"
                  autoComplete="off"
                />
              </div>
              <div className="mb-3">
                <label className="form-label required">Contact Info</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="contact Info"
                  autoComplete="off"
                />
              </div>

              <div>
                <Button className="bg-primary ">
                  <IconPlus /> New
                </Button>
               

              </div>
            </fieldset>
          </div>
 
          </Card>
         
    </>
  );
};

export default NewServiceOwnerForm;
