import { Accordion, Group, Text } from '@mantine/core';
import OrganizationsSideTable from "../components/organizations-side-table";
import OptionHeader from "../../../shared/components/option-header";
import OrganizationDetailForm from "../components/organization-detail-form";
import ActivityAudit from "../../../shared/components/activity-audit";
import Note from "../../../shared/components/note";
import Help from "../../../shared/components/help";
import { useAppSelector } from '../../../shared/hooks/redux.hook';
import { selectIsFullScreen, selectSideView } from '../../../store/app.slice';


const NewOrganizationPage = () => {

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
                <div className={`tw-grow tw-pl-4`}>
                    <OptionHeader title='Organization' closeLink="/registration/organization"/>

                    <div className="tw-flex tw-items-start tw-mt-4">
                        <Accordion initialItem={0} iconPosition="right" className={`tw-bg-white tw-grow tw-basis-8/12`}
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