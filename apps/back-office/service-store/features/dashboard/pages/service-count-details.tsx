import React from 'react';
import { Table, Card, Container } from 'react-bootstrap';

export default function ServiceCountDetails() {
  return (
    <>
      <Container fluid >
        <Card>
          <div className="tw-flex tw-items-start tw-min-h-screen tw-bg-gray-100 dark:tw-bg-gray-900">
            <div className="tw-container tw-mt-5 fluid tw-max-w-full tw-px-3 tw-mx-auto tw-my-2">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Service Name</th>
                    <th>Average rating</th>
                    <th>No comments</th>
                    <th>service owner</th>
                    <th>service Provider</th>
                    <th>reaction</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                
                  
                </tbody>
              </Table>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}
