import { Card, Group, Image, Menu, Text } from '@mantine/core';
import { IconHeart, IconLayoutGrid, IconList, IconStar } from '@tabler/icons';
import React, { useEffect, useState } from 'react';
import { useLazyGetServicesQuery } from '../../home/store/query/home.query';

function ServiceList() {
  const [getServices, result] = useLazyGetServicesQuery();
  const [list, setList] = useState('list');
  useEffect(() => {
    getServices('', true);
  }, []);
  console.log('list style', list);
  return (
    <div className="tw-mt-2">
      <div className="tw-flex tw-w-full tw-justify-end">
        <div>
          <Menu>
            <Menu.Label>List</Menu.Label>
            <Menu.Item
              onClick={() => setList('list')}
              icon={<IconList size={14} />}
            >
              List
            </Menu.Item>
            <Menu.Item
              onClick={() => setList('grid')}
              icon={<IconLayoutGrid size={14} />}
            >
              Grid
            </Menu.Item>
          </Menu>
        </div>
      </div>
      <div
        className={`tw-grid tw-gap-3 md:tw-grid-flow-row ${
          list === 'grid'
         ? 'md:tw-grid-cols-3' : 'md:tw-grid-cols-1'}
          lg:tw-grid-flow-row   ${
            list === 'grid'
           ? 'lg:tw-grid-cols-3' : 'lg:tw-grid-cols-1'}
         xs:tw-grid`}
      >
        {result.data?.data.map((item, idx) => (
          <Card
            shadow="sm"
            padding="lg"
            key={idx}
            className="tw-border group tw-rounded-3 tw-w-full"
          >
            {/*hover:tw-z-50   hover:tw-delay-1000   lg:hover:tw-scale-125 */}
            <Card.Section className="tw-relative">
              <div className="icons xs:tw-opacity-100 tw-w-full tw-px-2 tw-top-2 tw-absolute tw-z-40 tw-flex tw-justify-end ">
                <div className="tw-space-y-3">
                  <div className="tw-w-10 tw-h-10 tw-rounded-full tw-border tw-flex tw-justify-center tw-items-center">
                    <IconHeart strokeWidth={'1.25'} color={'red'} />
                  </div>
                  {/* <div>
                    <IconThumbUp
                      fill="#fde047"
                      color="#fde047"
                      strokeWidth={'1'}
                    />
                    <Text size="xs">6000</Text>
                  </div>
                  <div>
                    <IconThumbDown strokeWidth={'1.25'} />
                    <Text size="xs">6000</Text>
                  </div> */}
                </div>
              </div>
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/1e3db23d52df0e395b1cb851d78a86fa3beb4c47/a72ec/images/programmes/products-and-services/gbtitleimage.png"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" className="tw-mb-1 tw-mt-1 tw-flex">
              <Text className="tw-text-sm tw-font-serif ">{item.name}</Text>
            </Group>
            <div className="tw-flex tw-space-x-1 tw-mb-4">
              <div className="tw-h-4 tw-w-4 tw-rounded-full tw-border tw-self-center tw-bg-green-500"></div>
              <div className="tw-inline-block tw-align-middle tw-text-sm">
                Online
              </div>
            </div>
            <Text size="sm" className="tw-text-slate-700">
              {item.description}
            </Text>
            <div className="tw-mt-2 tw-bottom-0">
              {/* <div className="tw-flex  tw-items-center tw-space-x-3">
                <IconStar className="tw-mr-1" width={16} height={16} />
                <IconThumbUp className="tw-mr-1" width={16} height={16} />
                <IconThumbDown className="tw-mr-1" width={16} height={16} />
              </div>
              <div className="tw-flex  tw-justify-end ">
                <Link href="">
                  <a className="text-primary">Apply</a>
                </Link>
              </div> */}
              <div className="tw-flex tw-space-x-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <IconStar
                    key={idx}
                    className="tw-mr-1"
                    fill={`${idx < 3 ? 'yellow' : 'white'}`}
                    color={'yellow'}
                    strokeWidth={'1.25'}
                    width={16}
                    height={16}
                  />
                ))}
              </div>
              <div
                className="xs:tw-bg-primary xs:tw-text-white tw-cursor-pointer tw-mt-1 tw-text-sm 
                              tw-align-text-middle tw-text-center tw-border tw-rounded-md tw-w-full 
                              md:hover:tw-bg-primary md:hover:tw-text-white md:tw-bg-white
                              md:tw-text-primary"
              >
                Apply
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ServiceList;
