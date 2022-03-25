import { Card, Table, Input, Pagination, Select, Tooltip } from '@mantine/core';
import { IconInbox, IconSearch, IconSend } from '@tabler/icons';
import { useState } from 'react';
import Link from 'next/link';
import EmailResendSideMenu from './email-resend-side-menu';


const EmailResendList = () => {
    const [perPage, setPerPage] = useState<string>("10");
    const [selectedEmailType, setSelectedEmailType] = useState<"Email confirmation" | "Password reset" | "Others" | "">("");

    const confirmedEmails = [
        { receiver: "Zelalem Doti", subject: "Email confirmation" },
        { receiver: "Donor One", subject: "Email confirmation" },
        { receiver: "Donor two", subject: "Email confirmation" },
        { receiver: "Donor three", subject: "Email confirmation" },
    ];

    const resetPasswordEmails = [
        { receiver: "Zelalem Doti", subject: "Password reset" },
        { receiver: "Donor One", subject: "Password reset" },
        { receiver: "Donor two", subject: "Password reset" },
        { receiver: "Donor three", subject: "Password reset" },
    ];

    const otherEmails = [
        { receiver: "Zelalem Doti", subject: "IMP User Invitation" },
        { receiver: "Donor One", subject: "hi" },
        { receiver: "Donor two", subject: "hi" },
        { receiver: "Donor three", subject: "hi" },
    ];

    return (

        <div className="tw-flex">
            <EmailResendSideMenu emailType={selectedEmailType} selectEmailType={(emailType: "Email confirmation" | "Password reset" | "Others" | "") => setSelectedEmailType(emailType)} />
            {selectedEmailType == "" &&
                <div className='tw-ml-4 tw-grow tw-flex tw-items-center tw-justify-center tw-h-[450px] tw-bg-white'>
                    <p className='tw-text-base'>Please select email type</p>
                </div>
            }

            {selectedEmailType != "" &&
                <Card className={"tw-ml-4 tw-grow"} shadow="sm" padding="lg">
                    <Card.Section className='tw-flex tw-items-center tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2'>
                        <h2 className='tw-text-lg'>
                            Email resend
                        </h2>
                    </Card.Section>

                    <Card.Section className='tw-flex tw-p-4 tw-justify-end'>
                        <Input className="tw-grow" size='xs' icon={<IconSearch />} placeholder="Search here" />
                    </Card.Section>

                    <Card.Section className='tw-px-4'>

                        <Table className='tw-mb-4'>
                            <thead>
                                <tr className='tw-bg-gray-200'>
                                    <th>Receiver</th>
                                    <th>Subject</th>
                                    <th className="w-1"></th>
                                </tr>
                            </thead>
                            <tbody className='tw-border-b'>
                                {selectedEmailType == "Email confirmation" &&
                                    <>
                                        {confirmedEmails.length == 0 &&

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
                                        {confirmedEmails.length > 0 &&
                                            confirmedEmails.map((item) => (
                                                <tr key={item.receiver} className="visibility-hoverable-container">
                                                    <td>{item.receiver}</td>
                                                    <td>{item.subject}</td>
                                                    <td>
                                                        <Tooltip
                                                            withArrow
                                                            wrapLines
                                                            label="Resend email"
                                                            className='tw-mr-2'
                                                        >
                                                            <span className='btn btn-primary btn-sm tw-bg-[#1d2861]'><IconSend className='tw-flex' size={16} /></span>
                                                        </Tooltip>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </>
                                }

                                {selectedEmailType == "Password reset" &&
                                    <>
                                        {resetPasswordEmails.length == 0 &&

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
                                        {resetPasswordEmails.length > 0 &&
                                            resetPasswordEmails.map((item) => (
                                                <tr key={item.receiver} className="visibility-hoverable-container">
                                                    <td>{item.receiver}</td>
                                                    <td>{item.subject}</td>
                                                    <td>
                                                        <Tooltip
                                                            withArrow
                                                            wrapLines
                                                            label="Resend email"
                                                            className='tw-mr-2'
                                                        >
                                                            <span className='btn btn-primary btn-sm tw-bg-[#1d2861]'><IconSend className='tw-flex' size={16} /></span>
                                                        </Tooltip>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </>
                                }

                                {selectedEmailType == "Others" &&
                                    <>
                                        {otherEmails.length == 0 &&

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
                                        {otherEmails.length > 0 &&
                                            otherEmails.map((item) => (
                                                <tr key={item.receiver} className="visibility-hoverable-container">
                                                    <td>{item.receiver}</td>
                                                    <td>{item.subject}</td>
                                                    <td>
                                                        <Tooltip
                                                            withArrow
                                                            wrapLines
                                                            label="Resend email"
                                                            className='tw-mr-2'
                                                        >
                                                            <span className='btn btn-primary btn-sm tw-bg-[#1d2861]'><IconSend className='tw-flex' size={16} /></span>
                                                        </Tooltip>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </>
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
            }

        </div>
    );

}

export default EmailResendList;