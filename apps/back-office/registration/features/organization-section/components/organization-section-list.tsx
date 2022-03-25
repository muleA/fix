import { Card, Table, Input, Pagination, Select } from '@mantine/core';
import { IconInbox, IconSearch, IconChevronRight, IconPlus } from '@tabler/icons';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const OrganizationSectionList = () => {
    const router = useRouter();
    const [perPage, setPerPage] = useState<string>("10");

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

            <Card.Section className='tw-flex tw-p-4 tw-justify-end'>
                <Input className="tw-w-1/3 tw-mr-2" size='xs' placeholder="input search text"
                    rightSection={<IconSearch className='tw-inline-block' size={16} />}
                    rightSectionWidth={40}
                    styles={{ rightSection: { pointerEvents: 'none' } }}
                />
            </Card.Section>

            <Card.Section className='tw-px-4'>

                <Table className='tw-mb-4'>
                    <thead>
                        <tr className='tw-bg-gray-200'>
                            <th>Name</th>
                            <th className="w-1"></th>
                        </tr>
                    </thead>
                    <tbody className='tw-border-b'>

                        {organizationSections.length == 0 &&
                            <tr className='tw-h-[200px] tw-border-b hover:tw-bg-transparent'>
                                <td className='tw-text-center' colSpan={3}>
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
                                <tr key={item.name} className="visibility-hoverable-container">
                                    <td>{item.name}</td>
                                    <td className='hoverable-visibility-content'>
                                        <Link href={`${router.pathname.match(/\/registration\/super-administration*/) ? `/registration/super-administration/organization-section/detail/${item.name}` : `/registration/organization-section/detail/${item.name}`}`}><a className="tw-block tw-bg-gray-50 hover:tw-outline hover:tw-outline-1 hover:tw-outline-[#1d2861] tw-p-1 tw-rounded"><IconChevronRight color={'#1d2861'} /></a></Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Card.Section>

            <Card.Section className='tw-px-4'>
                <div className="tw-my-2 tw-flex tw-justify-end">
                    <Pagination total={10} radius="xs" size="sm"
                        styles={{
                            item: { color: '#1d2861', borderWidth: 0, fontSize: "12px" },
                            active: { color: '#1d2861', fontWeight: 'bold' },
                        }}
                    />

                    <Select size="xs" value={perPage} onChange={setPerPage}
                        data={[
                            { value: '5', label: '5 / page' },
                            { value: '10', label: '10 / page' },
                            { value: '20', label: '20 / page' },
                            { value: '30', label: '30 / page' },
                            { value: '40', label: '40 / page' }
                        ]}
                    />
                </div>
            </Card.Section>
        </Card >

    );

}

export default OrganizationSectionList;