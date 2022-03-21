import { Accordion, Group, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import MandateDetails from '../components/mandate-details';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux.hook';
import { selectIsFullScreen, selectSideView } from '../../../store/app.slice';

const MandateDetailsPage = () => {


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
            <MandateDetails/>
        </div>

    );
}

export default MandateDetailsPage;