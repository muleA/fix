import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Card, Input, Table, Pagination, Select} from '@mantine/core';
import { IconPlus, IconSearch, IconInbox } from '@tabler/icons';
import { perPageOptions } from '../../../shared/utility/data';

const OrganizationSectionSideTable = () => {
    const router = useRouter();
    const { id } = router.query;

    const [perPage, setPerPage] = useState<string>("10");
    const [filterOpened, setFilterOpened] = useState(false);

    const organizationSections = [
        { name: "zz zz" },
        { name: "section 2" },
        { name: "section 3" },
        { name: "section 4" },
        { name: "section 5" },
        { name: "section 6" },
    ];

    return (
        <Card shadow="sm" padding="lg">
            <Card.Section className='tw-flex tw-items-center tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2'>
                <h2 className='tw-text-lg'>
                    Organization sections
                </h2>
                <Link href={`${router.pathname.match(/\/registration\/super-administration*/) ? `/registration/super-administration/organization-section/new` : `/registration/organization-section/new`}`}>
                    <a className='btn btn-primary tw-bg-[#1d2861]'>
                        <IconPlus />
                        New
                    </a>
                </Link>
            </Card.Section>

            <Card.Section className='tw-flex tw-px-4 tw-pt-2 '>
                <Input className="tw-w-full tw-mr-2" size='xs' placeholder="input search text"
                    rightSection={<IconSearch className='tw-inline-block' size={16} />}
                    rightSectionWidth={40}
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                />
                
            </Card.Section>

            <Card.Section className='tw-p-4 tw-overflow-x-auto'>
                <Table className='tw-mb-4'>
                    <thead>
                        <tr className='tw-bg-gray-200'>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody className='tw-border-b'>

                        {organizationSections.length == 0 &&
                            <tr className='tw-h-[200px] tw-border-b hover:tw-bg-transparent'>
                                <td className='tw-text-center' colSpan={5}>
                                    <span>
                                        <IconInbox className='tw-inline-block' color='rgb(156 163 175)' size={32} />
                                        <p>
                                            No data
                                        </p>
                                    </span>
                                </td>
                            </tr>
                        }

                        {organizationSections.length > 0 &&
                            organizationSections.map((item) => (
                                <tr key={item.name} className={`hover:tw-cursor-pointer ${id == item.name && "tw-bg-[#1d2861]"}`}>
                                    <Link href={`${router.pathname.match(/\/registration\/super-administration*/) ? `/registration/super-administration/organization-section/detail/${item.name}` : `/registration/organization-section/detail/${item.name}`}`}>
                                        <a className='tw-block hover:tw-no-underline'>
                                            <td className={`tw-block ${id == item.name && "tw-text-white hover:tw-bg-[#1d2861]"} `}>
                                                {item.name}
                                            </td>
                                        </a>
                                    </Link>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Card.Section>

            <Card.Section className='tw-px-4'>
                <div className="tw-my-2 tw-flex tw-flex-wrap tw-justify-start">
                    <Pagination total={10} radius="xs" size="sm"
                        styles={{
                            item: { color: '#1d2861', borderWidth: 0, fontSize: "12px" },
                            active: { color: '#1d2861', fontWeight: 'bold' },
                        }}
                    />

                    <Select size="xs" value={perPage} onChange={setPerPage}
                        data={perPageOptions}
                    />
                </div>
            </Card.Section>
        </Card >

    );

}

export default OrganizationSectionSideTable;