import { IconPlus } from '@tabler/icons';
import { Card, Table, Button,Modal } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import {  useState} from 'react'
export default function ApplicationForms() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  


  return (
    <>
      <div className="card">
        <div className="tw-flex">
          <div className="card-body p-3">
            <p className="text-black">Application Forms</p>
          </div>
          <div className="mr-12 p-3 text-center">
           
          </div>
        </div>
      </div>

      <div className="card mt-2">
        <div className="tw-flex">
          <div className="card-body p-3">
              <Button className="bg-primary" onClick={handleShow}>
                <IconPlus />
                new ApplicationForm{' '}
              </Button>
          </div>
          <div className="mt-2 p-2">
          </div>
        </div>
      </div>
      <div className="card mt-2">
        
          <Card className="tw-mb-4">
            <Table
              className="tw-overflow: auto display: width: auto !important table-layout: auto
               !important; mb-12 block text-center"
            >
              <thead>
                <tr>
                  <th>fileName</th>
                  <th>form url</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </Table>
       
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>upload application forms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <fieldset className="form-fieldset">
  <div className="mb-3">
  </div>
</fieldset>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="tw-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="tw-primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

          </Card>
        
      </div>
    </>
  );
}
