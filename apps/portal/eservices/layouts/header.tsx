import React, { useEffect, useReducer, useState } from 'react';
import {
  Container,
  Nav,
  NavDropdown,
  Spinner,
  Dropdown,
  InputGroup,
  FormControl,
  Button,
  Alert,
} from 'react-bootstrap';
import {
  IconBell,
  IconHelp,
  IconUserCircle,
  IconMenu2,
  IconPlus,
  IconSearch,
  IconUser,
  IconLayoutGrid,
  IconX,
  IconLogin,
  IconSwimming,
  IconChartArea,
  IconAccessPoint,
  IconBrandTwitter,
  IconMenu,
  IconRss,
  IconGauge,
  IconBulb,
  IconInbox,
  IconGlass,
  IconTrash,
} from '@tabler/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { RootState } from '../shared/store/app.store';
import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from '../shared/store/slices/locale/locale-slice';
import { useRouter } from 'next/router';
import useUserInfo from '../shared/hooks/user-info.hook';
import { AsyncLocalStorage } from 'node:async_hooks';
import {
  Burger,
  Collapse,
  Divider,
  Input,
  Menu,
  Tabs,
  Text,
} from '@mantine/core';

interface Menu {
  name: string;
  href: string;
  active: boolean;
  protected: boolean;
}
interface Props {
  navigation: Menu[];
}

function Header(props: Props) {
  const [covidInfo, setCovidInfo] = useState(true);
  const [serviceShow, setServiceShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const locale = useSelector((state: RootState) => state.localeReducer.locale);
  const languages = useSelector(
    (state: RootState) => state.localeReducer.language
  );
  const dispatch = useDispatch();
  const { user_name } = useUserInfo();
  const [user_info, setUserInfo] = useState(user_name);
  const router = useRouter();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
    setUserInfo(localStorage.user_name);
  }, [i18n, locale]);

  return (
    <>
      <div className="tw-w-full  tw-items-center lg:tw-bg-white lg:tw-text-neutral-700  md:tw-bg-white md:tw-text-neutral-700 sm:tw-bg-[#2D3748] sm:tw-text-white sm:tw-h-2/5 xs:tw-bg-[#2D3748] xs:tw-text-white xs:tw-h-2/5">
        <div className="tw-flex tw-w-full  tw-items-center tw-h-10 tw-py-2 tw-h-12 sm:tw-text-white md:tw-text-neutral-700">
          <div className="tw-ml-1 sm:tw-display xs:tw-display md:tw-hidden lg:tw-hidden">
            <Burger
              opened={showMenu}
              onClick={() => setShowMenu((showMenu) => !showMenu)}
              title={`${showMenu ? 'Close Navigation' : 'Open Navigation'}`}
              color="#f8fafc"
            />
          </div>
          <div className="tw-flex tw-w-full sm:tw-justify-between xs:tw-justify-between tw-items-center">
            <div className=" tw-flex ">
              <div className="tw-ml-3 tw-lg:mr-28">
                <div className="tw-flex tw-items-center">
                  <div
                    onMouseEnter={() => setServiceShow(true)}
                    onMouseLeave={() => setServiceShow(false)}
                  >
                    <Dropdown.Toggle
                      as={'div'}
                      variant="light"
                      id="dropdown-basic"
                      className="tw-flex tw-items-center border-0"
                      size="sm"
                      onClick={() => setServiceShow(!serviceShow)}
                    >
                      <strong className=" tw-align-middle ">
                        <h2>eService</h2>
                      </strong>
                    </Dropdown.Toggle>
                    <Dropdown.Menu show={serviceShow}>
                      <Dropdown.Header>Regions</Dropdown.Header>
                      <Dropdown.Item eventKey="2">Afar</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Amhara</Dropdown.Item>
                      <Dropdown.Item eventKey="3">Oromia</Dropdown.Item>
                    </Dropdown.Menu>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-ml-5 tw-flex  tw-container tw-items-center tw-justify-center xs:tw-hidden sm:tw-hidden md:tw-block lg:tw-block tw-m-2">
              <div className="  tw-w-full ">
                <div className="tw-w-full tw-flex tw-justify-center tw-py-2">
                  <div className="tw-w-3/4">
                    <InputGroup>
                      <Dropdown show={searchShow}>
                        <Dropdown.Toggle
                          variant="light"
                          id="dropdown-basic"
                          className="border-end-0 border-3 bg-primary border-primary btn-pill border"
                          onMouseEnter={() => setSearchShow(true)}
                          onMouseLeave={() => setSearchShow(false)}
                        >
                          Services
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          onMouseEnter={() => setSearchShow(true)}
                          onMouseLeave={() => setSearchShow(false)}
                        >
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <FormControl
                        placeholder="Search here"
                        aria-label="Search here"
                        aria-describedby="basic-addon2"
                        as={'input'}
                        className="border-start-1 border-2"
                      />
                      <Button
                        variant="brand"
                        className="bg-primary btn-pill text-white"
                        size="sm"
                        id="button-addon2"
                      >
                        <IconSearch size={'lg'} />
                      </Button>
                    </InputGroup>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-justify-end tw-flex tw-items-center tw-space-x-3 ">
              <div className="tw-flex sm:tw-mr-7 xs:tw-mr-7">
                <div className=" sm:tw-hidden xs:tw-hidden md:tw-block lg:tw-block tw-self-center tw-ml-2">
                  <Dropdown>
                    <Dropdown.Toggle
                      as={'div'}
                      className="tw-flex tw-items-center border-0"
                      variant="light"
                      id="dropdown-basic"
                    >
                      {languages.map((lng) => {
                        if (lng.locale === locale) return lng.name;
                      })}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {languages.map((lng) => {
                        return (
                          <Dropdown.Item
                            onClick={() => dispatch(setLocale(lng.locale))}
                            key={lng.locale}
                          >
                            {lng.name}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="tw-self-center tw-ml-2">
                  <IconUserCircle
                    fontVariant={'light'}
                    className=" md:tw-text-neutral-700  lg:tw-text-neutral-700 xs:tw-text-white tw-bg-opacity-25 sm:tw-mr-2 xs:tw-mr-2 lg:tw-hidden md:tw-hidden sm:tw-block xs:tw-block"
                  />
                </div>
                <div className="tw-self-center tw-ml-2">
                  <IconHelp
                    fontVariant={'light'}
                    className=" md:tw-text-neutral-700  lg:tw-text-neutral-700 xs:tw-text-white tw-bg-opacity-25 sm:tw-mr-2 xs:tw-mr-2"
                  />
                </div>
                {user_info && (
                  <div className="tw-relative tw-mt-2 tw-self-center tw-ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bell md:tw-text-neutral-700  lg:tw-text-neutral-700 xs:tw-text-white"
                      viewBox="0 0 24 24"
                      width={16}
                      height={16}
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h16v16H0z" fill="none"></path>
                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                    </svg>
                    <span className="tw-h-7 tw-w-7 badge badge-pill bg-red position-absolute ms-2 start-100 translate-middle border-light top-0 p-1 text-sm">
                      6+
                    </span>
                  </div>
                )}
                {user_info === undefined && (
                  <div className="tw-self-center tw-ml-2 ">
                    <Link href={'/login'}>
                      <a className=" tw-mr-3 md:tw-text-neutral-700  lg:tw-text-neutral-700 xs:tw-text-white tw-flex">
                        <IconLogin className="tw-flex tw-mr-1" size={24} />{' '}
                        Login
                      </a>
                    </Link>
                  </div>
                )}
                {user_info && (
                  <div className="sm:tw-hidden xs:tw-hidden md:tw-block lg:tw-block tw-ml-7 tw-flex tw-self-center">
                    <Dropdown className="tw-self-center border-0">
                      <Dropdown.Toggle
                        as="div"
                        variant="light"
                        className="text-dark tw-flex tw-items-center"
                        id="dropdown-basic"
                      >
                        {user_info}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => {
                            router.push('/api/auth/signout');
                            localStorage.clear();
                            router.reload();
                          }}
                        >
                          Logout
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                )}
                <div className="tw-self-center sm:tw-hidden xs:tw-hidden md:tw-block lg:tw-block tw-ml-2">
                  <IconMenu2 size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`md:tw-hidden lg:tw-hidden tw-p-3 ${
            showMenu ? 'sm:tw-block xs:tw-block' : 'sm:tw-hidden xs:tw-hidden'
          } `}
        >
          <Collapse
            in={showMenu}
            transitionDuration={300}
            transitionTimingFunction="linear"
          >
            <Tabs
              orientation={'vertical'}
              variant={'pills'}
              color={'indigo'}
              grow={true}
              className="sm:tw-text-slate-300 xs:tw-text-slate-300"
            >
              {props.navigation.map((menu) => {
                if (menu.protected) {
                  if (user_info === undefined) return;
                }

                return (
                  <Tabs.Tab
                    className="sm:tw-text-slate-300 xs:tw-text-slate-300"
                    label={menu.name}
                    key={menu.name}
                    onClickCapture={() => router.push(menu.href)}
                  ></Tabs.Tab>
                );
              })}
              <Tabs.Tab
                label={
                  <Dropdown>
                    <Dropdown.Toggle
                      as={'div'}
                      className="border-0"
                      variant="light"
                      id="dropdown-basic"
                    >
                      {languages.map((lng) => {
                        if (lng.locale === locale) return lng.name;
                      })}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {languages.map((lng) => {
                        return (
                          <Dropdown.Item
                            onClick={() => dispatch(setLocale(lng.locale))}
                            key={lng.locale}
                          >
                            {lng.name}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                }
                className="sm:tw-text-slate-300 xs:tw-text-slate-300"
              ></Tabs.Tab>
              <Tabs.Tab
                label={
                  user_info ? (
                    <div
                      className="tw-flex tw-self-center"
                      onClick={() => {
                        router.push('/api/auth/signout');
                        localStorage.clear();
                        router.reload();
                      }}
                    >
                      Logout
                    </div>
                  ) : (
                    <div className="tw-flex tw-self-center">
                      <Link href={'/login'}>
                        <a>Login</a>
                      </Link>
                    </div>
                  )
                }
                className="sm:tw-text-slate-300 xs:tw-text-slate-300"
              ></Tabs.Tab>
            </Tabs>
          </Collapse>
        </div>
        <div className="lg:tw-hidden md:tw-hidden sm:tw-block xs:tw-block tw-mb-2 tw-flex tw-p-3">
          <div className="tw-w-full">
            <div className="tw-w-full tw-flex tw-justify-center">
              <div className="tw-w-full">
                <InputGroup>
                  <Dropdown show={searchShow}>
                    <Dropdown.Toggle
                      variant="light"
                      id="dropdown-basic"
                      className="border-end-0 border-3 sm:tw-bg-white tw-border-white  border"
                      onMouseEnter={() => setSearchShow(true)}
                      onMouseLeave={() => setSearchShow(false)}
                    >
                      Services
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      onMouseEnter={() => setSearchShow(true)}
                      onMouseLeave={() => setSearchShow(false)}
                    >
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Input
                    placeholder="Search here"
                    className="border-start-1 form-control tw-text-black border-2"
                  />
                  <Button
                    variant="light"
                    as="div"
                    className=" tw-flex tw-items-center tw-justify-center text-white"
                    size="sm"
                    id="button-addon2"
                  >
                    <IconSearch className="tw-mx-auto" color="#2D3748" />
                  </Button>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-bottom bg-brand tw-flex sm:tw-hidden xs:tw-hidden md:tw-block lg:tw-block mt-1 px-2">
          <div className="tw-flex tw-justify-start tw-items-center">
            <Tabs className="">
              {props.navigation.map((menu) => {
                if (menu.protected) {
                  if (user_info === undefined) return;
                }

                return (
                  <Tabs.Tab
                    label={menu.name}
                    key={menu.name}
                    onClickCapture={() => router.push(menu.href)}
                  ></Tabs.Tab>
                );
              })}
            </Tabs>
          </div>
        </div>
      </div>
      {covidInfo && (
        <div className="tw-w-100 tw-mb-3 tw-flex  tw-h-10 tw-justify-between tw-bg-yellow-400">
          <div className=" tw-w-full tw-flex   tw-justify-center tw-self-center ">
            <div> Here is something that you might like to know.</div>
          </div>
          <div className="tw-self-center">
            <IconX
              className="tw-text-secondary"
              onClick={() => setCovidInfo(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
