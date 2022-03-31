import { Card, Group, Text } from '@mantine/core';
import { IconCircleCheck, IconClock, IconInfoCircle } from '@tabler/icons';
import { useRouter } from 'next/router';
import React from 'react';
import { ListGroup } from 'react-bootstrap';
interface Props {
  status: string;
}
function ApplicationList({
  status = 'Active' || 'Complete' || 'Action',
}: Props) {
  const router = useRouter();
  return (
    <Card className="tw-bg-gray-100">
      <Card.Section className="tw-flex tw-mb-3 tw-border tw-h-16">
        <div className="tw-m-1">
          {status === 'Active' && (
            <div className="tw-flex tw-h-full tw-w-16 tw-border tw-bg-blue-300 tw-justify-center tw-items-center">
              <div>
                <IconClock size={32} strokeWidth={'1'} color={'blue'}/>
              </div>
            </div>
          )}
          {status === 'Complete' && (
            <div className="tw-h-full tw-w-16 tw-border tw-bg-green-300 tw-flex tw-justify-center tw-items-center">
              <div>
                <IconCircleCheck size={32} strokeWidth={'1'} color={'green'}/>
              </div>
            </div>
          )}
          {status === 'Action' && (
            <div className="tw-h-full tw-w-16 tw-border tw-bg-yellow-300  tw-flex tw-justify-center tw-items-center tw-text-yellow-900">
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
      <Card.Section className="tw-mt-3 tw-border tw-rounded-t-md tw-p-2 tw-space-y-2">
        <div
          className="tw-h-10 tw-border-b tw-text-sm tw-flex tw-items-center  tw-cursor-pointer hover:tw-bg-slate-100"
          onClick={() => router.push('/my-application/1')}
        >
          <span className="">Cras justo odio</span>
        </div>
        <div className="tw-h-10 tw-border-b tw-text-sm tw-flex tw-items-center tw-cursor-pointer hover:tw-bg-slate-100">
          Dapibus ac facilisis in
        </div>
        <div className="tw-h-10 tw-border-b tw-text-sm tw-flex tw-items-center tw-cursor-pointer hover:tw-bg-slate-100">
          Morbi leo risus
        </div>
        <div className="tw-h-10 tw-border-b tw-text-sm tw-flex tw-items-center tw-cursor-pointer hover:tw-bg-slate-100">
          Porta ac consectetur ac
        </div>
        <div className="tw-h-10 tw-border-b tw-text-sm tw-flex tw-items-center tw-cursor-pointer hover:tw-bg-slate-100">
          Vestibulum at eros
        </div>
      </Card.Section>
    </Card>
  );
}

export default ApplicationList;
