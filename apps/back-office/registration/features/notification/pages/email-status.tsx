import { useState } from 'react';
import Link from 'next/link';
import { Card, Input, Table, Pagination, Select } from '@mantine/core';
import { IconSearch, IconInbox, IconChevronRight } from '@tabler/icons';
import Header from "../components/header";
import { perPageOptions } from '../../../shared/utility/data';

const EmailStatusPage = () => {

    const [perPage, setPerPage] = useState<string>("10");
    const emails = [
        { email: "nabil@some.com", date: "Jul 21, 2022", status: "Some random status" },
        { email: "nabil1@some.com", date: "Feb 02, 2020", status: "very good " },
        { email: "nabil2@some.com", date: "Jun 30, 2019", status: "blah blah" },
        { email: "nabil3@some.com", date: "Jul 21, 2021", status: "mock data" },
    ];

    return (
        <div className="tw-w-full tw-min-h-screen">
            <Header />
            <Card className='tw-m-4' padding="xl">
                <Card.Section className='tw-border-b tw-px-4'>
                    <h3 className='tw-text-lg  tw-font-medium tw-mt-2 tw-mb-4'>
                        List of Emails
                    </h3>
                </Card.Section>

                <Card.Section className='tw-flex tw-p-4 tw-justify-end'>
                    <Input className="tw-w-1/3" size='xs' icon={<IconSearch />} placeholder="Search here" />
                </Card.Section>

                <Card.Section className='tw-px-4'>

                    <Table className='tw-mb-4'>
                        <thead>
                            <tr className='tw-bg-gray-200'>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th className="w-1"></th>
                            </tr>
                        </thead>
                        <tbody className='tw-border-b'>

                            {emails.length == 0 &&
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

                            {emails.length > 0 &&
                                emails.map((item) => (
                                    <tr key={item.email} className="visibility-hoverable-container">
                                        <td>{item.email}</td>
                                        <td>{item.date}</td>
                                        <td>{item.status}</td>
                                        <td className='hoverable-visibility-content'>
                                            <Link href="/registration/organization-personnel/detail/12345"><a className="tw-block tw-bg-gray-50 hover:tw-outline hover:tw-outline-1 hover:tw-outline-[#1d2861] tw-p-1 tw-rounded"><IconChevronRight color={'#1d2861'} /></a></Link>
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
                            data={perPageOptions}
                        />
                    </div>
                </Card.Section>
            </Card>
        </div>

    );

}

export default EmailStatusPage;