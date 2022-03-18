import { Accordion, Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { IconEditCircle, IconTrash } from '@tabler/icons';
export default function SupportedLanguagesForm() {
  const router = useRouter();
  const regex = /\/service-store\/adminstration\/detail\/*/;
  return (
    <>
      <Accordion
        className="tw-mt-4 tw-bg-white  "
        iconPosition="right"
        iconSize={40}
        initialItem={0}
        styles={{
          itemTitle: { borderBottom: '0.5px solid rgb(229 231 235)' },
        }}
      >
        <Accordion.Item className="tw-w-100" label="New Supported Languages">
          <div className="tw-mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="example-text-input"
              placeholder="language Name"
            />
          </div>

          <div className="tw-mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              name="example-text-input"
              placeholder="language Description"
            />
          </div>
          {router.pathname.match(regex) ? (
            <>
              <Button className=" tw-mr-12 tw-bg-[#1d2861]">
                <IconEditCircle />
                Update
              </Button>
              <Button className=" tw-mr-12 tw-bg-[#f87171]">
                <IconTrash />
                Delete
              </Button>
            </>
          ) : (
            <Button className=" tw-mr-12 tw-bg-[#1d2861]">Save</Button>
          )}
        </Accordion.Item>
      </Accordion>
    </>
  );
}
