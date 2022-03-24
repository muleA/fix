import Link from 'next/link';
import { Tooltip } from '@mantine/core';
import { IconArrowsMaximize, IconArrowsMinimize, IconReportSearch, IconMessageCircle, IconQuestionMark, IconX } from '@tabler/icons';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux.hook';
import { toggleScreenSize, setSideView, selectIsFullScreen } from '../../store/app.slice';
import { ReactElement } from 'react';

type OptionHeaderProps = {
    title:string | JSX.Element;
    closeLink:string;
};

const OptionHeader = (props:OptionHeaderProps) => {
    const dispatch = useAppDispatch();
    const screenSize = useAppSelector(selectIsFullScreen);

    return (
        <div className='tw-p-4 tw-flex tw-bg-white tw-justify-between'>
            <span>{props.title}</span>
            <div className='tw-flex'>
                <Tooltip
                    withArrow
                    wrapLines
                    label="Fullscreen"
                    className='tw-mr-2'
                >
                    {!screenSize &&
                        <IconArrowsMaximize onClick={() => dispatch(toggleScreenSize())} className='tw-flex tw-cursor-pointer' size={16} />
                    }

                    {screenSize &&
                        <IconArrowsMinimize onClick={() => dispatch(toggleScreenSize())} className='tw-flex tw-cursor-pointer' size={16} />
                    }
                </Tooltip>

                <Tooltip
                    withArrow
                    wrapLines
                    label="Activity Audit"
                    className='tw-mr-2'
                >
                    <IconReportSearch onClick={() => dispatch(setSideView("activity-audit"))} className='tw-flex tw-cursor-pointer' size={16} />
                </Tooltip>

                <Tooltip
                    withArrow
                    wrapLines
                    label="Note"
                    className='tw-mr-2'
                >
                    <IconMessageCircle onClick={() => dispatch(setSideView("note"))} className='tw-flex tw-cursor-pointer' size={16} />
                </Tooltip>

                <Tooltip
                    withArrow
                    wrapLines
                    label="Help"
                    className='tw-mr-2'
                >
                    <IconQuestionMark onClick={() => dispatch(setSideView("help"))} className='tw-flex tw-cursor-pointer' size={16} />
                </Tooltip>

                <Tooltip
                    withArrow
                    wrapLines
                    label="Close"
                    className='tw-mr-2'
                >
                    <Link href={props.closeLink}>
                        <a>
                            <IconX onClick={() => dispatch(setSideView(""))} className='tw-flex tw-cursor-pointer' size={16} />
                        </a>
                    </Link>
                </Tooltip>

            </div>
        </div>

    );

}

export default OptionHeader;