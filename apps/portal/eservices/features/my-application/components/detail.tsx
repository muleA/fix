import { Stepper, Button, Group } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';


function Detail() {
  const [active, setActive] = useState(1);
  const router = useRouter();
  const id = router.query;
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
console.log(id)
  return (
    <div className='tw-container tw-mt-5'>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        color={'green'}
        className='tw-text-primary'
        
      >
        <Stepper.Step
          label="Submit Application"
          description="Create an account"
          allowStepSelect={active > 0}
        >
          Submit Application
        </Stepper.Step>
        <Stepper.Step
          label="Make Payment"
          description="Verify email"
          allowStepSelect={active > 1}
        >
            <p>Step 2</p>
            <div className="tw-bg-[#F6FFED] tw-h-10 tw-flex tw-justify-between tw-items-center tw-border tw-p-2 tw-border-[#B7EB8F]">
              <div className='tw-flex'><IconCircleCheck fill={'green'}  className='tw-text-white tw-mr-2'/>  200 payment requested</div>
              <div><Button variant='light' size='sm'>Go to Payment</Button></div>
            </div>
            {/* <p className='tw-mt-2'>Application  Task Description</p> */}
            <p className='tw-text-justify tw-mt-2'>
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
        <Stepper.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={active > 2}
        >
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button variant='light' onClick={nextStep}>Next step</Button>
      </Group>
    </div>
  );
}
export default Detail;
