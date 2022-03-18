import { Accordion, Button } from '@mantine/core';
import { useRouter } from 'next/router';
import { IconEditCircle, IconTrash } from '@tabler/icons';
export default function TermsandPolicyForm() {
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
        <Accordion.Item className="tw-w-100" label="New Policy">
          <div className=" mb-3">
            <label className="form-label required">Terms of Use</label>
            <textarea
              className="
        form-control     tw-border-1 tw-border-black-100
        tw-w-full
        tw-border tw-rounded"
              rows={4}
              cols={20}
              placeholder="Please insert Terms and use "
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label required">Policy</label>
            <textarea
              className="
              tw-border-1 tw-border-black-100
        form-control
        tw-w-full
        tw-border tw-rounded"
              rows={4}
              cols={20}
              placeholder="please insert Policy "
            ></textarea>
          </div>

          {router.pathname.match(regex) ? (
            <>
              <Button className=" tw-mr-12 tw-bg-[#fbbf24]">
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
