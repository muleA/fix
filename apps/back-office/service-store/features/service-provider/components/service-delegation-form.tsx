import { Pagination, Table, Modal, Button, Select, Card } from '@mantine/core';
import {
  IconCirclePlus,
  IconInbox,
  IconTrash,
  IconEditCircle,
  IconDeviceFloppy,
} from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import {
  useAddNewServiceDelegationMutation,
  useDeleteServiceDelegationMutation,
  useGetServiceProvidersQuery,
  useUpdateServiceDelegationMutation,
} from '../../service-provider/store/query/service-provider.query';
import { useGetServicesQuery } from '../../service/store/query/service.query';
import NotificationModel from '../../../shared/models/notification-model';
import Notification from '../../../shared/components/notification';
import DeleteConfirmation from '../../../shared/components/delete-confirmation';
import ServiceProvider from '../../../models/publication/service-providers/service-provider';
import Service from '../../../models/publication/services/service';
import { useRouter } from 'next/router';
const schema = yup.object({
  serviceId: yup.string().required('This field cannot be empty'),
  title: yup.string().required('This field is required'),
  dispatchingRule: yup.string().required('This field is required '),
  status: yup.string().required('this field is required'),
});

const ServiceDelegations = () => {
  const [notification, setNotification] = useState<NotificationModel | null>(
    null
  );
  const [selectedServiceProvider, setSelectedService] =
    useState<ServiceProvider | null>(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  const router = useRouter();
  const { id } = router.query;
  const [
    addNewServiceDelegation,
    { isLoading: creating, isSuccess: createStatus, isError: creatingError },
  ] = useAddNewServiceDelegationMutation();
  const [
    deleteServiceDelegation,
    { isLoading: deleting, isSuccess: deleteStatus, isError: deletingError },
  ] = useDeleteServiceDelegationMutation();
  const [
    updateServiceDelegation,
    { isLoading: updating, isSuccess: updateStatus, isError: updatingError },
  ] = useUpdateServiceDelegationMutation();
  const {
    data: services,
    isLoading,
    isSuccess,
    isError,
  } = useGetServicesQuery('');
  const {
    data: serviceProviders,
    isLoading: serviceProviderLoading,
    isSuccess: ServiceProviderSuccess,
  } = useGetServiceProvidersQuery();

  useEffect(() => {
    if (isSuccess == true) {
      setSelectedService(
        services?.data?.find((service: Service) => service.id == id)
      );
    }
  }, [isSuccess, id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({ resolver: yupResolver(schema) });

  const [
    ServiceDelegationAssignmentModalOpened,
    setServiceDelegationAssignmentModalOpened,
  ] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<string>('');
  const [perPageModal, setPerPageModal] = useState<string>('10');
  const [itemTobeUpdated, setItemTobeUpdated] = useState<string>(null);
  const [itemTobeDeleted, setItemTobeDeleted] = useState<string>(null);

  const handleShowDelegationModal = (currenctItem: string) => {
    setItemTobeUpdated(currenctItem);
    setServiceDelegationAssignmentModalOpened(
      !ServiceDelegationAssignmentModalOpened
    );
  };
  const handleHideDelegationModal = () => {
    setServiceDelegationAssignmentModalOpened(false);
  };

  /* deleting service Delegation */

  const submitDelete = async () => {
    try {
      await deleteServiceDelegation({
        serviceId: id.toString(),
        DelegationId: itemTobeDeleted,
      }).unwrap();
      deleteStatus !== null &&
        setNotification({
          type: 'success',
          message: 'Service  delegated  successfully',
          show: true,
        });
    } catch (err) {
      console.log(err);
      setNotification({
        type: 'danger',
        message: 'Failed to delegate service .',
        show: true,
      });
    }
    setDisplayConfirmationModal(false);
  };

  const showDeleteModal = (itemTobeDeleted: string) => {
    setItemTobeDeleted(itemTobeDeleted);
    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  /*  */
  /* creating and updating */
  const onFinish: SubmitHandler<ServiceProvider> = async (data) => {
    if (formMode === 'new') {
      try {
        await addNewServiceDelegation(data).unwrap();
        setValue('providerId', id);
        setValue('serviceId', '');
        setValue('title', '');
        setValue('dispatchingRule', '');
        setValue('status', '');
        createStatus !== null &&
          setNotification({
            type: 'success',
            message: 'Service delegated successfully',
            show: true,
          });
        reset();
      } catch (err) {
        creatingError !== null &&
          setNotification({
            type: 'danger',
            message: 'Failed to  Delegated  Service',
            show: true,
          });
      }
    } else if (formMode === 'update') {
      try {
        await updateServiceDelegation({
          ...data,
          serviceId: id.toString(),
          id: itemTobeUpdated,
        }).unwrap();
        updateStatus !== null &&
          setNotification({
            type: 'success',
            message: 'service delegation updated successfully',
            show: true,
          });
      } catch (err) {
        updatingError !== null &&
          setNotification({
            type: 'danger',
            message: 'failed to update service delegation',
            show: true,
          });
      }
    }
  };

  /*  */

  useEffect(() => {
    if (formMode === 'update' && ServiceDelegationAssignmentModalOpened) {
      if (selectedServiceProvider !== null) {
        const currentValue = selectedServiceProvider?.delegatedServices?.find(
          (item) => item.id == itemTobeUpdated
        );
        console.log(currentValue);
        setValue('serviceId', currentValue.serviceId);
        setValue('title', currentValue.title);
        setValue('dispatchingRule', currentValue.dispatchingRule);
        setValue('status', currentValue.status);
      }
    }
  }, [
    id,
    isSuccess,
    ServiceDelegationAssignmentModalOpened,
    formMode,
    selectedServiceProvider,
    setValue,
    itemTobeUpdated,
  ]);
  /*  */
  return (
    <div>
      <Modal
        opened={ServiceDelegationAssignmentModalOpened}
        onClose={handleHideDelegationModal}
        title={`${
          formMode == 'new' ? 'Add New Delegation' : 'Edit Delegation '
        }`}
        styles={{
          header: {
            borderBottom: '1px solid rgb(229 231 235)',
            paddingBottom: '1rem',
          },
        }}
      >
        <form onSubmit={handleSubmit(onFinish)}>
          <Card>
            <div className="mb-3">
              <label className="form-label required"> Service Name</label>
              <select
                placeholder="Select Service "
                autoComplete="off"
                className={`form-control

                   ${errors.serviceId ? 'is-invalid' : ''}`}
                {...register('serviceId')}
              >
                {serviceProviders?.data.length !== 0 && (
                  <option value=""> Choose Service</option>
                )}
                {serviceProviders?.data.length === 0 ? (
                  <option value="">none</option>
                ) : (
                  services?.data.map((item: Service) => (
                    <option key={item.id} value={item.id}>
                      {item.fullyQualifiedName}
                    </option>
                  ))
                )}
              </select>
              {errors.serviceId && (
                <div className="invalid-feedback">
                  {errors.serviceId.message}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label required"> Title</label>
              <textarea
                rows={2}
                placeholder="Delegation Title"
                autoComplete="off"
                className={`form-control

                   ${errors.title ? 'is-invalid' : ''}`}
                {...register('title')}
              />
              {errors.title && (
                <div className="invalid-feedback">{errors.title.message}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label required">Dispatching Rule</label>
              <textarea
                rows={2}
                placeholder="dispatchingRule"
                autoComplete="off"
                className={`form-control

                   ${errors.dispatchingRule ? 'is-invalid' : ''}`}
                {...register('dispatchingRule')}
              />

              {errors.dispatchingRule && (
                <div className="invalid-Delegationdback">
                  {errors.dispatchingRule.message}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label required">Delegation Status</label>
              <input
                type="text"
                placeholder="status"
                autoComplete="off"
                className={`form-control

                   ${errors.status ? 'is-invalid' : ''}`}
                {...register('status')}
              />

              {errors.status && (
                <div className="invalid-Delegationdback">
                  {errors.status.message}
                </div>
              )}
            </div>
            <div className="tw-flex tw-justify-start tw-mt-4 ">
              {formMode == 'new' && (
                <Button
                  type="submit"
                  className="btn btn-primary tw-bg-[#1d2861]"
                  loading={creating}
                  component="button"
                >
                  <IconDeviceFloppy /> Save
                </Button>
              )}
              {formMode == 'update' && (
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
              )}
            </div>
          </Card>
        </form>
      </Modal>
      <div className="tw-my-4 tw-flex tw-justify-end">
        <Button
          type="button"
          component="button"
          className="btn btn-primary tw-bg-[#1d2861]"
          onClick={() => {
            setFormMode('new');
            handleShowDelegationModal('');
          }}
        >
          <IconCirclePlus />
          New
        </Button>
      </div>
      <Table className="tw-my-4">
        <thead>
          <tr className="tw-bg-gray-200">
            <th>Provider Name</th>
            <th>Delegation Title</th>
            <th>Dispatching Rule</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tw-border-b">
          {isSuccess &&
            selectedServiceProvider?.delegatedServices?.length == 0 && (
              <tr className="tw-h-[200px] tw-border-b hover:tw-bg-transparent">
                <td className="tw-text-center" colSpan={3}>
                  <span>
                    <IconInbox
                      className="tw-inline-block"
                      color="rgb(156 163 175)"
                      size={32}
                    />
                    <p>No data</p>
                  </span>
                </td>
              </tr>
            )}

          {selectedServiceProvider?.delegatedServices?.length > 0 &&
            selectedServiceProvider?.delegatedServices?.map((item) => (
              <tr key={item.id}>
                <td> {item.serviceId}</td>
                <td> {item.title}</td>
                <td> {item.dispatchingRule}</td>
                <td>{item.status}</td>
                <td>
                  <div className="tw-flex tw-my-4 tw-space-x-4 ">
                    <Button
                      type="button"
                      className="btn btn-primary tw-bg-[#1d2861]"
                      size="sm"
                      component="button"
                      onClick={() => {
                        setFormMode('update');
                        handleShowDelegationModal(item.id);
                      }}
                    >
                      <IconEditCircle />
                    </Button>
                    <Button
                      type="button"
                      className="btn btn-danger tw-bg-[#ff4d4f]"
                      component="button"
                      onClick={() => showDeleteModal(item.id)}
                    >
                      <IconTrash />
                    </Button>
                    <div></div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <DeleteConfirmation
        showModal={displayConfirmationModal}
        confirmModal={submitDelete}
        hideModal={hideConfirmationModal}
        id={itemTobeDeleted}
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

      <div className="tw-my-2 tw-flex tw-justify-end">
        <Pagination
          total={10}
          radius="xs"
          size="sm"
          styles={{
            item: { color: '#1d2861', borderWidth: 0, fontSize: '12px' },
            active: { color: '#1d2861', fontWeight: 'bold' },
          }}
        />

        <Select
          size="xs"
          value={perPageModal}
          onChange={setPerPageModal}
          data={[
            { value: '5', label: '5 / page' },
            { value: '10', label: '10 / page' },
            { value: '20', label: '20 / page' },
            { value: '30', label: '30 / page' },
            { value: '40', label: '40 / page' },
          ]}
        />
      </div>
    </div>
  );
};

export default ServiceDelegations;
