import { Button, Tooltip } from '@mantine/core';
import { IconArrowsMaximize,IconReportSearch, IconMessageCircle, IconQuestionMark, IconX } from '@tabler/icons';
import { useRouter } from 'next/router'
const ServiceOptionHeader = () => {
 const router=useRouter();
 const regex = /\/service-store\/service\/detail\/*/;
    return (
        <div className='tw-p-4 tw-flex tw-bg-white tw-justify-between'>
            <span>
{`${

    router.pathname==='/service-store/service-provider/new'?'Service Provider':''
}`}

{`${

router.pathname==='/service-store/service-owner/new'?'Service Owner':''
}`}

{`${

(router.pathname==='/service-store/service/list'||router.pathname==='/service-store/service/new')?'Service':''
}
${router.pathname.match(regex)?'services':''}
`}
            </span>
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
                    label="Assign Category"
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

export default ServiceOptionHeader;