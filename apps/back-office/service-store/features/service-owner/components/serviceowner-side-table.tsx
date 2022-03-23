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
import { IconPlus, IconSearch, IconFilter, IconInbox } from '@tabler/icons';
import { useGetServiceOwnersQuery } from '../store/query/service-owner.query';
import ReactLoading from 'react-loading';
const ServiceOwnerSideTable = () => {
  const [filterOpened, setFilterOpened] = useState(false);
  const [perPage, setPerPage] = useState<string>('5');
  const {
    data: serviceOwners,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetServiceOwnersQuery();
  return (
    <Card className="tw-w-4/12" shadow="sm">
      <Card.Section className="tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2">
        <h2 className="tw-text-lg">Service Owner</h2>
        
        <Link href="/service-store/service-owner/new" passHref>
          <a className=" tw-sm  btn btn-primary tw-bg-[#1d2861]">
            <IconPlus />
            New
          </a>
        </Link>
      </Card.Section>

      <Card.Section className="tw-flex tw-px-4 tw-pt-2 ">
        <Input
          className="tw-w-full tw-mr-2"
          size="xs"
          placeholder="search service provider"
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
        {isError && (
          <div className="tw-text-center   tw-text-2xl">
            <h5 className="tw-text-red-800 tw-mt-100px md:tw-text-lg tw-text-sm">
              Failed to load resource: ERR_CONNECTION_REFUSED{' '}
            </h5>
          </div>
        )}
        {isLoading && (
          <>
            <ReactLoading
              className="tw-z-50 tw-absolute tw-top-1/2 tw-left-1/2 
                  -tw-translate-x-1/2 -tw-translate-y-1/2 tw-transform"
              type={'spokes'}
              color={'#1d2861'}
              height={'4%'}
              width={'4%'}
            />
          </>
        )}
        {isSuccess && (
          <Table className="tw-mb-4">
            <thead>
              <tr className="tw-bg-gray-200">
                <th>Short Name</th>
              </tr>
            </thead>
            <tbody className="tw-border-b">
              {serviceOwners.data.length == 0 && (
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

              {serviceOwners.data.length > 0 &&
                serviceOwners.data.map((item) => (
                  <tr
                    key={item.id}
                    className={`tw-block hover:tw-bg-gray-50 tw-p-1`}
                  >
                    <td>
                      <Link
                        href={`/service-store/service-owner/detail/${item.id}`}
                      >
                        <a className="hover:tw-no-underline">
                          {item.shortName}
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </Card.Section>

      <Card.Section className="tw-p-3">
        <div className="tw-my-2 tw-flex tw-justify-end">
          <Pagination
            total={5}
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

export default ServiceOwnerSideTable;
