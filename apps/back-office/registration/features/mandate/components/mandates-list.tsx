import { Card, Table, Input, Pagination, Select } from '@mantine/core';
import { IconInbox, IconSearch, IconChevronRight } from '@tabler/icons';
import { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

type MandatesListProps = {
    className:string;
};

const MandatesList = (props:MandatesListProps) => {
    const router = useRouter();
    const [perPage, setPerPage] = useState<string>("10");
    const mandates = [
        { name: "Lead_Agency", description: "Lead Agency" },
        { name: "Financial_Institution", description: "Financial Institution" },
        { name: "Attorney_General", description: "Attorney General" },
        { name: "Procurement_Enterprise", description: "Procurement Enterprise" },
    ];

    return (
        <Card className={props.className} shadow="sm" padding="lg">
            <Card.Section className='tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2'>
                <h2 className='tw-text-lg'>
                    Mandates
                </h2>
            </Card.Section>

            <Card.Section className='tw-flex tw-p-4 tw-justify-end'>
                <Input className="tw-w-1/3" size='xs' icon={<IconSearch />} placeholder="Search here" />
            </Card.Section>

            <Card.Section className='tw-px-4'>

                <Table className='tw-mb-4'>
                    <thead>
                        <tr className='tw-bg-gray-200'>
                            <th>Name</th>
                            <th>Description</th>
                            <th className="w-1"></th>
                        </tr>
                    </thead>
                    <tbody className='tw-border-b'>

                        {mandates.length == 0 &&
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

                        {mandates.length > 0 &&
                            mandates.map((item) => (
                                <tr key={item.name} className="visibility-hoverable-container">
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td className='hoverable-visibility-content'>
                                        <Link href={`${router.pathname.match(/\/registration\/super-administration*/)?`/registration/super-administration/mandate/detail/${item.name}`:`/registration/mandate/detail/${item.name}`}`}><a className="tw-block tw-bg-gray-50 hover:tw-outline hover:tw-outline-1 hover:tw-outline-[#1d2861] tw-p-1 tw-rounded"><IconChevronRight color={'#1d2861'} /></a></Link>
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

export default MandatesList;