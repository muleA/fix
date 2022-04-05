import { Accordion, Group, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import LookupsSideTable from "./lookups-side-table";
import LookupDetailForm from './lookup-detail-form';
import OptionHeader from "../../../shared/components/option-header";
import ActivityAudit from "../../../shared/components/activity-audit";
import Note from "../../../shared/components/note";
import Help from "../../../shared/components/help";
import { useAppSelector } from '../../../shared/hooks/redux.hook';
import { selectIsFullScreen, selectSideView } from '../../../store/app.slice';

const LookupDetails = () => {
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
        <div className="tw-flex tw-items-start">
            {!screenSize &&
                <LookupsSideTable />
            }
            <div className={`tw-grow tw-pl-4`}>
                <OptionHeader title={id.toString()} closeLink="/registration/lookups" />

                <div className="tw-flex tw-items-start tw-mt-4">
                    <Accordion initialItem={0} iconPosition="right" className={`tw-bg-white tw-grow tw-basis-8/12`}
                        styles={{
                            item: { borderBottom: '1rem solid rgb(243 244 246)' },
                            itemTitle: { borderBottom: "0.5px solid rgb(229 231 235)" }
                        }}
                    >
                        <Accordion.Item label={<AccordionLabel title='Lookup Detail' subTitle='Modify Lookup' />}>
                            <LookupDetailForm mode="update"/>
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

    );
}

export default LookupDetails;