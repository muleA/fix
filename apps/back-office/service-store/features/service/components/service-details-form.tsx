import { Divider, Button, MultiSelect, Checkbox } from '@mantine/core';
import { IconDeviceFloppy, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import Service from '../../../models/publication/services/service';
import ServiceOwner from '../../../models/publication/service-owners/service-owner';
import ServiceProvider from '../../../models/publication/service-providers/service-provider';
import Tag from '../../../models/classification/tag';
import { useEffect, useState } from 'react';
import NotificationModel from '../../../shared/models/notification-model';
import Notification from '../../../shared/components/notification';
import DeleteConfirmation from '../../../shared/components/delete-confirmation';
import {
  useGetServicesQuery,
  useAddNewServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
} from '../store/query/service.query';
import { useGetServiceOwnersQuery } from '../../service-owner/store/query/service-owner.query';
import { useGetServiceProvidersQuery } from '../../service-provider/store/query/service-provider.query';
import { useGetServiceTagsQuery } from '../../service-tag/store/query/tag.query';
import { useRouter } from 'next/router';
import PageLoader from '../../../shared/components/pageLoader';

const schema = yup
  .object({
    name: yup.string().required('This field is required'),
    code: yup.string().required('This field is required'),
    fullyQualifiedName: yup
      .string()
      .required('This field is required')
      .matches(
        /^[aA-zZ\s]+$/,
        'only alphabet characters are allowed for this field'
      ),
    description: yup
      .string()
      .required('This field is required')
      .matches(
        /^[aA-zZ\s]+$/,
        'only alphabet characters are allowed for this field'
      ),
    procedure: yup.string().required('This field is required'),
    targetCustomers: yup.string().required('This field is required'),
    supportedQualifications: yup.string().required('This field is required'),
    version: yup
      .string()
      .required('version is required enter like this 1.0.0')
      .matches(new RegExp('[0-9]{1,4}(.[0-9a-z]{1,6}){1,5}')),

    policy: yup.string().required('This field is Required'),
    serviceOwnerId: yup.string().required('This field is required'),
    serviceProviderId: yup.string().required('This field is required'),
    tags: yup
      .array()
      .min(1, "You can't leave this blank.")
      .required("You can't leave this blank.")
      .nullable(),
    isPublic: yup.boolean().required(),
    isArchived: yup.boolean().required(),
    isPublished: yup.boolean().required(),
    enableReview: yup.boolean().required(),
    applicationForm: yup.object().shape({
      title: yup
        .string()
        .required('Required title cannot be empty')
        .matches(
          /^[aA-zZ\s]+$/,
          'only alphabet characters are allowed for this field'
        ),
      formUrl: yup
        .string()
        .matches(
          /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'Please enter the correct url'
        )
        .required('Please enter the correct url'),
      status: yup
        .string()
        .required('This field is required')
        .matches(
          /^[aA-zZ\s]+$/,
          'only alphabet characters are allowed for this field'
        ),
      taskName: yup.string().required('required'),
    }),
  })
  .required();

const ServiceDetailsForm = (props: {
  id?: unknown;
  mode: 'new' | 'update';
}) => {
  const router = useRouter();
  const { id } = router.query;
  const [addNewService, { isLoading: creating, isSuccess: createStatus }] =
    useAddNewServiceMutation();
  const [deleteService, { isLoading: deleting, isSuccess: deleteStatus }] =
    useDeleteServiceMutation();
  const [updateService, { isLoading: updating, isSuccess: updateStatus }] =
    useUpdateServiceMutation();
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
    control,
    getValues,
  } = useForm<Service>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { data: services } = useGetServicesQuery('');

  const { data: serviceOwners } = useGetServiceOwnersQuery();

  const {
    data: serviceProviders,
    isLoading,
    isSuccess,
    isError,
  } = useGetServiceProvidersQuery();
  const { data: serviceTags, isSuccess: isSuccessTag } =
    useGetServiceTagsQuery();

  const [tagValue, setTagValue] = useState<any>([]);
  const [tagData, setTagData] = useState<any>([]);

  useEffect(() => {
    if (isSuccessTag == true) {
      setTagData(
        serviceTags?.data?.map((item: Tag) => ({
          value: item.id,
          label: item.name,
        }))
      );
    }
  }, [isSuccessTag]);

  useEffect(() => {
    console.log(tagValue);
    if (tagValue != null) {
      const commaSeparated = tagValue.map((item) => item.value).toString();
      console.log(tagValue);
      setValue('tags', commaSeparated);
    }
  }, [tagValue]);

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
      await deleteService(id).unwrap();
      deleteStatus !== null &&
        setNotification({
          type: 'success',
          message: 'Service  has  deleted successfully',
          show: true,
        });
      router.push('/service-store/service/new');
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

  const onFinish: SubmitHandler<Service> = async (data) => {
    if (props.mode === 'new') {
      try {
        await addNewService(data).unwrap();
        setValue('name', '');
        setValue('fullyQualifiedName', '');
        setValue('code', '');
        setValue('description', '');
        setValue('policy', '');
        setValue('procedure', '');
        setValue('version', '');
        setValue('policy', '');
        setValue('targetCustomers', '');
        setValue('deliveryMethod', data.deliveryMethod.toUpperCase());
        setValue('serviceOwnerId', '');
        setValue('serviceProviderId', '');
        setValue('tags', '');
        setValue('supportedQualifications', '');
        setValue('isPublic', data.isPublic);
        setValue('isPublished', data.isPublished);
        setValue('isArchived', data.isArchived);
        setValue('enableReview', data.enableReview);
        setValue('applicationForm', {
          title: '',
          formUrl: '',
          status: '',
          taskName: '',
        });

        createStatus !== null &&
          setNotification({
            type: 'success',
            message: 'Service  added successfully',
            show: true,
          });
        reset();
      } catch (err) {
        setNotification({
          type: 'danger',
          message: 'Failed to added Service .',
          show: true,
        });
      }
    } else if (props.mode === 'update') {
      try {
        await updateService({
          id: props.id,
          ...data,
          tags: getValues('tags').toString(),
        }).unwrap();
        updateStatus !== null &&
          setNotification({
            type: 'success',
            message: 'service  info updated successfully',
            show: true,
          });
      } catch (err) {
        isError &&
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
    if (props.mode === 'update') {
      const selectedService: Service = services?.data?.find(
        (Service: Service) => Service.id === props.id
      );


      if (selectedService !== null)
       /*  reset({name: selectedService?.name, }); */
        setValue('name', selectedService?.name);
      setValue('fullyQualifiedName', selectedService?.fullyQualifiedName);
      setValue('code', selectedService?.code);
      setValue('description', selectedService?.description);
      setValue('policy', selectedService?.policy);
      setValue('procedure', selectedService?.procedure);
      setValue('version', selectedService?.version);
      setValue('targetCustomers', selectedService?.targetCustomers);
      setValue('deliveryMethod', selectedService?.deliveryMethod);
      setValue('serviceOwnerId', selectedService?.serviceOwnerId);
      setValue('serviceProviderId', selectedService?.serviceProviderId);
      /*    setTagValue(selectedService?.tags.split(',')); */
      setValue(
        'supportedQualifications',
        selectedService?.supportedQualifications
      );
      setValue('isPublic', selectedService?.isPublic);
      setValue('isPublished', selectedService?.isPublished);
      setValue('isArchived', selectedService?.isArchived);
      setValue('enableReview', selectedService?.enableReview);
      setValue('applicationForm', {
        title: selectedService?.applicationForm.title,
        formUrl: selectedService?.applicationForm.formUrl,
        status: selectedService?.applicationForm.status,
        taskName: selectedService?.applicationForm.taskName,
      });
    }
  }, [services?.data, isSuccess, props.id, props.mode, setValue]);

  return (
    <div>
      <form onSubmit={handleSubmit(onFinish)}>
        {isLoading && (
        <PageLoader/>
        )}

        <div className="tw-my-4">
          <div className="tw-flex tw-items-center tw-mb-2">
            <section className="tw-grid  tw-grid-cols-2 tw-gap-4 tw-container tw-p-0 tw-mx-auto ">
              <div className="">
                <div className="mb-2 ">
                  <label className="form-label required">
                    FullyQualified Name
                  </label>
                  <input
                    type="text"
                    placeholder="FullyQualified Name"
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
                  <label className="form-label required">Short Name</label>
                  <input
                    type="text"
                    placeholder="enter name"
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
                  <label className="form-label required">Description </label>
                  <textarea
                    rows={2}
                    placeholder="enter description"
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
                  <label className="form-label ">
                    Supported Qualifications
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Supported Qualifications"
                    autoComplete="off"
                    className={`form-control

                   ${errors.supportedQualifications ? 'is-invalid' : ''}`}
                    {...register('supportedQualifications')}
                  />
                  {errors.supportedQualifications && (
                    <div className="invalid-feedback">
                      {errors.supportedQualifications.message}
                    </div>
                  )}
                </div>
                <div className="mb-3 ">
                  <label className="form-label required">Procedure </label>
                  <input
                    type="text"
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
                <div className="mb-2 ">
                  <label className="form-label required ">Version </label>
                  <input
                    type="text"
                    placeholder="Version"
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
                <div className="mb-3 ">
                  <label className="form-label required">Policy </label>
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
                <div className="mb-3">
                  <fieldset className="form-fieldset tw-mt-4 tw-border-1 tw-bg-white">
                    <legend className="tw-border-none md:tw-text-lg tw-text-sm tw-font-bold tw-border-1 tw-text-base  tw-w-auto tw-mb-6">
                      Service Visibility
                    </legend>
                    <div className="tw-mb-3">
                      <Checkbox label="Is Public " {...register('isPublic')} />
                    </div>
                    <div className="tw-mb-3">
                      <Checkbox
                        label="Is Published "
                        {...register('isPublished')}
                      />
                    </div>
                    <div className="tw-mb-3">
                      <Checkbox
                        label="Enable Review "
                        {...register('enableReview')}
                      />
                    </div>

                    <div className="tw-mb-3">
                      <Checkbox
                        label="Is Archived "
                        {...register('isArchived')}
                      />
                    </div>
                  </fieldset>
                </div>

                {/*  */}
              </div>
              <div className="mb-2">
                <div className="mb-3 ">
                  <label className="form-label required">
                    Target Customer{' '}
                  </label>
                  <input
                    type="text"
                    placeholder="targetCustomers"
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
                <div className="mb-3">
                  <label className="form-label required">
                    Delivery Method{' '}
                  </label>
                  <select
                    {...register('deliveryMethod')}
                    placeholder="select delivery method for this service "
                    className={`form-control

                   ${errors.deliveryMethod ? 'is-invalid' : ''}`}
                  >
                    <option key="MANUAL" value="MANUAL">
                      MANUAL
                    </option>
                    <option key="AUTOMATIC" value="AUTOMATIC">
                      AUTOMATIC
                    </option>
                    <option key="ELECTRONIC" value="ELECTRONIC">
                      ELECTRONIC
                    </option>
                  </select>
                  {errors.deliveryMethod && (
                    <div className="invalid-feedback">
                      {errors.deliveryMethod.message}
                    </div>
                  )}
                </div>

                <div className="mb-2 ">
                  <label className="form-label ">Service Owner</label>
                  <select
                    placeholder="select service owner for this service "
                    autoComplete="off"
                    className={`form-control

                   ${errors.serviceOwnerId ? 'is-invalid' : ''}`}
                    {...register('serviceOwnerId')}
                  >
                    {serviceOwners?.data.length !== 0 && (
                      <option value=""> choose Service Owner</option>
                    )}
                    {serviceOwners?.data.length === 0 ? (
                      <option value="">none</option>
                    ) : (
                      serviceOwners?.data.map((item: ServiceOwner) => (
                        <option key={item.id} value={item.id}>
                          {item.fullName}
                        </option>
                      ))
                    )}
                  </select>
                  {errors.serviceOwnerId && (
                    <div className="invalid-feedback">
                      {errors.serviceOwnerId.message}
                    </div>
                  )}
                </div>
                <div className="mb-2 ">
                  <label className="form-label ">Service Provider</label>
                  <select
                    placeholder="select service owner for this service "
                    autoComplete="off"
                    className={`form-control

                   ${errors.serviceProviderId ? 'is-invalid' : ''}`}
                    {...register('serviceProviderId')}
                  >
                    {serviceProviders?.data.length !== 0 && (
                      <option value=""> choose Service provider</option>
                    )}
                    {serviceProviders?.data.length === 0 ? (
                      <option value="">none</option>
                    ) : (
                      serviceProviders?.data.map((item: ServiceProvider) => (
                        <option key={item.id} value={item.id}>
                          {item.fullName}
                        </option>
                      ))
                    )}
                  </select>
                  {errors.serviceProviderId && (
                    <div className="invalid-feedback">
                      {errors.serviceProviderId.message}
                    </div>
                  )}
                </div>
                <div className="mb-3 ">
                  <label className="form-label required">Tags </label>
                  <Controller
                    name="tags"
                    control={control}
                    render={({ field }) => (
                      <MultiSelect
                        value={[tagValue]}
                        onChange={setTagValue}
                        data={tagData}
                        placeholder="Tags"
                        autoComplete="off"
                        className={`form-control

                   ${errors.tags ? 'is-invalid' : ''}`}
                        {...field}
                      />
                    )}
                  />

                  {errors.tags && (
                    <div className="invalid-feedback">
                      {errors.tags.message}
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  <fieldset className="form-fieldset  tw-border-1 tw-bg-white">
                    <legend
                      className="tw-border-none md:tw-text-lg
                       tw-text-sm tw-font-bold tw-border-1 tw-text-base  tw-w-auto tw-mb-2"
                    >
                      Application Form
                    </legend>
                    <div className="tw-mb-3">
                      <label className="form-label required">Title</label>
                      <input
                        type="text"
                        placeholder="title"
                        autoComplete="off"
                        className={`form-control

                   ${errors.applicationForm?.title ? 'is-invalid' : ''}`}
                        {...register('applicationForm.title')}
                      />
                      {errors.applicationForm?.title && (
                        <div className="invalid-feedback">
                          {errors.applicationForm?.title.message}
                        </div>
                      )}
                    </div>
                    <div className="tw-mb-3">
                      <label className="form-label required">Form URL</label>
                      <input
                        type="text"
                        placeholder="Form Url"
                        autoComplete="off"
                        className={`form-control

                   ${errors.applicationForm?.formUrl ? 'is-invalid' : ''}`}
                        {...register('applicationForm.formUrl')}
                      />
                      {errors.applicationForm?.formUrl && (
                        <div className="invalid-feedback">
                          {errors.applicationForm?.formUrl.message}
                        </div>
                      )}
                    </div>

                    <div className="tw-mb-3">
                      <label className="form-label required">Status</label>
                      <input
                        type="text"
                        placeholder="status"
                        autoComplete="off"
                        className={`form-control

                   ${errors.applicationForm?.status ? 'is-invalid' : ''}`}
                        {...register('applicationForm.status')}
                      />
                      {errors.applicationForm?.status && (
                        <div className="invalid-feedback">
                          {errors.applicationForm?.status.message}
                        </div>
                      )}
                    </div>
                    <div className="tw-mb-3">
                      <label className="form-label required">task Name</label>
                      <input
                        type="text"
                        placeholder="taskName"
                        autoComplete="off"
                        className={`form-control

                   ${errors.applicationForm?.taskName ? 'is-invalid' : ''}`}
                        {...register('applicationForm.taskName')}
                      />
                      {errors.applicationForm?.taskName && (
                        <div className="invalid-feedback">
                          {errors.applicationForm?.taskName.message}
                        </div>
                      )}
                    </div>
                  </fieldset>
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
                    component="button"
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
export default ServiceDetailsForm;
