import AdminstrationSideBar from '../../adminstration/components/adminstration-sidebar';
import { useState } from 'react';
import Link from 'next/link';
import { Card, Input, Table, Pagination, Select } from '@mantine/core';
import {
  IconPlus,
  IconSearch,
  IconChevronRight,
  IconInbox,
} from '@tabler/icons';
import { useRouter } from 'next/router';
import NotificationModel from '../../../shared/models/notification-model';
import Notification from '../../../shared/components/notification';
import ServiceCategory from '../../../models/classification/category';
import ReactLoading from 'react-loading';
import { useGetServiceCategorysQuery } from '../store/query/service-category.query';
export default function CategoryList() {
  const [perPage, setPerPage] = useState<string>('10');
  const router = useRouter();
  const { id } = router.query;
  const [notification, setNotification] = useState<NotificationModel | null>(
    null
  );
  const {
    data: serviceCategory,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetServiceCategorysQuery();
  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <div className="tw-flex tw-items-start">
        <AdminstrationSideBar />
        <div className="tw-w-10/12 tw-pl-2">
          <div className="tw-w-full tw-min-h-screen ">
            <Card shadow="sm">
              <Card.Section className="tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2">
                <h2 className="tw-text-lg">Category</h2>
                <Link
                  href="/service-store/adminstration/service-category/new"
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
                  placeholder="search categories ..."
                  rightSection={
                    <IconSearch className="tw-inline-block" size={16} />
                  }
                  rightSectionWidth={40}
                  styles={{ rightSection: { pointerEvents: 'none' } }}
                />
              </Card.Section>

              <Card.Section className="tw-p-4 tw-overflow-x-auto">
                {isError && (
                  <div className="tw-text-center   tw-text-2xl">
                    {' '}
                    {console.log(error)}
                    <h5 className="tw-text-red-800 tw-mt-100px">
                      {' '}
                      Failed to load resource: ERR_CONNECTION_REFUSED{' '}
                    </h5>
                  </div>
                )}
                <Table className="tw-mb-4">
                  <thead>
                    <tr className="tw-bg-gray-200">
                      <th>Name</th>
                      <th>Code</th>
                      <th>Description</th>
                      <th className="w-1"></th>
                    </tr>
                  </thead>

                  {isSuccess && (
                    <tbody className="tw-border-b">
                      {serviceCategory.data.length == 0 && (
                        <tr className="tw-h-[200px] tw-border-b hover:tw-bg-transparent">
                          <td className="tw-text-center" colSpan={8}>
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
                      {serviceCategory.data.length > 0 &&
                        serviceCategory.data.map((item: ServiceCategory) => (
                          <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.code}</td>
                            <td>{item.description}</td>
                            <td className="hoverable-visibility-content">
                              <Link
                                href={`/service-store/service-category/detail/${item.id}`}
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
              {notification != null && (
                <Notification
                  onClose={() => setNotification(null)}
                  type={notification.type}
                  message={notification.message}
                  show={notification.show}
                />
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
