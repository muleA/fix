import { Button, Modal } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons';
export default function DeleteModal({
  showModal,
  hideModal,
  confirmModal,
  id,
  deleteStatus,
})
{
 

  return (
    <>
      <Modal opened={showModal} onClose={hideModal}>
        <IconAlertTriangle
          size={50}
          className="tw-text-red-900 tw-mx-auto tw-text-4xl tw-red-900 tw-text-4xl"
        />
        <div className="tw-py-3 tw-text-center tw-text-4xl tw-text-gray-700">
          <strong className="tw-text-red-900">Are you sure ?</strong>
        </div>
        <div className="tw-mb-8 tw-text-center tw-font-light tw-text-gray-700">
          Do you really want to delete these record? This process cannot be
          undone.
        </div>

        <div className="tw-flex tw-justify-center">
          <Button variant="default" onClick={hideModal}>
            No
          </Button>

          <Button
            type="button"
            className="tw-ml-2 btn btn-danger tw-bg-[#ff4d4f]"
            component="button"
            loading={deleteStatus}
            onClick={() => confirmModal(id)}
          >
            Yes
          </Button>
        </div>
      </Modal>
    </>
  );
}
