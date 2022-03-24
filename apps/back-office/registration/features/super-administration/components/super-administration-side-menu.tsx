import Link from 'next/link';
import { Card } from '@mantine/core';
import { IconNews,IconSearch,IconSocial,IconUser,IconFileZip,IconTool,IconMail,IconBrandAsana } from '@tabler/icons';

const SuperAdministrationSideMenu = () => {

    return (
        <Card className='tw-w-3/12' shadow="sm" padding="lg">
            <Card.Section className='tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2'>
                <h2 className='tw-text-lg'>
                    Menu
                </h2>
            </Card.Section>

            <Card.Section className='tw-p-4'>
                <ul className='tw-border-r'>
                    <Link href={"/registration/super-administration/template"}>
                        <a className='hover:tw-no-underline hover:tw-text-black'>
                            <li className='tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861]'>
                                <span>
                                    <IconNews className='tw-flex' size={32} color="#68abf7" />
                                </span>
                                <span className='tw-text-base tw-ml-4'>
                                    Template
                                </span>
                            </li>
                        </a>
                    </Link>

                    <Link href={"/registration/super-administration/lookups"}>
                        <a className='hover:tw-no-underline hover:tw-text-black'>
                            <li className='tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861]'>
                                <span>
                                    <IconSearch className='tw-flex' size={32} color="#68abf7" />
                                </span>
                                <span className='tw-text-base tw-ml-4'>
                                    Lookups
                                </span>
                            </li>
                        </a>
                    </Link>

                    <Link href={"/registration/super-administration/mandate"}>
                        <a className='hover:tw-no-underline hover:tw-text-black'>
                            <li className='tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861]'>
                                <span>
                                    <IconSocial className='tw-flex' size={32} color="#68abf7" />
                                </span>
                                <span className='tw-text-base tw-ml-4'>
                                    Mandate
                                </span>
                            </li>
                        </a>
                    </Link>

                    <Link href={"/registration/super-administration/inviteSa"}>
                        <a className='hover:tw-no-underline hover:tw-text-black'>
                            <li className='tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861]'>
                                <span>
                                    <IconUser className='tw-flex' size={32} color="#68abf7" />
                                </span>
                                <span className='tw-text-base tw-ml-4'>
                                    Super-Administrators
                                </span>
                            </li>
                        </a>
                    </Link>

                    <Link href={"/registration/super-administration/archive"}>
                        <a className='hover:tw-no-underline hover:tw-text-black'>
                            <li className='tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861]'>
                                <span>
                                    <IconFileZip className='tw-flex' size={32} color="#68abf7" />
                                </span>
                                <span className='tw-text-base tw-ml-4'>
                                    Archives
                                </span>
                            </li>
                        </a>
                    </Link>

                    <Link href={"/registration/super-administration/manage"}>
                        <a className='hover:tw-no-underline hover:tw-text-black'>
                            <li className='tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861]'>
                                <span>
                                    <IconTool className='tw-flex' size={32} color="#68abf7" />
                                </span>
                                <span className='tw-text-base tw-ml-4'>
                                    Manage
                                </span>
                            </li>
                        </a>
                    </Link>

                    <Link href={"/registration/super-administration/email-resend"}>
                        <a className='hover:tw-no-underline hover:tw-text-black'>
                            <li className='tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861]'>
                                <span>
                                    <IconMail className='tw-flex' size={32} color="#68abf7" />
                                </span>
                                <span className='tw-text-base tw-ml-4'>
                                    Emails
                                </span>
                            </li>
                        </a>
                    </Link>

                    <Link href={"/registration/super-administration/organization-section"}>
                        <a className='hover:tw-no-underline hover:tw-text-black'>
                            <li className='tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861]'>
                                <span>
                                    <IconBrandAsana className='tw-flex' size={32} color="#68abf7" />
                                </span>
                                <span className='tw-text-base tw-ml-4'>
                                    Section
                                </span>
                            </li>
                        </a>
                    </Link>

                </ul>
            </Card.Section>
        </Card >

    );

}

export default SuperAdministrationSideMenu;