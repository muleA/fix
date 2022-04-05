import { useState } from 'react';
import Link from 'next/link';
import ReactLoading from 'react-loading';
import ServicedProvider from '../../../models/publication/service-providers/service-provider';
import {
  Card,
  Input,
  Table,
  Pagination,
  Select,
  LoadingOverlay,
} from '@mantine/core';
import {
  IconPlus,
  IconSearch,
  IconChevronRight,
  IconInbox,
} from '@tabler/icons';
import { useGetServiceProvidersQuery } from '../store/query/service-provider.query';
const ServicedProviderList = () => {
  const [perPage, setPerPage] = useState<string>('10');
  const {
    data: servicedProviders,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetServiceProvidersQuery();

  return (
    <>
      <div className="tw-w-full tw-min-h-screen tw-p-4">
        <Card shadow="sm">
          <Card.Section className="tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2">
            <h2 className="tw-text-lg">Service Provider</h2>
            <Link href="/service-store/service-provider/new" passHref>
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
              placeholder="search service provider"
              rightSection={
                <IconSearch className="tw-inline-block" size={16} />
              }
              rightSectionWidth={40}
              styles={{ rightSection: { pointerEvents: 'none' } }}
            />
          </Card.Section>

          <Card.Section className="tw-p-4 tw-overflow-x-auto">
            {isLoading && (
              <>
                <LoadingOverlay visible={true} />
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
            {isError && (
              <div className="tw-text-center   tw-text-2xl">
                {' '}
                {console.log(error)}
                <h1 className="tw-text-red-800 tw-mt-100px">
                  {' '}
                  Failed to load resource: ERR_CONNECTION_REFUSED{' '}
                </h1>
              </div>
            )}
            <Table className="tw-mb-4">
              <thead>
                <tr className="tw-bg-gray-200">
                  <th>FullName</th>
                  <th>Short Name</th>
                  <th>Code</th>
                  <th>Sector</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Manager Name</th>
                  <th></th>
                </tr>
              </thead>
              {isSuccess && (
                <tbody className="tw-border-b">
                  {servicedProviders.data.length == 0 && (
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

                  {servicedProviders.data.length > 0 &&
                    servicedProviders.data.map((item: ServicedProvider) => (
                      <tr key={item.id}>
                        <td>{item.fullName}</td>
                        <td>{item.shortName}</td>
                        <td>{item.code}</td>
                        <td>{item.sector}</td>
                        <td>{item.contactInfo?.email}</td>
                        <td>{item.contactInfo?.phone}</td>
                        <td>{item.contactInfo?.name}</td>
                        <td className="hoverable-visibility-content">
                          <Link
                            href={`/service-store/service-provider/detail/${item.id}`}
                          >
                            <a
                              className="tw-block tw-bg-gray-50 hover:tw-outline hover:tw-outline-1
                           hover:tw-outline-[#1d2861] tw-p-1 tw-rounded"
                            >
                              <IconChevronRight color={'#1d2861'} />
                            </a>
                          </Link>
                        </td>
                      </tr>
                    ))}
                </tbody>
              )}
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
    </>
  );
};

export default ServicedProviderList;
