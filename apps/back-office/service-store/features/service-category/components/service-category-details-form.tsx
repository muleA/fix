import { Divider, Button } from '@mantine/core';
import { IconDeviceFloppy, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import ServiceCategory from '../../../models/classification/category';
import { useEffect, useState } from 'react';
import NotificationModel from '../../../shared/models/notification-model';
import Notification from '../../../shared/components/notification';
import DeleteConfirmation from '../../../shared/components/delete-confirmation';
import {
  useGetServiceCategorysQuery,
  useAddNewServiceCategoryMutation,
  useUpdateServiceCategoryMutation,
  useDeleteServiceCategoryMutation,
} from '../store/query/service-category.query';
import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';

const schema = yup
  .object({
    code: yup.string().required('This field is required'),
    name: yup
      .string()
      .required('This field is required')
      .matches(
        /^[aA-zZ\s]+$/,
        'only alphabet characters are allowed for this field'
      ),

    description: yup.string().required('This field is required'),
    parentId: yup.string(),
  })
  .required();

const ServiceCategoryDetailsForm = (props: {
  id?: unknown;
  mode: 'new' | 'update';
}) => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: serviceCategorys,
    isLoading,
    isSuccess,
    isError,
  } = useGetServiceCategorysQuery();
  const [
    addNewServiceCategory,
    { isLoading: creating, isSuccess: createStatus },
  ] = useAddNewServiceCategoryMutation();
  const [
    deleteServiceCategory,
    { isLoading: deleting, isSuccess: deleteStatus },
  ] = useDeleteServiceCategoryMutation();
  const [
    updateServiceCategory,
    { isLoading: updating, isSuccess: updateStatus },
  ] = useUpdateServiceCategoryMutation();
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
  } = useForm<ServiceCategory>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

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
      await deleteServiceCategory(id).unwrap();
      deleteStatus !== null &&
        setNotification({
          type: 'success',
          message: 'Service Category has  deleted successfully',
          show: true,
        });
      router.push('/service-store/service-category/new');
    } catch (err) {
      console.log(err);
      setNotification({
        type: 'danger',
        message: 'Failed to delete Service Category.',
        show: true,
      });
    }
    setDisplayConfirmationModal(false);
  };

  const onFinish: SubmitHandler<ServiceCategory> = async (data) => {
    if (props.mode === 'new') {
      try {
        await addNewServiceCategory(data).unwrap();
        setValue('name', '');
        setValue('code', '');
        setValue('description', '');
        setValue('parentId', '');
        createStatus !== null &&
          setNotification({
            type: 'success',
            message: 'Service Category added successfully',
            show: true,
          });
        reset();
      } catch (err) {
        setNotification({
          type: 'danger',
          message: 'Failed to added Service Category.',
          show: true,
        });
      }
    } else if (props.mode === 'update') {
      try {
        await updateServiceCategory({
          id: props.id,
          ...data,
          updatedBy: id,
        }).unwrap();
        updateStatus !== null &&
          setNotification({
            type: 'success',
            message: 'service Category info updated successfully',
            show: true,
          });
      } catch (err) {
        isError &&
          setNotification({
            type: 'danger',
            message: 'failed to update service Category info',
            show: true,
          });
      }
    }
  };

  /*  */

  useEffect(() => {
    if (props.mode === 'update') {
      const selectedServiceCategory: ServiceCategory =
        serviceCategorys?.data?.find(
          (ServiceCategory: ServiceCategory) => ServiceCategory.id === props.id
        );

      if (selectedServiceCategory !== null)
        setValue('name', selectedServiceCategory?.name);
      setValue('code', selectedServiceCategory?.code);
      setValue('description', selectedServiceCategory?.description);
      setValue(
        'parentId',
        selectedServiceCategory?.id ? selectedServiceCategory?.parentId : ''
      );
    }
  }, [serviceCategorys?.data, isSuccess, props.id, props.mode, setValue]);

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

        <div className="mb-2 ">
          <label className="form-label required">Name </label>
          <textarea
            rows={1}
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
          <label className="form-label required">code</label>
          <input
            type="text"
            placeholder="code"
            autoComplete="off"
            className={`form-control

                   ${errors.code ? 'is-invalid' : ''}`}
            {...register('code')}
          />
          {errors.code && (
            <div className="invalid-feedback">{errors.code.message}</div>
          )}
        </div>

        <div className="mb-2 ">
          <label className="form-label ">Description</label>
          <textarea
            rows={2}
            placeholder="Description "
            autoComplete="off"
            className={`form-control

                   ${errors.description ? 'is-invalid' : ''}`}
            {...register('description')}
          />
          {errors.description && (
            <div className="invalid-feedback">{errors.description.message}</div>
          )}
        </div>
        <div className="mb-2 ">
          <label className="form-label ">Parent Category</label>
          <select
            placeholder="Parent Category "
            autoComplete="off"
            className={`form-control

                   ${errors.parentId ? 'is-invalid' : ''}`}
            {...register('parentId')}
          >
            {serviceCategorys?.data.length !== 0 && (
              <option value=""> choose Category</option>
            )}
            {serviceCategorys?.data.length === 0 ? (
              <option value="">none</option>
            ) : (
              serviceCategorys?.data.map((category: ServiceCategory) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))
            )}
          </select>
          {errors.parentId && (
            <div className="invalid-feedback">{errors.parentId.message}</div>
          )}
        </div>
        <Divider className="tw-mt-4 tw-mb-2" />
        <div className="tw-flex tw-justify-start">
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
export default ServiceCategoryDetailsForm;
