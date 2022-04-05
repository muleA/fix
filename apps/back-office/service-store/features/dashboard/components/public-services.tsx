import Link from 'next/link';
import { IconChevronRight, IconUser } from '@tabler/icons';
import { Pagination, Select, LoadingOverlay } from '@mantine/core';
import { useState } from 'react';
import { perPageOptions } from '../../../shared/utility/data';
import Service from '../../../models/publication/services/service';
import { useGetPublicServicesQuery } from '../store/query/report.query';
export default function PublicServices() {
  const {
    data: publicServices,
    isLoading,
    isSuccess,
    isError,
  } = useGetPublicServicesQuery('');
  console.log(publicServices);
  const [perPage, setPerPage] = useState<string>('5');

  return (
    <>
      {isLoading && <LoadingOverlay visible={true} />}
      {isSuccess && (
        <div className="md:tw-w-[32%] tw-m-3">
          <div className="tw-bg-white tw-w-full tw-flex tw-p-5">
            <div className="tw-w-10 tw-h-10 tw-mr-2">
              <IconUser className="tw-flex" size={32} />
            </div>
            <div>
              <h2 className="tw-text-xl">
                {' '}
                {publicServices.count} Public Services
              </h2>
              <Link href="/service-store/service/list?isActive=true">
                <a className="tw-text-xs">Public Services</a>
              </Link>
            </div>
          </div>
          <div className="tw-bg-white tw-mt-4 tw-p-3 tw-w-full">
            <div className="table-responsive">
              <table className="table-vcenter table">
                <thead>
                  <tr>
                    <th>Name of Public Services</th>
                    <th className="w-1"></th>
                  </tr>
                </thead>
                <tbody>
                  {PublicServices?.map((name) => (
                    <tr key={name}>
                      <td>{name}</td>
                      <td>
                        <Link href="/registration/organization-personnel/detail/12345">
                          <a className="tw-block bg-primary tw-text-white hover:tw-text-white tw-p-1 tw-rounded hover:opacity-50">
                            <IconChevronRight />
                          </a>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="tw-mt-2">
              <div className="tw-mt-4">
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
              </div>

              <div className="tw-w-2/4 tw-mt-4">
                <Select
                  size="xs"
                  value={perPage}
                  onChange={setPerPage}
                  data={perPageOptions}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
