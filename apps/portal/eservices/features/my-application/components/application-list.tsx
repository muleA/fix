import { Card, Group, Text } from '@mantine/core';
import { IconArrowRight, IconChevronRight, IconCircleCheck, IconClock, IconInfoCircle } from '@tabler/icons';
import { useRouter } from 'next/router';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
interface Props {
  status: string;
}
function ApplicationList({
  status = 'Active',
}: Props) {
  const router = useRouter();
  return (
    <Card className="tw-bg-gray-100 tw-h-2/3">
      <Card.Section className="tw-bg-white tw-flex tw-mb-3  tw-border tw-border-solid tw-border-gray-300 tw-h-16">
        <div className="tw-m-1">
          {status === 'Active' && (
            <div className="tw-flex tw-h-full tw-w-16  tw-border tw-border-solid tw-border-gray-300 tw-bg-blue-300 tw-justify-center tw-items-center">
              <div>
                <IconClock size={32} strokeWidth={'1'} color={'blue'}/>
              </div>
            </div>
          )}
          {status === 'Complete' && (
            <div className="tw-h-full tw-w-16  tw-border tw-border-solid tw-border-gray-300 tw-bg-green-300 tw-flex tw-justify-center tw-items-center">
              <div>
                <IconCircleCheck size={32} strokeWidth={'1'} color={'green'}/>
              </div>
            </div>
          )}
          {status === 'Action' && (
            <div className="tw-h-full tw-w-16  tw-border tw-border-solid tw-border-gray-300 tw-bg-yellow-300  tw-flex tw-justify-center tw-items-center tw-text-yellow-900">
              <div>
                <IconInfoCircle size={32} strokeWidth={'1.25'}/>
              </div>
            </div>
          )}
        </div>
        <div className="tw-self-center tw-lining-nums tw-w-full">
          <div className="tw-font-serif tw-font-medium tw-flex">
            <div>3 {status} {status === 'Action' && 'needed application'} </div>
          </div>
          <div className="tw-font-light tw-text-sm tw-text-slate-700 dark:tw-text-slate-700">
            10 Total Application
          </div>
        </div>
      </Card.Section>
      <Card.Section className="tw-mt-3 tw-h-5/6 tw-bg-white  tw-border tw-border-solid tw-border-gray-300 tw-rounded-t-md tw-p-2 tw-space-y-2">
        <div
          className="tw-h-10 tw-group tw-border-solid tw-border-gray-300 tw-border-0 tw-border-b tw-text-sm tw-flex tw-justify-between tw-items-center  tw-cursor-pointer"
          onClick={() => router.push('/my-application/1')}
        >
          <span className="tw-ml-1">Cras justo odio</span>
          <IconChevronRight className='tw-invisible group-hover:tw-visible tw-rounded-full'/>
        </div>
        <div className="tw-h-10 tw-group  tw-border-solid tw-border-gray-300 tw-border-0 tw-border-b tw-text-sm tw-flex tw-justify-between tw-items-center tw-cursor-pointer">
          <span className="tw-ml-1">Dapibus ac facilisis in</span>
          <IconChevronRight className='tw-invisible group-hover:tw-visible tw-rounded-full'/>
        </div>
        <div className="tw-h-10 tw-group tw-border-solid tw-border-gray-300 tw-border-0 tw-border-b tw-text-sm tw-flex tw-justify-between tw-items-center tw-cursor-pointer">
          <span className="tw-ml-1">Morbi leo risus</span>
          <IconChevronRight className='tw-invisible group-hover:tw-visible tw-rounded-full'/>
        </div>
        <div className="tw-h-10 tw-group tw-border-solid tw-border-gray-300 tw-border-0 tw-border-b tw-text-sm tw-flex tw-justify-between tw-items-center tw-cursor-pointer">
          <span className="tw-ml-1">Porta ac consectetur ac</span>
          <IconChevronRight className='tw-invisible group-hover:tw-visible tw-rounded-full'/>
        </div>
        <div className="tw-h-10 tw-group tw-border-solid tw-border-gray-300 tw-border-0 tw-border-b tw-text-sm tw-flex tw-justify-between tw-items-center tw-cursor-pointer">
          <span className="tw-ml-1">Vestibulum at eros</span>
          <IconChevronRight className='tw-invisible group-hover:tw-visible tw-rounded-full'/>
        </div>
      </Card.Section>
    </Card>
  );
}

export default ApplicationList;
