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
  useAddNewSupportedLanguageMutation,
  useGetServicesQuery,
  useDeleteSupportedLanguageMutation,
  useUpdatedSupportedLanguageMutation,
} from '../store/query/service.query';
import NotificationModel from '../../../shared/models/notification-model';
import Notification from '../../../shared/components/notification';
import DeleteConfirmation from '../../../shared/components/delete-confirmation';
import Service from '../../../models/publication/services/service';
import { useRouter } from 'next/router';
const schema = yup.object({
  name: yup.string().required('This field must be string'),
  code: yup.string().required('This field is required'),
});

const ServiceLanguages = () => {
  const [notification, setNotification] = useState<NotificationModel | null>(
    null
  );
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);

  const router = useRouter();
  const { id } = router.query;

  const [
    addNewServiceLanguage,
    { isLoading: creating, isSuccess: createStatus, isError: creatingError },
  ] = useAddNewSupportedLanguageMutation();
  const [
    deleteServiceLanguage,
    { isLoading: deleting, isSuccess: deleteStatus, isError: deletingError },
  ] = useDeleteSupportedLanguageMutation();
  const [
    updateServiceLanguage,
    { isLoading: updating, isSuccess: updateStatus, isError: updatingError },
  ] = useUpdatedSupportedLanguageMutation();
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
      console.log(selectedService);
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
    ServiceLanguageAssignmentModalOpened,
    setServiceLanguageAssignmentModalOpened,
  ] = useState<boolean>(false);
  const [formMode, setFormMode] = useState<string>('');
  const [perPageModal, setPerPageModal] = useState<string>('10');
  const [itemTobeUpdated, setItemTobeUpdated] = useState<string>(null);
  const [itemTobeDeleted, setItemTobeDeleted] = useState<string>(null);

  const handleShowLanguageModal = (currenctItem: string) => {
    setItemTobeUpdated(currenctItem);
    setServiceLanguageAssignmentModalOpened(
      !ServiceLanguageAssignmentModalOpened
    );
  };
  const handleHideLanguageModal = () => {
    setServiceLanguageAssignmentModalOpened(false);
  };

  /* deleting service Language */

  const submitDelete = async () => {
    try {
      await deleteServiceLanguage({
        serviceId: id.toString(),
        languageId: itemTobeDeleted,
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
        await addNewServiceLanguage({
          ...data,
          id,
        }).unwrap();

        setValue('name', '');
        setValue('code', '');
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
        await updateServiceLanguage({
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
    if (formMode === 'update' && ServiceLanguageAssignmentModalOpened) {
      if (selectedService !== null) {
        const currentValue = selectedService?.languages?.find(
          (item) => item.id == itemTobeUpdated
        );
        console.log(currentValue);
        setValue('name', currentValue.name);
        setValue('code', currentValue.code);
      }
    }
  }, [
    id,
    isSuccess,
    ServiceLanguageAssignmentModalOpened,
    formMode,
    selectedService,
    setValue,
    itemTobeUpdated,
  ]);
  /*  */
  return (
    <div>
      <Modal
        opened={ServiceLanguageAssignmentModalOpened}
        onClose={handleHideLanguageModal}
        title={`${formMode == 'new' ? 'Add New Language' : 'Edit Language '}`}
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
              <label className="form-label required">Name</label>
              <select
                placeholder="name"
                autoComplete="off"
                className={`form-control

                   ${errors.name ? 'is-invalid' : ''}`}
                {...register('name')}
              >
                <option value=""> choose Language</option>
                <option value="Am">አማርኛ</option>
                <option value="Tig">ትግርኛ</option>
                <option value="Eng">English</option>
                <option value="AffanOromo">Affan Oromo</option>
                <option value="Somali">Somali</option>
              </select>
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label required"> Code</label>
              <textarea
                rows={1}
                placeholder="code"
                autoComplete="off"
                className={`form-control

                   ${errors.code ? 'is-invalid' : ''}`}
                {...register('code')}
              />
              {errors.code && (
                <div className="invalid-feedback">{errors.code.message}</div>
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
            handleShowLanguageModal('');
          }}
        >
          <IconCirclePlus />
          New
        </Button>
      </div>
      <Table className="tw-my-4">
        <thead>
          <tr className="tw-bg-gray-200">
            <th>Name</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tw-border-b">
          {isSuccess && selectedService?.languages?.length == 0 && (
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

          {selectedService?.languages?.length > 0 &&
            selectedService?.languages?.map((item) => (
              <tr key={item.id}>
                <td> {item.name}</td>
                <td> {item.code}</td>
                <td>
                  <div className="tw-flex tw-my-4 tw-space-x-4 ">
                    <Button
                      type="button"
                      className="btn btn-primary tw-bg-[#1d2861]"
                      size="sm"
                      component="button"
                      onClick={() => {
                        setFormMode('update');
                        handleShowLanguageModal(item.id);
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

export default ServiceLanguages;
