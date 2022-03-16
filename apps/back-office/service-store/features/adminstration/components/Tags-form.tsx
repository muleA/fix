import { Accordion, Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { IconEditCircle, IconTrash } from '@tabler/icons';
export default function NewTag() {
  const router = useRouter();
  const regex = /\/service-store\/adminstration\/detail\/*/;
  return (
    <>
      <Accordion
        className="tw-mt-4 tw-bg-white  "
        iconPosition="right"
        iconSize={40}
        initialItem={0}
      >
        <hr className="tw-p-0 tw-border-b-2 tw-border-black tw-px-0" />
        <Accordion.Item className="tw-w-100" label="New Tag">
          <div className="tw-mb-3 tw-border-t-2">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="example-text-input"
              placeholder="Tag Name"
            />
          </div>
          <div className="tw-mb-3">
            <label className="form-label">description</label>
            <input
              type="text"
              className="form-control"
              name="example-text-input"
              placeholder="Tag Description"
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
