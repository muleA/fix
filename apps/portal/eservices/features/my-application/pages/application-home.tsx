import { Accordion, Badge, Button, Text } from '@mantine/core';
import {
  IconChevronRight,
  IconCircleCheck,
  IconClock,
  IconInfoCircle,
  IconMaximize,
  IconMinimize,
  IconStar,
  IconThumbDown,
  IconThumbUp,
  IconX,
} from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ApplicationList from '../components/application-list';

function ApplicationHome() {
  const [title, setTitle] = useState<any>({
    icon: <IconClock size={32} strokeWidth={'1'} color={'indigo'} />,
    title: '2 Active application',
  });
  const [fullwidth, setFullWidth] = useState(false);
  return (
    <div className="tw-h-screen tw-mt-5 tw-flex tw-space-x-5">
      <div
        className={`tw-shadow tw-bg-white tw-h-2/3 tw-rounded-lg ${
          fullwidth ? 'tw-hidden' : 'tw-w-1/3'
        }`}
      >
        <div className="tw-flex tw-px-3 tw-items-center tw-justify-between tw-h-12">
          <Text className="tw-text-md">Application list</Text>
          <Badge size="md" color={'teal'}>
            Total 7
          </Badge>
        </div>
        <div
          className="tw-group tw-flex tw-items-center tw-mt-3 tw-relative"
          onClick={() =>
            setTitle({
              icon: <IconClock size={32} strokeWidth={'1'} color={'indigo'} />,
              title: '2 Active application',
            })
          }
        >
          <div className="tw-m-1">
            <div className="tw-flex tw-justify-center tw-items-center">
              <IconClock size={32} strokeWidth={'1'} color={'indigo'} />
            </div>
          </div>
          <div className="tw-self-center tw-lining-nums tw-w-full">
            <div className="tw-flex tw-text-sm">
              <div>{'2 Active application'} </div>
            </div>
          </div>
          <IconChevronRight className="tw-invisible group-hover:tw-visible tw-absolute tw-right-2" />
        </div>
        <div
          className="tw-group tw-flex tw-items-center tw-mt-2 tw-relative"
          onClick={() =>
            setTitle({
              icon: (
                <IconInfoCircle size={32} strokeWidth={'1'} color={'orange'} />
              ),
              title: '1 Action needed application',
            })
          }
        >
          <div className="tw-m-1">
            <div className="tw-flex tw-justify-center tw-items-center">
              <IconInfoCircle size={32} strokeWidth={'1'} color={'orange'} />
            </div>
          </div>
          <div className="tw-self-center tw-lining-nums tw-w-full">
            <div className="tw-flex tw-text-sm">
              <div>{'1 Action needed application'} </div>
            </div>
          </div>
          <IconChevronRight className="tw-invisible group-hover:tw-visible tw-absolute tw-right-2" />
        </div>
        <div
          className="tw-group tw-flex tw-items-center tw-mt-2 tw-relative"
          onClick={() =>
            setTitle({
              icon: (
                <IconCircleCheck size={32} strokeWidth={'1'} color={'green'} />
              ),
              title: '4 Completed application',
            })
          }
        >
          <div className="tw-m-1">
            <div className="tw-flex tw-justify-center tw-items-center">
              <IconCircleCheck size={32} strokeWidth={'1'} color={'green'} />
            </div>
          </div>
          <div className="tw-self-center tw-lining-nums tw-w-full">
            <div className="tw-text-sm tw-flex">
              <div>{'4 Completed application'} </div>
            </div>
          </div>
          <IconChevronRight className="tw-invisible group-hover:tw-visible tw-absolute tw-right-2" />
        </div>
      </div>
      <div className={`tw-rounded tw-shadow tw-bg-white ${fullwidth ? 'tw-w-full' : 'tw-w-2/3'}`}>
        <div className="tw-h-12 tw-flex tw-justify-between tw-px-3 tw-items-center">
          <div className="tw-flex tw-items-center">
            <div className="tw-group tw-flex tw-items-center tw-mt-2 tw-relative">
              <div className="tw-m-1">
                <div className="tw-flex tw-justify-center tw-items-center">
                  {title.icon}
                </div>
              </div>
              <div className="tw-self-center tw-lining-nums tw-w-full">
                <div className="tw-text-sm tw-flex">
                  <div>{title.title} </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-flex tw-space-x-3">
            {fullwidth ? (
              <IconMinimize
                onClick={() => setFullWidth(false)}
                strokeWidth={'1'}
              />
            ) : (
              <IconMaximize
                onClick={() => setFullWidth(true)}
                strokeWidth={'1'}
              />
            )}
          </div>
        </div>
        <div className="tw-h-full tw-mt-5">
          <Accordion initialItem={0} iconPosition="right">
            {Array.from({ length: 2 }).map((_, idx) => (
              <Accordion.Item
                key={idx}
                label={`${
                  idx === 0 ? 'ID card issuance' : 'Birth Certificate issuance'
                }`}
              >
                <div className="tw-flex">
                  <div className="tw-h-64 tw-w-1/3">
                    <Image
                      src={'https://d33wubrfki0l68.cloudfront.net/1e3db23d52df0e395b1cb851d78a86fa3beb4c47/a72ec/images/programmes/products-and-services/gbtitleimage.png'}
                      className="img tw-w-full"
                      width={300}
                      height={255}
                      alt="img"
                      layout="fixed"
                    />
                  </div>
                  <div className="tw-relative tw-ml-5 tw-h-64 tw-w-2/3">
                    <div className="tw-flex tw-space-x-2">
                      <div className="tw-text-sm tw-text-justify">
                        With Fjord Tours you can explore more of the magical
                        fjord landscapes with tours and activities on and around
                        the fjords of Norway With Fjord Tours you can explore
                        more of the magical fjord landscapes with tours and
                        activities on and around the fjords of Norway
                      </div>
                    </div>
                    <div className="tw-flex  tw-items-center tw-space-x-3 tw-justify-between">
                      <div className="tw-flex  tw-items-center tw-space-x-3">
                        <div className="tw-flex tw-space-x-2">
                          <IconThumbUp
                            className="tw-mr-1 tw-textgreen-200"
                            strokeWidth={'1'}
                            width={16}
                            height={16}
                            color={'teal'}
                          />
                          <div className="tw-text-sm">22</div>
                        </div>
                        <div className="tw-flex tw-space-x-2">
                          <IconThumbDown
                            className="tw-mr-1"
                            strokeWidth={'1'}
                            width={16}
                            height={16}
                            color={'red'}
                          />
                          <div className="tw-text-sm">1</div>
                        </div>
                      </div>
                      <div className="tw-flex tw-space-x-2">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <IconStar
                            key={idx}
                            className="tw-mr-1"
                            fill={`${idx < 3 ? 'orange' : 'white'}`}
                            color={'orange'}
                            strokeWidth={'1.25'}
                            width={16}
                            height={16}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="tw-ml-2 tw-w-full tw-absolute tw-bottom-1 tw-flex tw-justify-between">
                      <div>
                        <div className="tw-flex tw-space-x-2">
                          <div className="tw-text-sm">Service provider</div>
                          <div className="tw-text-sm">Kirkos woreda 8</div>
                        </div>
                        <div className="tw-flex tw-space-x-2">
                          <div className="tw-text-sm">Date of Application</div>
                          <div className="tw-text-sm">4/3/2022 10:25 AM</div>
                        </div>
                      </div>
                      {idx === 0 ? <></>:  <div className='tw-items-center'>
                        <Link href={'/my-application/1'}>
                        <a className='tw-text-sm'>Proceed to application</a>
                        </Link>
                      </div>}
                    </div>
                  </div>
                </div>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ApplicationHome;
