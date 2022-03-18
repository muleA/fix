import { useState } from 'react';
import Link from 'next/link';
import {
  Card,
  Input,
  Popover,
  Checkbox,
  Divider,
  Table,
  Button,
  Pagination,
  Select,
} from '@mantine/core';
import {
  IconPlus,
  IconSearch,
  IconFilter,
  IconChevronDown,
  IconChevronRight,
  IconInbox,
} from '@tabler/icons';
import { useRouter } from 'next/router';

const ServiceList = () => {
  const [filterOpened, setFilterOpened] = useState(false);
  const [perPage, setPerPage] = useState<string>('10');
  const router = useRouter();
  const { id } = router.query;
  const Services = [
    {
      name: 'Issuance oF Id',
      shortName: 'ISID',
      code: 'IDI2021',
      description: 'blah blah',
      supportedQualifications: 'must have renewd Id',
      procedure: 'first create account on a platforms',
      tags: '#passport',
      rating: '0',
      category: 'Popular',
      deliveryMethods: 'manual',
      serviceOwner: 'Mint',
      policy: 'dsjajfhdas',
      version: 'v1',
      targetCustomer: 'city residents',
      date: '23/4/2014',
      createddate: '12/3/2014',
      createdBy: 'mulugeta',
    },
  ];

  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <Card shadow="sm" padding="lg">
        <Card.Section className="tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2">
          <h2 className="tw-text-lg">Services</h2>
          <Link href="/service-store/service/new" passHref>
            <button className="btn btn-primary tw-bg-[#1d2861]">
              <IconPlus />
              New
            </button>
          </Link>
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
          <Table className="tw-mb-4 tw-table-auto">
            <thead>
              <tr className="tw-bg-gray-200">
                <th>Name</th>
                <th>Code</th>
                <th>Description</th>

                <th>tags</th>
                <th>rating</th>
                <th>Category</th>

                <th>Service Owner</th>

                <th>version</th>
                <th>published date</th>
                <th>Created Date</th>
                <th>Created By</th>
                <th>review</th>
                <th>visibility</th>
                <th>Archived</th>

                <th></th>
              </tr>
            </thead>
            <tbody className="tw-border-b">
              {Services.length == 0 && (
                <tr>
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
                    <td>{item.description}</td>

                    <td>{item.tags}</td>
                    <td>{item.rating}</td>
                    <td>{item.category}</td>

                    <td>{item.serviceOwner}</td>

                    <td>{item.version}</td>
                    <td>{item.date}</td>
                    <td>{item.createddate}</td>
                    <td>{item.createdBy}</td>
                    <td>
                      <button className="btn btn-primary">enable</button>
                    </td>
                    <td>
                      <button className="btn btn-primary">private</button>
                    </td>
                    <td>
                      <button className="btn btn-primary">enable</button>
                    </td>

                    <td className="hoverable-visibility-content">
                      <Link href={`/service-store/service/detail/${item.name}`}>
                        <a className="tw-block tw-bg-gray-50 hover:tw-outline hover:tw-outline-1 hover:tw-outline-[#1d2861] tw-p-1 tw-rounded">
                          <IconChevronRight color={'#1d2861'} />
                        </a>
                      </Link>
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
    </div>
  );
};

export default ServiceList;
