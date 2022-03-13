import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import {
  Card,
  Input,
  Popover,
  Checkbox,
  Divider,
  Table,
  Pagination,
  Select,
} from '@mantine/core';
import {
  IconPlus,
  IconSearch,
  IconFilter,
  IconInbox,
} from '@tabler/icons';

const ServiceSideTable = () => {
  const [filterOpened, setFilterOpened] = useState(false);
  const [perPage, setPerPage] = useState<string>('5');
const router=useRouter();
  const Service = [
    {
      name: 'Issuance of Nation Id',
      shortName: 'AAU',
      code: 'nabil@some.com',
      description: 'blah blah',
      active: 'Yes',
    },
    {
      name: 'Passport application ',
      shortName: 'HU',
      code: 'nabil3@some.com',
      description: 'blah blah',
      active: 'No',
    },
    {
      name: 'Trade Permission request',
      shortName: 'HU2',
      code: 'nabial@some.com',
      description: 'blah blah',
      active: 'Yes',
    },
    {
      name: 'education related',
      shortName: 'HU3',
      code: 'nabidl@some.com',
      description: 'blah blah',
      active: 'No',
    },
  ];

  return (
    <Card className="tw-w-4/12" shadow="sm" padding="lg">
      <Card.Section className="tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2">
        <h2 className="tw-text-lg">Service Owner</h2>
        <Link href="/service-store/service-owner/new">
          <a className="btn btn-primary tw-bg-[#1d2861]">
            <IconPlus />
            New
          </a>
        </Link>
      </Card.Section>

      <Card.Section className="tw-flex tw-px-4 tw-pt-2 ">
        <Input
          className="tw-w-full tw-mr-2"
          size="xs"
          placeholder="input search text"
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
            </div>
          }
          width={180}
          position="right"
          withArrow
          styles={{
            inner: { padding: '0px' },
            target: { height: '100%' },
          }}
        >
          <div>
            <div className="tw-pl-4 tw-py-2 tw-font-bold tw-border-b">
              Filter
            </div>
            <div className="tw-px-4">
              <Checkbox size="xs" className="tw-my-4" label="Locked" />
              <Checkbox size="xs" className="tw-my-4" label="Unlocked" />
              <Divider my="xs" label="And" labelPosition="center" />
              <Checkbox size="xs" className="tw-my-4" label="Active" />
              <Checkbox size="xs" className="tw-my-4" label="Deactive" />
            </div>
          </div>
        </Popover>
      </Card.Section>

      <Card.Section className="tw-p-4 tw-overflow-x-auto">
        <Table className="tw-mb-4">
          <thead>
            <tr className="tw-bg-gray-200">
              <th>Name</th>
            </tr>
          </thead>
          <tbody className="tw-border-b">
            {Service.length == 0 && (
              <tr className="tw-h-[200px] tw-border-b hover:tw-bg-transparent">
                <td className="tw-text-center" colSpan={5}>
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

            {Service.length > 0 &&
              Service.map((item) => (
                <Link
                  key={item.name}
                  href={`/service-store/service/detail/${Service[1].name}`}
                >
                  <a className='hover:tw-no-underline'>
                    <tr
                      key={item.name}
                      className={`tw-block hover:tw-bg-gray-50 tw-p-1`}
                    >
                      <td>{item.name}</td>
                    </tr>
                  </a>
                </Link>
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
  );
};

export default ServiceSideTable;
