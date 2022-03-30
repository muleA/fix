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

const ServiceMedias = () => {
  const media = [
    {
      type: 'image',
      caption: 'trade license',
      url: `http://192.168.137.168:3001/api/`,
    },
    {
      type: 'video',
      caption: 'passport',
      url: `http://192.168.137.168:3001/api/`,
    },
    {
      type: 'audio',
      caption: 'how to apply for national Id',
      url: `http://192.168.137.168:3001/api/`,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ resolver: yupResolver(schema) });
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const [mandateAssignmentModalOpened, setMandateAssignmentModalOpened] =
    useState<boolean>(false);
  const [assignedMandateModalOpened, setAssignedMandateModalOpened] =
    useState<boolean>(false);
  const [viewedMandate, setViewedMandate] = useState<string>('');
  const [perPage, setPerPage] = useState<string>('10');
  const [perPageModal, setPerPageModal] = useState<string>('10');

  const onSubmit = async (data) => {
    try {
      console.log(data.media);
      setButtonDisabled(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Modal
          opened={mandateAssignmentModalOpened}
          onClose={() => setMandateAssignmentModalOpened(false)}
          title="Add Media"
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
            <label className="form-label required">
              Media Type(audio/video/image)
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="media type"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">
              Caption Text to the Media
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="caption"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label required">
              source file(url) to the media
            </label>
            <div className="tw-my-4">
              <input
                type="file"
                className="tw-block  
tw-border  
tw-cursor-pointer 
"
                aria-describedby="user_avatar_help"
              />
            </div>

            <div
              className="tw-mt-1 tw-text-sm tw-text-gray-500 dark:tw-text-gray-300"
              id="user_avatar_help"
            ></div>

            {/*  */}
          </div>
          <div className="tw-flex tw-justify-end ">
            <Button className="bg-primary">Done</Button>
          </div>

          {/*  */}
        </Modal>

        <div className="tw-my-4 tw-flex tw-justify-end">
          <button
            type="button"
            className="btn btn-primary tw-bg-[#1d2861]"
            onClick={() => setMandateAssignmentModalOpened(true)}
          >
            <IconCirclePlus />
            Media
          </button>
        </div>
      </form>

      <Table className="tw-my-4">
        <thead>
          <tr className="tw-bg-gray-200">
            <th>Type</th>
            <th>Caption</th>
            <th>Url</th>
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
              <tr key={item.type}>
                <td>{item.type}</td>
                <td>{item.caption}</td>
                <td> {item.url}</td>
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

export default ServiceMedias;
