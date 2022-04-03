import { Button, Modal } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons';
export default function DeleteModal({
  showModal,
  hideModal,
  confirmModal,
  id,
  deleteStatus,
}) {
  return (
    <>
      <Modal opened={showModal} onClose={hideModal}>
        <div className="text-center">
          <IconAlertTriangle
            size={50}
            className="tw-text-red-900 tw-mx-auto tw-text-4xl tw-red-900 tw-text-4xl
          tw-rounded-full tw-border-4 tw-border-red-500 tw-p-4 tw-text-4xl tw-font-bold tw-text-red-500"
          />{' '}
          <div className="tw-text-center tw-py-6 tw-text-2xl tw-text-gray-700">
            Are you sure ?
          </div>
          <div className="tw-text-center twp-font-light rw-text-gray-700 mb-8">
            Do you really want to delete these records? This process cannot be
            undone.
          </div>
          <div className="tw-flex tw-justify-center tw-mt-4">
            <Button
              variant="default"
              className="tw-bg-gray-300 tw-text-gray-900 tw-rounded
           hover:tw-bg-gray-200 tw-px-6 tw-py-2 focus:tw-outline-none tw-mx-1"
              onClick={hideModal}
            >
              No
            </Button>

            <Button
              type="button"
              className="tw-ml-2 btn btn-danger tw-bg-[#ff4d4f] tw-bg-red-500 tw-text-gray-200 
          hover:tw-bg-red-400 tw-px-6 tw-py-2 focus:tw-outline-none tw-mx-1 rounded"
              component="button"
              loading={deleteStatus}
              onClick={() => confirmModal(id)}
            >
              Yes
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
