import { useState } from 'react';
import Link from 'next/link';
import { Tooltip } from '@mantine/core';
import { IconArrowsMaximize, IconArrowsMinimize, IconReportSearch, IconMessageCircle, IconQuestionMark, IconX } from '@tabler/icons';

const OrganizationOptionHeader = () => {


    return (
        <div className='tw-p-4 tw-flex tw-bg-white tw-justify-between'>
            <span>Organization</span>
            <div className='tw-flex'>
                <Tooltip
                    withArrow
                    wrapLines
                    label="Fullscreen"
                    className='tw-mr-2'
                >
                    <IconArrowsMaximize className='tw-flex tw-cursor-pointer' size={16} />
                </Tooltip>

                <Tooltip
                    withArrow
                    wrapLines
                    label="Activity Audit"
                    className='tw-mr-2'
                >
                    <IconReportSearch className='tw-flex tw-cursor-pointer' size={16} />
                </Tooltip>

                <Tooltip
                    withArrow
                    wrapLines
                    label="Note"
                    className='tw-mr-2'
                >
                    <IconMessageCircle className='tw-flex tw-cursor-pointer' size={16} />
                </Tooltip>

                <Tooltip
                    withArrow
                    wrapLines
                    label="Help"
                    className='tw-mr-2'
                >
                    <IconQuestionMark className='tw-flex tw-cursor-pointer' size={16} />
                </Tooltip>

                <Tooltip
                    withArrow
                    wrapLines
                    label="Close"
                    className='tw-mr-2'
                >
                    <IconX className='tw-flex tw-cursor-pointer' size={16} />
                </Tooltip>                
                
                
                
            </div>
        </div>

    );

}

export default OrganizationOptionHeader;