import { Stepper, Button, Group, Tooltip, Text } from '@mantine/core';
import {
  IconCircleCheck,
  IconInfoCircle,
  IconMaximize,
  IconMinimize,
  IconX,
} from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ApplicationList from './application-list';

function Detail() {
  const [active, setActive] = useState(1);
  const router = useRouter();
  const id = router.query;
  const [fullWidth, setFullWidth] = useState(false);
  return (
    <div className="tw-flex tw-space-x-5">
      <div className={`tw-bg-white tw-mt-5 ${fullWidth ? 'tw-hidden' : 'tw-w-1/3'}`}>
        <ApplicationList status="Action" />{' '}
      </div>
      <div
        className={`tw-bg-white tw-container tw-mt-5 tw-border tw-shadow-md ${fullWidth}? tw-w-full:''`}
      >
        <div className="tw-h-12 tw-px-3 tw-border-b tw-w-full tw-flex tw-justify-between tw-items-center tw-mb-10">
          <div><Text size={'lg'} className='tw-font-medium tw-font-serif'>Application status</Text></div>
          <div className="tw-flex tw-space-x-2">
            {!fullWidth ? (
              <Tooltip  label="Maximze" withArrow>
                <IconMaximize strokeWidth={'1'} onClick={() => setFullWidth(true)} />
              </Tooltip>
            ) : (
              <Tooltip label="Minimize" withArrow>
                <IconMinimize strokeWidth={'1'} onClick={() => setFullWidth(false)} />
              </Tooltip>
            )}
           
            <Tooltip label="Close" withArrow>
            <IconX strokeWidth={'1'} onClick={()=>router.push('/my-application')}/>
              </Tooltip>
          </div>
        </div>
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          color={'teal'}
          className="tw-text-primary tw-m-5"
          orientation="vertical"
        >
          <Stepper.Step
            label="Submit Application"
            description="Create an account"
          >
            Submit Application
          </Stepper.Step>
          <Stepper.Step label="Make Payment" description="Verify email">
            <p>Step 2</p>
            <div className="tw-bg-yellow-200 tw-border-l-8 tw-w-full tw-border-yellow-300 tw-h-10 tw-flex tw-justify-between tw-items-center tw-p-2">
              <div className="tw-flex">
                <IconInfoCircle strokeWidth={'1.25'} className="tw-text-yellow-900 tw-mr-2" /> 200
                payment requested
              </div>
              <div>
                <Link href={'#'}>
                  <a className="tw-text-sm tw-text-gray-700">Go to Payment</a>
                </Link>
              </div>
            </div>
            {/* <p className='tw-mt-2'>Application  Task Description</p> */}
            <p className="tw-text-justify tw-mt-2 tw-text-sm tw-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              fringilla sit nec sed vitae sit eu ipsum risus. Risus pretium
              consequat faucibus vitae in aliquet elit in. Aliquet nisi,
              faucibus malesuada feugiat velit auctor. Accumsan at varius
              consectetur nisl sapien. Magna sed volutpat placerat feugiat. Eu
              ornare scelerisque imperdiet nibh blandit. Est aliquam mauris sed
              orci eu tristique. Ut posuere est sem ut est euismod amet.
              Ullamcorper enim sollicitudin est in. Tristique est luctus sed
              vestibulum, nibh lorem leo massa vel. Etiam faucibus pellentesque
              odio dis a. Tristique donec pharetra a aliquam pretium non
              pellentesque curabitur fermentum. Vulputate ridiculus congue
              feugiat dictumst diam cum posuere. Nunc sodales non egestas.
            </p>
          </Stepper.Step>
        </Stepper>
      </div>
    </div>
  );
}
export default Detail;
