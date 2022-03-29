import React, { useEffect, useState } from 'react';
import {
  IconHelp,
  IconUserCircle,
  IconMenu2,
  IconSearch,
  IconX,
  IconLogin,
  IconChevronDown,
} from '@tabler/icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { RootState } from '../store/app.store';
import { useDispatch, useSelector } from 'react-redux';
import { setLocale } from '../shared/store/slices/locale/locale-slice';
import { useRouter } from 'next/router';
import {
  Burger,
  Collapse,
  Input,
  Menu,
  Tabs,
  Text,
  Button,
  MenuItem,
} from '@mantine/core';
import { useSession, signIn } from 'next-auth/react';

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
  const [showMenu, setShowMenu] = useState(false);
  const [region, setRegion] = useState('Federal');
  const { status } = useSession();
  const locale = useSelector((state: RootState) => state.localeReducer.locale);
  const languages = useSelector(
    (state: RootState) => state.localeReducer.language
  );
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const router = useRouter();
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);

  return (
    <>
      <div className="tw-shadow-lg  tw-w-full tw-fixed tw-top-0 tw-sticky tw-z-50 tw-items-center lg:tw-bg-white lg:tw-text-[#2D3748]  md:tw-bg-white md:tw-text-[#2D3748] sm:tw-bg-[#2D3748] sm:tw-text-white sm:tw-h-2/5 xs:tw-bg-[#2D3748] xs:tw-text-white xs:tw-h-2/5">
        <div className="tw-flex tw-w-full  tw-items-center tw-h-10 tw-py-2 tw-h-12 sm:tw-text-white md:tw-text-[#2D3748]">
          <div className="tw-ml-1 sm:tw-display xs:tw-display md:tw-hidden lg:tw-hidden">
            <Burger
              opened={showMenu}
              onClick={() => setShowMenu((showMenu) => !showMenu)}
              title={`${showMenu ? 'Close navigation' : 'Open navigation'}`}
              color="#f8fafc"
            />
          </div>
          <div className="tw-flex tw-w-full sm:tw-justify-between xs:tw-justify-between tw-items-center">
            <div className=" tw-flex tw-w-24 tw-ml-3 tw-lg:mr-28 tw-flex tw-items-center">
              <Menu
                control={
                  <div className="tw-mt-3">
                    <div className="tw-flex tw-w-full tw-space-x-2 tw-h-5">
                      <div className=" tw-self-end tw-text-xl">
                        <Text
                          className="tw-font-semibold tw-antialiased tw-inline-block tw-align-baseline tw-h-3"
                          size={'lg'}
                        >
                          eService
                        </Text>
                      </div>
                      <IconChevronDown
                        width={16}
                        height={16}
                        className="tw-flex tw-self-center "
                      />
                    </div>
                    <Text className="tw-inline-block tw-align-top" size={'xs'}>
                      {region}
                    </Text>
                  </div>
                }
              >
                <Menu.Item onClick={() => setRegion('Afar')}>Afar</Menu.Item>
                <Menu.Item onClick={() => setRegion('Amhara')}>
                  Amhara
                </Menu.Item>
                <Menu.Item onClick={() => setRegion('Tigray')}>
                  Tigray
                </Menu.Item>
                <Menu.Item onClick={() => setRegion('Oromia')}>
                  Oromia
                </Menu.Item>
              </Menu>
            </div>
            <div className="tw-ml-5 tw-flex  tw-w-6/12 tw-items-center tw-justify-center xs:tw-hidden md:tw-block tw-m-2">
              <div className=" tw-container-fluid ">
                <div className="tw-w-full tw-flex ">
                  <div className="tw-w-full tw-flex tw-justify-center tw-py-2">
                    <Menu
                      size={'xs'}
                      control={
                        <div className="tw-flex tw-border tw-border-r-0  tw-px-2 tw-h-full tw-w-full tw-justify-between tw-rounded-l">
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
                      className="tw-w-1/4 tw-h-full"
                    >
                      <Menu.Label>Services</Menu.Label>
                      <Menu.Item>Providers</Menu.Item>
                      <Menu.Item>Popular</Menu.Item>
                      <Menu.Item>Seasonal</Menu.Item>
                    </Menu>
                    <Input
                      radius="xs"
                      size={'xs'}
                      className="tw-w-full tw-border-l-0 focus:tw-border focus:tw-border-[#2D3748]"
                      variant={'default'}
                      placeholder="Search here"
                    />
                    <Button
                      className="tw-bg-[#2D3748] tw-border-l-0 tw-border-[#2D3748] tw-h-full tw-border tw-rounded-r-md tw-flex tw-self-center text-white"
                      variant={'gradient'}
                      size={'xs'}
                    >
                      <IconSearch color={'white'} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-justify-end tw-flex tw-items-center tw-space-x-3 ">
              <div className="tw-flex sm:tw-mr-7 xs:tw-mr-7">
                <div className=" xs:tw-hidden md:tw-block tw-self-center tw-ml-2">
                  <Menu
                    control={
                      <div className="tw-flex tw-w-full tw-space-x-2">
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
                    strokeWidth={'1'}
                    className=" md:tw-text-[#2D3748]  lg:tw-text-[#2D3748] xs:tw-text-white tw-bg-opacity-25 sm:tw-mr-2 xs:tw-mr-2 lg:tw-hidden md:tw-hidden sm:tw-block xs:tw-block"
                  />
                </div>
                <div className="tw-self-center tw-ml-2">
                  <IconHelp
                    fontVariant={'light'}
                    strokeWidth={'1'}
                    className=" md:tw-text-[#2D3748]  lg:tw-text-[#2D3748] xs:tw-text-white sm:tw-text-white tw-bg-opacity-25 sm:tw-mr-2 xs:tw-mr-2"
                  />
                </div>
                {session && (
                  <div className="tw-relative tw-self-center tw-ml-2">
                    <span className="tw-h-5 tw-w-5 tw-bg-red-500 tw-rounded-full tw-text-sm tw-text-white tw-absolute tw--right-3 tw--top-3 ">
                      +6
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bell md:tw-text-[#2D3748]  lg:tw-text-[#2D3748] xs:tw-text-white"
                      viewBox="0 0 24 24"
                      width={24}
                      height={24}
                      strokeWidth="1"
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
                      className=" tw-mr-3 md:tw-text-[#2D3748]  lg:tw-text-[#2D3748] xs:tw-text-white tw-flex"
                    >
                      <IconLogin
                        strokeWidth={'1'}
                        className="tw-flex tw-mr-1"
                        size={24}
                      />{' '}
                      Login
                    </a>
                  </div>
                )}
                {session && (
                  <div className="tw-container tw-flex tw-justify-center xs:tw-hidden md:tw-block tw-ml-7 tw-flex tw-self-center">
                    <Menu
                      control={
                        <div className="tw-flex tw-w-full tw-space-x-1">
                          <div className="tw-flex tw-self-center">
                            {session.user.name}
                          </div>
                          <IconChevronDown
                            width={16}
                            height={16}
                            className="tw-flex tw-self-center"
                          />
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
                <div className="tw-self-center  tw-text-gray-700 tw-ml-2 xs:tw-hidden sm:tw-hidden md:tw-block lg:tw-block">
                  <IconMenu2
                    width={24}
                    height={24}
                    strokeWidth="1"
                    color="black"
                  />
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
                  size={'xs'}
                  control={
                    <div className="tw-flex tw-border tw-px-2 tw-h-full tw-justify-between tw-bg-white tw-text-[#2D3748]">
                      <div className="tw-flex tw-self-center ">Services</div>
                      <div className="tw-flex tw-self-center">
                        <IconChevronDown
                          width={16}
                          height={16}
                          className="tw-flex tw-self-center"
                        />
                      </div>
                    </div>
                  }
                >
                  <Menu.Label>Services</Menu.Label>
                  <Menu.Item>Providers</Menu.Item>
                  <Menu.Item>Popular</Menu.Item>
                  <Menu.Item>Seasonal</Menu.Item>
                </Menu>
                <Input
                  size={'xs'}
                  className="tw-w-full tw-bg-white"
                  placeholder="Search here"
                />
                <Button
                  size={'xs'}
                  variant={'gradient'}
                  className="tw-bg-white tw-h-full tw-text-[#2D3748] tw-flex tw-self-center"
                >
                  <IconSearch color={'black'} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom tw-bg-[#C4DFF5] tw-flex sm:tw-hidden xs:tw-hidden md:tw-block lg:tw-block mt-1 px-2">
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
      {covidInfo && (
        <div className="tw-w-100 tw-mb-3 tw-h-10 tw-flex tw-justify-between tw-bg-yellow-400">
          <div className="tw-w-full tw-flex   tw-justify-center tw-self-center ">
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
