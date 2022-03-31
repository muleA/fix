import { Accordion, Group, Text, Badge, Tooltip } from '@mantine/core';
import { useRouter } from 'next/router';
import { IconInfoCircle, IconCopy, IconCircleCheck } from '@tabler/icons';
import InviteSaSideTable from "./inviteSa-side-table";
import InviteSaDetailForm from './inviteSa-detail-form';
import OptionHeader from "../../../shared/components/option-header";
import ActivityAudit from "../../../shared/components/activity-audit";
import Note from "../../../shared/components/note";
import Help from "../../../shared/components/help";
import { useAppSelector } from '../../../shared/hooks/redux.hook';
import { selectIsFullScreen, selectSideView } from '../../../store/app.slice';
import { useEffect, useState } from 'react';

const InviteSaDetails = () => {

    const screenSize = useAppSelector(selectIsFullScreen);
    const router = useRouter();
    const { id } = router.query;
    const sideView = useAppSelector(selectSideView);
    const [copyStatus, setCopyStatus] = useState<boolean>(false);

    const superAdministrators = [
        { fullName: "zz zz", email: "zz@gmail.com", status: "Pending", isActive: false },
        { fullName: "zasdfz", email: "testregistration@gmail.com", status: "Accepted", isActive: true },
        { fullName: "Test Super Admin", email: "testsupperadmin@gmail.com", status: "Accepted", isActive: true },
        { fullName: "NAbilzz", email: "zzddnabild@gmail.com", status: "Pending", isActive: false },
    ];

    const status = superAdministrators.find((item) => (item.fullName == id.toString())).status;
    const invitationLink = "http://196.189.68.2:9900/registration/accept-invitation?&invitation=0b04f435-bac7-44ea-a976-95c3141ab54b&firstName=test&lastName=registration &email=testregistration@gmail.com&UserID=a4d14e1d-9adb-46d7-827b-edb006b43787&OrganizationID=c9725c44-ed09-4621-a87a-739794a62d46&OrganizationName=Root Organization&UserAccountExist=true;";

    useEffect(() => {
        if (copyStatus) {
            navigator.clipboard.writeText(invitationLink);
            setTimeout(() => setCopyStatus(false), 1000);
        }
    }, [copyStatus]);

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
        <div className="tw-flex tw-items-start">
            {!screenSize &&
                    <InviteSaSideTable/>
            }
            <div className={`tw-grow tw-pl-4`}>
                <OptionHeader title={<div><span>{id.toString()}</span> <Badge color="gray" className='tw-ml-2'>{status}</Badge></div>} closeLink="/registration/inviteSa" />

                <div className="tw-flex tw-items-start tw-mt-4">
                    <div className='tw-grow tw-basis-8/12'>
                        <Accordion initialItem={0} iconPosition="right" className={`tw-bg-white`}
                            styles={{
                                item: { borderBottom: '1rem solid rgb(243 244 246)' },
                                itemTitle: { borderBottom: "0.5px solid rgb(229 231 235)" }
                            }}
                        >
                            <Accordion.Item label={<AccordionLabel title='Super Administrator Detail' subTitle='Modify super-administrator' />}>
                                <InviteSaDetailForm mode='update' />
                            </Accordion.Item>
                        </Accordion>

                        <div className='tw-bg-white tw-p-4'>
                            <div className="tw-flex tw-p-4 tw-bg-[#e6f7ff] tw-border tw-border-[#91d5ff]">
                                <span><IconInfoCircle className='tw-flex' size={28} color='#2986cc' /></span>
                                <div className='tw-ml-4 tw-grow'>
                                    <h3 className='tw-text-base'>Personal Invitation</h3>
                                    <p className='tw-text-sm tw-p-4 tw-max-w-[400px] tw-break-all'>
                                        {invitationLink}
                                        <Tooltip
                                            withArrow
                                            wrapLines
                                            label={copyStatus ? "Copied" : "Copy"}
                                            className={`tw-mr-2 ${copyStatus ? "" : "hover:tw-cursor-pointer"}`}
                                        >
                                            {copyStatus &&
                                                <IconCircleCheck />
                                            }

                                            {!copyStatus &&
                                                <IconCopy onClick={() => setCopyStatus(true)} />
                                            }
                                        </Tooltip>

                                    </p>
                                    <button disabled={true} className='btn tw-w-full'>
                                        Invite Super Admin
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

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

    );
}

export default InviteSaDetails;