import { Divider } from '@mantine/core';
import { IconDeviceFloppy, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import ServiceOwner from '../../../models/publication/service-owners/service-owner';

const schema = yup
  .object({
    shortName: yup.string().required('This field is required'),
    code: yup.string().required('This field is required'),
    fullName: yup.string().required('This field is required'),
    sector: yup.string().required('This field is required'),
    organizationName: yup.string().required('This field is required'),
    organizationId: yup
      .string()
      .required(
        'Id must be UUID or like this (46205772-b393-4cfb-ae9b-c76162d4923f'
      ),
    contact: yup.object().shape({
      email: yup.string().email('Invalid email format').required('Required'),
      phone: yup
        .string()
        .required('phone Number is required')
        .min(10, 'toshort')
        .max(10, 'too long'),
      managerName: yup.string().required('This field is required'),
    }),

    address: yup.object().shape({
      country: yup.string().required('Required'),
      houseNumber: yup
        .number()
        .required('This field is required')
        .typeError('House number must be a number'),
      city: yup.string().required('This field is required'),
      street: yup.string().required('required'),
    }),
  })
  .required();

type ServiceOwnerDetailsFormProps = {
  mode: 'new' | 'update';
};

const ServiceOwnerDetailsForm = (props: ServiceOwnerDetailsFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ServiceOwner>({ resolver: yupResolver(schema) });

  /*   if (props.mode == 'update') {
    setValue('shortName', 'Passport');
    setValue('fullName', 'Random Service data');
    setValue('code', '#pass');
    setValue('sector', 'afdf');
    setValue('Email', 'asdsdasdamdsj');
    setValue('phone', '1.00');
    setValue('name', 'gsdsd');
    setValue('country', '#passport');
    setValue('city', 'Popular');
    setValue('houseNo', 'ewroi');
    setValue('organizationName', 'jfsdajksa');
    setValue('ServiceOwner', 'MINT');
  } */

  const onFinish: SubmitHandler<ServiceOwner> = (data): void => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onFinish)}>
        <div className="tw-my-4">
          <div className="tw-flex tw-items-center tw-mb-2">
            {/*  */}
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
                    Contact Information
                  </legend>
                  <div className="tw-mb-3">
                    <label className="form-label required">Email</label>
                    <input
                      type="text"
                      placeholder="Email"
                      autoComplete="off"
                      className={`form-control

                   ${errors.contact?.email ? 'is-invalid' : ''}`}
                      {...register('contact.email')}
                    />
                    {errors.contact?.email && (
                      <div className="invalid-feedback">
                        {errors.contact?.email.message}
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

                   ${errors.contact?.phone ? 'is-invalid' : ''}`}
                      {...register('contact.phone')}
                    />
                    {errors.contact?.phone && (
                      <div className="invalid-feedback">
                        {errors.contact?.phone.message}
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

                   ${errors.contact?.managerName ? 'is-invalid' : ''}`}
                      {...register('contact.managerName')}
                    />
                    {errors.contact?.managerName && (
                      <div className="invalid-feedback">
                        {errors.contact?.managerName.message}
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

        <Divider className="tw-mt-4" />
        <div className="tw-flex tw-justify-center">
          <div>
            {' '}
            {props.mode == 'new' && (
              <button
                type="submit"
                className="tw-mt-4 btn btn-primary tw-bg-[#1d2861]"
              >
                <IconDeviceFloppy />
                Save
              </button>
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
    </div>
  );
};

export default ServiceOwnerDetailsForm;
