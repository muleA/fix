import { Divider, Button } from '@mantine/core';
import { IconDeviceFloppy, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import ServiceOwner from '../../../models/publication/service-owners/service-owner';
import { useEffect, useState } from 'react';
import NotificationModel from '../../../shared/models/notification-model';
import Notification from '../../../shared/components/notification';
import {
  useGetServiceOwnersQuery,
  useAddNewServiceOwnerMutation,
  useUpdateServiceOwnerMutation,
  useDeleteServiceOwnerMutation,
} from '../../service-owner/store/query/service-owner.query';
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
  })
  .required();

const ServiceOwnerDetailsForm = (props: {
  id?: unknown;
  mode: 'new' | 'update';
}) => {
  const [addNewServiceOwner, { isLoading: creating, isSuccess: createStatus }] =
    useAddNewServiceOwnerMutation();
  const [updateServiceOwner, { isLoading: updating, isSuccess: updateStatus }] =
    useUpdateServiceOwnerMutation();
  const [notification, setNotification] = useState<NotificationModel | null>(
    null
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    reset,
  } = useForm<ServiceOwner>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const {
    data: ServiceOwners,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetServiceOwnersQuery();

  const onFinish: SubmitHandler<ServiceOwner> = (data): any => {
    return props.mode == 'new' ? onCreate(data) : onUpdate(props.id);
  };
  const onCreate = async (data) => {
    try {
      const response = await addNewServiceOwner(data).unwrap();
      setValue('shortName', '');
      setValue('fullName', '');
      setValue('code', '');
      setValue('sector', '');
      setValue('contactInfo.email', '');
      setValue('contactInfo.phone', '');
      setValue('contactInfo.name', '');
      setValue('address.country', '');
      setValue('address.city', '');
      setValue('address.houseNumber', '');
      setValue('address.street', '');
      setNotification({
        type: 'success',
        message: 'Department added successfully',
        show: true,
      });
      reset();
    } catch (err) {
      console.log(error);
      setNotification({
        type: 'danger',
        message: 'Failed to added department.',
        show: true,
      });
    }
  };

  const onUpdate = async (data) => {
    try {
      const response = await updateServiceOwner({
        id: props.id,
        ...data,
      }).unwrap();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(props.mode);
    if (props.mode !== 'new') {
      const selectedServiceOwner: ServiceOwner = ServiceOwners?.items?.find(
        (ServiceOwner: ServiceOwner) => ServiceOwner.organizationId === props.id
      );
      console.log(props.id);
      setValue('shortName', selectedServiceOwner?.shortName);
      setValue('fullName', selectedServiceOwner?.fullName);
      setValue('code', selectedServiceOwner?.code);
      setValue('sector', selectedServiceOwner?.sector);
      setValue('contactInfo.email', selectedServiceOwner?.contactInfo.email);
      setValue('contactInfo.phone', selectedServiceOwner?.contactInfo.phone);
      setValue('contactInfo.name', selectedServiceOwner?.contactInfo.name);
      setValue('address.country', selectedServiceOwner?.address.country);
      setValue('address.city', selectedServiceOwner?.address.city);
      setValue(
        'address.houseNumber',
        selectedServiceOwner?.address.houseNumber
      );
      setValue('address.street', selectedServiceOwner?.address.street);
    }
  }, [ServiceOwners?.items, props.mode, props.id, setValue]);

  return (
    <div>
      <form
        onSubmit={
          props.mode == 'new' ? handleSubmit(onFinish) : handleSubmit(onUpdate)
        }
      >
        <div className="tw-my-4">
          <div className="tw-flex tw-items-center tw-mb-2">
            <section className="tw-grid  tw-grid-cols-2 tw-gap-4 tw-container tw-p-0 tw-mx-auto ">
              <div className="">
                <div className="mb-2 ">
                  <label className="form-label required">shortName</label>
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
                  <label className="form-label ">fullName</label>
                  <input
                    type="text"
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
                  <label className="form-label required">sector </label>
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
                <fieldset className="form-fieldset tw-border-1 tw-bg-white">
                  <legend className="tw-border-none tw-font-bold tw-border-1 tw-text-base  tw-w-auto tw-mb-6">
                    contactInfo Information
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
                    <label className="form-label required">Phone Number</label>
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
                    <label className="form-label required">Manager Name</label>
                    <input
                      type="text"
                      placeholder="Manager Name"
                      autoComplete="off"
                      className={`form-control

                   ${errors.contactInfo?.name ? 'is-invalid' : ''}`}
                      {...register('contactInfo.name')}
                    />
                    {errors.contactInfo?.name && (
                      <div className="invalid-feedback">
                        {errors.contactInfo?.name.message}
                      </div>
                    )}
                  </div>
                </fieldset>
              </div>
              <div className="">
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
                <div className="mb-3 ">
                  <label className="form-label required">
                    Organzation Name
                  </label>
                  <input
                    type="text"
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

                <fieldset className="form-fieldset tw-mt-4 tw-border-1 tw-bg-white">
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
                        {errors.address?.houseNumber.message}
                      </div>
                    )}
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
                    )}
                  </div>
                </fieldset>
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
                disabled={!isValid}
                
              >
                <IconDeviceFloppy className="mr-2" /> Save
              </Button>
            )}
          </div>
          <div>
            {props.mode == 'update' && (
              <div className="tw-flex tw-my-4">
                <button
                  type="submit"
                  className=" btn btn-primary tw-bg-[#1d2861]"
                >
                  <IconDeviceFloppy />
                  Update
                </button>
                <button
                  type="button"
                  className="tw-ml-2 btn btn-danger tw-bg-[#ff4d4f]"
                >
                  <IconTrash />
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
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
export default ServiceOwnerDetailsForm;
