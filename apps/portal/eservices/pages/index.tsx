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
} from '@tabler/icons';
import Link from 'next/link';
import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from '@mantine/core';
import Menus from '../shared/components/horizontal-scroll-menu';
import { useEffect, useState } from 'react';
import { signIn, useSession, signOut, getCsrfToken } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
import { Router, useRouter } from 'next/router';
import { Divider, Menu, Image } from '@mantine/core';
import {default as Nimage} from 'next/image';
import Carousel from '../shared/components/carousel';
import { CarouselItem } from '../shared/components/carousel';


export function Index() {
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
  const { data } = useSession();
  const router = useRouter();
  console.log('session', data);
  const theme = useMantineTheme();  
  return (
    <>
      <div className="tw-mt-3 tw-mb-4">
       <Carousel height={25} duration={5000}>
          <CarouselItem  caption='Good' fontcolor='tw-text-neutral-900'> 
          <Nimage
          src={`/../public/assets/img/hero.jpg`}
            className="img tw-w-full"
            alt="img"
            layout='fill'
          />
          </CarouselItem>
          <CarouselItem  caption='second'>
          <Nimage
            src="https://d33wubrfki0l68.cloudfront.net/1e3db23d52df0e395b1cb851d78a86fa3beb4c47/a72ec/images/programmes/products-and-services/gbtitleimage.png"
            className="tw-w-full"
            alt="img"
            layout='fill'
          />
          </CarouselItem>
        </Carousel>
      </div>
      <div className={`tw-container-fluid tw-mt-3 tw-mb-1 tw-p-2 `}>
        <Menus navigation={config} />
      </div>
      <div className="tw-conainer-fluid tw-mt-3 tw-flex tw-justify-between">
        <div>
          {' '}
          <strong>
            <p className="tw-font-semibold"> Sponsered/Promoted </p>
          </strong>
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
      <div className="tw-grid tw-gap-3   md:tw-grid-flow-row   md:tw-grid-cols-3   lg:tw-grid-flow-row   lg:tw-grid-cols-5 xs:tw-grid">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Card shadow="sm" padding="lg" key={idx} className='tw-rounded-3 tw-z-0 tw-w-full   hover:tw-z-50   hover:tw-delay-1000   lg:hover:tw-scale-125 tw-border-top-0 tw-border-b-4  tw-border-b-green-400'>
            <Card.Section>
              <Image
                src="https://d33wubrfki0l68.cloudfront.net/1e3db23d52df0e395b1cb851d78a86fa3beb4c47/a72ec/images/programmes/products-and-services/gbtitleimage.png"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group
              position="apart"
              className='tw-mb-5 tw-mt-1 tw-flex'
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>

            <Text size="sm" className='tw-text-slate-700'>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>
            <div className="tw-flex  tw-justify-between">
              <div className="tw-flex  tw-items-center tw-space-x-3">
                <IconStar className="tw-mr-1" width={16} height={16} />
                <IconThumbUp className="tw-mr-1" width={16} height={16} />
                <IconThumbDown className="tw-mr-1" width={16} height={16} />
              </div>
              <div className="tw-flex  tw-justify-end ">
                <Link href="">
                  <a className="text-primary">Apply</a>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
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
      <div className="tw-grid tw-gap-3   md:tw-grid-flow-row   md:tw-grid-cols-3   lg:tw-grid-flow-row   lg:tw-grid-cols-5">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Card
            key={idx}
            shadow="sm"
            padding={'lg'}
            className="hover:tw-drop-shadow-2xl tw-w-full tw-border-top-0 tw-border-b-4 tw-border-b-cyan-400"
          >
            <Card.Section>
              <Image
                alt="img"
                className="tw-w-100 "
                src="https://d33wubrfki0l68.cloudfront.net/1e3db23d52df0e395b1cb851d78a86fa3beb4c47/a72ec/images/programmes/products-and-services/gbtitleimage.png"
              />
            </Card.Section>

            <Group position="apart" className="tw-mt-5 tw-mb-5">
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>

            <Text size="sm" className='tw-text-slate-700'>
              Lorem ipsum dolor sit amet, sectetur adipisicing elit.
              Voluptatibus quia, Maiores et perferendis Voluptatibus
              Voluptatibus perferen
            </Text>
            <div className="tw-flex  tw-justify-between">
              <div className="tw-flex  tw-items-center tw-space-x-3">
                <IconStar className="tw-mr-1" width={16} height={16} />
                <IconThumbUp className="tw-mr-1" width={16} height={16} />
                <IconThumbDown className="tw-mr-1" width={16} height={16} />
              </div>
              <div className="tw-flex  tw-justify-end ">
                <Link href="">
                  <a className="text-primary">Apply</a>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
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
      <div className="tw-grid tw-gap-3   md:tw-grid-flow-row   md:tw-grid-cols-3   lg:tw-grid-flow-row   lg:tw-grid-cols-5">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Card
            onClick={() => router.push('/my-application/application/1')}
            key={idx}
            shadow="sm"
            padding="lg"
            className="hover:tw-cursor-pointer hover:tw-drop-shadow-2xl tw-w-full tw-border-top-0 tw-border-b-4  tw-border-b-pink-700"
          >
            <Card.Section>
              <Image
                alt="img"
                className="d-block tw-w-100 "
                src="https://d33wubrfki0l68.cloudfront.net/1e3db23d52df0e395b1cb851d78a86fa3beb4c47/a72ec/images/programmes/products-and-services/gbtitleimage.png"
              />
            </Card.Section>

            <Group position="apart" className="tw-mt-5 tw-mb-5">
              <Text weight={500}>Norway Fjord Adventures</Text>
            </Group>

            <Text size="sm" className='tw-text-slate-700'>
              Lorem ipsum dolor sit amet, sectetur adipisicing elit.
              Voluptatibus quia, Maiores et perferendis Voluptatibus
              Voluptatibus perferen
            </Text>
            <div className="tw-flex  tw-justify-between">
              <div className="tw-flex  tw-items-center tw-space-x-3">
                <IconStar className="tw-mr-1" width={16} height={16} />
                <IconThumbUp className="tw-mr-1" width={16} height={16} />
                <IconThumbDown className="tw-mr-1" width={16} height={16} />
              </div>
              <div className="tw-flex  tw-justify-end ">
                <Link href="">
                  <a className="text-primary">Apply</a>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Index;

const Container = styled.div.attrs({
  className: `tw-container-fluid tw-flex  tw-w-full tw-mx-auto tw-mt-2 tw-px-4`,
})``;
