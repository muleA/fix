import { useState } from 'react';
import Link from 'next/link';
import { Card, Input, Popover, Checkbox, Divider, Table, Pagination, Select } from '@mantine/core';
import { IconPlus, IconSearch, IconFilter, IconChevronDown, IconChevronRight, IconInbox } from '@tabler/icons';
import { perPageOptions } from '../../../shared/utility/data';

const OrganizationPage = () => {
    const [filterOpened, setFilterOpened] = useState(false);
    const [perPage, setPerPage] = useState<string>("10");
    const organizations = [
        { name: "Addis Ababa university", shortName: "AAU", code: "nabil@some.com", description: "blah blah", active: "Yes" },
        { name: "Hawasa university", shortName: "HU", code: "nabil3@some.com", description: "blah blah", active: "No" },
        { name: "Hawasa university 2", shortName: "HU2", code: "nabial@some.com", description: "blah blah", active: "Yes" },
        { name: "Hawasa university 3", shortName: "HU3", code: "nabidl@some.com", description: "blah blah", active: "No" },
    ];

    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">

            <Card shadow="sm" padding="lg">
                <Card.Section className='tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2'>
                    <h2 className='tw-text-lg'>
                        Organizations
                    </h2>
                    <Link href="/registration/organization/new">
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
                    <Popover
                        opened={filterOpened}
                        onClose={() => setFilterOpened(false)}
                        target={
                            <div onClick={() => setFilterOpened(!filterOpened)} className='tw-h-full tw-flex tw-items-center tw-border hover:tw-border-[#1d2861] hover:tw-cursor-pointer'>
                                <IconFilter className='tw-flex tw-mx-1' size={20} />
                                <span className='tw-mx-1'>Filter</span>
                                <IconChevronDown className='tw-mx-1 tw-flex' size={20} />
                            </div>
                        }
                        width={180}
                        position="left"
                        withArrow

                        styles={{
                            inner: { padding: "0px" },
                            target: { height: '100%' }
                        }}
                    >
                        <div>
                            <div className='tw-pl-4 tw-py-2 tw-font-bold tw-border-b'>Filter</div>
                            <div className='tw-px-4'>
                                <Checkbox size="xs" className='tw-my-4' label="Locked" />
                                <Checkbox size="xs" className='tw-my-4' label="Unlocked" />
                                <Divider my="xs" label="And" labelPosition="center" />
                                <Checkbox size="xs" className='tw-my-4' label="Active" />
                                <Checkbox size="xs" className='tw-my-4' label="Deactive" />
                            </div>
                        </div>
                    </Popover>
                </Card.Section>

                <Card.Section className='tw-p-4 tw-overflow-x-auto'>
                    <Table className='tw-mb-4'>
                        <thead>
                            <tr className='tw-bg-gray-200'>
                                <th>Name</th>
                                <th>Short Name</th>
                                <th>Code</th>
                                <th>Description</th>
                                <th>Active</th>
                                <th className="w-1"></th>
                            </tr>
                        </thead>
                        <tbody className='tw-border-b'>

                            {organizations.length == 0 &&
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

                            {organizations.length > 0 &&
                                organizations.map((item) => (
                                    <tr key={item.name} className="visibility-hoverable-container">
                                        <td>{item.name}</td>
                                        <td>{item.shortName}</td>
                                        <td>{item.code}</td>
                                        <td>{item.description}</td>
                                        <td>{item.active}</td>
                                        <td className='hoverable-visibility-content'>
                                            <Link href={`/registration/organization/detail/${item.name}`}><a className="tw-block tw-bg-gray-50 hover:tw-outline hover:tw-outline-1 hover:tw-outline-[#1d2861] tw-p-1 tw-rounded"><IconChevronRight color={'#1d2861'} /></a></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Card.Section>

                <Card.Section className='tw-p-4'>
                    <div className="tw-my-2 tw-flex tw-justify-end">
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
            </Card>
        </div>

    );

}

export default OrganizationPage;