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
import Service from '../../../models/publication/services/service';
import { useRouter } from 'next/router';
const schema = yup.object({
  url: yup.string().required('This field must be Number'),
  caption: yup.string().required('This field is required'),
  type: yup
    .string()
    .required(
      'This field is required eg please select the media type you want to upload'
    ),
});

const ServiceMedaias = () => {
  const [notification, setNotification] = useState<NotificationModel | null>(
    null
  );
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  const router = useRouter();
  const { id } = router.query;

  const [
    addNewServiceMedaia,
    { isLoading: creating, isSuccess: createStatus, isError: creatingError },
  ] = useAddNewServiceMediaMutation();
  const [
    deleteServiceMedaia,
    { isLoading: deleting, isSuccess: deleteStatus, isError: deletingError },
  ] = useDeleteServiceMediaMutation();
  const [
    updateServiceMedaia,
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
    ServiceMedaiaAssignmentModalOpened,
    setServiceMedaiaAssignmentModalOpened,
  ] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<string>('');
  const [perPageModal, setPerPageModal] = useState<string>('10');
  const [itemTobeUpdated, setItemTobeUpdated] = useState<string>(null);
  const [itemTobeDeleted, setItemTobeDeleted] = useState<string>(null);

  const handleShowMedaiaModal = (currenctItem: string) => {
    setItemTobeUpdated(currenctItem);
    setServiceMedaiaAssignmentModalOpened(!ServiceMedaiaAssignmentModalOpened);
  };
  const handleHideMedaiaModal = () => {
    setServiceMedaiaAssignmentModalOpened(false);
  };

  /* deleting service Medaia */

  const submitDelete = async () => {
    try {
      await deleteServiceMedaia({
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
  const onFinish: SubmitHandler<Service> = async (data) => {
    if (formMode === 'new') {
      try {
        await addNewServiceMedaia({
          ...data,
          id,
        }).unwrap();

        setValue('Medaia', '');
        setValue('caption', '');
        setValue('type', '');
        createStatus !== null &&
          setNotification({
            type: 'success',
            message: 'Service  added successfully',
            show: true,
          });
        reset();
      } catch (err) {
        creatingError !== null &&
          setNotification({
            type: 'danger',
            message: 'Failed to added Service .',
            show: true,
          });
      }
    } else if (formMode === 'update') {
      try {
        await updateServiceMedaia({
          ...data,
          serviceId: id.toString(),
          id: itemTobeUpdated,
        }).unwrap();
        updateStatus !== null &&
          setNotification({
            type: 'success',
            message: 'service  info updated successfully',
            show: true,
          });
      } catch (err) {
        updatingError !== null &&
          setNotification({
            type: 'danger',
            message: 'failed to update service  info',
            show: true,
          });
      }
    }
  };

  /*  */

  useEffect(() => {
    if (formMode === 'update' && ServiceMedaiaAssignmentModalOpened) {
      if (selectedService !== null) {
        const currentValue = selectedService.medias.find(
          (item) => item.id == itemTobeUpdated
        );
        console.log(currentValue);
        setValue('type', currentValue.type);
        setValue('caption', currentValue.caption);
        setValue('url', currentValue.url);
      }
    }
  }, [
    id,
    isSuccess,
    ServiceMedaiaAssignmentModalOpened,
    formMode,
    selectedService,
    setValue,
    itemTobeUpdated,
  ]);
  /*  */
  return (
    <div>
      <Modal
        opened={ServiceMedaiaAssignmentModalOpened}
        onClose={handleHideMedaiaModal}
        title={`${
          formMode == 'new' ? 'Add New Service Media' : 'Edit Service Medaia '
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
              <label className="form-label required">Type</label>
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
              <label className="form-label required"> Url</label>
              <input
                type="text"
                required
                placeholder="url"
                autoComplete="off"
                className={`form-control   
                   ${errors.Medaia ? 'is-invalid' : ''}`}
                {...register('url')}
              />
              {errors.url && (
                <div className="invalid-feedback">{errors.url.message}</div>
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
            handleShowMedaiaModal('');
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
            <th>url</th>
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
                <td> {item.url}</td>
                <td>
                  <div className="tw-flex tw-my-4 tw-space-x-4 ">
                    <Button
                      type="button"
                      className="btn btn-primary tw-bg-[#1d2861]"
                      size="sm"
                      component="button"
                      onClick={() => {
                        setFormMode('update');
                        handleShowMedaiaModal(item.id);
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

export default ServiceMedaias;
