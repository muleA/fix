import { useState } from 'react';
import { Card, Timeline, Tooltip, Pagination, Select } from '@mantine/core';
import { IconX, IconUser, IconCircleCheck, IconClock } from '@tabler/icons';
import { useAppDispatch } from '../../../shared/hooks/redux.hook';
import { setSideView } from '../store/slice/organization.slice';


const ActivityAudit = () => {
    const dispatch = useAppDispatch();
    const [perPage, setPerPage] = useState<string>("10");
    const audits = [
        { name: "John dessie", action: "Update", date: "2022-02-28T14:17:25.727891" },
        { name: "Ewentu Abera", action: "Update", date: "2022-02-28T14:17:25.727891" },
        { name: "John dessie", action: "Activate", date: "2022-02-28T14:17:25.727891" },
        { name: "John dessie", action: "Update", date: "2022-02-28T14:17:25.727891" },
        { name: "Ewentu Abera", action: "Activate", date: "2022-02-28T14:17:25.727891" },
    ];

    return (
        <Card className='tw-ml-4 tw-w-5/12' shadow="sm" padding="lg">
            <Card.Section className='tw-flex tw-items-center tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2'>
                <h2 className='tw-text-base'>
                    Activity Audit
                </h2>
                <Tooltip
                    withArrow
                    wrapLines
                    label="Close"
                    className='tw-mr-2'
                >
                    <IconX className='tw-flex tw-cursor-pointer' onClick={() => dispatch(setSideView(''))} size={16} />
                </Tooltip>
            </Card.Section>

            {
                audits.map((item) => (
                    <Card.Section className='tw-pl-2 tw-py-2 tw-mb-4'>
                        <Timeline bulletSize={24} lineWidth={2}
                            className="tw-border-b tw-mr-4"
                            styles={{
                                itemTitle: { fontWeight: 'normal', fontSize: "14px", paddingTop: "5px" },
                                itemBulletWithChild: { backgroundColor: 'white', border: "none" },
                            }}
                        >
                            <Timeline.Item bullet={<IconUser className='tw-flex' color='green' size={18} />} title={item.name} color={"white"} />
                            <Timeline.Item bullet={<IconCircleCheck className='tw-flex' color='green' size={18} />} title={item.action} />
                            <Timeline.Item bullet={<IconClock color='green' size={12} />} title={item.date} />
                        </Timeline>

                    </Card.Section>
                ))
            }

            <Card.Section className='tw-pl-2'>
                <div className="tw-my-2 tw-flex tw-flex-wrap tw-justify-start">
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

        </Card>

    );

}

export default ActivityAudit;