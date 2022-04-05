import { Pagination, Table, Modal, Button, Select, Card } from '@mantine/core';
import {
  IconCirclePlus,
  IconInbox,
  IconTrash,
  IconEditCircle,
  IconDeviceFloppy,
} from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  useUpdateServiceMediaMutation,
  useGetServicesQuery,
  useAddNewServiceMediaMutation,
  useDeleteServiceMediaMutation,
} from '../store/query/service.query';
import NotificationModel from '../../../shared/models/notification-model';
import Notification from '../../../shared/components/notification';
import DeleteConfirmation from '../../../shared/components/delete-confirmation';
import { Media} from '../../../models/publication/services/service';
import Service from '../../../models/publication/services/service'
import { useRouter } from 'next/router';
const schema = yup.object({
  type: yup
    .string()
    .required('This field is required eg image,video,audio etc'),
  caption: yup.string().required('This field is required'),
  fileUrl: yup.object().shape({
    file: yup
      .mixed()
      .required('You need to provide a file')
      .test('Empty', 'Please upload a file', (value) => {
        return value.length != 0;
      })
      .test(
        'fileType',
        'Only images ,videos and audios are supported',
        (value) => {
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(
            value[0]?.type
          );
        }
      )
      .test('fileSize', 'File Size should not exceed 3MB', (value) => {
        return value[0]?.size <= 3000000;
      }),
  }),
});

const ServiceMedias = () => {
  const [notification, setNotification] = useState<NotificationModel | null>(
    null
  );
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  const router = useRouter();
  const { id } = router.query;

  const [
    addNewServiceMedia,
    { isLoading: creating, isSuccess: createStatus, isError: creatingError },
  ] = useAddNewServiceMediaMutation();
  const [
    deleteServiceMedia,
    { isLoading: deleting, isSuccess: deleteStatus, isError: deletingError },
  ] = useDeleteServiceMediaMutation();
  const [
    updateServiceMedia,
    { isLoading: updating, isSuccess: updateStatus, isError: updatingError },
  ] = useUpdateServiceMediaMutation();
  const {
    data: services,
    isLoading,
    isSuccess,
    isError,
  } = useGetServicesQuery('');

  useEffect(() => {
    if (isSuccess == true) {
      setSelectedService(
        services?.data?.find((service: Service) => service.id == id)
      );
    }
  }, [isSuccess, id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const [
    ServiceMediaAssignmentModalOpened,
    setServiceMediaAssignmentModalOpened,
  ] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<string>('');
  const [perPageModal, setPerPageModal] = useState<string>('10');
  const [itemTobeUpdated, setItemTobeUpdated] = useState<string>(null);
  const [itemTobeDeleted, setItemTobeDeleted] = useState<string>(null);

  const handleShowMediaModal = (currenctItem: string) => {
    setItemTobeUpdated(currenctItem);
    setServiceMediaAssignmentModalOpened(!ServiceMediaAssignmentModalOpened);
  };
  const handleHideMediaModal = () => {
    setServiceMediaAssignmentModalOpened(false);
  };

  /* deleting service Media */

  const submitDelete = async () => {
    try {
      await deleteServiceMedia({
        serviceId: id.toString(),
        mediaId: itemTobeDeleted,
      }).unwrap();
      deleteStatus !== null &&
        setNotification({
          type: 'success',
          message: 'Service  has  deleted successfully',
          show: true,
        });
    } catch (err) {
      console.log(err);
      setNotification({
        type: 'danger',
        message: 'Failed to delete Service .',
        show: true,
      });
    }
    setDisplayConfirmationModal(false);
  };

  const showDeleteModal = (itemTobeDeleted: string) => {
    setItemTobeDeleted(itemTobeDeleted);
    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  /*  */
  /* creating and updating */
  const onFinish: SubmitHandler<Media> = async (data) => {
    if (formMode === 'new') {
      try {
        await addNewServiceMedia({
          caption: data?.caption,
          file: data?.file,
          type: data?.type,
          id,
        }).unwrap();
        createStatus !== null &&
          setNotification({
            type: 'success',
            message: 'media  added successfully',
            show: true,
          });
        reset();
      } catch (err) {
        creatingError !== null &&
          setNotification({
            type: 'danger',
            message: 'Failed to added media.',
            show: true,
          });
      }
    } else if (formMode === 'update') {
      try {
        await updateServiceMedia({
          ...data,
          serviceId: id.toString(),
          id: itemTobeUpdated,
        }).unwrap();
        updateStatus !== null &&
          setNotification({
            type: 'success',
            message: 'media  info updated successfully',
            show: true,
          });
      } catch (err) {
        updatingError !== null &&
          setNotification({
            type: 'danger',
            message: 'failed to update media info',
            show: true,
          });
      }
    }
  };

  useEffect(() => {
    if (formMode === 'update' && ServiceMediaAssignmentModalOpened) {
      if (selectedService !== null) {
        const currentValue = selectedService.medias.find(
          (item) => item.id == itemTobeUpdated
        );
        console.log(currentValue);
        setValue('type', currentValue.type);
        setValue('caption', currentValue.caption);
        setValue('fileUrl.url', currentValue.file);
      }
    }
  }, [
    id,
    isSuccess,
    ServiceMediaAssignmentModalOpened,
    formMode,
    selectedService,
    setValue,
    itemTobeUpdated,
  ]);
  /*  */
  return (
    <div>
      <Modal
        opened={ServiceMediaAssignmentModalOpened}
        onClose={handleHideMediaModal}
        title={`${
          formMode == 'new' ? 'Add New Service Media' : 'Edit Service Media '
        }`}
        styles={{
          header: {
            borderBottom: '1px solid rgb(229 231 235)',
            paddingBottom: '1rem',
          },
        }}
      >
        <form onSubmit={handleSubmit(onFinish)}>
          <Card>
            <div className="mb-3">
              <label className="form-label required">Media Type</label>
              <select
                placeholder="type"
                autoComplete="off"
                className={`form-control

                   ${errors.type ? 'is-invalid' : ''}`}
                {...register('type')}
              >
                <option value=""> choose Media Type</option>
                <option value="Image">Image</option>
                <option value="Video">Video</option>
                <option value="Audio">Audio</option>
              </select>
              {errors.type && (
                <div className="invalid-feedback">{errors.type.message}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label required"> File</label>
              <input
                type="file"
                required
                placeholder="file"
                autoComplete="off"
                className={`form-control   
                   ${errors.fileUrl?.file ? 'is-invalid' : ''}`}
                {...register('fileUrl.file')}
              />
              {errors.fileUrl?.file && (
                <div className="invalid-feedback">
                  {errors.fileUrl?.file.message}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label required"> Caption</label>
              <textarea
                rows={2}
                placeholder="caption"
                autoComplete="off"
                className={`form-control

                   ${errors.caption ? 'is-invalid' : ''}`}
                {...register('caption')}
              />
              {errors.caption && (
                <div className="invalid-feedback">{errors.caption.message}</div>
              )}
            </div>
            <div className="tw-flex tw-justify-start tw-mt-4 ">
              {formMode == 'new' && (
                <Button
                  type="submit"
                  className="btn btn-primary tw-bg-[#1d2861]"
                  loading={creating}
                  component="button"
                >
                  <IconDeviceFloppy /> Save
                </Button>
              )}
              {formMode == 'update' && (
                <Button
                  type="submit"
                  className="btn btn-primary tw-bg-[#1d2861]"
                  loading={updating}
                  size="sm"
                  component="button"
                >
                  <IconDeviceFloppy className="mr-2" />
                  Update
                </Button>
              )}
            </div>
          </Card>
        </form>
      </Modal>
      <div className="tw-my-4 tw-flex tw-justify-end">
        <Button
          type="button"
          component="button"
          className="btn btn-primary tw-bg-[#1d2861]"
          onClick={() => {
            setFormMode('new');
            handleShowMediaModal('');
          }}
        >
          <IconCirclePlus />
          New
        </Button>
      </div>
      <Table className="tw-my-4">
        <thead>
          <tr className="tw-bg-gray-200">
            <th>type</th>
            <th>Caption</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tw-border-b">
          {isSuccess && selectedService?.medias?.length == 0 && (
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

          {selectedService?.medias?.length > 0 &&
            selectedService?.medias?.map((item) => (
              <tr key={item.id}>
                <td> {item.type}</td>
                <td> {item.caption}</td>
                <td> {item.file}</td>
                <td>
                  <div className="tw-flex tw-my-4 tw-space-x-4 ">
                    <Button
                      type="button"
                      className="btn btn-primary tw-bg-[#1d2861]"
                      size="sm"
                      component="button"
                      onClick={() => {
                        setFormMode('update');
                        handleShowMediaModal(item.id);
                      }}
                    >
                      <IconEditCircle />
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-danger tw-bg-[#ff4d4f]"
                      component="button"
                      onClick={() => showDeleteModal(item.id)}
                    >
                      <IconTrash />
                    </Button>
                    <div></div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        id={itemTobeDeleted}
        deleteStatus={deleting}
      />
      {notification != null && (
        <Notification
          onClose={() => setNotification(null)}
          type={notification.type}
          message={notification.message}
          show={notification.show}
        />
      )}

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
