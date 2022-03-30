import { useState } from 'react';
import Link from 'next/link';
import { Card, Input, Table, Pagination, Select } from '@mantine/core';
import { useRouter } from 'next/router';

import { IconPlus, IconSearch, IconInbox } from '@tabler/icons';
import { useGetServicesQuery } from '../store/query/service.query';
import ReactLoading from 'react-loading';
import Service from '../../../models/publication/services/service';

const ServiceSideTable = () => {
  const router = useRouter();
  const { id } = router.query;
  const [perPage, setPerPage] = useState<string>('5');
  const {
    data: services,
    isLoading,
    isSuccess,
    isError,
  } = useGetServicesQuery();

  return (
    <Card className="tw-w-4/12" shadow="sm">
      <Card.Section className="tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2">
        <h2 className="md:tw-text-lg tw-text-sm">Service </h2>

        <Link href="/service-store/service/new" passHref>
          <div className="tw-sm tw-w-auto">
            <a className=" tw-sm  btn btn-primary tw-bg-[#1d2861]">
              <IconPlus />
              New
            </a>
          </div>
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
      </Card.Section>

      <Card.Section className="tw-p-4 tw-overflow-x-auto">
        {isError && (
          <div className="tw-text-center   tw-text-2xl">
            <h5 className="tw-text-red-800 tw-mt-100px lg:tw-text-lg tw-text-sm">
              Failed to load resource: err_connection_refused
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
              height={'10%'}
              width={'10%'}
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
              {services.data.length == 0 && (
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

              {services.data.length > 0 &&
                services.data.map((item: Service) => (
                  <tr
                    key={item.id}
                    className={`tw-block tw-no-underline hover:tw-bg-gray-50 tw-p-1`}
                  >
                    <td
                      className={`tw-block ${
                        id == item.id && 'tw-text-white tw-bg-[#1d2861]'
                      } `}
                    >
                      <Link href={`/service-store/service/detail/${item.id}`}>
                        <a className="hover:tw-no-underline tw-no-underline">
                          {item.name}
                        </a>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </Card.Section>

      <Card.Section className="tw-p-2">
        <div className="tw-my-2 tw-flex tw-justify-end tw-mr-0 ">
          <div className="tw-w-50">
            <Pagination
              total={5}
              radius="xs"
              size="sm"
              styles={{
                item: { color: '#1d2861', borderWidth: 0, fontSize: '12px' },
                active: { color: '#1d2861', fontWeight: 'bold' },
              }}
            />
          </div>
          <div className="tw-w-12 lg:tw-w-20 ">
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
        </div>
      </Card.Section>
    </Card>
  );
};

export default ServiceSideTable;
