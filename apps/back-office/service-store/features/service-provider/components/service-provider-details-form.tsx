import { Divider } from '@mantine/core';
import { IconDeviceFloppy, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
const schema = yup
  .object({
    shortName: yup.string().required('This field is required'),
    code: yup.string().required('This field is required'),
    fullName: yup.string().required('This field is required'),
    sector: yup.string().required('This field is required'),
    email: yup.string().email().required('This field is required'),
    phone: yup.string().required('This field is required'),
    name: yup.string().required('This field is required'),
    country: yup.string().required('This field is required'),
    city: yup.string().required('This field is required'),
    houseNo: yup.string().required('This field is required'),
    organizationName: yup.string().required('This field is required'),
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
  } = useForm({ resolver: yupResolver(schema) });

  if (props.mode == 'update') {
    setValue('shortName', 'Passport');
    setValue('fullName', 'Random Service data');
    setValue('Code', '#pass');
    setValue('sector', 'afdf');
    setValue('email', 'asdsdasdamdsj');
    setValue('phone', '1.00');
    setValue('name', 'gsdsd');
    setValue('country', '#passport');
    setValue('city', 'Popular');
    setValue('houseNo', 'ewroi');
    setValue('organizationName', 'jfsdajksa');
    setValue('ServiceOwner', 'MINT');
  }
  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tw-my-4">
          <div className="tw-flex tw-items-center tw-mb-2">
            {/*  */}
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
                    className="form-control"
                    placeholder="code"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">Sector </label>
                  <textarea
                    rows={1}
                    className="form-control"
                    placeholder="enter sector"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-2 ">
                  <label className="form-label ">Organzation Id</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="organzation Id"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">
                    Organzation Name
                  </label>
                  <textarea
                    rows={2}
                    className="form-control"
                    placeholder="orgazation name"
                    autoComplete="off"
                  />
                </div>

                <fieldset className="form-fieldset tw-border-1 tw-bg-white">
                  <legend className="tw-border-none tw-font-bold tw-border-1 tw-text-base  tw-w-auto tw-mb-6">
                    Contact Information
                  </legend>
                  <div className="tw-mb-3">
                    <label className="form-label required">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      autoComplete="off"
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">Phone No</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone No"
                      autoComplete="off"
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      autoComplete="off"
                    />
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
                      className="form-control"
                      placeholder="country"
                      autoComplete="off"
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="city"
                      autoComplete="off"
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">House No</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="House No"
                      autoComplete="off"
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label">Street</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street"
                      autoComplete="off"
                    />
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
                      className="form-control"
                      placeholder="city"
                      autoComplete="off"
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">Latitude</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="latitude"
                      autoComplete="off"
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">logntuide</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="longtuid"
                      autoComplete="off"
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label">landmark</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="landmark"
                      autoComplete="off"
                    />
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
