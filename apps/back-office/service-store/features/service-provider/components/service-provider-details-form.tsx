import { Divider, Button } from '@mantine/core';
import { IconDeviceFloppy, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import ServiceProvider from '../../../models/publication/service-providers/service-provider';
import NotificationModel from '../../../shared/models/notification-model';
import Notification from '../../../shared/components/notification';
import ReactLoading from 'react-loading';
import {
  useGetServiceProvidersQuery,
  useAddNewServiceProviderMutation,
  useUpdateServiceProviderMutation,
  useDeleteServiceProviderMutation,
} from '../../service-provider/store/query/service-provider.query';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DeleteConfirmation from '../../../shared/components/delete-confirmation';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    shortName: yup.string().required('This field is required'),
    code: yup.string().required('This field is required'),
    fullName: yup
      .string()
      .required('This field is required')
      .matches(
        /^[aA-zZ\s]+$/,
        'only alphabet characters are allowed for this field'
      ),
    sector: yup
      .string()
      .required('This field is required')
      .matches(
        /^[aA-zZ\s]+$/,
        'only alphabet characters are allowed for this field'
      ),
    organizationName: yup.string().required('This field is required'),
    organizationId: yup
      .string()
      .required(
        'Id must be UUID or like this (46205772-b393-4cfb-ae9b-c76162d4923f'
      ),
    contactInfo: yup.object().shape({
      email: yup.string().email('Invalid email format').required('Required'),
      phone: yup
        .string()
        .required('please enter a valid phone number')
        .matches(phoneRegExp, 'Phone number is not valid')
        .nullable()
        .min(10, 'phone number must be  10 characters')
        .max(10, 'too long'),
      name: yup
        .string()
        .required('This field is required')
        .matches(
          /^[aA-zZ\s]+$/,
          'only alphabet characters are allowed for this field'
        ),
    }),

    address: yup.object().shape({
      country: yup
        .string()
        .required('Required country name cannot be empty')
        .matches(
          /^[aA-zZ\s]+$/,
          'only alphabet characters are allowed for this field'
        ),
      houseNumber: yup
        .number()
        .required('This field is required')
        .typeError('House number must be a number'),
      city: yup
        .string()
        .required('This field is required')
        .matches(
          /^[aA-zZ\s]+$/,
          'only alphabet characters are allowed for this field'
        ),
      street: yup.string().required('required'),
    }),

    location: yup.object().shape({
      city: yup
        .string()
        .required('Required city name cannot be empty')
        .matches(
          /^[aA-zZ\s]+$/,
          'only alphabet characters are allowed for this field'
        ),
      latitude: yup
        .number()
        .required('This field is required')
        .typeError('latitude must be a number'),
      longitude: yup
        .number()
        .required('This field is required')
        .typeError('longtiude must be a number'),
      landmark: yup.string().required('required'),
    }),
  })
  .required();
const ServiceProviderDetailsForm = (props: {
  id?: string;
  mode: 'new' | 'update';
}) => {
  const router = useRouter();
  const { id } = router.query;
  const [
    addNewServiceProvider,
    { isLoading: creating, isSuccess: createStatus },
  ] = useAddNewServiceProviderMutation();
  const [
    deleteServiceProvider,
    { isLoading: deleting, isSuccess: deleteStatus },
  ] = useDeleteServiceProviderMutation();
  const [
    updateServiceProvider,
    { isLoading: updating, isSuccess: updateStatus },
  ] = useUpdateServiceProviderMutation();
  const [notification, setNotification] = useState<NotificationModel | null>(
    null
  );

  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ServiceProvider>({ resolver: yupResolver(schema) });

  /* fetching here */
  const {
    data: ServiceProviders,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useGetServiceProvidersQuery();

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
      await deleteServiceProvider(id).unwrap();
      deleteStatus !== null &&
        setNotification({
          type: 'success',
          message: 'Service Owner has  deleted successfully',
          show: true,
        });
      router.push('/service-store/service-provider/new');
    } catch (err) {
      console.log(err);
      setNotification({
        type: 'danger',
        message: 'Failed to delete Service Owner.',
        show: true,
      });
    }
    setDisplayConfirmationModal(false);
  };

  const onFinish: SubmitHandler<ServiceProvider> = (data): unknown => {
    return props.mode == 'new' ? onCreate(data) : onUpdate(props.id);
  };
  const onCreate = async (data) => {
    try {
      await addNewServiceProvider(data).unwrap();
      setValue('shortName', '');
      setValue('fullName', '');
      setValue('code', '');
      setValue('sector', '');
      setValue('contactInfo', {
        email: '',
        phone: '',
        name: '',
      });
      setValue('address', {
        country: '',
        city: '',
        houseNumber: '',
        street: '',
      });
      setValue('location', {
        city: '',
        latitude: data.latitude,
        longitude: data.longitude,
        landmark: '',
      });
      createStatus !== null &&
        setNotification({
          type: 'success',
          message: 'Service Provider added successfully',
          show: true,
        });
      reset();
    } catch (err) {
      console.log(error);
      setNotification({
        type: 'danger',
        message: 'Failed to added Service Provider.',
        show: true,
      });
    }
  };

  const onUpdate = async (data) => {
    try {
      await updateServiceProvider({
        id: props.id,
        ...data,
      }).unwrap();
      updateStatus !== null &&
        setNotification({
          type: 'success',
          message: 'service Provider info updated successfully',
          show: true,
        });
    } catch (err) {
      console.log(err);
      isError &&
        setNotification({
          type: 'danger',
          message: 'failed to update service Provider info',
          show: true,
        });
    }
  };

  useEffect(() => {
    if (props.mode !== 'new') {
      const selectedServiceProvider: ServiceProvider =
        ServiceProviders?.data?.find(
          (ServiceProvider: ServiceProvider) => ServiceProvider.id === props.id
        );

      setValue('shortName', selectedServiceProvider?.shortName);
      setValue('fullName', selectedServiceProvider?.fullName);
      setValue('code', selectedServiceProvider?.code);
      setValue('sector', selectedServiceProvider?.sector);
      setValue('organizationId', selectedServiceProvider?.organizationId);
      setValue('organizationName', selectedServiceProvider?.organizationName);
      setValue('contactInfo', {
        email: selectedServiceProvider?.contactInfo?.email,
        phone: selectedServiceProvider?.contactInfo?.phone,
        name: selectedServiceProvider?.contactInfo?.name,
      });
      setValue('address', {
        country: selectedServiceProvider?.address.country,
        city: selectedServiceProvider?.address.city,
        houseNumber: selectedServiceProvider?.address.houseNumber,
        street: selectedServiceProvider?.address.street,
      });
      setValue('location', {
        city: selectedServiceProvider?.location.city,
        latitude: selectedServiceProvider?.location.latitude,
        longitude: selectedServiceProvider?.location.longitude,
        landmark: selectedServiceProvider?.location.landmark,
      });
    }
  }, [ServiceProviders?.data, isSuccess, props.id, props.mode, setValue]);

  /*  */

  return (
    <div>
      <form
        onSubmit={
          props.mode == 'new' ? handleSubmit(onFinish) : handleSubmit(onUpdate)
        }
      >
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
                  <label className="form-label required">ShortName</label>
                  <input
                    type="text"
                    placeholder="enter shortName"
                    autoComplete="off"
                    className={`form-control

                   ${errors.shortName ? 'is-invalid' : ''}`}
                    {...register('shortName')}
                  />
                  {errors.shortName && (
                    <div className="invalid-feedback">
                      {errors.shortName.message}
                    </div>
                  )}
                </div>
                <div className="mb-2 ">
                  <label className="form-label ">FullName</label>
                  <textarea
                    rows={2}
                    placeholder="fullName"
                    autoComplete="off"
                    className={`form-control

                   ${errors.fullName ? 'is-invalid' : ''}`}
                    {...register('fullName')}
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">
                      {errors.fullName.message}
                    </div>
                  )}
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">Code</label>
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
                  <label className="form-label required">Sector </label>
                  <textarea
                    rows={1}
                    placeholder="enter sector"
                    autoComplete="off"
                    className={`form-control

                   ${errors.sector ? 'is-invalid' : ''}`}
                    {...register('sector')}
                  />
                  {errors.sector && (
                    <div className="invalid-feedback">
                      {errors.sector.message}
                    </div>
                  )}
                </div>
                <div className="mb-2 ">
                  <label className="form-label ">Organzation Id</label>
                  <input
                    type="text"
                    placeholder="organzation Id"
                    autoComplete="off"
                    className={`form-control

                   ${errors.organizationId ? 'is-invalid' : ''}`}
                    {...register('organizationId')}
                  />
                  {errors.organizationId && (
                    <div className="invalid-feedback">
                      {errors.organizationId.message}
                    </div>
                  )}
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">
                    Organzation Name
                  </label>
                  <textarea
                    rows={2}
                    placeholder="orgazation name"
                    autoComplete="off"
                    className={`form-control

                   ${errors.organizationName ? 'is-invalid' : ''}`}
                    {...register('organizationName')}
                  />
                  {errors.organizationName && (
                    <div className="invalid-feedback">
                      {errors.organizationName.message}
                    </div>
                  )}
                </div>

                <fieldset className="form-fieldset tw-border-1 tw-bg-white">
                  <legend className="tw-border-none tw-font-bold tw-border-1 tw-text-base  tw-w-auto tw-mb-6">
                    Contact Information
                  </legend>
                  <div className="tw-mb-3">
                    <label className="form-label required">Email</label>
                    <input
                      type="text"
                      placeholder="Email"
                      autoComplete="off"
                      className={`form-control

                   ${errors.contactInfo?.email ? 'is-invalid' : ''}`}
                      {...register('contactInfo.email')}
                    />
                    {errors.contactInfo?.email && (
                      <div className="invalid-feedback">
                        {errors.contactInfo?.email.message}
                      </div>
                    )}
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">Phone No</label>
                    <input
                      type="text"
                      placeholder="Phone No"
                      autoComplete="off"
                      className={`form-control

                   ${errors.contactInfo?.phone ? 'is-invalid' : ''}`}
                      {...register('contactInfo.phone')}
                    />
                    {errors.contactInfo?.phone && (
                      <div className="invalid-feedback">
                        {errors.contactInfo?.phone.message}
                      </div>
                    )}
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      autoComplete="off"
                      className={`form-control

                   ${errors.contactInfo?.name ? 'is-invalid' : ''}`}
                      {...register('contactInfo.name')}
                    />
                    {errors.contactInfo?.name && (
                      <div className="invalid-feedback">
                        {errors.contactInfo?.name.message}
                      </div>
                    )}{' '}
                  </div>
                </fieldset>
              </div>
              <div className="">
                <fieldset className="form-fieldset tw-border-1 tw-bg-white">
                  <legend className="tw-border-none tw-font-bold tw-border-1 tw-text-base  tw-w-auto tw-mb-6">
                    Address information
                  </legend>
                  <div className="tw-mb-3">
                    <label className="form-label required">Country</label>
                    <input
                      type="text"
                      placeholder="country"
                      autoComplete="off"
                      className={`form-control

                   ${errors.address?.country ? 'is-invalid' : ''}`}
                      {...register('address.country')}
                    />
                    {errors.address?.country && (
                      <div className="invalid-feedback">
                        {errors.address?.country.message}
                      </div>
                    )}
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">City</label>
                    <input
                      type="text"
                      placeholder="city"
                      autoComplete="off"
                      className={`form-control

                   ${errors.address?.city ? 'is-invalid' : ''}`}
                      {...register('address.city')}
                    />
                    {errors.address?.city && (
                      <div className="invalid-feedback">
                        {errors.address?.city.message}
                      </div>
                    )}
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">House No</label>
                    <input
                      type="text"
                      placeholder="House No"
                      autoComplete="off"
                      className={`form-control

                   ${errors.address?.houseNumber ? 'is-invalid' : ''}`}
                      {...register('address.houseNumber')}
                    />
                    {errors.address?.houseNumber && (
                      <div className="invalid-feedback">
                        {errors.address.houseNumber.message}
                      </div>
                    )}{' '}
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label">Street</label>
                    <input
                      type="text"
                      placeholder="Street"
                      autoComplete="off"
                      className={`form-control

                   ${errors.address?.street ? 'is-invalid' : ''}`}
                      {...register('address.street')}
                    />
                    {errors.address?.street && (
                      <div className="invalid-feedback">
                        {errors.address?.street.message}
                      </div>
                    )}{' '}
                  </div>
                </fieldset>
                <fieldset className="form-fieldset tw-border-1 tw-bg-white">
                  <legend className="tw-border-none tw-font-bold tw-border-1 tw-text-base  tw-w-auto tw-mb-6">
                    Location information
                  </legend>
                  <div className="tw-mb-3">
                    <label className="form-label required">City</label>
                    <input
                      type="text"
                      placeholder="city"
                      autoComplete="off"
                      className={`form-control

                   ${errors.location?.city ? 'is-invalid' : ''}`}
                      {...register('location.city')}
                    />
                    {errors.location?.city && (
                      <div className="invalid-feedback">
                        {errors.location?.city.message}
                      </div>
                    )}
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">Latitude</label>
                    <input
                      type="text"
                      placeholder="latitude"
                      autoComplete="off"
                      className={`form-control

                   ${errors.location?.latitude ? 'is-invalid' : ''}`}
                      {...register('location.latitude')}
                    />
                    {errors.location?.latitude && (
                      <div className="invalid-feedback">
                        {errors.location?.latitude.message}
                      </div>
                    )}
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">logntuide</label>
                    <input
                      type="text"
                      placeholder="longtuid"
                      autoComplete="off"
                      className={`form-control

                   ${errors.location?.longitude ? 'is-invalid' : ''}`}
                      {...register('location.longitude')}
                    />
                    {errors.location?.longitude && (
                      <div className="invalid-feedback">
                        {errors.location?.longitude.message}
                      </div>
                    )}
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label">landmark</label>
                    <input
                      type="text"
                      placeholder="landmark"
                      autoComplete="off"
                      className={`form-control

                   ${errors.location?.landmark ? 'is-invalid' : ''}`}
                      {...register('location.landmark')}
                    />
                    {errors.location?.landmark && (
                      <div className="invalid-feedback">
                        {errors.location?.landmark.message}
                      </div>
                    )}
                  </div>
                </fieldset>
              </div>
            </section>
          </div>
        </div>

        <Divider className="tw-mt-4" />
        <div className="tw-flex tw-justify-center">
          <div>
            {' '}
            {props.mode == 'new' && (
              <Button
                type="submit"
                className="btn btn-primary tw-bg-[#1d2861] mt-3"
                loading={creating}
                component="button"
              >
                <IconDeviceFloppy className="mr-2" /> Save
              </Button>
            )}
          </div>
          <div>
            {props.mode == 'update' && (
              <div className="tw-flex tw-my-4">
                <Button
                  type="submit"
                  className="btn btn-primary tw-bg-[#1d2861]"
                  loading={updating}
                  component="button"
                >
                  <IconDeviceFloppy className="mr-2" />
                  Update
                </Button>
                <Button
                  type="button"
                  className="tw-ml-2 btn btn-danger tw-bg-[#ff4d4f]"
                  onClick={showDeleteModal}
                  component="button"
                >
                  <IconTrash />
                  Delete
                </Button>
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

export default ServiceProviderDetailsForm;
