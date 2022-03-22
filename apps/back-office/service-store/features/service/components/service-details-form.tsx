import { Divider, Select, MultiSelect, Switch, Button } from '@mantine/core';
import { IconDeviceFloppy, IconTrash, IconDatabase } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useFieldArray, useForm } from 'react-hook-form';
enum DeliveryMethods {
  auto = 'AUTO',
  manual = 'MANUAL',
  unknown = 'UNKNOWN',
}
const schema = yup
  .object({
    name: yup.string().required('This field is required'),
    fullyQualifiedName: yup.string().required('This field is required'),
    description: yup.string(),
    code: yup.string().required('This field is required'),
    targetCustomers: yup.string().required('This field is required'),
    isPublic: yup.boolean(),
    enableReview: yup.boolean(),
    supportedQualifications: yup.string(),
    version: yup.string().required('please enter version as 1.0.0'),
    procedure: yup.string().required('This field is required'),
    policy: yup.string().required('This field is required'),
    tags: yup.string().required('please select one'),
    category: yup.string().required('please select one'),
    serviceProvider: yup.string().required('please select one'),
    serviceOwner: yup.string().required('please select one'),

    deliveryMethod: yup
      .string()
      .required('Must provide a delivery Methods')
      .oneOf(Object.values(DeliveryMethods)),
    applicationForm: yup.object().shape({
      title: yup
        .string()
        .required('This field is required')
        .typeError('title  must be a string'),
      url: yup
        .string()
        .required('This field is required')
        .typeError('url must be a string'),
      taskName: yup.string().required('This field is required'),
      status: yup.string().required('This field is required'),
    }),
  })
  .required();

type ServiceDetailFormProps = {
  mode: 'new' | 'update';
};

const ServiceDetailForm = (props: ServiceDetailFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  if (props.mode == 'update') {
    setValue('name', 'Passport');
    setValue('description', 'Random Service data');
    setValue('code', '#pass');
    setValue('targetCustomers', 'afdf');
    setValue('supportedQualifications', 'asdsdasdamdsj');
    setValue('version', '1.00');
    setValue('procedure', 'gsdsd');
    setValue('tag', '#passport');
    setValue('category', 'Popular');
    setValue('policy', 'ewroi');
    setValue('deliveryMethod', '');
    setValue('derviceOwner', 'MINT');
    setValue('serviceProvider', 'MINT');
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
            <section className="tw-grid  tw-grid-cols-2 tw-gap-4 tw-container tw-p-0 tw-mx-auto ">
              <div className="">
                <div className="mb-2 ">
                  <label className="form-label required">Name</label>
                  <textarea
                    rows={2}
                    placeholder="name"
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
                <div className="mb-2 ">
                  <label className="form-label required">
                    Fully Qualified Name
                  </label>
                  <textarea
                    rows={2}
                    placeholder="fullyQualifiedName"
                    autoComplete="off"
                    className={`form-control

                   ${errors.fullyQualifiedName ? 'is-invalid' : ''}`}
                    {...register('fullyQualifiedName')}
                  />
                  {errors.fullyQualifiedName && (
                    <div className="invalid-feedback">
                      {errors.fullyQualifiedName.message}
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

                   ${errors.description ? 'is-invalid' : ''}`}
                    {...register('description')}
                  />
                  {errors.description && (
                    <div className="invalid-feedback">
                      {errors.description.message}
                    </div>
                  )}
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">Code</label>
                  <textarea
                    rows={2}
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
                  <label className="form-label required">
                    Target Customers
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Target Customers"
                    autoComplete="off"
                    className={`form-control

                   ${errors.targetCustomers ? 'is-invalid' : ''}`}
                    {...register('targetCustomers')}
                  />
                  {errors.targetCustomers && (
                    <div className="invalid-feedback">
                      {errors.targetCustomers.message}
                    </div>
                  )}
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
                    {...register('supportedQualifications')}
                  />
                </div>
                <div className="mb-2 ">
                  <label className="form-label ">version</label>
                  <input
                    type="text"
                    placeholder="ex. 1.0.0"
                    autoComplete="off"
                    className={`form-control

                   ${errors.version ? 'is-invalid' : ''}`}
                    {...register('version')}
                  />
                  {errors.version && (
                    <div className="invalid-feedback">
                      {errors.version.message}
                    </div>
                  )}
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">procedure</label>
                  <textarea
                    rows={4}
                    placeholder="procedure"
                    autoComplete="off"
                    className={`form-control

                   ${errors.procedure ? 'is-invalid' : ''}`}
                    {...register('procedure')}
                  />
                  {errors.procedure && (
                    <div className="invalid-feedback">
                      {errors.procedure.message}
                    </div>
                  )}
                </div>
                <div className="tw-flex tw-justify-start tw-mt-4">
                  <Switch
                    onLabel="Yes"
                    offLabel="NO"
                    size="md"
                    label="public"
                    {...register('isPublic')}
                  />
                  <Switch
                    onLabel="Yes"
                    offLabel="No"
                    size="md"
                    className="tw-mx-auto"
                    label="enable review"
                    {...register('enableReview')}
                  />
                </div>
              </div>
              <div className="">
                <div className="mb-2 ">
                  <label className="form-label required">Tags</label>
                  <MultiSelect
                    placeholder="Pick Select tags"
                    data={[
                      { value: '#passport', label: 'passport' },
                      { value: '#id', label: 'id' },
                      { value: '#license', label: 'license' },
                    ]}
                  />
                  {errors.tags ? 'is-invalid' : ''}`
                  {errors.tags && (
                    <div className="invalid-feedback">
                      {errors.tags.message}
                    </div>
                  )}
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
                    rows={2}
                    placeholder="policy"
                    autoComplete="off"
                    className={`form-control

                   ${errors.policy ? 'is-invalid' : ''}`}
                    {...register('policy')}
                  />
                  {errors.policy && (
                    <div className="invalid-feedback">
                      {errors.policy.message}
                    </div>
                  )}
                </div>
                <div className="mb-2 ">
                  <label className="form-label required">Delivery Method</label>
                  <select
                    className="form-control tw-w-100"
                    {...register('deliveryMethod', { required: true })}
                  >
                    {' '}
                    {Object.values(DeliveryMethods).map((deliveryMethod) => {
                      return (
                        <option key={deliveryMethod} value={deliveryMethod}>
                          {deliveryMethod}
                        </option>
                      );
                    })}
                  </select>
                  <span className="tw-text-red-900">
                    {errors?.deliveryMethod?.message}
                  </span>
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

                <div className="mb-3 ">
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

                <fieldset
                  className="form-fieldset tw-border-1 tw-bg-white tw-border
                   tw-border-solid tw-border-gray-300 tw-p-3"
                >
                  <legend className="tw-border-none tw-border-1 tw-text-base  tw-w-auto tw-mb-0">
                    Application Form
                  </legend>
                  <div className="tw-mb-3">
                    <label className="form-label required">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      {...register('applicationForm.title')}
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">FormUrl</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      {...register('applicationForm.formUrl')}
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label required">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      {...register('applicationForm.status')}
                    />
                  </div>
                  <div className="tw-mb-3">
                    <label className="form-label">TaskName</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      {...register('applicationForm.taskName')}
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
