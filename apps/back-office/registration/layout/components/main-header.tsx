import IconAppStore from "../../shared/components/icons/IconAppStore";
import IconArrowDown from "../../shared/components/icons/IconArrowDown";
import IconQuestionMark from "../../shared/components/icons/IconQuestionMark";
import { useKeycloak } from '@react-keycloak/ssr';
import type { KeycloakInstance } from 'keycloak-js';
import Link from "next/link";
import { useState } from "react";

const MainNavbar = () => {

    const { keycloak, initialized } = useKeycloak<KeycloakInstance>();
    
    const [languageDropDown, setLanguageDropDown] = useState<boolean>(false);
    const [profileDropDown, setProfileDropDown] = useState<boolean>(false);
    const [moreDropDown, setMoreDropDown] = useState<boolean>(false);

    const onLanguageMouseOver = () => {
        setLanguageDropDown(true);
    }
    const onLanguageMouseLeave = () => {
        setLanguageDropDown(false);
    }

    const onProfileMouseOver = () => {
        setProfileDropDown(true);
    }
    const onProfileMouseLeave = () => {
        setProfileDropDown(false);
    }

    const onMoreMouseOver = () => {
        setMoreDropDown(true);
    }
    const onMoreMouseLeave = () => {
        setMoreDropDown(false);
    }

    return (
        <nav className="tw-h-[40px] tw-flex tw-justify-between tw-py-0 tw-px-2 bg-primary">
            <div className="tw-flex tw-items-center tw-text-gray-100 hover:tw-text-blue-900 hover:tw-bg-white hover:tw-cursor-pointer tw-px-2 tw-border-r tw-border-r-gray-100">
                <div className=" tw-mr-1">
                    <IconAppStore />
                </div>
                <div className="tw-hidden sm:tw-block tw-font-normal tw-text-sm">
                    EGP | Registration
                </div>
            </div>
            <ul className="tw-flex tw-items-center tw-grow tw-text-gray-100 tw-ml-2">
                <li className="tw-h-full tw-flex tw-items-center">
                    <Link href="/registration/home"><a className="tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 hover:tw-bg-white hover:tw-no-underline" >Home </a></Link>
                </li>
                <li className="tw-h-full tw-hidden sm:tw-flex sm:tw-items-center">
                    <Link href="/registration/organization"><a className="tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 hover:tw-bg-white hover:tw-no-underline">Organization </a></Link>
                </li>
                <li className="tw-h-full tw-flex tw-items-center md:tw-hidden hover:tw-text-blue-900 hover:tw-bg-white hover:tw-cursor-pointer tw-relative" onMouseOver={onMoreMouseOver} onMouseLeave={onMoreMouseLeave}>
                    <span className="tw-h-full tw-flex tw-px-2 tw-py-2 tw-z-50">More <IconArrowDown /> </span>
                    {moreDropDown &&
                        <div className="tw-flex tw-flex-col tw-text-gray-500 tw-bg-white tw-absolute tw-top-[40px] tw-right-0 tw-shadow-md tw-min-w-[180px]">
                            <div className="tw-pl-3 tw-py-2 sm:tw-hidden hover:tw-bg-gray-200" >
                                <Link href="/registration/organization"><a className="tw-text-gray-500 hover:tw-no-underline hover:tw-text-gray-500">Organization</a></Link>
                            </div>
                            <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">
                                <Link href="/registration/home"><a className="tw-text-gray-500 hover:tw-no-underline hover:tw-text-gray-500">Administration</a></Link>
                            </div>
                            <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200" >
                                <Link href="/registration/home"><a className="tw-text-gray-500 hover:tw-no-underline hover:tw-text-gray-500">Reports</a></Link>
                            </div>
                        </div>
                    }
                </li>
                <li className="tw-h-full tw-hidden md:tw-flex md:tw-items-center">
                    <Link href="/registration/home"><a className="tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 hover:tw-bg-white hover:tw-no-underline">Administration </a></Link>
                </li>
                <li className="tw-h-full tw-hidden md:tw-flex md:tw-items-center">
                    <Link href="/registration/home"><a className="tw-h-full tw-px-2 tw-py-2 hover:tw-text-blue-900 hover:tw-bg-white hover:tw-no-underline">Reports </a></Link>
                </li>
            </ul>
            <ul className="tw-flex tw-items-center tw-text-gray-100">
                <li className="tw-h-full tw-flex tw-items-center tw-px-2 hover:tw-cursor-pointer">
                    <Link href="/registration/home"><a><IconQuestionMark /></a></Link>
                </li>
                <li className="tw-h-full tw-flex tw-items-center tw-px-2 hover:tw-text-blue-900 hover:tw-bg-white hover:tw-cursor-pointer tw-relative" onMouseOver={onLanguageMouseOver} onMouseLeave={onLanguageMouseLeave}>English
                    {languageDropDown &&
                        <div className="tw-flex tw-flex-col tw-text-gray-500 tw-bg-white tw-absolute tw-top-[40px] tw-right-0 tw-shadow-md tw-min-w-[100px] tw-z-50">
                            <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200" >
                                አማረኛ
                            </div>
                            <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">
                                Oromiya
                            </div>
                            <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200" >
                                ትግርኛ
                            </div>
                        </div>
                    }

                </li>
                <li className="tw-h-full tw-flex tw-items-center tw-px-2 hover:tw-text-blue-900 hover:tw-bg-white hover:tw-cursor-pointer tw-relative" onMouseOver={onProfileMouseOver} onMouseLeave={onProfileMouseLeave}>
                    <div className="tw-flex tw-flex-row tw-items-center">
                        <div>
                            <span className="avatar avatar-sm rounded-circle">JD</span>
                        </div>
                        <div className="tw-hidden lg:tw-block tw-pl-2">
                            <h4 className="tw-text-base">John Dessie</h4>
                            <p className="tw-text-xs">PIS \ Organization administrator</p>
                        </div>
                    </div>

                    {profileDropDown &&
                        <div className="tw-flex tw-flex-col tw-text-gray-500 tw-bg-white  tw-absolute tw-min-w-[200px] lg:tw-min-w-0 lg:tw-w-full tw-top-[40px] tw-right-0 lg:tw-left-0 tw-shadow-md tw-z-50">
                            <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200" >
                                Profile
                            </div>
                            <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200">
                                Change password
                            </div>
                            <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200 tw-border-b tw-border-b-gray-200" >
                                Operating unit
                            </div>
                            <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200 tw-border-b tw-border-b-gray-200" >
                                Core.faqs
                            </div>
                            <div className="tw-pl-3 tw-py-2 hover:tw-bg-gray-200 tw-border-b tw-border-b-gray-200" onClick={()=>keycloak.logout()}>
                                Logout
                            </div>
                            <div className="tw-pl-3 tw-py-2 tw-text-xs hover:tw-bg-gray-200" >
                                Version: prod-20220221.3
                            </div>
                        </div>
                    }
                </li>
            </ul>
        </nav>
    );
}

export default MainNavbar;