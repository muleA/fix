import React, { useEffect, useReducer, useState } from 'react';
import { Dropdown, InputGroup, FormControl, Alert } from 'react-bootstrap';
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
  IconChevronDown,
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
  Button,
  Transition,
  NativeSelect,
  MenuItem,
} from '@mantine/core';
import { useSession, signIn, signOut } from 'next-auth/react';

interface Tabs {
  name: string;
  href: string;
  active: boolean;
  protected: boolean;
}
interface Props {
  navigation: Tabs[];
}

function Header(props: Props) {
  const [covidInfo, setCovidInfo] = useState(true);
  const [serviceShow, setServiceShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { status } = useSession();
  const locale = useSelector((state: RootState) => state.localeReducer.locale);
  const languages = useSelector(
    (state: RootState) => state.localeReducer.language
  );
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const router = useRouter();
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  const scaleY = {
    in: { opacity: 1, transform: 'scaleY(1)' },
    out: { opacity: 0, transform: 'scaleY(0)' },
    common: { transformOrigin: 'top' },
    transitionProperty: 'transform, opacity',
  };

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
            <div className=" tw-flex tw-w-24 tw-ml-3 tw-lg:mr-28 tw-flex tw-items-center">
              <Menu
                control={
                  <div className="tw-flex tw-w-full tw-space-x-4">
                    <div className="tw-flex tw-self-center tw-font-bold tw-text-xl">
                      eService
                    </div>{' '}
                    <IconChevronDown
                      width={16}
                      height={16}
                      className="tw-flex tw-self-center"
                    />
                  </div>
                }
              >
                <Menu.Label>Afar</Menu.Label>
                <Menu.Item>Amhara</Menu.Item>
                <Menu.Item>Tigray</Menu.Item>
                <Menu.Item>Oromia</Menu.Item>
              </Menu>
            </div>
            <div className="tw-ml-5 tw-flex  tw-w-6/12 tw-items-center tw-justify-center xs:tw-hidden sm:tw-hidden md:tw-block lg:tw-block tw-m-2">
              <div className=" tw-container-fluid ">
                <div className="tw-w-full tw-flex tw-justify-center tw-py-2">
                  <div className="tw-w-full tw-flex">
                    <Menu
                      control={
                        <div className="tw-flex tw-border tw-px-2 tw-h-full tw-w-full tw-justify-between tw-text-white tw-bg-neutral-700 tw-rounded-l-lg">
                          <div className="tw-flex tw-self-center ">
                            Services
                          </div>
                          <div className="tw-flex tw-self-center">
                            <IconChevronDown
                              width={16}
                              height={16}
                              className="tw-flex tw-self-center"
                            />
                          </div>
                        </div>
                      }
                      className="tw-w-1/4"
                    >
                      <Menu.Label>Services</Menu.Label>
                      <Menu.Item>Providers</Menu.Item>
                      <Menu.Item>Popular</Menu.Item>
                      <Menu.Item>Seasonal</Menu.Item>
                    </Menu>
                    <Input
                      className="tw-w-full tw-border tw-border-l-0"
                      variant="unstyled"
                      placeholder="Search here"
                    />
                    <Button
                      className="tw-bg-neutral-700 tw-border-neutral-700 tw-h-full tw-border-2 tw-rounded-r-lg tw-flex tw-self-center text-white"
                      id="button-addon2"
                      variant='outline'
                    >
                      <IconSearch  color={'white'}/>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-justify-end tw-flex tw-items-center tw-space-x-3 ">
              <div className="tw-flex sm:tw-mr-7 xs:tw-mr-7">
                <div className=" sm:tw-hidden xs:tw-hidden md:tw-block lg:tw-block tw-self-center tw-ml-2">
                  <Menu
                    control={
                      <div className="tw-flex tw-w-full tw-space-x-4">
                        <div className="tw-flex tw-self-center">
                          {languages.map((lng) => {
                            if (lng.locale === locale) return lng.name;
                          })}
                        </div>
                        <IconChevronDown
                          width={16}
                          height={16}
                          className="tw-flex tw-self-center"
                        />
                      </div>
                    }
                  >
                    {languages.map((lng) => {
                      return (
                        <MenuItem
                          onClick={() => dispatch(setLocale(lng.locale))}
                          key={lng.locale}
                        >
                          {lng.name}
                        </MenuItem>
                      );
                    })}
                  </Menu>
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
                {session && (
                  <div className="tw-relative tw-mt-2 tw-self-center tw-ml-2">
                     <span className="tw-bg-red-500 tw-rounded-full tw-text-sm tw-text-white tw-absolute tw--right-3 tw--top-2 ">
                   +6
                </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bell md:tw-text-neutral-700  lg:tw-text-neutral-700 xs:tw-text-white"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
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
                    
                  </div>
                )}
                {session === null && (
                  <div className="tw-self-center tw-ml-2 tw-cursor-pointer">
                    <a
                      onClick={() => signIn('keycloak')}
                      className=" tw-mr-3 md:tw-text-neutral-700  lg:tw-text-neutral-700 xs:tw-text-white tw-flex"
                    >
                      <IconLogin className="tw-flex tw-mr-1" size={24} /> Login
                    </a>
                  </div>
                )}
                {session && (
                  <div className="tw-container tw-flex tw-justify-center sm:tw-hidden xs:tw-hidden md:tw-block lg:tw-block tw-ml-7 tw-flex tw-self-center">
                    <Menu
                      control={
                        <div className="tw-flex tw-w-full tw-space-x-1">
                          <div className="tw-flex tw-self-center">
                            {session.user.name}
                          </div>
                          <IconChevronDown width={16} height={16} className="tw-flex tw-self-center" />
                        </div>
                      }
                      className="tw-w-full tw-flex tw-self-center"
                    >
                      <Menu.Item>Profile</Menu.Item>
                      <Menu.Item>
                        <Link href={`/api/auth/signout`}>
                          <a>Logout</a>
                        </Link>
                      </Menu.Item>
                    </Menu>
                  </div>
                )}
                <IconMenu2 width={32} height={32} className='tw-flex tw-self-center xs:tw-hidden sm:tw-hidden md:tw-block lg:tw-block'/>
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
                  if (session === null) return;
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
                  <Menu
                    control={
                      <div className="tw-flex tw-w-full tw-space-x-4">
                        <div className="tw-flex tw-self-center">
                          {languages.map((lng) => {
                            if (lng.locale === locale) return lng.name;
                          })}
                        </div>
                        <IconChevronDown
                          width={16}
                          height={16}
                          className="tw-flex tw-self-center"
                        />
                      </div>
                    }
                  >
                    {languages.map((lng) => {
                      return (
                        <MenuItem
                          onClick={() => dispatch(setLocale(lng.locale))}
                          key={lng.locale}
                        >
                          {lng.name}
                        </MenuItem>
                      );
                    })}
                  </Menu>
                }
                className="sm:tw-text-slate-300 xs:tw-text-slate-300"
              ></Tabs.Tab>
              <Tabs.Tab
                label={
                  session ? (
                    <div className="tw-flex tw-self-center">
                      <Link href={`api/auth/signout`}>
                        <a>Logout</a>
                      </Link>
                    </div>
                  ) : (
                    <div className="tw-flex tw-self-center">
                      <a onClick={() => signIn('keycloak')}>Login</a>
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
            <div className="tw-w-full tw-flex">
                    <Menu
                      control={
                        <div className="tw-flex tw-border tw-px-2 tw-h-full tw-w-full tw-justify-between tw-bg-white tw-text-neutral-700 tw-rounded-l-lg">
                          <div className="tw-flex tw-self-center ">
                            Services
                          </div>
                          <div className="tw-flex tw-self-center">
                            <IconChevronDown
                              width={16}
                              height={16}
                              className="tw-flex tw-self-center"
                            />
                          </div>
                        </div>
                      }
                      className="tw-w-1/6"
                    >
                      <Menu.Label>Services</Menu.Label>
                      <Menu.Item>Providers</Menu.Item>
                      <Menu.Item>Popular</Menu.Item>
                      <Menu.Item>Seasonal</Menu.Item>
                    </Menu>
                    <Input
                      className="tw-w-full tw-border tw-border-l-0 tw-border-r-0 tw-text-white tw-bg-white"
                      variant="unstyled"
                      placeholder="Search here"
                    />
                    <Button
                      className="tw-bg-white tw-h-full tw-text-neutral-700 tw-border-l-0 tw-border-2 tw-rounded-r-lg tw-flex tw-self-center text-white"
                      id="button-addon2"
                    >
                      <IconSearch color={'black'}/>
                    </Button>
                  </div>
            </div>
          </div>
        </div>
        <div className=" border-bottom tw-bg-[#C4DFF5] tw-flex sm:tw-hidden xs:tw-hidden md:tw-block lg:tw-block mt-1 px-2">
          <div className="tw-flex tw-justify-start tw-items-center">
            <Tabs color={'dark'}>
              {props.navigation.map((menu) => {
                if (menu.protected) {
                  if (status !== 'authenticated') return;
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
