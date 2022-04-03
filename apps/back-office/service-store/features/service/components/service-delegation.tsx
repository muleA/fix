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
  useAddNewServiceFeeMutation,
  useGetServicesQuery,
  useDeleteServiceFeeMutation,
  useUpdateServiceFeeMutation,
} from '../store/query/service.query';
import NotificationModel from '../../../shared/models/notification-model';
import Notification from '../../../shared/components/notification';
import DeleteConfirmation from '../../../shared/components/delete-confirmation';
import Service from '../../../models/publication/services/service';
import { useRouter } from 'next/router';
const schema = yup.object({
  fee: yup.number().required('This field must be Number'),
  description: yup.string().required('This field is required'),
  currency: yup.string().required('This field is required eg Birr,Dollar,Euro'),
});

const ServiceFees = () => {
  const [notification, setNotification] = useState<NotificationModel | null>(
    null
  );
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  const router = useRouter();
  const { id } = router.query;

  const [
    addNewServiceFee,
    { isLoading: creating, isSuccess: createStatus, isError: creatingError },
  ] = useAddNewServiceFeeMutation();
  const [
    deleteServiceFee,
    { isLoading: deleting, isSuccess: deleteStatus, isError: deletingError },
  ] = useDeleteServiceFeeMutation();
  const [
    updateServiceFee,
    { isLoading: updating, isSuccess: updateStatus, isError: updatingError },
  ] = useUpdateServiceFeeMutation();
  const {
    data: services,
    isLoading,
    isSuccess,
    isError,
  } = useGetServicesQuery('');

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

  const [ServiceFeeAssignmentModalOpened, setServiceFeeAssignmentModalOpened] =
    useState<boolean>(false);
  const [formMode, setFormMode] = useState<string>('');
  const [perPageModal, setPerPageModal] = useState<string>('10');
  const [itemTobeUpdated, setItemTobeUpdated] = useState<string>(null);
  const [itemTobeDeleted, setItemTobeDeleted] = useState<string>(null);

  const handleShowFeeModal = (currenctItem: string) => {
    setItemTobeUpdated(currenctItem);
    setServiceFeeAssignmentModalOpened(!ServiceFeeAssignmentModalOpened);
  };
  const handleHideFeeModal = () => {
    setServiceFeeAssignmentModalOpened(false);
  };

  /* deleting service fee */

  const submitDelete = async () => {
    try {
      await deleteServiceFee({
        serviceId: id.toString(),
        feeId: itemTobeDeleted,
      }).unwrap();
      deleteStatus !== null &&
        setNotification({
          type: 'success',
          message: 'Service  has  deleted successfully',
          show: true,
        });
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

  const showDeleteModal = (itemTobeDeleted: string) => {
    setItemTobeDeleted(itemTobeDeleted);
    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  /*  */
  /* creating and updating */
  const onFinish: SubmitHandler<Service> = async (data) => {
    if (formMode === 'new') {
      try {
        await addNewServiceFee({
          ...data,
          id,
        }).unwrap();

        setValue('fee', '');
        setValue('description', '');
        setValue('currency', '');
        createStatus !== null &&
          setNotification({
            type: 'success',
            message: 'Service  added successfully',
            show: true,
          });
        reset();
      } catch (err) {
        creatingError !== null &&
          setNotification({
            type: 'danger',
            message: 'Failed to added Service .',
            show: true,
          });
      }
    } else if (formMode === 'update') {
      try {
        await updateServiceFee({
          ...data,
          serviceId: id.toString(),
          id: itemTobeUpdated,
        }).unwrap();
        updateStatus !== null &&
          setNotification({
            type: 'success',
            message: 'service  info updated successfully',
            show: true,
          });
      } catch (err) {
        updatingError !== null &&
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
    if (formMode === 'update' && ServiceFeeAssignmentModalOpened) {
      if (selectedService !== null) {
        const currentValue = selectedService.serviceFees.find(
          (item) => item.id == itemTobeUpdated
        );
        console.log(currentValue);
        setValue('fee', currentValue.fee);
        setValue('description', currentValue.description);
        setValue('currency', currentValue.currency);
      }
    }
  }, [
    id,
    isSuccess,
    ServiceFeeAssignmentModalOpened,
    formMode,
    selectedService,
    setValue,
    itemTobeUpdated,
  ]);
  /*  */
  return (
    <div>
      <Modal
        opened={ServiceFeeAssignmentModalOpened}
        onClose={handleHideFeeModal}
        title={`${formMode == 'new' ? 'Add New Fee' : 'Edit Fee '}`}
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
              <label className="form-label required"> Fee Amount</label>
              <input
                type="text"
                placeholder="fee"
                autoComplete="off"
                className={`form-control

                   ${errors.fee ? 'is-invalid' : ''}`}
                {...register('fee')}
              />
              {errors.fee && (
                <div className="invalid-feedback">{errors.fee.message}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label required"> Description</label>
              <textarea
                rows={2}
                placeholder="Description"
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
            <div className="mb-3">
              <label className="form-label required">Currency</label>
              <select
                placeholder="Currency"
                autoComplete="off"
                className={`form-control

                   ${errors.currency ? 'is-invalid' : ''}`}
                {...register('currency')}
              >
                <option value=""> choose Currency</option>
                <option value="birr">Ethiopian Birr</option>
                <option value="USD">US Dollar</option>
                <option value="EUR">Euro</option>
                <option value="JPY">Japanese Yen</option>
                <option value="GBP">British Pound Sterling</option>
                <option value="AUD">Australian Dollar</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="CHF">Swiss Franc</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="KWD">Kuwaiti Dinar</option>
                <option value="BHD">Bahraini Dinar</option>
                <option value="OMR">Omani Rial</option>
                <option value="JOD">Jordanian Dinar</option>
                <option value="GBP">British Pound Sterling</option>
                <option value="KYD">Cayman Islands Dollar</option>
                <option value="EUR">Euro</option>
                <option value="CHF">Swiss Franc</option>
                <option value="USD">US Dollar</option>
                <option value="CAD">Canadian Dollar</option>
              </select>
              {errors.currency && (
                <div className="invalid-feedback">
                  {errors.currency.message}
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
            handleShowFeeModal('');
          }}
        >
          <IconCirclePlus />
          New
        </Button>
      </div>
      <Table className="tw-my-4">
        <thead>
          <tr className="tw-bg-gray-200">
            <th>fee</th>
            <th>Description</th>
            <th>Currency</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tw-border-b">
          {isSuccess && selectedService?.serviceFees?.length == 0 && (
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

          {selectedService?.serviceFees?.length > 0 &&
            selectedService?.serviceFees?.map((item) => (
              <tr key={item.id}>
                <td> {item.fee}</td>
                <td> {item.description}</td>
                <td> {item.currency}</td>
                <td>
                  <div className="tw-flex tw-my-4 tw-space-x-4 ">
                    <Button
                      type="button"
                      className="btn btn-primary tw-bg-[#1d2861]"
                      size="sm"
                      component="button"
                      onClick={() => {
                        setFormMode('update');
                        handleShowFeeModal(item.id);
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

export default ServiceFees;
