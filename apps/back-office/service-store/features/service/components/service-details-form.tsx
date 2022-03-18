import { Divider, Select, MultiSelect, Switch } from '@mantine/core';

import { IconDeviceFloppy, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
const schema = yup
  .object({
    Name: yup.string().required('This field is required'),
    Code: yup.string().required('This field is required'),
    Description: yup.string().required('This field is required'),
    TargetCustomers: yup.string().required('This field is required'),
    SupportedQualifications: yup.string().required('This field is required'),
    Version: yup.string().required('This field is required'),
    Procedure: yup.string().required('This field is required'),
    Tag: yup.string().required('This field is required'),
    Category: yup.string().required('This field is required'),
    Policy: yup.string().required('This field is required'),
    DeliveryMethods: yup.string().required('This field is required'),
    ServiceOwner: yup.string().required('This field is required'),
  })
  .required();

type ServiceDetailFormProps = {
  mode: 'new' | 'update';
};

const ServiceDetailForm = (props: ServiceDetailFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  if (props.mode == 'update') {
    setValue('Name', 'Passport');
    setValue('Description', 'Random Service data');
    setValue('Code', '#pass');
    setValue('TargetCustomers', 'afdf');
    setValue('SupportedQualifications', 'asdsdasdamdsj');
    setValue('Version', '1.00');
    setValue('Procedure', 'gsdsd');
    setValue('Tag', '#passport');
    setValue('Category', 'Popular');
    setValue('Policy', 'ewroi');
    setValue('DeliveryMethods', 'jfsdajksa');
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
                  <label className="form-label required">Name</label>
                  <textarea
                    rows={2}
                    placeholder="enter Name"
                    autoComplete="off"
                    className={`form-control

                   ${errors.Name ? 'is-invalid' : ''}`}
                    {...register('Name')}
                  />
                  {errors.Name && (
                    <div className="invalid-feedback">
                      {errors.Name.message}
                    </div>
                  )}
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">
                    Fully Qualified Name
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Enter fully Qualified Name"
                    autoComplete="off"
                    className={`form-control

                   ${errors.Name ? 'is-invalid' : ''}`}
                    {...register('Name')}
                  />
                  {errors.Name && (
                    <div className="invalid-feedback">
                      {errors.Name.message}
                    </div>
                  )}
                </div>
                <div className="mb-2 ">
                  <label className="form-label ">Description</label>
                  <textarea
                    rows={2}
                    placeholder="description"
                    autoComplete="off"
                    className={`form-control

                   ${errors.Description ? 'is-invalid' : ''}`}
                    {...register('Description')}
                  />
                  {errors.Description && (
                    <div className="invalid-feedback">
                      {errors.Description.message}
                    </div>
                  )}
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">Code</label>
                  <textarea
                    rows={2}
                    className="form-control"
                    placeholder="code"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">
                    Target Customers
                  </label>
                  <textarea
                    rows={2}
                    className="form-control"
                    placeholder="Target Customers"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-2 ">
                  <label className="form-label ">
                    Supported Qualifications
                  </label>
                  <textarea
                    rows={2}
                    className="form-control"
                    placeholder="supported Qualifications"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-2 ">
                  <label className="form-label ">version</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ex. 1.0.0"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">Procedure</label>
                  <textarea
                    rows={4}
                    className="form-control"
                    placeholder="procedure"
                    autoComplete="off"
                  />
                </div>
                <div className="tw-flex tw-justify-start tw-mt-4">
                  <Switch
                    onLabel="ON"
                    offLabel="OFF"
                    size="md"
                    label="Is public"
                  />
                  <Switch
                    onLabel="ON"
                    offLabel="OFF"
                    size="md"
                    className="tw-mx-auto"
                    label="enable review"
                  />
                </div>
              </div>
              <div className="">
                <div className="mb-2 ">
                  <label className="form-label required">Tags</label>
                  <MultiSelect
                    placeholder="Pick Select Tags"
                    data={[
                      { value: '#passport', label: 'passport' },
                      { value: '#id', label: 'id' },
                      { value: '#license', label: 'license' },
                    ]}
                  />
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">Category</label>
                  <MultiSelect
                    placeholder="select Category"
                    data={[
                      { value: 'Popular', label: 'popular' },
                      { value: 'Newly Arrived', label: 'Newly Arrived' },
                      { value: 'Higly Rated', label: 'Highly Rated' },
                    ]}
                  />
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">Policy</label>
                  <textarea
                    className="form-control"
                    placeholder="policy"
                    autoComplete="off"
                  ></textarea>
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">Delivery Method</label>
                  <Select
                    placeholder="Pick delivery method"
                    data={[
                      { value: 'auto', label: 'automatic' },
                      { value: 'manual', label: 'manual' },
                      { value: 'uknown', label: 'unknown' },
                    ]}
                  />
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">Service Owner</label>
                  <Select
                    placeholder="Pick one"
                    data={[
                      {
                        value: 'Ministry of Innovation and Technology',
                        label: 'MINT',
                      },
                      { value: 'Minstry of Health', label: 'MH' },
                      { value: 'Ministry of transport', label: 'MIT' },
                    ]}
                  />
                </div>

                <div className="mb-2 ">
                  <label className="form-label required">
                    Service Provider
                  </label>
                  <Select
                    placeholder="Pick one"
                    data={[
                      {
                        value: 'Ministry of Innovation and Technology',
                        label: 'MINT',
                      },
                      { value: 'Minstry of Health', label: 'MH' },
                      { value: 'Ministry of transport', label: 'MIT' },
                    ]}
                  />
                </div>

                <fieldset className="form-fieldset tw-border-1 tw-bg-white">
                  <legend className="tw-border-none tw-border-1 tw-text-base  tw-w-auto tw-mb-0">
                    Application Form
                  </legend>
                  <div className="tw-mb-3">
                    <label className="form-label required">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">FormUrl</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">Status</label>
                    <input
                      type="email"
                      className="form-control"
                      autoComplete="off"
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label">TaskName</label>
                    <input
                      type="tel"
                      className="form-control"
                      autoComplete="off"
                    />
                  </div>
                </fieldset>
              </div>
            </section>

            {/*  */}
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

export default ServiceDetailForm;
