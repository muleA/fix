import { Card, Table, Input, Pagination, Select, Popover, Checkbox, Divider } from '@mantine/core';
import { IconInbox, IconSearch, IconChevronRight, IconPlus, IconFilter,IconChevronDown } from '@tabler/icons';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


const InviteSaList = () => {
    const router = useRouter();
    const [perPage, setPerPage] = useState<string>("10");
    const [filterOpened, setFilterOpened] = useState(false);

    const superAdministrators = [
        { fullName: "zz zz", email: "zz@gmail.com", status: "Pending", isActive: false },
        { fullName: "zasdfz", email: "testregistration@gmail.com", status: "Accepted", isActive: true },
        { fullName: "Test Super Admin", email: "testsupperadmin@gmail.com", status: "Accepted", isActive: true },
        { fullName: "NAbilzz", email: "zzddnabild@gmail.com", status: "Accepted", isActive: false },
    ];

    return (
        <Card shadow="sm" padding="lg">
            <Card.Section className='tw-flex tw-items-center tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2'>
                <h2 className='tw-text-lg'>
                    Super Administrator
                </h2>
                <Link href={`${router.pathname.match(/\/registration\/super-administration*/) ? `/registration/super-administration/inviteSa/new` : `/registration/inviteSa/new`}`}>
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

            <Card.Section className='tw-px-4'>

                <Table className='tw-mb-4'>
                    <thead>
                        <tr className='tw-bg-gray-200'>
                            <th>Full name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Is active</th>
                            <th className="w-1"></th>
                        </tr>
                    </thead>
                    <tbody className='tw-border-b'>

                        {superAdministrators.length == 0 &&
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

                        {superAdministrators.length > 0 &&
                            superAdministrators.map((item) => (
                                <tr key={item.fullName} className="visibility-hoverable-container">
                                    <td>{item.fullName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.status}</td>
                                    <td>{item.isActive ? "Yes" : "No"}</td>
                                    <td className='hoverable-visibility-content'>
                                        <Link href={`${router.pathname.match(/\/registration\/super-administration*/) ? `/registration/super-administration/inviteSa/detail/${item.fullName}` : `/registration/inviteSa/detail/${item.fullName}`}`}><a className="tw-block tw-bg-gray-50 hover:tw-outline hover:tw-outline-1 hover:tw-outline-[#1d2861] tw-p-1 tw-rounded"><IconChevronRight color={'#1d2861'} /></a></Link>
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

export default InviteSaList;