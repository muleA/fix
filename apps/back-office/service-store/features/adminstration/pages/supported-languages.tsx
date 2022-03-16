import AdminstrationSideBar from '../components/adminstration-sidebar';
import { useState } from 'react';
import Link from 'next/link';
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
  IconChevronDown,
  IconChevronRight,
  IconInbox,
} from '@tabler/icons';
import { useRouter } from 'next/router';

export default function SupportedLanguagesList() {
  const [filterOpened, setFilterOpened] = useState(false);
  const [perPage, setPerPage] = useState<string>('10');
  const router = useRouter();
  const { supportedLanguage} = router.query;
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
      <div className="tw-flex tw-items-start">
        <AdminstrationSideBar />
        <div className="tw-w-10/12 tw-pl-4">
          <div className="tw-w-full tw-min-h-screen ">
            <div className="tw-w-full tw-min-h-screen tw-p-4">
              <Card shadow="sm" padding="lg">
                <Card.Section className="tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2">
                  <h2 className="tw-text-lg">Supported Languages</h2>
                  <Link
                    href="/service-store/adminstration/new-language"
                    passHref
                  >
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
                    placeholder="search Supported Languages"
                    rightSection={
                      <IconSearch className="tw-inline-block" size={16} />
                    }
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
                        <IconChevronDown
                          className="tw-mx-1 tw-flex"
                          size={20}
                        />
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
                        Filter By Supported Languages
                      </div>
                      <div className="tw-px-4">
                        <Checkbox
                          size="xs"
                          className="tw-my-4"
                          label="Educational"
                        />
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
                        <Checkbox
                          size="xs"
                          className="tw-my-4"
                          label="#passport"
                        />
                        <Checkbox
                          size="xs"
                          className="tw-my-4"
                          label="#nationalId"
                        />
                      </div>
                    </div>
                  </Popover>
                </Card.Section>

                <Card.Section className="tw-p-4 tw-overflow-x-auto">
                  <Table className="tw-mb-4">
                    <thead>
                      <tr className="tw-bg-gray-200">
                        <th>Name</th>
                        <th>Description</th>
                        <th className="w-1">Actions</th>
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
                            <td>{item.description}</td>

                            <td className="hoverable-visibility-content">
                              <Link
                                href={`/service-store/adminstration/details/supported-language/${item.name}
            `}
                              >
                                <a
                                  className="tw-block tw-bg-gray-50 hover:tw-outline 
                                    hover:tw-outline-1 hover:tw-outline-[#1d2861] tw-p-1 tw-rounded"
                                >
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
                        item: {
                          color: '#1d2861',
                          borderWidth: 0,
                          fontSize: '12px',
                        },
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
          </div>
        </div>
      </div>
    </div>
  );
}
