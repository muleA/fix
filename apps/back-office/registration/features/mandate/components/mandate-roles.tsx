import { Table,Pagination,Select } from '@mantine/core';
import { useState } from 'react';
import { perPageOptions } from '../../../shared/utility/data';


const MandateRoles = () => {

    const [perPage, setPerPage] = useState<string>("10");
    const mandateDetails = [
        { application: "Registration", businessFunctions: ["Unit administrator", "Organization Administrator"] },
        { application: "Procurement Services", businessFunctions: ["Guest", "Encoder", "Approver", "Publisher", "Report Viewer"] }
    ];

    return (
        <div>
            <Table className='tw-my-4'>
                <thead>
                    <tr className='tw-bg-gray-200'>
                        <th>Applications</th>
                        <th>Business functions</th>
                    </tr>
                </thead>
                <tbody className='tw-border-b'>
                    {
                        mandateDetails.map((item) => (
                            <tr key={item.application}>
                                <td>{item.application}</td>
                                <td>
                                    {
                                        item.businessFunctions.map((element) => {
                                            return (
                                                <div>{element}</div>
                                            );
                                        })
                                    }
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

                    <Select size="xs" value={perPage} onChange={setPerPage}
                        data={perPageOptions}
                    />
                </div>
        </div>
    );
}

export default MandateRoles;