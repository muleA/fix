import { Card } from '@mantine/core';
import TemplateSideMenu from '../components/template-side-menu';
import { ReactFormBuilder } from 'react-form-builder2';


const OrganizationProfilePage = () => {

    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <TemplateSideMenu />

                <Card className={"tw-ml-4 tw-grow"} shadow="sm" padding="lg">
                    <Card.Section className='tw-flex tw-items-center tw-justify-between tw-border-b tw-py-2 tw-px-4 tw-mb-2'>
                        <h2 className='tw-text-lg'>
                            Organization profile
                        </h2>
                    </Card.Section>

                    <Card.Section className='tw-p-4'>
                        <ReactFormBuilder url='formendpoint/homie/haha' saveUrl='formendpoint/homie/haha' />
                    </Card.Section>

                </Card >

            </div>
        </div>

    );

}

export default OrganizationProfilePage;