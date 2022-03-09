import { IconPlus } from '@tabler/icons';
import { Card, Table, Button,Modal } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { useGetServicesQuery } from '../store/query/publication.query';
import {  useState} from 'react';
export default function Topics() {
  const [, setPage] = useState(1);
  const [noMoreResults,] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    data: services,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetServicesQuery(setPage, {
    skip: noMoreResults
});


  return (
    <>
      <div className="card">
        <div className="tw-flex">
          <div className="card-body p-3">
            <p className="text-black"> Service Category</p>
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
                new Category{' '}
              </Button>
          </div>
          <div className="mt-2 p-2">
          </div>
        </div>
      </div>
      <div className="card mt-2">
        {isLoading && (
          <ReactLoading
            className="tw-absolute tw-top-1 tw-left-1/2 tw-z-50"
            type={'spin'}
            color={'#1d2861'}
          />
        )}
        {isError && (
          <div className="tw-text-center   tw-text-2xl">
            {' '}
            {console.log(error)}
            <h1 className="tw-text-red-800">
              {' '}
              Failed to load resource: ERR_CONNECTION_REFUSED{' '}
              {console.log(error)}
            </h1>
          </div>
        )}

        {isSuccess && (
          <Card className="tw-mb-4">
            <Table
              className="tw-overflow: auto display: width: auto !important table-layout: auto
               !important; mb-12 block text-center"
            >
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </Table>
       
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <fieldset className="form-fieldset">
  <div className="mb-3">
    <label className="form-label required">Category</label>
    <textarea
                className="
        tw-form-control
        tw-w-full
    
     
      "
                id="exampleFormControlTextarea1"
                rows={5}
                cols={5}
                placeholder="category "
              ></textarea>
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
        )}
      </div>
    </>
  );
}
