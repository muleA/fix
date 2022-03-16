import { Accordion, Group, Text } from '@mantine/core';
import OrganizationsSideTable from "../components/organizations-side-table";
import OrganizationOptionHeader from "../components/organization-option-header";
import OrganizationDetailForm from "../components/organization-detail-form";
import ActivityAudit from "../components/activity-audit";
import Note from "../components/note";
import Help from "../components/help";
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux.hook';
import { selectIsFullScreen, selectSideView } from '../store/slice/organization.slice';


const NewOrganizationPage = () => {

    const dispatch = useAppDispatch();
    const screenSize = useAppSelector(selectIsFullScreen);
    const sideView = useAppSelector(selectSideView);

    const AccordionLabel = () => (
        <>
            <Group noWrap>
                <div>
                    <Text>New Organization</Text>
                    <Text size="sm" color="dimmed" weight={400}>
                        Register new organization
                    </Text>
                </div>
            </Group>
        </>
    );

    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                {!screenSize &&
                    <OrganizationsSideTable />
                }
                <div className={`${screenSize ? "tw-w-full" : "tw-w-9/12"} tw-pl-4`}>
                    <OrganizationOptionHeader title='Organization'/>

                    <div className="tw-flex tw-items-start tw-mt-4">
                        <Accordion initialItem={0} iconPosition="right" className={`tw-bg-white ${sideView != '' ? "tw-w-7/12" : "tw-w-full"}`}
                            styles={{
                                itemTitle: { borderBottom: "0.5px solid rgb(229 231 235)" }
                            }}
                        >
                            <Accordion.Item label={<AccordionLabel />}>
                                <OrganizationDetailForm mode="new" />
                            </Accordion.Item>
                        </Accordion>

                        {sideView == 'activity-audit' &&
                            <ActivityAudit />
                        }
                        {sideView == 'note' &&
                            <Note />
                        }
                        {sideView == 'help' &&
                            <Help />
                        }
                    </div>
                </div>
            </div>


        </div>

    );

}

export default NewOrganizationPage;