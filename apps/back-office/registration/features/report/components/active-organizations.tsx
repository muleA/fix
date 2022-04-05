import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Card, Input, Popover, Checkbox, Divider, Table, Pagination, Select, Menu, Modal } from '@mantine/core';
import { IconSearch, IconFilter, IconChevronDown, IconChevronRight, IconInbox, IconPrinter } from '@tabler/icons';
import exportDataToExcel from '../../../shared/utility/export-data-to-excel';
import ReactToPrint from "react-to-print";
import { perPageOptions } from '../../../shared/utility/data';

const ActiveOrganizations = () => {
    const [printModalOpened, setPrintModalOpened] = useState(false)
    const [filterOpened, setFilterOpened] = useState(false);
    const [perPage, setPerPage] = useState<string>("10");
    const organizations = [
        { shortName: "AAUsdfsa", description: "blah blah", organizationType: "Ministry" },
        { shortName: "MOSasdfasHE", description: "blah basdflah", organizationType: "Government" },
        { shortName: "AsdfasdBCD", description: "blah bsadfdsflah", organizationType: "Agency" },
        { shortName: "GNGOdddd", description: "blahasddfsdaffsd blah", organizationType: "NGO" },
    ];

    const printRef = useRef();
    const reactToPrintContent = useCallback(() => {
        return printRef.current;
    }, [printRef.current]);


    return (
        <>
            <Card shadow="sm" padding="lg">
                <Card.Section className='tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2'>
                    <h2 className='tw-text-lg'>
                        Active organizations
                    </h2>
                </Card.Section>

                <Card.Section className='tw-flex tw-p-4 tw-items-center tw-justify-between'>
                    <Menu
                        styles={{
                            item: { ":hover": { backgroundColor: 'rgb(229 231 235) !important' } }
                        }}
                        control={<div className='btn tw-text-white hover:tw-text-white tw-bg-[#1d2861] tw-border tw-p-1 tw-pl-4'>Action <IconChevronDown className='tw-flex tw-ml-2' /></div>}>
                        <Menu.Item
                            onClick={() => exportDataToExcel(organizations, "active-organizations-report")}
                        >
                            Export excel
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => setPrintModalOpened(true)}
                        >
                            Print
                        </Menu.Item>
                    </Menu>
                    <div className='tw-flex tw-w-1/2 tw-justify-end'>
                        <Input className="tw-grow tw-mr-2" size='xs' placeholder="input search text"
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
                    </div>

                </Card.Section>

                <Card.Section className='tw-p-4 tw-overflow-x-auto'>
                    <Table className='tw-mb-4'>
                        <thead>
                            <tr className='tw-bg-gray-200'>
                                <th>Short Name</th>
                                <th>Description</th>
                                <th>Organization type</th>
                                <th className="w-1"></th>
                            </tr>
                        </thead>
                        <tbody className='tw-border-b'>

                            {organizations.length == 0 &&
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

                            {organizations.length > 0 &&
                                organizations.map((item) => (
                                    <tr key={item.shortName} className="visibility-hoverable-container">
                                        <td>{item.shortName}</td>
                                        <td>{item.description}</td>
                                        <td>{item.organizationType}</td>
                                        <td className='hoverable-visibility-content'>
                                            <Link href={`/registration/report/detail/${item.shortName}`}><a className="tw-block tw-bg-gray-50 hover:tw-outline hover:tw-outline-1 hover:tw-outline-[#1d2861] tw-p-1 tw-rounded"><IconChevronRight color={'#1d2861'} /></a></Link>
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
            <Modal
                size={"75%"}
                opened={printModalOpened}
                onClose={() => setPrintModalOpened(false)}
                title="Print"
            >
                <Table ref={printRef} className='tw-mb-4'>
                    <thead>
                        <tr className='tw-bg-gray-200'>
                            <th>Short Name</th>
                            <th>Description</th>
                            <th>Organization type</th>
                        </tr>
                    </thead>
                    <tbody className='tw-border-b'>

                        {organizations.length == 0 &&
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

                        {organizations.length > 0 &&
                            organizations.map((item) => (
                                <tr key={item.shortName} className="visibility-hoverable-container">
                                    <td>{item.shortName}</td>
                                    <td>{item.description}</td>
                                    <td>{item.organizationType}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <ReactToPrint
                    trigger={() => (
                        <div className='tw-flex tw-justify-end'>
                            <span className='btn tw-text-white hover:tw-text-white tw-bg-[#1d2861] tw-border tw-p-2 '><IconPrinter className='tw-flex' size={16} color='white' />Print</span>
                        </div>)
                    }
                    content={reactToPrintContent}
                    pageStyle={`
                    @page {
                      size: 100mm 70mm;
                    }
                  
                    @media all {
                      .pagebreak {
                        display: none;
                      }
                    }
                  
                    @media print {
                      .pagebreak {
                        page-break-before: always;
                      }
                    }
                  `}
                />
            </Modal>
        </>
    );

}

export default ActiveOrganizations;