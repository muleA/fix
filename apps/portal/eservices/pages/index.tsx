import styled from 'styled-components';
import {
  IconHeart,
  IconStar,
  IconThumbUp,
  IconThumbDown,
  IconChevronRight,
} from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { Badge, Button, Card, Carousel, ListGroup } from 'react-bootstrap';
import Menus from '../shared/components/horizontal-scroll-menu';
import { useEffect, useState } from 'react';

export function Index() {
  const [adds, setAdds] = useState(true);
  
  const [top,setTop] = useState(25)
  
  useEffect(()=>{
    const menuTop = document.getElementById('menus');
    setTop(menuTop.offsetTop)
  },[top])
  const config = [
    {
      name: 'All',
      href: '/',
      selected: true,
    },
    {
      name: 'Popular',
      href: '/department',
      selected: true,
    },
    {
      name: 'Seasonal',
      href: '/employee',
      selected: true,
    },
    {
      name: 'Newly Added',
      href: '/user',
      selected: true,
    },
    {
      name: 'Allddd',
      href: '/',
      selected: true,
    },
    {
      name: 'Populasssr',
      href: '/department',
      selected: true,
    },
    {
      name: 'Seasonaddal',
      href: '/employee',
      selected: true,
    },
    {
      name: 'Newly Asdddddded',
      href: '/user',
      selected: true,
    },
    {
      name: 'Populfffasssr',
      href: '/department',
      selected: true,
    },
    {
      name: 'Seasofffnaddal',
      href: '/employee',
      selected: true,
    },
    {
      name: 'Newly Asddffdddded',
      href: '/user',
      selected: true,
    },
  ];
  return (
    <>
      <Card onClick={() => setAdds(!adds)}>
        <Card.Body>
          <Container className="mt-3">
            <Carousel
              className={`${adds} ? 'w-9/12' : w-full`}
              variant="dark"
              inputMode='search'
            >
              <Carousel.Item className="w-full" style={{ height: '25vw' }}>
                <Image
                  src="https://www.opendental.com/images/eservicesBundle.png"
                  layout="fill"
                  objectFit="cover"
                  alt="img"
                  className="container-fluid"
                />

                <Carousel.Caption className="conainer-fluid flex self-end">
                  <div className="container-fluid flex justify-between">
                    <div className="page-title">
                      <h2>17 Total Visitors</h2>
                    </div>
                    <div className="page-title">
                      <h2>20 Total Providers</h2>
                    </div>
                    <div className="page-title">
                      <h2>17 Total Service</h2>
                    </div>
                    <div className="page-title">
                      <h2>100 Total Customers</h2>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="w-full" style={{ height: '25vw' }}>
                <Image
                  src="/../public/assets/img/eserviceLogo.png"
                  layout="fill"
                  alt="img"
                  className="d-block w-100"
                />
                <p hidden>carousel image</p>
                <Carousel.Caption className="conainer-fluid flex self-end">
                  <div className="container-fluid flex justify-between">
                    <div className="page-title">
                      <h2>17 Total Visitors</h2>
                    </div>
                    <div className="page-title">
                      <h2>20 Total Providers</h2>
                    </div>
                    <div className="page-title">
                      <h2>17 Total Service</h2>
                    </div>
                    <div className="page-title">
                      <h2>100 Total Customers</h2>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            {adds && (
              <div className={`ml-4 w-3/12 `}>
                <div className="bg-primary flex h-10 items-center justify-center">
                  <strong>New Services</strong>
                </div>
                <ListGroup as="ol" >
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start  border-0"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                      <IconChevronRight />
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start border-0 "
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                      <IconChevronRight />
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start border-0 "
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">Subheading</div>
                      Cras justo odio
                    </div>
                    <Badge bg="primary" pill>
                      <IconChevronRight />
                    </Badge>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            )}
          </Container>
        </Card.Body>
      </Card>
      <div className={`container-fluid mt-3 mb-1 ${top===0}?fixed z-50 top-0:''`} id='menus'>
        <Menus navigation={config} />
      </div>
      <Container>
        <Card className="w-100 mt-2 bg-neutral-300">
          <Card.Title className="page-title ml-3">
            <div className='ml-3'><h2>Sponsored/Promoted</h2></div>
          </Card.Title>
          <Card.Body>
            <div className="row flex">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Card
                  className="col-3 z-0 ml-3 hover:z-50 hover:delay-1000 lg:hover:scale-125"
                  style={{ width: '18rem' }}
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

                    <Card.Text className="">
                      Lorem ipsum dolor sit amet, sectetur adipisicing elit.
                      Voluptatibus quia, Maiores et perferendis Voluptatibus
                      Voluptatibus perferen
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className=" container-fluid">
                    <div className="flex justify-between">
                      <div className="flex  items-center">
                        <IconStar className="mr-1" width={16} height={16} />
                        <IconThumbUp className="mr-1" width={16} height={16} />
                        <IconThumbDown
                          className="mr-1"
                          width={16}
                          height={16}
                        />
                      </div>
                      <div className="d-flex  justify-content-end ">
                        <Link href="">
                          <a>Apply</a>
                        </Link>
                      </div>
                    </div>
                  </Card.Footer>
                  <div className="ribbon  ribbon-top ribbon-start bg-red">
                    <IconStar />
                  </div>
                </Card>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Container>
      <Container>
        <Card className="d-flex w-100 mt-3 p-3">
          <Card.Title className="page-title ml-3">
            <h2>Popular</h2>
          </Card.Title>
          <div className="row flex">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Card
                className="col-3 hover-overlay glassBox hover-zoom  hover-shadow-lg ml-4"
                style={{ width: '19rem' }}
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

                  <Card.Text className=" ">
                    Lorem ipsum dolor sit amet, sectetur adipisicing elit.
                    Voluptatibus quia, Maiores et perferendis Voluptatibus
                    Voluptatibus perferen
                  </Card.Text>
                </Card.Body>
                <Card.Footer className=" container-fluid">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex  align-content-center">
                      <IconStar className="mr-1" width={16} height={16} />
                      <IconThumbUp className="mr-1" width={16} height={16} />
                      <IconThumbDown className="mr-1" width={16} height={16} />
                    </div>
                    <div className="d-flex  justify-content-end ">
                      <Link href="">
                        <a>Apply</a>
                      </Link>
                    </div>
                  </div>
                </Card.Footer>
                <div className="ribbon ribbon-top ribbon-start bg-green ">
                  <IconStar />
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </Container>
      <Container>
      <Card className="w-100 mt-3 p-3">
          <Card.Title className="page-title ml-3">
            <h2>Seasonal</h2>
          </Card.Title>
          <div className="row">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Card
                className="col-4 hover-overlay  glassBox hover-zoom  hover-shadow-lg ml-4"
                style={{ width: '18rem' }}
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
                  src="https://img1.exportersindia.com/product_images/bc-full/2020/3/4989230/web-development-company-in-noida--1584701856.jpg"
                />
                <Card.Body className="">
                  <Card.Title>Card Title</Card.Title>

                  <Card.Text className=" ">
                    Lorem ipsum dolor sit amet, sectetur adipisicing elit.
                    Voluptatibus quia, Maiores et perferendis Voluptatibus
                    Voluptatibus perferen
                  </Card.Text>
                </Card.Body>
                <Card.Footer className=" container-fluid">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-content-center">
                      <IconStar className="mr-1" width={16} height={16} />
                      <IconThumbUp className="mr-1" width={16} height={16} />
                      <IconThumbDown className="mr-1" width={16} height={16} />
                    </div>

                    <div className="d-flex  justify-content-end ">
                      <Link href="">
                        <a>Apply</a>
                      </Link>
                    </div>
                  </div>
                </Card.Footer>
                <div className="ribbon ribbon-top ribbon-start bg-green ">
                  <IconStar />
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </Container>
    </>
  );
}

export default Index;

const Container = styled.div.attrs({
  className: `flex h-35vw w-full container-fluid mt-20`,
})``;

