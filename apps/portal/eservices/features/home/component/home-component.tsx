import styled from 'styled-components';
import {
  IconHeart,
  IconStar,
  IconThumbUp,
  IconThumbDown,
  IconChevronsRight,
  IconAlignJustified,
  IconArrowBigLeftLines,
  IconSettings,
  IconMessage2,
  IconPhoto,
  IconSearch,
  IconArrowAutofitLeft,
  IconTrash,
  IconDots,
  IconArrowBarRight,
  IconArrowNarrowRight,
  IconBuildingBank,
  IconNote,
  IconCertificate,
  IconUsers,
  IconNotebook,
  IconArrowDownRight,
  IconArrowRight,
  IconArrowLeft,
} from '@tabler/icons';
import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  Loader,
  LoadingOverlay,
} from '@mantine/core';
import Menus from '../../../shared/components/scroll-menu/horizontal-scroll-menu';
import { useEffect, useState } from 'react';
import {useRouter } from 'next/router';
import { Divider, Menu, Image } from '@mantine/core';
import { default as Nimage } from 'next/image';
import Carousel, { Report } from '../../../shared/components/carousel/carousel';
import { CarouselItem } from '../../../shared/components/carousel/carousel';
import Container from '../../../shared/components/container/container';
import { useLazyGetServicesQuery } from '../store/query/home.query';
import Link from 'next/link';

export function HomeComponent() {
  const [adds, setAdds] = useState(false);
  const [top, setTop] = useState(25);

  const config = [
    {
      name: 'All',
      href: '/',
      selected: true,
      protected: false,
    },
    {
      name: 'Popular',
      href: '/department',
      selected: true,
      protected: false,
    },
    {
      name: 'Seasonal',
      href: '/employee',
      selected: true,
      protected: false,
    },
    {
      name: 'Newly Added',
      href: '/user',
      selected: true,
      protected: false,
    },
    {
      name: 'Allddd',
      href: '/',
      selected: true,
      protected: false,
    },
    {
      name: 'Populasssr',
      href: '/department',
      selected: true,
      protected: false,
    },
    {
      name: 'Seasonaddal',
      href: '/employee',
      selected: true,
      protected: false,
    },
    {
      name: 'Newly Asdddddded',
      href: '/user',
      selected: true,
      protected: false,
    },
    {
      name: 'Populfffasssr',
      href: '/department',
      selected: true,
      protected: false,
    },
    {
      name: 'Seasofffnaddal',
      href: '/employee',
      selected: true,
      protected: false,
    },
    {
      name: 'Newly Asddffdddded',
      href: '/user',
      selected: true,
      protected: false,
    },
  ];

  const router = useRouter();
  const [getServices, result] = useLazyGetServicesQuery();
  useEffect(()=>{
   getServices('',true);
  },[])
  console.log(result.data);
  return (
    <>
      <div className="tw-mt-3 tw-mb-4">
        <Carousel
          height={30}
          duration={5000}
          reportOpacity={75}
          reportClassName="tw-bg-amber-100"
          report={
            <>
              <Report
                className="tw-px-3 tw-h-full tw-self-center tw-border tw-opacity-75"
                iconBackGround={'tw-bg-lime-300'}
                icon={
                  <IconBuildingBank
                    strokeWidth={'1.25'}
                    width={32}
                    height={32}
                  />
                }
                number={5}
                text="E-service portal visitors"
              />
              <Report
                className="tw-px-3 tw-h-full tw-self-center  tw-border "
                iconBackGround={'tw-bg-rose-300'}
                icon={<IconBuildingBank strokeWidth={'1.25'} />}
                number={10}
                text="Available Service providers"
              />
              <Report
                className="tw-px-3 tw-h-full tw-self-center  tw-border "
                iconBackGround="tw-bg-green-300"
                icon={
                  <IconNotebook width={32} height={32} strokeWidth={'1.25'} />
                }
                number={15}
                text="Online Government Services"
              />
              <Report
                className="tw-px-3 tw-h-full tw-self-center  tw-border "
                iconBackGround="tw-bg-yellow-300"
                icon={
                  <IconCertificate
                    width={32}
                    height={32}
                    strokeWidth={'1.25'}
                  />
                }
                number={5}
                text="Processed Customer Applications"
              />
              <Report
                className=" tw-px-3 tw-h-full tw-self-center  tw-border "
                iconBackGround="tw-bg-purple-300"
                icon={<IconUsers width={32} height={32} strokeWidth={'1.25'} />}
                number={15}
                text="Registered Customers"
              />
            </>
          }
        >
          <CarouselItem caption="Good" fontcolor="tw-text-neutral-900">
            <Nimage
              src={`/../public/assets/img/e-services.jpg`}
              className="img tw-w-full"
              alt="img"
              layout="fill"
            />
          </CarouselItem>
          <CarouselItem caption="second">
            <Nimage
              src="https://d33wubrfki0l68.cloudfront.net/1e3db23d52df0e395b1cb851d78a86fa3beb4c47/a72ec/images/programmes/products-and-services/gbtitleimage.png"
              className="tw-w-full"
              alt="img"
              layout="fill"
            />
          </CarouselItem>
        </Carousel>
      </div>
      <Container>
        {/* <div className={`tw-container-fluid tw-mt-3 tw-mb-1 tw-p-2 `}>
        <Menus navigation={config} />
      </div> */}
        <div className="tw-w-full tw-flex tw-justify-end tw-space-x-2">
          <div>
            <Badge variant="filled" className='tw-bg-primary'>All</Badge>
          </div>
          <div>
            <Badge variant="outline" className='tw-border-primary tw-text-primary'>Popular</Badge>
          </div>
          <div>
            <Badge variant="outline" className='tw-border-primary tw-text-primary'>Seasonal</Badge>
          </div>
        </div>
        <div className="tw-conainer-fluid tw-mt-3 tw-flex tw-justify-between">
          <div>
            {' '}
              <p className="tw-text-medium tw-font-serif"> Sponsered/Promoted </p>
          </div>
          <div>
            <Menu
              trigger="hover"
              arrowSize={10}
              control={
                <div>
                  <IconDots height={32} width={32} />
                </div>
              }
            >
              <Menu.Label>Application</Menu.Label>
              <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<IconMessage2 size={14} />}>Messages</Menu.Item>
              <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
              <Menu.Item
                icon={<IconSearch size={14} />}
                rightSection={
                  <Text size="xs" color="dimmed">
                    ⌘K
                  </Text>
                }
              >
                Search
              </Menu.Item>
              <Divider />
              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item icon={<IconArrowAutofitLeft size={14} />}>
                Transfer my data
              </Menu.Item>
              ,
              <Menu.Item color="red" icon={<IconTrash size={14} />}>
                Delete my account
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="tw-grid tw-gap-5   md:tw-grid-flow-row   md:tw-grid-cols-3   lg:tw-grid-flow-row   lg:tw-grid-cols-4 xs:tw-grid">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Card
              shadow="sm"
              padding="lg"
              key={idx}
              className="tw-border tw-group tw-rounded-3 tw-w-full"
            >
              {/*hover:tw-z-50   hover:tw-delay-1000   lg:hover:tw-scale-125 */}
              <Card.Section className="tw-relative">
                <div className="tw-invisible group-hover:tw-visible xs:tw-opacity-100 tw-w-full tw-px-2 tw-top-2 tw-absolute tw-z-40 tw-flex tw-justify-end ">
                  <div className="tw-space-y-3">
                    <div className="tw-w-10 tw-h-10 tw-rounded-full tw-border tw-flex tw-justify-center tw-items-center">
                      <IconHeart  strokeWidth={'1.25'} color={'red'} />
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
                <Text className='tw-text-sm tw-font-serif '>Norway Fjord Adventures</Text>
              </Group>
              <div className="tw-flex tw-space-x-1 tw-mb-4">
                <div className="tw-h-4 tw-w-4 tw-rounded-full tw-border tw-self-center tw-bg-green-500"></div>
                <div className="tw-inline-block tw-align-middle tw-text-sm">Online</div>
              </div>
              <Text size="sm" className="tw-text-slate-700">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
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
                      fill={`${idx < 3 ? 'orange' : 'white'}`}
                      color={'orange'}
                      strokeWidth={'1.25'}
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
                <div
                  className="xs:tw-bg-primary xs:tw-text-white tw-cursor-pointer tw-mt-1 tw-text-sm 
                              tw-text-center tw-border tw-rounded-md tw-w-full tw-h-8
                              md:group-hover:tw-bg-primary md:group-hover:tw-text-white md:tw-bg-white
                              md:tw-text-primary"
                >
                  <span className='tw-inline-block tw-allign-bottom tw-mt-1'>Apply</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Divider
          color={'gray'}
          labelPosition={'right'}
          className="tw-mt-4"
          label={
            <>
              <div className="tw-cursor-pointer tw-rounded-lg tw-border-gray-500 tw-text-primary tw-border tw-w-32 tw-flex tw-items-center tw-space-x-4">
                <div>
                  <IconArrowNarrowRight />
                </div>
                <div className=" tw-flex tw-justify-start">
                  See more
                </div>
              </div>
            </>
          }
        />
        <div className="tw-conainer-fluid tw-mt-3 tw-flex tw-justify-between">
          <div>
            <strong>
              <p className="tw-font-semibold"> Seasonal </p>
            </strong>
          </div>
          <div>
            <Menu
              trigger="hover"
              control={
                <div>
                  <IconDots height={32} width={32} />
                </div>
              }
            >
              <Menu.Label>Application</Menu.Label>
              <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<IconMessage2 size={14} />}>Messages</Menu.Item>
              <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
              <Menu.Item
                icon={<IconSearch size={14} />}
                rightSection={
                  <Text size="xs" color="dimmed">
                    ⌘K
                  </Text>
                }
              >
                Search
              </Menu.Item>
              <Divider />
              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item icon={<IconArrowAutofitLeft size={14} />}>
                Transfer my data
              </Menu.Item>
              ,
              <Menu.Item color="red" icon={<IconTrash size={14} />}>
                Delete my account
              </Menu.Item>
            </Menu>
          </div>
        </div>

        <div className="tw-relative tw-grid tw-gap-5   md:tw-grid-flow-row   md:tw-grid-cols-3   lg:tw-grid-flow-row   lg:tw-grid-cols-4">
          <div className='tw-z-40 tw-opacity-75 tw-border tw-border-black tw-absolute tw--right-4 tw-self-center tw-h-10 tw-w-10 tw-rounded-full tw-flex tw-items-center tw-justify-center'>
                <IconArrowRight/>
          </div>
          <div className='tw-invisible tw-z-40 tw-bg-gray-900 tw-text-white tw-opacity-75 tw-border tw-absolute tw--left-4 tw-self-center tw-h-10 tw-w-10 tw-rounded-full tw-flex tw-items-center tw-justify-center'>
                <IconArrowLeft/>
          </div>
          {Array.from({ length: 4 }).map((_, idx) => (
            <Card
              shadow="sm"
              padding="lg"
              key={idx}
              className="tw-border hover:tw-drop-shadow-2xl tw-group tw-rounded-3 tw-z-0 tw-w-full"
            >
              {/*hover:tw-z-50   hover:tw-delay-1000   lg:hover:tw-scale-125 */}
              <Card.Section className="tw-relative">
                <div className="tw-invisible group-hover:tw-visible tw-w-full tw-px-2 tw-absolute tw-top-2 tw-z-40 tw-flex tw-justify-end ">
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
                <Text className='tw-text-sm tw-font-serif '>Norway Fjord Adventures</Text>
              </Group>
              <div className="tw-flex tw-space-x-1 tw-mb-4">
                <div className="tw-h-4 tw-w-4 tw-rounded-full tw-border tw-self-center tw-bg-green-500"></div>
                <div className="tw-inline-block tw-align-middle tw-text-sm">Online</div>
              </div>

              <Text lineClamp={3} size="sm" className="tw-text-slate-700">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>
              <Link href='#'><a><Text size='xs'>Read more</Text></a></Link>
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
                      fill={`${idx < 3 ? 'orange' : 'white'}`}
                      color={'orange'}
                      strokeWidth={'1.25'}
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
                <div
                  className="xs:tw-bg-primary xs:tw-text-white tw-cursor-pointer tw-mt-1 tw-text-sm 
                              tw-text-center tw-border tw-rounded-md tw-w-full tw-h-8
                              md:group-hover:tw-bg-primary md:group-hover:tw-text-white md:tw-bg-white
                              md:tw-text-primary"
                >
                  <span className='tw-inline-block tw-allign-bottom tw-mt-1'>Apply</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Divider
          color={'gray'}
          labelPosition="right"
          className="tw-mt-4 xs:tw-hidden sm:tw-hidden md:tw-block lg:tw-block"
          label={
            <>
              <div className="tw-cursor-pointer tw-rounded-lg tw-border-gray-500 tw-text-primary tw-border tw-w-32 tw-flex tw-items-center tw-justify-between">
                <div>
                  <IconArrowNarrowRight />
                </div>
                <div className="tw-container tw-flex tw-justify-center">
                  See more
                </div>
              </div>
            </>
          }
        />
        <div className="tw-conainer-fluid tw-mt-3 tw-flex tw-justify-between">
          <div>
            {' '}
            <strong>
              <p className="tw-font-semibold"> Popular </p>
            </strong>
          </div>
          <div>
            <Menu
              trigger="hover"
              size={'md'}
              control={
                <div>
                  <IconDots height={32} width={32} />
                </div>
              }
            >
              <Menu.Label>Application</Menu.Label>
              <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<IconMessage2 size={14} />}>Messages</Menu.Item>
              <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>
              <Menu.Item
                icon={<IconSearch size={14} />}
                rightSection={
                  <Text size="xs" color="dimmed">
                    ⌘K
                  </Text>
                }
              >
                Search
              </Menu.Item>
              <Divider />
              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item icon={<IconArrowAutofitLeft size={14} />}>
                Transfer my data
              </Menu.Item>
              ,
              <Menu.Item color="red" icon={<IconTrash size={14} />}>
                Delete my account
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <div className="tw-grid tw-gap-5   md:tw-grid-flow-row   md:tw-grid-cols-3   lg:tw-grid-flow-row   lg:tw-grid-cols-4">
          {result.isLoading ? <LoadingOverlay visible={result.isLoading} /> : Array.from({ length: 4 }).map((_, idx) => (
            <Card
              onClick={() => router.push('/my-application/application/1')}
              shadow="sm"
              padding="lg"
              key={idx}
              className="tw-border hover:tw-cursor-pointer hover:tw-drop-shadow-2xl tw-group tw-rounded-3 tw-z-0 tw-w-full"
            >
              {/*hover:tw-z-50   hover:tw-delay-1000   lg:hover:tw-scale-125 */}
              <Card.Section className="tw-relative">
                <div className="tw-invisible group-hover:tw-visible tw-w-full tw-px-2 tw-absolute tw-top-2 tw-z-40 tw-flex tw-justify-end ">
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
                <Text className='tw-text-sm tw-font-serif'>{result?.data?.data[0]?.name}</Text>
              </Group>
              <div className="tw-flex tw-space-x-1 tw-mb-4">
                <div className="tw-h-4 tw-w-4 tw-rounded-full tw-border tw-self-center tw-bg-green-500"></div>
                <div className="tw-inline-block tw-align-middle tw-text-sm">Online</div>
              </div>

              <Text lineClamp={3} size="sm" className="tw-text-slate-700">
               { result?.data?.data[0]?.description}
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
                      fill={`${idx < 3 ? 'orange' : 'white'}`}
                      color={'orange'}
                      strokeWidth={'1.25'}
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
                <div
                  className="xs:tw-bg-primary xs:tw-text-white tw-cursor-pointer tw-mt-1 tw-text-sm 
                              tw-text-center tw-border tw-rounded-md tw-w-full tw-h-8
                              md:group-hover:tw-bg-primary md:group-hover:tw-text-white md:tw-bg-white
                              md:tw-text-primary"
                >
                  <span className='tw-inline-block tw-allign-bottom tw-mt-1'>Apply</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Divider
          color={'gray'}
          labelPosition="right"
          className="tw-mt-4 xs:tw-hidden sm:tw-hidden md:tw-block lg:tw-block"
          label={
            <>
              <div className="tw-cursor-pointer tw-rounded-lg tw-border-gray-500 tw-text-primary tw-border tw-w-32 tw-flex tw-items-center tw-justify-between">
                <div>
                  <IconArrowNarrowRight />
                </div>
                <div className="tw-container tw-flex tw-justify-center">
                  See more
                </div>
              </div>
            </>
          }
        />
      </Container>
    </>
  );
}

export default HomeComponent;
