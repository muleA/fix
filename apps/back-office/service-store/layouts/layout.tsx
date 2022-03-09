import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { IconApps } from '@tabler/icons';
import Link from 'next/link';
import Image from 'next/image'
import profilePic from '../public/Profile/profile.jpg'
import { useRouter } from 'next/router';
export default function Layouts({ children }) {
  const [show, setShow] = useState(false);
  const showDropdown = () => {
    setShow(!show);
  };
  const hideDropdown = () => {
    setShow(false);
  };
  const router = useRouter();

  return (
    <>
      <Navbar sticky="top" className="bg-primary" expand="lg">
        <Container fluid>
          <Navbar.Brand className="hover:tw-bg-white-900">
            <IconApps /> Eservice|service-store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="tw-text-white ">
            <Nav className="me-auto tw-text-white">
              <Link href="/">
                <a
                  className={`tw-text-white tw-font-bold tw-no-underline tw-p-3 hover:tw-bg-white
               hover:tw-no-underline hover:cursor-pointer ${
                 router.pathname == '/' ? 'active' : ''
               }
               
                  `}
                >
                  Dashboard
                </a>
              </Link>
              <Link href="/service-store/service/list">
                <a
                  className={`tw-text-white tw-font-bold tw-no-underline tw-p-3
                  hover:tw-cursor-pointer hover:tw-bg-white hover:tw-no-underline
                  ${
                    router.pathname == '/service-store/service/list' 
                    || router.pathname=="/service-store/service/create-new-service"
                      ? 'active'
                      : ''
                  }`}
                >
                  services
                </a>
              </Link>
              <Link href="/service-store/service/service-owners">
                <a
                  className={`tw-text-white tw-font-bold tw-no-underline tw-p-3
                  hover:tw-cursor-pointer hover:tw-bg-white hover:tw-no-underline
                  ${
                    router.pathname == '/service-store/service/service-owners'
                      ? 'active'
                      : ''
                  }`}
                >
                  Service Owners
                </a>
              </Link>
              <Link href="/service-store/service/service-providers">
                <a
                  className={`tw-text-white tw-font-bold tw-no-underline tw-p-3
                  hover:tw-cursor-pointer hover:tw-bg-white hover:tw-no-underline
                  ${
                    router.pathname ==
                    '/service-store/service/service-providers'
                      ? 'active'
                      : ''
                  }`}
                >
                  Service Providers
                </a>
              </Link>
              <Link href="/service-store/application-forms/forms">
                <a
                  className={`tw-text-white tw-font-bold tw-no-underline tw-p-3
                  hover:tw-cursor-pointer hover:tw-bg-white hover:tw-no-underline
                  ${
                    router.pathname == '/service-store/application-forms/forms'
                      ? 'active'
                      : ''
                  }`}
                >
                  Application Forms
                </a>
              </Link>
              <NavDropdown
                className="tw-text-white  tw-font-bold tw-no-underline 
              hover:tw-cursor-pointer  hover:tw-bg-white hover:tw-no-underline"
                title="Settings"
                id="basic-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                {/*  passHref is  in order to pass the href to the child <a> tag of custome componenet */}
                <Link href="/service-store/settings/terms" passHref>
                  <NavDropdown.Item className="  hover:tw-no-underline">
Policies and Terms of uses
                  </NavDropdown.Item>
                </Link>
                <Link href="/service-store/settings/category" passHref>
                  <NavDropdown.Item className="hover:tw-no-underline">
                    Category
                  </NavDropdown.Item>
                </Link>
                <Link href="/service-store/settings/tags" passHref>
                  <NavDropdown.Item className="hover:tw-no-underline">
                    Tags
                  </NavDropdown.Item>
                </Link>
             
                <Link href="/service-store/settings/languages" passHref>
                  <NavDropdown.Item className="tw-hover:no-underline">
                    supported Languages
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <NavDropdown
              title="language"
              className="  tw-mr-4 tw-text-black!important "
              id="language-nav-dropdown"
            >

         
             <NavDropdown.Item href="#action/3.1">አማርኛ</NavDropdown.Item>  
         
             <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item> 
      
              <NavDropdown.Item href="#action/3.3">orromiffa</NavDropdown.Item>
          
            </NavDropdown>

            <div className="tw-flex tw-group  tw-mr-0 tw-items-center md:tw-order-2">
            <Image className="tw-w-8 tw-shrink-0 tw-h-8 tw-rounded-full" 
            src={profilePic}
            width={30}
            height={30}
             alt="user photo"/>
<div>
    <NavDropdown
              title="username"
              drop="start"
              className=" tw-mr-2 tw-text-base "
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                change password
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
            </NavDropdown>
</div>
          
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="tw-min-h-[83vh] tw-relative tw-bg[#e2e8f0]">
        {children}
      </main>
      <footer className="tw-p-6 tw-bg-zinc-300 tw-text-dark tw-rounded-lg tw-shadow md:tw-px-3 ">
        <span className="tw-block tw-text-sm tw-text-white-800 sm:tw-text-center dark:tw-ext-gray-400">
          &copy; {new Date().getFullYear()}
          All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
