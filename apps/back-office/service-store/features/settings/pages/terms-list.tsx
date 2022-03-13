import { useState } from 'react';
import {
  Card,
  Input,
  Popover,
  Checkbox,
  Divider,
  Table,
  Pagination,
  Select,
  Button,
} from '@mantine/core';
import {
  IconPlus,
  IconSearch,
  IconFilter,
  IconChevronDown,
  IconInbox,
  IconShieldCheck,
} from '@tabler/icons';
import { ButtonGroup, Modal ,CloseButton} from 'react-bootstrap';
import TermsandPolicyForm from '../components/terms-policy-form';
const TermsandUsePolicyList = () => {
  const [filterOpened, setFilterOpened] = useState(false);
  const [perPage, setPerPage] = useState<string>('10');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Services = [
    {
      name: 'Issuance oF Id',
      shortName: 'ISID',
      code: 'IDI2021',
      description: 'blah blah',
      fullyQualifiedName: 'Issunace of National Id',
      version: 'v1',
      targetCustomer: 'city residents',
      public: 'yes',
      Archived: 'No',
    },
    {
      name: 'Issuance oF Id',
      shortName: 'ISID',
      code: 'IDI2021',
      description: 'blah blah',
      fullyQualifiedName: 'Issunace of National Id',
      version: 'v1',
      targetCustomer: 'city residents',
      public: 'yes',
      Archived: 'No',
    },
  ];

  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <Card shadow="sm" padding="lg">
        <Card.Section className="tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2">
          <h2 className="tw-text-lg">Terms of use and Policy</h2>
          <Button
            onClick={handleShow}
            className="btn btn-primary tw-bg-[#1d2861]"
          >
            <IconPlus />
            New
          </Button>
        </Card.Section>

        <Card.Section className="tw-flex tw-p-4 tw-justify-end">
          <Input
            className="tw-w-1/3 tw-mr-2"
            size="xs"
            placeholder="search service"
            rightSection={<IconSearch className="tw-inline-block" size={16} />}
            rightSectionWidth={40}
            styles={{ rightSection: { pointerEvents: 'none' } }}
          />
          <Popover
            opened={filterOpened}
            onClose={() => setFilterOpened(false)}
            target={
              <div
                onClick={() => setFilterOpened(!filterOpened)}
                className="tw-h-full tw-flex tw-items-center tw-border hover:tw-border-[#1d2861] hover:tw-cursor-pointer"
              >
                <IconFilter className="tw-flex tw-mx-1" size={20} />
                <span className="tw-mx-1">Filter</span>
                <IconChevronDown className="tw-mx-1 tw-flex" size={20} />
              </div>
            }
            width={180}
            position="left"
            withArrow
            styles={{
              inner: { padding: '0px' },
              target: { height: '100%' },
            }}
          >
            <div>
              <div className="tw-pl-4 tw-py-2 tw-font-bold tw-border-b">
                Filter By Category
              </div>
              <div className="tw-px-4">
                <Checkbox size="xs" className="tw-my-4" label="Educational" />
                <Checkbox
                  size="xs"
                  className="tw-my-4"
                  label="Health related "
                />
                <Divider
                  my="xs"
                  label="Filter By tags"
                  labelPosition="center"
                />
                <Checkbox size="xs" className="tw-my-4" label="#passport" />
                <Checkbox size="xs" className="tw-my-4" label="#nationalId" />
              </div>
            </div>
          </Popover>
        </Card.Section>

        <Card.Section className="tw-p-4 tw-overflow-x-auto">
          <Table className="tw-mb-4">
            <thead>
              <tr className="tw-bg-gray-200">
                <th>Terms of use</th>
                <th>Policy</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="tw-border-b">
              {Services.length == 0 && (
                <tr className="tw-h-[200px] tw-border-b hover:tw-bg-transparent">
                  <td className="tw-text-center" colSpan={7}>
                    <span>
                      <IconInbox
                        className="tw-inline-block"
                        color="rgb(156 163 175)"
                        size={32}
                      />
                      <p>No data</p>
                    </span>
                  </td>
                </tr>
              )}

              {Services.length > 0 &&
                Services.map((item) => (
                  <tr key={item.name}>
                    <td>{item.name}</td>
                    <td>{item.code}</td>
                    <td>
                      <ButtonGroup aria-label="action buttons service owner">
                        <Button className="bg-primary tw-mr-2">update</Button>
                      </ButtonGroup>
                      <ButtonGroup aria-label="action buttons service owner">
                        <Button className="bg-danger">Delete</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Card.Section>

        <Card.Section className="tw-p-4">
          <div className="tw-my-2 tw-flex tw-justify-end">
            <Pagination
              total={10}
              radius="xs"
              size="sm"
              styles={{
                item: { color: '#1d2861', borderWidth: 0, fontSize: '12px' },
                active: { color: '#1d2861', fontWeight: 'bold' },
              }}
            />

            <Select
              size="xs"
              value={perPage}
              onChange={setPerPage}
              data={[
                { value: '5', label: '5 / page' },
                { value: '10', label: '10 / page' },
                { value: '20', label: '20 / page' },
                { value: '30', label: '30 / page' },
                { value: '40', label: '40 / page' },
              ]}
            />
          </div>
        </Card.Section>
      </Card>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header className='bg-primary'>
        <CloseButton className="danger" />
          <Modal.Title>Create Terms of Use and Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TermsandPolicyForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={handleClose}>
            Close
          </Button>
          <Button className="bg-primary" onClick={handleClose}>
            <IconShieldCheck/>Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TermsandUsePolicyList;
