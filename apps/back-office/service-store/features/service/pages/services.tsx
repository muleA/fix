import { useState } from 'react';
import Link from 'next/link';
import {
  Card,
  Popover,
  Checkbox,
  Divider,
  Table,
  Pagination,
  Select,
  TextInput,
  LoadingOverlay,
} from '@mantine/core';
import PageLoader from '../../../shared/components/pageLoader';
import {
  IconPlus,
  IconSearch,
  IconFilter,
  IconChevronDown,
  IconChevronRight,
  IconInbox,
} from '@tabler/icons';
import NotificationModel from '../../../shared/models/notification-model';
import Notification from '../../../shared/components/notification';
import Service from '../../../models/publication/services/service';
import { useGetServicesQuery } from '../store/query/service.query';
const ServiceList = () => {
  const [filterOpened, setFilterOpened] = useState(false);
  const [perPage, setPerPage] = useState<string>('10');
  const [searchInput, setSearchInput] = useState<string>('');
  const [notification, setNotification] = useState<NotificationModel | null>(
    null
  );
  const [visible, setVisible] = useState(false);
  const {
    data: services,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetServicesQuery(searchInput);
  //search input as paramatert

  return (
    <div className="tw-w-full tw-min-h-screen tw-p-4">
      <Card shadow="sm">
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
          <TextInput
            className="tw-w-fit "
            value={searchInput}
            onChange={(event) => setSearchInput(event.currentTarget.value)}
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
          {isError && (
            <div className="tw-text-center   tw-text-2xl">
              <h5 className="tw-text-red-800 tw-mt-100px">
                {' '}
                Failed to load resource: ERR_CONNECTION_REFUSED{' '}
              </h5>
            </div>
          )}
          <Table className="tw-mb-4 tw-table-auto">
            <thead>
              <tr className="tw-bg-gray-200">
                <th>Full Name</th>
                <th>ShortName</th>
                <th>Code</th>
                <th>Service Owner</th>
                <th>Service Provider</th>
                <th>Average Rating</th>
                <th>Version</th>
                <th></th>
              </tr>
            </thead>
            {isSuccess && (
              <tbody className="tw-border-b">
                {services.data.length == 0 && (
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
                  /*                   <PageLoader />
                   */ <LoadingOverlay visible={true} />
                )}
                {services.data.length > 0 &&
                  services.data.map((item: Service) => (
                    <tr key={item.id}>
                      <td>{item.fullyQualifiedName}</td>
                      <td>{item.name}</td>
                      <td>{item.code}</td>
                      <td>{item.serviceOwnerId}</td>
                      <td>{item.serviceProviderId}</td>
                      <td>{item.averageRating}</td>
                      <td>{item.version}</td>

                      <td className="hoverable-visibility-content">
                        <Link href={`/service-store/service/detail/${item.id}`}>
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
          {notification != null && (
            <Notification
              onClose={() => setNotification(null)}
              type={notification.type}
              message={notification.message}
              show={notification.show}
            />
          )}
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
