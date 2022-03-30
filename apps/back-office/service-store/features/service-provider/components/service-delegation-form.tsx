import { Pagination, Table, Modal, Button, Select } from '@mantine/core';
import { IconCirclePlus, IconInbox, IconTrash, IconEdit } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ServicedProvider from '../../../models/publication/service-providers/service-provider';
import { useGetServiceProvidersQuery } from '../store/query/service-provider.query';
import { useRouter } from 'next/router';

const schema = yup.object({
  serviceDelegation: yup.mixed(),
});

const ServiceDelegation = (props: { id?: string }) => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: servicedProviders,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetServiceProvidersQuery();
  const serviceDelegation = [
    {
      serviceDelegationAmount: 213,
      description: 'trade license',
      currency: '$',
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ resolver: yupResolver(schema) });
  const [
    ServiceDelegationAssignmentModalOpened,
    setServiceDelegationAssignmentModalOpened,
  ] = useState<boolean>(false);
  /*   const [perPage, setPerPage] = useState<string>('10');
   */ const [perPageModal, setPerPageModal] = useState<string>('10');

  const onSubmit = async (data) => {
    try {
      console.log(data.serviceDelegation);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal
          opened={ServiceDelegationAssignmentModalOpened}
          onClose={() => setServiceDelegationAssignmentModalOpened(false)}
          title="Service Delegation Assignment"
          size={'50%'}
          styles={{
            header: {
              borderBottom: '1px solid rgb(229 231 235)',
              paddingBottom: '1rem',
            },
          }}
        >
          <div className="mb-3">
            <label className="form-label required">Service Provider</label>
            <Select
              placeholder="Select servie provider"
              data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
              ]}
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">Service Name</label>
            <Select
              placeholder="Select servie"
              data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
              ]}
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">Title</label>
            <input
              className="form-control"
              placeholder="title"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">Dispatch Rule</label>
            <textarea
              rows={2}
              className="form-control"
              placeholder="dispatch rule"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">status</label>
            <input
              className="form-control"
              placeholder="status"
              autoComplete="off"
            />
          </div>
          <div className="tw-flex tw-justify-end ">
            <Button className="bg-primary">Done</Button>
          </div>
        </Modal>

        <div className="tw-my-4 tw-flex tw-justify-end">
          <button
            className="btn btn-primary tw-bg-[#1d2861]"
            onClick={() => setServiceDelegationAssignmentModalOpened(true)}
          >
            <IconCirclePlus />
            Delegation
          </button>
        </div>
      </form>

      <Table className="tw-my-4">
        <thead>
          <tr className="tw-bg-gray-200">
            <th>service Provider Name</th>
            <th>Service Name</th>
            <th>Title</th>
            <th>Dispatching rule</th>
            <th>Status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className="tw-border-b">
          {serviceDelegation.length == 0 && (
            <tr className="tw-h-[200px] tw-border-b hover:tw-bg-transparent">
              <td className="tw-text-center" colSpan={3}>
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

          {serviceDelegation.length > 0 &&
            serviceDelegation.map((item) => (
              <tr key={item.serviceDelegationAmount}>
                <td> {item.serviceDelegationAmount}</td>
                <td> {item.description}</td>
                <td> {item.currency}</td>
                <td> {item.currency}</td>
                <td> {item.currency}</td>

                <td>
                  <button className="btn btn-primary tw-mr-2 tw-bg-[#13243]">
                    <IconEdit />
                  </button>
                  <button className="btn hover:tw-bg-red-700 btn-primary tw-mr-2 tw-bg-[#E52727]">
                    <IconTrash />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

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
          value={perPageModal}
          onChange={setPerPageModal}
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
  );
};

export default ServiceDelegation;
