import React from 'react';
import { useState } from 'react';
import { IconPlus } from '@tabler/icons';
import { Modal, Button,Container } from 'react-bootstrap';
export default function TermsandUseForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show);
  return (
    <>
<Container fluid className="tw-mt-3">
      <Button variant="tw-bg-primary" className="tw-ml-2" onClick={handleShow}>
        <IconPlus /> Terms and policy
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms of use and Policies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="tw-flex  tw-mt-6 tw-justify-center">
            <div className="tw-mb-3 xl:tw-w-96">
              <textarea
                className="
        tw-form-control
        tw-w-full
        tw-px-3
        tw-py-1.5
        tw-text-base
        tw-font-normal
        tw-text-gray-700
        tw-bg-white
        tw-border tw-rounded
        tw-transition tw-ease-in-out tw-m-0
        focus:tw-text-gray-700
        block
        border-solid
        border-gray-300
        bg-clip-padding focus:border-blue-600 focus:bg-white focus:outline-none
      "
                id="exampleFormControlTextarea1"
                rows={10}
                cols={20}
                placeholder="Terms and use "
              ></textarea>
            </div>
          </div>
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
      </Container>
    </>
  );
}
