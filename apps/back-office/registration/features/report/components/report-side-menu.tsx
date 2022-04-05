import { Card } from '@mantine/core';
import { useRouter } from 'next/router';

type ReportSideMenuProps={
    selectedReport :"organization-graph" | "all-organizations" | "active-organizations" | "deactive-organizations" | "locked-organizations" | "";
    toggleSelectedReport :(reportType:"organization-graph" | "all-organizations" | "active-organizations" | "deactive-organizations" | "locked-organizations" | "")=>void;
};
const ReportSideMenu = (props:ReportSideMenuProps) => {

    const router = useRouter();
    return (
        <Card className='tw-w-3/12 tw-min-h-[400px]' shadow="sm" padding="lg">
            <Card.Section className='tw-flex tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-4'>
                <h2 className='tw-text-lg'>
                    Report
                </h2>
            </Card.Section>

            <Card.Section>
                <ul className='tw-border-r'>
                    <li onClick={()=>props.toggleSelectedReport("organization-graph")} className={`tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861] ${props.selectedReport == "organization-graph" ? "tw-bg-gray-200 tw-border-r-2 tw-border-r-[#1d2861]" : ""}`}>
                        <span className='tw-text-sm'>
                            Organization graphs
                        </span>
                    </li>
                    <li onClick={()=>props.toggleSelectedReport("all-organizations")} className={`tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861] ${props.selectedReport == "all-organizations" ? "tw-bg-gray-200 tw-border-r-2 tw-border-r-[#1d2861]" : ""}`}>
                        <span className='tw-text-sm'>
                            All organizations
                        </span>
                    </li>
                    <li onClick={()=>props.toggleSelectedReport("active-organizations")} className={`tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861] ${props.selectedReport == "active-organizations" ? "tw-bg-gray-200 tw-border-r-2 tw-border-r-[#1d2861]" : ""}`}>
                        <span className='tw-text-sm'>
                            Active organizations
                        </span>
                    </li>
                    <li onClick={()=>props.toggleSelectedReport("deactive-organizations")} className={`tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861] ${props.selectedReport == "deactive-organizations" ? "tw-bg-gray-200 tw-border-r-2 tw-border-r-[#1d2861]" : ""}`}>
                        <span className='tw-text-sm'>
                            Deactive organizations
                        </span>
                    </li>
                    <li onClick={()=>props.toggleSelectedReport("locked-organizations")} className={`tw-flex tw-items-center hover:tw-cursor-pointer tw-pl-4 tw-py-2 hover:tw-bg-gray-200 hover:tw-border-r-2 hover:tw-border-r-[#1d2861] ${props.selectedReport == "locked-organizations" ? "tw-bg-gray-200 tw-border-r-2 tw-border-r-[#1d2861]" : ""}`}>
                        <span className='tw-text-sm'>
                            Locked organizations
                        </span>
                    </li>
                </ul>
            </Card.Section>
        </Card >

    );

}

export default ReportSideMenu;