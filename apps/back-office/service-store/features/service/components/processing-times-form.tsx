import { Pagination, Table, Modal, Button, Select } from '@mantine/core';
import {
  IconCirclePlus,
  IconInbox,
  IconTrash,
  IconEyeCheck,
  IconEdit,
} from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const schema = yup.object({
  processingTimes: yup.mixed(),
});

const ServiceProcessingTimes = () => {
  const processingTimes = [
    {
      Time: 21334,
      description: 'time it take for trade license',
    },
  ];

  const { handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const [
    ProcessingTimeAssignmentModalOpened,
    setProcessingTimeAssignmentModalOpened,
  ] = useState<boolean>(false);
  useState<boolean>(false);
  const [perPageModal, setPerPageModal] = useState<string>('10');

  const onSubmit = async (data) => {
    try {
      console.log(data.processingTimes);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal
          opened={ProcessingTimeAssignmentModalOpened}
          onClose={() => setProcessingTimeAssignmentModalOpened(false)}
          title="add Service Procesing Times"
          size={'50%'}
          styles={{
            header: {
              borderBottom: '1px solid rgb(229 231 235)',
              paddingBottom: '1rem',
            },
          }}
        >
          {/*  */}

          <div className="mb-3">
            <label className="form-label required">Time</label>
            <input
              className="form-control"
              placeholder="Time"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">description</label>
            <input
              className="form-control"
              placeholder="description"
              autoComplete="off"
            />
          </div>

          <div className="tw-flex tw-justify-end ">
            <Button className="bg-primary">save</Button>
          </div>
        </Modal>

        <div className="tw-my-4 tw-flex tw-justify-end">
          <button
            className="btn btn-primary tw-bg-[#1d2861]"
            onClick={() => setProcessingTimeAssignmentModalOpened(true)}
          >
            <IconCirclePlus />
            Processing Time
          </button>
        </div>
      </form>

      <Table className="tw-my-4">
        <thead>
          <tr className="tw-bg-gray-200">
            <th>Time</th>
            <th>description</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className="tw-border-b">
          {processingTimes.length == 0 && (
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

          {processingTimes.length > 0 &&
            processingTimes.map((item) => (
              <tr key={item.Time}>
                <td> {item.Time}</td>
                <td> {item.description}</td>
                <td>
                  <button className="btn btn-primary tw-mr-2 tw-bg-[#13243]">
                    <IconEyeCheck />
                  </button>
                  <button className="btn btn-primary tw-mr-2 tw-bg-[#13243]">
                    <IconEdit />
                  </button>
                  <button className="btn btn-primary tw-mr-2 tw-bg-[#E52727]">
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

export default ServiceProcessingTimes;
