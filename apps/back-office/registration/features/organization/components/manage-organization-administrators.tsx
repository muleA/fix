import { Pagination, Select, Table, Tooltip } from '@mantine/core';
import { IconLock, IconLockOpen, IconInbox } from '@tabler/icons';
import { useState } from 'react';




const ManageOrganizationAdministrators = () => {
    const [perPageModal, setPerPageModal] = useState<string>("10");

    const administrators = [
        { name: "Demeke", email: "dem@gmail.com", status: false },
        { name: "Nabil", email: "nabil@gmail.com", status: true },
    ];

    return (
        <div>
            <Table className='tw-my-4'>
                <thead>
                    <tr className='tw-bg-gray-200'>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='tw-border-b'>

                    {administrators.length == 0 &&
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

                    {administrators.length > 0 &&
                        administrators.map((item) => (
                            <tr key={item.email}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>

                                    <Tooltip
                                        withArrow
                                        wrapLines
                                        label={`${item.status ? "Deactivate" : "Activate"}`}
                                        className='tw-mr-2 hover:tw-cursor-pointer'
                                    >
                                        <div className='tw-border tw-rounded tw-bg-gray-100 hover:tw-border-[#1d2861] tw-p-[2px]'>
                                            {item.status ? <IconLockOpen className='tw-flex' size={20} /> : <IconLock className='tw-flex' size={20} />}
                                        </div>
                                    </Tooltip>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

            <div className="tw-my-2 tw-flex tw-justify-end">
                <Pagination total={10} radius="xs" size="sm"
                    styles={{
                        item: { color: '#1d2861', borderWidth: 0, fontSize: "12px" },
                        active: { color: '#1d2861', fontWeight: 'bold' },
                    }}
                />

                <Select size="xs" value={perPageModal} onChange={setPerPageModal}
                    data={[
                        { value: '5', label: '5 / page' },
                        { value: '10', label: '10 / page' },
                        { value: '20', label: '20 / page' },
                        { value: '30', label: '30 / page' },
                        { value: '40', label: '40 / page' }
                    ]}
                />
            </div>
        </div>
    );
}

export default ManageOrganizationAdministrators;