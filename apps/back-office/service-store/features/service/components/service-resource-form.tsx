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
  media: yup.mixed(),
});

const ServiceResource = () => {
  const media = [
    {
      title: 'image',
      content: 'trade license',
      attachmentUrl: `http://192.168.137.168:3001/api/`,
    },
    {
      title: 'video',
      content: 'passport',
      attachmentUrl: `http://192.168.137.168:3001/api/`,
    },
    {
      title: 'audio',
      content: 'how to apply for national Id',
      attachmentUrl: `http://192.168.137.168:3001/api/`,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ resolver: yupResolver(schema) });
  const [
    ServiceResourceAssignmentModalOpened,
    setServiceResourceAssignmentModalOpened,
  ] = useState<boolean>(false);

  const [perPageModal, setPerPageModal] = useState<string>('10');

  const onSubmit = async (data) => {
    try {
      console.log(data.media);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal
          opened={ServiceResourceAssignmentModalOpened}
          onClose={() => setServiceResourceAssignmentModalOpened(false)}
          title="Add Resource"
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
            <label className="form-label required">Resource title</label>
            <input
              title="tel"
              className="form-control"
              placeholder="resource title"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">content</label>
            <input
              title="tel"
              className="form-control"
              placeholder="content"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">attachmentUrl</label>
            <div className="tw-my-4">
              <input
                type="text"
                className="form-control"
                placeholder="attachment Url"
                 autoComplete='off'
              />
            </div>
          </div>
          <div className="tw-flex tw-justify-end ">
            <Button className="bg-primary">Done</Button>
          </div>

          {/*  */}
        </Modal>

        <div className="tw-my-4 tw-flex tw-justify-end">
          <button
            title="button"
            className="btn btn-primary tw-bg-[#1d2861]"
            onClick={() => setServiceResourceAssignmentModalOpened(true)}
          >
            <IconCirclePlus />
            resource
          </button>
        </div>
      </form>

      <Table className="tw-my-4">
        <thead>
          <tr className="tw-bg-gray-200">
            <th>title</th>
            <th>content</th>
            <th>attachmentUrl</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody className="tw-border-b">
          {media.length == 0 && (
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

          {media.length > 0 &&
            media.map((item) => (
              <tr key={item.title}>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td> {item.attachmentUrl}</td>
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

export default ServiceResource;
