import { Pagination, Select, Table, Modal, Input, Checkbox, Divider } from '@mantine/core';
import { IconDeviceFloppy, IconCirclePlus, IconInbox, IconEye, IconSearch, IconAlertTriangle } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from 'react';

const schema = yup.object({
    mandates: yup.mixed()
});



const OrganizationMandateAssignment = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm({ resolver: yupResolver(schema) });
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
    const [mandateAssignmentModalOpened, setMandateAssignmentModalOpened] = useState<boolean>(false);
    const [assignedMandateModalOpened, setAssignedMandateModalOpened] = useState<boolean>(false);
    const [viewedMandate,setViewedMandate] = useState<string>('');
    const [perPage, setPerPage] = useState<string>("10");
    const [perPageModal, setPerPageModal] = useState<string>("10");

    const mandates = [
        { name: "Lead_Agency", description: "Lead Agency" },
        { name: "Financial_Institution", description: "Financial Institution" },
        { name: "Attorney_General", description: "Attorney General" },
        { name: "Procurement_Enterprise", description: "Procurement Enterprise" },
    ];

    const mandateDetails = [
        { application: "Registration", businessFunctions: ["Unit administrator", "Organization Administrator"] },
        { application: "Procurement Services", businessFunctions: ["Guest", "Encoder", "Approver", "Publisher", "Report Viewer"] }
    ];

    const onSubmit = async (data) => {
        try {
            console.log(data.mandates);
            setButtonDisabled(true);
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <Modal
                    opened={mandateAssignmentModalOpened}
                    onClose={() => setMandateAssignmentModalOpened(false)}
                    title="Mandate Assignment"
                    size={"50%"}
                    styles={{
                        header: { borderBottom: '1px solid rgb(229 231 235)', paddingBottom: "1rem" },
                    }}
                >
                    <Input className="tw-w-full tw-mr-2" size='xs' placeholder="Search here"
                        rightSection={<IconSearch className='tw-inline-block' size={16} />}
                        rightSectionWidth={40}
                        styles={{ rightSection: { pointerEvents: 'none' } }}
                    />

                    <Table className='tw-my-4'>
                        <thead>
                            <tr className='tw-bg-gray-200'>
                                <th className="w-1"></th>
                                <th>Name</th>
                                <th>Description</th>
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
                                    <tr key={item.name}>
                                        <td>
                                            <Checkbox {...register(`mandates.${item.name}`, { shouldUnregister: true })} size='xs' radius="xs" />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
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

                    <Divider className='tw-mt-4' />
                    <div className='tw-mt-4 tw-flex tw-justify-end'>
                        <button type='button' className='btn btn-primary tw-bg-[#1d2861]' onClick={() => { setMandateAssignmentModalOpened(false); setButtonDisabled(false); }}>
                            Done
                        </button>
                    </div>
                </Modal>

                <Modal
                    opened={assignedMandateModalOpened}
                    onClose={() => setAssignedMandateModalOpened(false)}
                    title={`Mandate Name: ${viewedMandate}`}
                    size={"50%"}
                    styles={{
                        header: { borderBottom: '1px solid rgb(229 231 235)', paddingBottom: "1rem" },
                    }}
                >
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
                    </div>
                </Modal>

                <div className='tw-my-4 tw-flex tw-justify-end'>
                    <button type='button' className='btn btn-primary tw-bg-[#1d2861]' onClick={() => setMandateAssignmentModalOpened(true)}>
                        <IconCirclePlus />
                        Assign
                    </button>
                </div>

                {mandates.length == 0 &&
                    <>
                        <Divider className='tw-my-4' />
                        <div className='tw-flex tw-items-center'>
                            <IconAlertTriangle />
                            <span className='tw-ml-2'>
                                There is no mandate assigned please assign one
                            </span>
                        </div>
                    </>
                }

                {mandates.length > 0 &&
                    <>
                        <Table className='tw-mb-4'>
                            <thead>
                                <tr className='tw-bg-gray-200'>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th className="w-1"></th>
                                </tr>
                            </thead>
                            <tbody className='tw-border-b'>
                                {
                                    mandates.map((item) => (
                                        <tr key={item.name} className="visibility-hoverable-container">
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>
                                                <IconEye className='tw-flex hover:tw-cursor-pointer' color='gray' size={16} onClick={() =>{setViewedMandate(item.name); setAssignedMandateModalOpened(true);}} />
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
                                data={[
                                    { value: '5', label: '5 / page' },
                                    { value: '10', label: '10 / page' },
                                    { value: '20', label: '20 / page' },
                                    { value: '30', label: '30 / page' },
                                    { value: '40', label: '40 / page' }
                                ]}
                            />
                        </div>
                    </>
                }

                <button disabled={buttonDisabled} type='submit' className='tw-mt-4 tw-bg-[#1d2861] btn btn-primary'>
                    <IconDeviceFloppy />
                    Save
                </button>

            </form>
        </div>
    );
}

export default OrganizationMandateAssignment;