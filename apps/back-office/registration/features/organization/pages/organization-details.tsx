import { Accordion, Group, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import OrganizationsSideTable from "../components/organizations-side-table";
import OrganizationOptionHeader from "../components/organization-option-header";
import OrganizationDetailForm from "../components/organization-detail-form";
import OrganizationLogoForm from '../components/organization-logo-form';
import OrganizationMandateAssignment from '../components/organization-mandate-assignment';
import ManageOrganizationAdministrators from '../components/manage-organization-administrators';
import ResetOrganizationPasswordForm from '../components/reset-organization-password-form';
import ActivityAudit from "../components/activity-audit";
import Note from "../components/note";
import Help from "../components/help";
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux.hook';
import { selectIsFullScreen, selectSideView } from '../store/slice/organization.slice';

const OrganizationDetailsPage = () => {


    const dispatch = useAppDispatch();
    const screenSize = useAppSelector(selectIsFullScreen);
    const router = useRouter();
    const { id } = router.query;
    const sideView = useAppSelector(selectSideView);

    const AccordionLabel = (props: { title: string; subTitle: string }) => (
        <>
            <Group noWrap>
                <div>
                    <Text>{props.title}</Text>
                    <Text size="sm" color="dimmed" weight={400}>
                        {props.subTitle}
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
                    <OrganizationOptionHeader title={id.toString()} />

                    <div className="tw-flex tw-items-start tw-mt-4">
                        <Accordion initialItem={0} iconPosition="right" className={`tw-bg-white ${sideView != '' ? "tw-w-7/12" : "tw-w-full"}`}
                            styles={{
                                item: { borderBottom: '1rem solid rgb(243 244 246)' },
                                itemTitle: { borderBottom: "0.5px solid rgb(229 231 235)" }
                            }}
                        >
                            <Accordion.Item label={<AccordionLabel title='Organization Detail' subTitle='Modify organization' />}>
                                <OrganizationDetailForm mode='update' />
                            </Accordion.Item>
                            <Accordion.Item label={<AccordionLabel title='Organization Logo' subTitle='Add organization logo' />}>
                                <OrganizationLogoForm />
                            </Accordion.Item>
                            <Accordion.Item label={<AccordionLabel title='Organizational Mandate Assignment' subTitle='List of Assigned organizational Mandates' />}>
                                <OrganizationMandateAssignment />
                            </Accordion.Item>
                            <Accordion.Item label={<AccordionLabel title='Manage Administrators' subTitle='Manage Organization Administrators' />}>
                                <ManageOrganizationAdministrators />
                            </Accordion.Item>
                            <Accordion.Item label={<AccordionLabel title='Reset Organization Password' subTitle='Reset Default Organization Password' />}>
                                <ResetOrganizationPasswordForm />
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

export default OrganizationDetailsPage;