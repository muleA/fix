import { Card } from '@mantine/core';
import { IconInbox } from '@tabler/icons';
import { useState } from 'react';
import ReportSideMenu from "../components/report-side-menu";
import AllOrganizations from '../components/all-organizations';
import ActiveOrganizations from '../components/active-organizations';
import DeactiveOrganizations from '../components/deactive-organizations';
import LockedOrganizations from '../components/locked-organizations';


const ReportPage = () => {

    const [selectedReport, setSelectedReport] = useState<"organization-graph" | "all-organizations" | "active-organizations" | "deactive-organizations" | "locked-organizations" | "">("");
    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <ReportSideMenu selectedReport={selectedReport} toggleSelectedReport={(reportType: "organization-graph" | "all-organizations" | "active-organizations" | "deactive-organizations" | "locked-organizations" | "") => setSelectedReport(reportType)} />
                <div className="tw-ml-4 tw-grow">
                    {selectedReport == "" &&
                        <Card className='tw-ml-4' shadow="sm" padding="lg">
                            <Card.Section className='tw-p-4 tw-min-h-[200px]'>
                                <div className='tw-h-[300px] tw-flex tw-flex-col tw-items-center tw-justify-center'>
                                    <span className='tw-bg-gray-200 tw-rounded-full tw-p-6 tw-mb-4'>
                                        <IconInbox className='tw-flex' color='gray' size={48} />
                                    </span>
                                    <p className='tw-text-lg tw-text-gray-500'>
                                        There is no chosen link
                                    </p>
                                    <p className='tw-text-sm tw-text-gray-500'>
                                        Please choose one of the items in the side menu.
                                    </p>
                                </div>
                            </Card.Section>
                        </Card>
                    }

                    {selectedReport == "all-organizations" &&
                        <AllOrganizations />
                    }

                    {selectedReport == "active-organizations" &&
                        <ActiveOrganizations />
                    }

                    {selectedReport == "deactive-organizations" &&
                        <DeactiveOrganizations />
                    }

                    {selectedReport == "locked-organizations" &&
                        <LockedOrganizations />
                    }
                </div>
            </div>


        </div>

    );

}

export default ReportPage;