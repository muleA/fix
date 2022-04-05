import { Card } from '@mantine/core';
import { useRouter } from 'next/router';
import Link from 'next/link';

const TemplateSideMenu = () => {

    const router = useRouter();
    return (
        <Card className='tw-w-3/12 tw-min-h-[400px]' shadow="sm" padding="lg">
            <Card.Section className='tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-4'>
                <h2 className='tw-text-lg'>
                    Template
                </h2>
            </Card.Section>

            <Card.Section>
                <ul className='tw-border-r'>
                    <Link href={"/registration/template/organization-profile"}>
                        <a className='hover:tw-text-inherit hover:tw-no-underline'>
                            <li className={`tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861] ${router.pathname == "/registration/template/organization-profile" ? "tw-bg-gray-200 tw-border-r-2 tw-border-r-[#1d2861]" : ""}`}>
                                <span className='tw-text-base'>
                                    Organization template
                                </span>
                            </li>
                        </a>
                    </Link>

                    <Link href={"/registration/template/unit-profile"}>
                        <a className='hover:tw-text-inherit hover:tw-no-underline'>
                            <li className={`tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861] ${router.pathname == "/registration/template/unit-profile" ? "tw-bg-gray-200 tw-border-r-2 tw-border-r-[#1d2861]" : ""}`}>
                                <span className='tw-text-base'>
                                    Unit template
                                </span>
                            </li>
                        </a>
                    </Link>

                    <Link href={"/registration/template/user-profile"}>
                        <a className='hover:tw-text-inherit hover:tw-no-underline'>
                            <li className={`tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861] ${router.pathname == "/registration/template/user-profile" ? "tw-bg-gray-200 tw-border-r-2 tw-border-r-[#1d2861]" : ""}`}>
                                <span className='tw-text-base'>
                                    Personnel template
                                </span>
                            </li>
                        </a>
                    </Link>
                </ul>
            </Card.Section>
        </Card >

    );

}

export default TemplateSideMenu;