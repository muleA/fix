import { Card, Tooltip } from '@mantine/core';
import { IconX, IconInbox } from '@tabler/icons';
import { useAppDispatch } from '../hooks/redux.hook';
import { setSideView } from '../../store/app.slice';

const Help = () => {

    const dispatch = useAppDispatch();

    return (
        <Card className='tw-ml-4 tw-w-6/12' shadow="sm" padding="lg">
            <Card.Section className='tw-flex tw-items-center tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2'>
                <h2 className='tw-text-base'>
                    Help
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

            <Card.Section className='tw-p-4 tw-min-h-[200px]'>
                <div className='tw-h-[200px] tw-flex tw-flex-col tw-items-center tw-justify-center'>
                    <span className='tw-bg-gray-200 tw-rounded-full tw-p-6 tw-mb-4'>
                        <IconInbox className='tw-flex' color='gray' size={48} />
                    </span>
                    <p className='tw-text-lg tw-text-gray-500'>
                        Quick help not found
                    </p>
                </div>
            </Card.Section>

        </Card>

    );

}

export default Help;