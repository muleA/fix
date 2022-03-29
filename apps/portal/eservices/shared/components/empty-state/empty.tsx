import { Button, Text } from '@mantine/core';
import { IconArrowBack } from '@tabler/icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

function Empty() {
  const router = useRouter();
  return (
    <div className="tw-w-full tw-h-screen">
      <div className="tw-w-full  tw-flex tw-justify-center tw-mt-14">
        <div className="">
          <Image
            className=""
            src={'/../public/assets/img/empty.jpg'}
            layout="fixed"
            width={500}
            height={200}
            alt="No Content"
          />
        </div>
      </div>
      <div className="tw-w-full  tw-flex tw-justify-center">
        <div className=" tw-pl-10">
          <Text className="tw-text-sm">No data is available</Text>
          <Button
            compact
            variant="white"
            size="sm"
            className="tw-w-24 tw-mt-3 tw-border-gray-500 tw-text-gray-500"
            onClick={() => router.back()}
          >
           <IconArrowBack/> Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Empty;
