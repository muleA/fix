import {
  Pagination,
  Select,
  Table,
  Modal,
  Checkbox,
  Divider,
} from '@mantine/core';
import {
  IconCirclePlus,
  IconInbox,
  IconAlertTriangle,
  IconTrash,
} from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const schema = yup.object({
  service: yup.mixed(),
});

const ServiceDependencyAssignemnt = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ resolver: yupResolver(schema) });
  const [
    ServiceDependencyAssignmentModalOpened,
    setServiceDependencyAssignmentModalOpened,
  ] = useState<boolean>(false);
  const [
    assignedServiceDependencyModalOpened,
    setAssignedServiceDependencyModalOpened,
  ] = useState<boolean>(false);
    useState<string>('');
  const [perPage, setPerPage] = useState<string>('10');
  const [perPageModal, setPerPageModal] = useState<string>('10');

  const service = [
    { name: 'Lead_Agency', description: 'Lead Agency' },
    { name: 'Financial_Institution', description: 'Financial Institution' },
    { name: 'Attorney_General', description: 'Attorney General' },
    { name: 'Procurement_Enterprise', description: 'Procurement Enterprise' },
  ];

  const onSubmit = async (data) => {
    try {
      console.log(data.service);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal
          opened={ServiceDependencyAssignmentModalOpened}
          onClose={() => setServiceDependencyAssignmentModalOpened(false)}
          title="Service Dependency Assignment"
          size={'50%'}
          styles={{
            header: {
              borderBottom: '1px solid rgb(229 231 235)',
              paddingBottom: '1rem',
            },
          }}
        >
          <Table className="tw-my-4">
            <thead>
              <tr className="tw-bg-gray-200">
                <th className="w-1"></th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="tw-border-b">
              {service.length == 0 && (
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

              {service.length > 0 &&
                service.map((item) => (
                  <tr key={item.name}>
                    <td>
                      <Checkbox
                        {...register(`service.${item.name}`, {
                          shouldUnregister: true,
                        })}
                        size="xs"
                        radius="xs"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
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

          <Divider className="tw-mt-4" />
          <div className="tw-mt-4 tw-flex tw-justify-end">
            <button
              type="button"
              className="btn btn-primary tw-bg-[#1d2861]"
              onClick={() => {
                setServiceDependencyAssignmentModalOpened(false);
              }}
            >
              Done
            </button>
          </div>
        </Modal>

        <div className="tw-my-4 tw-flex tw-justify-end">
          <button
            type="button"
            className="btn btn-primary tw-bg-[#1d2861]"
            onClick={() => setServiceDependencyAssignmentModalOpened(true)}
          >
            <IconCirclePlus />
            Assign
          </button>
        </div>

        {service.length == 0 && (
          <>
            <Divider className="tw-my-4" />
            <div className="tw-flex tw-items-center">
              <IconAlertTriangle />
              <span className="tw-ml-2">
                There is no ServiceDependency assigned please assign one
              </span>
            </div>
          </>
        )}

        {service.length > 0 && (
          <>
            <Table className="tw-mb-4">
              <thead>
                <tr className="tw-bg-gray-200">
                  <th>Name</th>
                  <th>Description</th>
                  <th className="w-1"></th>
                </tr>
              </thead>
              <tbody className="tw-border-b">
                {service.map((item) => (
                  <tr
                    key={item.name}
                    className="visibility-hoverable-container"
                  >
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                      <button className="btn btn-primary tw-bg-[#E52727]">
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
          </>
        )}
      </form>
    </div>
  );
};

export default ServiceDependencyAssignemnt;
