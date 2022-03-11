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
import Image from 'next/image';
import Link from 'next/link';
import { Badge, Button, Card, Carousel, ListGroup } from 'react-bootstrap';
import Menus from '../shared/components/horizontal-scroll-menu';
import { useEffect, useState } from 'react';
import { signIn, useSession, signOut, getCsrfToken } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
import { Router, useRouter } from 'next/router';
import { Divider, Menu, Text } from '@mantine/core';

export function Index() {
  const [adds, setAdds] = useState(false);
  const [top, setTop] = useState(25);

  const token = getCsrfToken();
  console.log('token', token);
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
  const { data: session } = useSession();
  const router = useRouter();
  console.log('session', session);
  return (
    <>
      <div className="tw-mt-3 tw-mb-4">
        {/* <button onClick={() => signIn('keycloak')}>Sign in</button>:<button onClick={() => signOut()}>signOut</button> */}

        <Carousel className={`${adds} ? 'tw-w-9/12' :'tw-w-full'`}>
          <Carousel.Item className="tw-w-full" style={{ height: '25vw' }}>
            <Image
              src="/../public/assets/img/hero.jpg"
              layout="fill"
              alt="img"
              className="d-block tw-w-100"
            />
            <p hidden>carousel image</p>
            <Carousel.Caption className="xs:tw-hidden sm:tw-hidden md:tw-block lg:tw-block">
              <div className=" tw-h-15 text-dark tw-grid  tw-grid-cols-4 tw-divide-x tw-divide-dashed tw-divide-black tw-font-serif tw-text-xl tw-lining-nums">
                <div className="tw-flex tw-items-center tw-justify-center ">
                  <div>
                    <p>17 Total Visitors</p>
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-center">
                  <div>
                    <p>20 Total Providers</p>
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-center">
                  <div>
                    <p>17 Total Service</p>
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-center">
                  <div>
                    <p>100 Total Customers</p>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="tw-w-full" style={{ height: '25vw' }}>
            <Image
              src="/../public/assets/img/hero.jpg"
              layout="fill"
              alt="img"
              className="d-block tw-w-100"
            />
            <p hidden>carousel image</p>
            <Carousel.Caption className="xs:tw-hidden sm:tw-hidden md:tw-block lg:tw-block">
              <div className=" tw-h-15 text-dark tw-grid  tw-grid-cols-4 tw-divide-x tw-divide-dashed tw-divide-black tw-font-serif tw-text-xl tw-lining-nums">
                <div className="tw-flex tw-items-center tw-justify-center ">
                  <div>
                    <p>17 Total Visitors</p>
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-center">
                  <div>
                    <p>20 Total Providers</p>
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-center">
                  <div>
                    <p>17 Total Service</p>
                  </div>
                </div>
                <div className="tw-flex tw-items-center tw-justify-center">
                  <div>
                    <p>100 Total Customers</p>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
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
          <Menu trigger="hover" arrowSize={10} control={<div><IconDots height={32} width={32}/></div>}>
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
          <Card
            className="tw-rounded-3 tw-z-0 tw-w-full   hover:tw-z-50   hover:tw-delay-1000   lg:hover:tw-scale-125"
            key={idx}
          >
            <Card.Img
              className=""
              variant="top"
              width={'full'}
              height={'full'}
              src="https://d33wubrfki0l68.cloudfront.net/1e3db23d52df0e395b1cb851d78a86fa3beb4c47/a72ec/images/programmes/products-and-services/gbtitleimage.png"
            />
            <Card.Body className="">
              <Card.Title>Card Title</Card.Title>

              <Card.Text className="tw-font-serif">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, sectetur adipisicing elit.
                  Voluptatibus quia, Maiores et perferendis Voluptatibus
                  Voluptatibus perferen
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Footer className="container-fluid tw-border-top-0 tw-border-b-4 tw-border-b-cyan-400 tw-bg-white">
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
            </Card.Footer>
            {/* <div className="ribbon  ribbon-top ribbon-start bg-red">
                <IconStar />
              </div> */}
          </Card>
        ))}
      </div>
      <div className="tw-conainer-fluid tw-mt-3 tw-flex tw-justify-between">
        <div>
          {' '}
          <strong>
            <p className="tw-font-semibold"> Seasonal </p>
          </strong>
        </div>
        <div>
          <Menu trigger="hover" control={<div><IconDots height={32} width={32}/></div>}>
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
            className="hover-overlay hover-zoom  hover-shadow-lg tw-w-full"
            key={idx}
          >
            {/* <div className="d-flex justify-content-end m-3">
              <IconHeart
                fill="red"
                strokeWidth={0}
                cursor={'pointer'}
                floodColor={'red'}
                width={50}
                height={50}
                className=" "
              />
            </div> */}
            <Card.Img
              className=""
              variant="top"
              width={'full'}
              height={'full'}
              src="https://img.freepik.com/free-vector/purchase-payment-processing-credit-card-transaction-financial-operation-electronic-money-transfer-buyer-using-e-payment-with-contactless-credit-card_335657-851.jpg"
            />
            <Card.Body className="">
              <Card.Title>Card Title</Card.Title>
              <Card.Text className="tw-font-sans">
                Lorem ipsum dolor sit amet, sectetur adipisicing elit.
                Voluptatibus quia, Maiores et perferendis Voluptatibus
                Voluptatibus perferen
              </Card.Text>
            </Card.Body>
            <Card.Footer className=" container-fluid tw-border-top-0 tw-border-b-4  tw-border-b-green-400 tw-bg-white">
              <div className="tw-flex tw-justify-between">
                <div className="tw-flex  tw-align-center tw-space-x-3">
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
            </Card.Footer>
            {/* <div className="ribbon ribbon-top ribbon-start bg-green ">
                  <IconStar />
                </div> */}
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
          <Menu trigger="hover" size={'md'} control={<div><IconDots height={32} width={32}/></div>}>
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
            className=" hover-overlay hover-zoom  hover-shadow-lg tw-cursor-pointer  tw-mb-4"
            key={idx}
            onClick={() => router.push('/my-application/application/1')}
          >
            {/* <div className="d-flex justify-content-end m-3">
              <IconHeart
                fill="red"
                strokeWidth={0}
                cursor={'pointer'}
                floodColor={'red'}
                width={50}
                height={50}
                className=" "
              />
            </div> */}
            <Card.Img
              className=""
              variant="top"
              width={'full'}
              height={'full'}
              src="https://img1.exportersindia.com/product_images/bc-full/2020/3/4989230/web-development-company-in-noida--1584701856.jpg"
            />
            <Card.Body className="">
              <Card.Title>Card Title</Card.Title>

              <Card.Text className="tw-font-sans">
                Lorem ipsum dolor sit amet, sectetur adipisicing elit.
                Voluptatibus quia, Maiores et perferendis Voluptatibus
                Voluptatibus perferen
              </Card.Text>
            </Card.Body>
            <Card.Footer className=" container-fluid tw-border-top-0 tw-border-b-4  tw-border-b-pink-700 tw-bg-white">
              <div className="tw-flex tw-justify-between">
                <div className="tw-flex tw-align-center tw-space-x-3">
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
            </Card.Footer>
            {/* <div className="ribbon ribbon-top ribbon-start bg-green ">
                  <IconStar />
                </div> */}
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
