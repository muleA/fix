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

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
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
  
   
  })
  .required();

const ServiceCategoryDetailsForm = (props: {
  id?: unknown;
  mode: 'new' | 'update';
}) => {
  const router = useRouter();
  const { id } = router.query;
  const [addNewServiceCategory, { isLoading: creating, isSuccess: createStatus }] =
    useAddNewServiceCategoryMutation();
  const [deleteServiceCategory, { isLoading: deleting, isSuccess: deleteStatus }] =
    useDeleteServiceCategoryMutation();
  const [updateServiceCategory, { isLoading: updating, isSuccess: updateStatus }] =
    useUpdateServiceCategoryMutation();
  const [notification, setNotification] = useState<NotificationModel | null>(
    null
  );

  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors},
    setValue,
    reset,
  } = useForm<ServiceCategory>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const {
    data: ServiceCategorys,
    isLoading,
    isSuccess,
    isError,
  } = useGetServiceCategorysQuery();

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
      router.push('/service-store/service-Category/new');
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
      const selectedServiceCategory: ServiceCategory = ServiceCategorys?.data?.find(
        (ServiceCategory: ServiceCategory) => ServiceCategory.id === props.id
      );

      if (selectedServiceCategory !== null)
      setValue('name', selectedServiceCategory?.name);
      setValue('code', selectedServiceCategory?.code);
      setValue('description', selectedServiceCategory?.description);   
    }
  }, [ServiceCategorys?.data, isSuccess, props.id, props.mode, setValue]);

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
          <div className="tw-flex tw-items-center tw-mb-2">
            <section className="tw-grid  tw-grid-cols-2 tw-gap-4 tw-container tw-p-0 tw-mx-auto ">
              <div className="">
           

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
                    <div className="invalid-feedback">
                      {errors.code.message}
                    </div>
                  )}
                </div>
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
                    <div className="invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>
                
              </div>
              <div className="">
                <div className="mb-2 ">
                  <label className="form-label ">Description</label>
                  <input
                    type="text"
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
            </section>
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
export default ServiceCategoryDetailsForm;
