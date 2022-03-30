import { Divider, Button } from '@mantine/core';
import { IconDeviceFloppy, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import ServiceTag from '../../../models/classification/tag';
import { useEffect, useState } from 'react';
import NotificationModel from '../../../shared/models/notification-model';
import Notification from '../../../shared/components/notification';
import DeleteConfirmation from '../../../shared/components/delete-confirmation';
import {
  useGetServiceTagsQuery,
  useAddNewServiceTagMutation,
  useUpdateServiceTagMutation,
  useDeleteServiceTagMutation,
} from '../store/query/tag.query';
import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';
const schema = yup
  .object({
    name: yup.string().required('This field is required'),
    description: yup.string().required('This field is required'),
  })
  .required();

const ServiceTagDetailsForm = (props: {
  id?: unknown;
  mode: 'new' | 'update';
}) => {
  const router = useRouter();
  const { id } = router.query;
  const [addNewServiceTag, { isLoading: creating, isSuccess: createStatus }] =
    useAddNewServiceTagMutation();
  const [deleteServiceTag, { isLoading: deleting, isSuccess: deleteStatus }] =
    useDeleteServiceTagMutation();
  const [updateServiceTag, { isLoading: updating, isSuccess: updateStatus }] =
    useUpdateServiceTagMutation();
  const [notification, setNotification] = useState<NotificationModel | null>(
    null
  );

  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ServiceTag>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const {
    data: ServiceTags,
    isLoading,
    isSuccess,
    isError,
  } = useGetServiceTagsQuery();

  /* event handlers */
  // Handle the displaying of the modal
  const showDeleteModal = () => {
    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // Handle the actual deletion of the item
  const submitDelete = async () => {
    try {
      await deleteServiceTag(id).unwrap();
      deleteStatus !== null &&
        setNotification({
          type: 'success',
          message: 'Service Tag has  deleted successfully',
          show: true,
        });
      router.push('/service-store/service-tag/new');
    } catch (err) {
      console.log(err);
      setNotification({
        type: 'danger',
        message: 'Failed to delete Service Tag.',
        show: true,
      });
    }
    setDisplayConfirmationModal(false);
  };

  const onFinish: SubmitHandler<ServiceTag> = async (data) => {
    if (props.mode === 'new') {
      try {
        await addNewServiceTag(data).unwrap();
        setValue('name', '');
        setValue('description', '');
        createStatus !== null &&
          setNotification({
            type: 'success',
            message: 'Service Tag added successfully',
            show: true,
          });
        reset();
      } catch (err) {
        setNotification({
          type: 'danger',
          message: 'Failed to added Service Tag.',
          show: true,
        });
      }
    } else if (props.mode === 'update') {
      try {
        await updateServiceTag({
          id: props.id,
          ...data,
        }).unwrap();
        updateStatus !== null &&
          setNotification({
            type: 'success',
            message: 'service Tag info updated successfully',
            show: true,
          });
      } catch (err) {
        isError &&
          setNotification({
            type: 'danger',
            message: 'failed to update service Tag info',
            show: true,
          });
      }
    }
  };

  /*  */

  useEffect(() => {
    if (props.mode === 'update') {
      const selectedServiceTag: ServiceTag = ServiceTags?.data?.find(
        (ServiceTag: ServiceTag) => ServiceTag.id === props.id
      );

      if (selectedServiceTag !== null)
        setValue('name', selectedServiceTag?.name);
      setValue('description', selectedServiceTag?.description);
    }
  }, [ServiceTags?.data, isSuccess, props.id, props.mode, setValue]);

  return (
    <div>
      <form onSubmit={handleSubmit(onFinish)}>
        {isLoading && (
          <>
            <ReactLoading
              className="tw-z-50 tw-mx-auto tw-absolute tw-top-1/2 tw-left-1/2 
                  -tw-translate-x-1/2 -tw-translate-y-1/2 tw-transform"
              type={'spokes'}
              color={'#1d2861'}
              height={'6%'}
              width={'6%'}
            />
          </>
        )}

        <div className="tw-my-4">
          <div className="mb-2 ">
            <label className="form-label required">Name </label>
            <input
              type="text"
              placeholder="enter Name"
              autoComplete="off"
              className={`form-control

                   ${errors.name ? 'is-invalid' : ''}`}
              {...register('name')}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name.message}</div>
            )}
          </div>

          <div className="mb-2 ">
            <label className="form-label ">Description</label>
            <textarea
              rows={2}
              placeholder="Description Id"
              autoComplete="off"
              className={`form-control

                   ${errors.description ? 'is-invalid' : ''}`}
              {...register('description')}
            />
            {errors.description && (
              <div className="invalid-feedback">
                {errors.description.message}
              </div>
            )}
          </div>
        </div>

        <Divider className="tw-mt-4 tw-mb-2" />
        <div className="tw-flex tw-justify-center">
          <div>
            {' '}
            {props.mode == 'new' && (
              <Button
                type="submit"
                className="btn btn-primary tw-bg-[#1d2861]"
                loading={creating}
                component="button"
              >
                <IconDeviceFloppy className="mr-2" /> Save
              </Button>
            )}
          </div>
          <div>
            {props.mode == 'update' && (
              <div className="tw-flex tw-my-4 tw-space-x-6">
                <div className="tw-grow">
                  <Button
                    type="submit"
                    className="btn btn-primary tw-bg-[#1d2861]"
                    loading={updating}
                    size="sm"
                  >
                    <IconDeviceFloppy className="mr-2" />
                    Update
                  </Button>
                </div>
                <div>
                  <Button
                    type="button"
                    className="tw-ml-2 btn btn-danger tw-bg-[#ff4d4f]"
                    component="button"
                    onClick={showDeleteModal}
                  >
                    <IconTrash />
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>

      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        id={id}
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
    </div>
  );
};
export default ServiceTagDetailsForm;
