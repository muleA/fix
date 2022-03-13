import { IconQuestionMark, IconArrowBarDown, IconApps } from '@tabler/icons';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
const MainNavbar = () => {
  const [languageDropDown, setLanguageDropDown] = useState<boolean>(false);
  const [profileDropDown, setProfileDropDown] = useState<boolean>(false);
  const [settingDropDown, setSettingDropDown] = useState<boolean>(false);
  const [moreDropDown, setMoreDropDown] = useState<boolean>(false);
  const router = useRouter();
  const regex = /\/service-store\/service\/detail\/*/;
  const onLanguageMouseOver = () => {
    setLanguageDropDown(true);
  };
  const onLanguageMouseLeave = () => {
    setLanguageDropDown(false);
  };

  const onProfileMouseOver = () => {
    setProfileDropDown(true);
  };
  const onProfileMouseLeave = () => {
    setProfileDropDown(false);
  };
  const onSettingMouseOver = () => {
    setSettingDropDown(true);
  };
  const onSettingMouseLeave = () => {
    setSettingDropDown(false);
  };

  const onMoreMouseOver = () => {
    setMoreDropDown(true);
  };
  const onMoreMouseLeave = () => {
    setMoreDropDown(false);
  };

  return (
    <nav className="tw-h-[40px] tw-flex tw-justify-between tw-py-0 tw-px-2 bg-primary">
      <div className="tw-flex tw-items-center tw-text-gray-100 hover:tw-text-blue-900 hover:tw-bg-white hover:tw-cursor-pointer tw-px-2 tw-border-r tw-border-r-gray-100">
        <div className=" tw-mr-1">
          <IconApps />
        </div>
        <div className="tw-hidden sm:tw-block tw-font-normal tw-text-sm">
          Eservice | Service-Store
        </div>
      </div>
      <ul className="tw-flex tw-items-center tw-grow tw-text-gray-100 tw-ml-2">
        <li className="tw-h-full tw-flex tw-items-center">
          <Link href="/">
            <a
              className={`tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 
            hover:tw-bg-white hover:tw-no-underline 
            ${router.pathname === '/' ? 'active' : ''} 
            ${router.pathname === '/' ? 'tw-text-blue-900' : ''}  `}
            >
              Home{' '}
            </a>
          </Link>
        </li>
        <li className="tw-h-full tw-hidden sm:tw-flex sm:tw-items-center">
          <Link href="/service-store/service/list">
            <a
              className={`tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 hover:tw-bg-white 
            hover:tw-no-underline
             ${
               router.pathname === '/service-store/service/detail/list' ||
               router.pathname === '/service-store/service/new' ||
               router.pathname.match(regex) ||
               router.pathname == '/service-store/service/list' ||
               router.pathname === '/service-store/service/list'
                 ? 'active'
                 : ''
             } 
        
        
         
           ${
             router.pathname === '/service-store/service/new' ||
             router.pathname === '/service-store/service/list' ||
             router.pathname.match(regex)
               ? 'tw-text-blue-900'
               : ''
           }
            
            
            `}
            >
              Service{' '}
            </a>
          </Link>
        </li>
        <li
          className="tw-h-full tw-flex tw-items-center md:tw-hidden hover:tw-text-blue-900 hover:tw-bg-white
           hover:tw-cursor-pointer tw-relative"
          onMouseOver={onMoreMouseOver}
          onMouseLeave={onMoreMouseLeave}
        >
          <span className="tw-h-full tw-flex tw-px-2 tw-py-2">
            More <IconArrowBarDown />{' '}
          </span>
          {moreDropDown && (
            <div
              className="tw-flex tw-flex-col tw-text-gray-500 tw-bg-white tw-absolute 
            tw-top-[40px] tw-right-0 tw-shadow-md tw-min-w-[180px]"
            >
              <div className="tw-pl-3 tw-py-2 sm:tw-hidden hover:tw-bg-gray-200">
                <Link href="/registration/home">
                  <a className="tw-text-gray-500 hover:tw-no-underline hover:tw-text-gray-500">
                    Service
                  </a>
                </Link>
              </div>
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">
                <Link href="/service-store/service-owner/list">
                  <a className="tw-text-gray-500 hover:tw-no-underline hover:tw-text-gray-500">
                    Service Owner
                  </a>
                </Link>
              </div>
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">
                <Link href="/registration/home">
                  <a className="tw-text-gray-500 hover:tw-no-underline hover:tw-text-gray-500">
                    Service Provider
                  </a>
                </Link>
              </div>

              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">
                {/*setting on small device  */}

                <div
                  className="tw-h-full   tw-flex  tw-items-center tw-px-2 hover:tw-text-blue-900 hover:tw-bg-white 
                :tw-cursor-pointer tw-relative"
                  onMouseOver={onSettingMouseOver}
                  onMouseLeave={onSettingMouseLeave}
                >
                  Setting
                  {settingDropDown && (
                    <div className="tw-flex tw-flex-col tw-text-gray-500 tw-bg-white tw-absolute tw-top-[40px] tw-right-0 tw-shadow-md tw-min-w-[150px] tw-z-50">
                      <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">
                        Terms and Policies
                      </div>
                      <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">
                        Tags
                      </div>
                      <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200 tw-border-b tw-border-b-gray-200">
                        Category
                      </div>
                      <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200 tw-border-b tw-border-b-gray-200">
                        Suppoted Language
                      </div>
                    </div>
                  )}
                </div>
                {/*  */}
              </div>
            </div>
          )}
        </li>
        <li className="tw-h-full tw-hidden md:tw-flex md:tw-items-center">
          <Link href="/service-store/service-owner/list">
            <a
              className={`tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 
                    hover:tw-bg-white hover:tw-no-underline 
                    ${
                      router.pathname === '/service-store/service-owner/list' ||
                      router.pathname === '/service-store/service-owner/new'
                        ? 'active'
                        : ''
                    }
                    ${
                      router.pathname === '/service-store/service-owner/list' ||
                      router.pathname === '/service-store/service-owner/new'
                        ? 'tw-text-blue-900'
                        : ''
                    }
                    `}
            >
              Service Owner{' '}
            </a>
          </Link>
        </li>
        <li className="tw-h-full tw-hidden md:tw-flex md:tw-items-center">
          <Link href="/service-store/service-provider/list">
            <a
              className={`tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 
              hover:tw-bg-white hover:tw-no-underline 
              ${
                router.pathname === '/service-store/service-provider/list' ||
                router.pathname === '/service-store/service-provider/new'
                  ? 'active'
                  : ''
              }
              ${
                router.pathname === '/service-store/service-provider/list' ||
                router.pathname === '/service-store/service-provider/new'
                  ? 'tw-text-blue-900'
                  : ''
              }
              `}
            >
              Service Provider{' '}
            </a>
          </Link>
        </li>
        <li className="tw-h-full tw-hidden md:tw-flex md:tw-items-center">
          <Link href="/service-store/service/adminstration">
            <a className="tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 hover:tw-bg-white hover:tw-no-underline">
              Adminstration{' '}
            </a>
          </Link>
        </li>
        <li
          className={`tw-h-full tw-hidden  md:tw-flex md:tw-items-center tw-px-2
           hover:tw-text-blue-900 hover:tw-bg-white 
                :tw-cursor-pointer tw-relative 
                ${
                  router.pathname === '/service-store/settings/terms' ||
                  router.pathname === '/service-store/settings/tags' ||
                  router.pathname === '/service-store/settings/languages' ||
                  router.pathname === '/service-store/settings/category'
                    ? 'active'
                    : ''
                }
                    ${
                      router.pathname === '/service-store/settings/terms' ||
                      router.pathname === '/service-store/settings/tags' ||
                      router.pathname === '/service-store/settings/languages' ||
                      router.pathname === '/service-store/settings/category'
                        ? 'tw-text-blue-900'
                        : ''
                    }
              `}
          onMouseOver={onSettingMouseOver}
          onMouseLeave={onSettingMouseLeave}
        >
          Setting
          {settingDropDown && (
            <div className="tw-flex tw-flex-col tw-text-gray-500 tw-bg-white tw-absolute tw-top-[40px] tw-right-0 tw-shadow-md tw-min-w-[150px] tw-z-50">
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200 hover:tw-no-underline">
                <Link href="/service-store/settings/terms">
                  <a
                    className={`tw-w-full tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 
            hover:tw-no-underline `}
                  >
                    Terms and Policy
                  </a>
                </Link>
              </div>
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200 hover:tw-no-underline">
                <Link href="/service-store/settings/tags">
                  <a
                    className={`tw-w-full tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 
            hover:tw-no-underline `}
                  >
                    Tags
                  </a>
                </Link>
              </div>
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200 tw-border-b tw-border-b-gray-200 hover:tw-no-underline">
                <Link href="/service-store/settings/category">
                  <a
                    className={`tw-w-full tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 
            hover:tw-no-underline `}
                  >
                    Category
                  </a>
                </Link>
              </div>
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200 tw-border-b tw-border-b-gray-200 hover:tw-no-underline">
                <Link href="/service-store/settings/languages">
                  <a
                    className={`tw-w-full tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 
            hover:tw-no-underline `}
                  >
                    Langauges
                  </a>
                </Link>
              </div>
            </div>
          )}
        </li>
      </ul>
      <ul className="tw-flex tw-items-center tw-text-gray-100">
        <li className="tw-h-full tw-flex tw-items-center tw-px-2 hover:tw-cursor-pointer">
          <Link href="/registration/home">
            <a>
              <IconQuestionMark />
            </a>
          </Link>
        </li>
        <li
          className="tw-h-full tw-flex tw-items-center tw-px-2 hover:tw-text-blue-900 hover:tw-bg-white 
                :tw-cursor-pointer tw-relative"
          onMouseOver={onLanguageMouseOver}
          onMouseLeave={onLanguageMouseLeave}
        >
          English
          {languageDropDown && (
            <div className="tw-flex tw-flex-col tw-text-gray-500 tw-bg-white tw-absolute tw-top-[40px] tw-right-0 tw-shadow-md tw-min-w-[100px] tw-z-50">
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">አማረኛ</div>
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">
                Oromiya
              </div>
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">ትግርኛ</div>
            </div>
          )}
        </li>
        <li
          className="tw-h-full tw-flex tw-items-center tw-px-2 hover:tw-text-blue-900 hover:tw-bg-white hover:tw-cursor-pointer tw-relative"
          onMouseOver={onProfileMouseOver}
          onMouseLeave={onProfileMouseLeave}
        >
          <div className="tw-flex tw-flex-row tw-items-center">
            <div>
              <span className="avatar avatar-sm rounded-circle">JD</span>
            </div>
            <div className="tw-hidden lg:tw-block tw-pl-2">
              <h4 className="tw-text-base">UserName</h4>
              <p className="tw-text-xs">Role</p>
            </div>
          </div>

          {profileDropDown && (
            <div className="tw-flex tw-flex-col tw-text-gray-500 tw-bg-white  tw-absolute tw-min-w-[200px] lg:tw-min-w-0 lg:tw-w-full tw-top-[40px] tw-right-0 lg:tw-left-0 tw-shadow-md tw-z-50">
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">
                Profile
              </div>
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">
                Change password
              </div>
              <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200 tw-border-b tw-border-b-gray-200">
                Logout
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MainNavbar;
