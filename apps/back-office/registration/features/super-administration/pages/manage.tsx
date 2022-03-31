import { Accordion, Text, Group } from '@mantine/core';
import SuperAdministrationSideMenu from "../components/super-administration-side-menu";
import PasswordValidationForm from '../components/password-validation-form';
import PasswordMinimumMaximumDateForm from '../components/password-minimum-maximum-date-form';
import MaximumFailedAttemptsLockoutForm from '../components/maximum-failed-attempts-lockouts-form';

const SuperAdministrationManagePage = () => {

    const AccordionLabel = (props: { title: string; subTitle: string }) => (
        <>
            <Group noWrap>
                <div>
                    <Text style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{props.title}</Text>
                    <Text style={{ overflow: "hidden", textOverflow: "ellipsis" }} size="sm" color="dimmed" weight={400}>
                        {props.subTitle}
                    </Text>
                </div>
            </Group>
        </>
    );

    return (
        <div className="tw-w-full tw-min-h-screen tw-p-4">
            <div className="tw-flex tw-items-start">
                <SuperAdministrationSideMenu />
                <div className='tw-ml-4 tw-grow tw-flex tw-items-start'>
                    <Accordion initialItem={0} iconPosition="right" className={`tw-bg-white tw-w-1/3`}
                        styles={{
                            itemTitle: { borderBottom: "0.5px solid rgb(229 231 235)" }
                        }}
                    >
                        <Accordion.Item label={<AccordionLabel title='Password Validation' subTitle='New password validation' />}>
                            <PasswordValidationForm />
                        </Accordion.Item>
                    </Accordion>

                    <Accordion initialItem={0} iconPosition="right" className={`tw-bg-white tw-w-1/3 tw-ml-4`}
                        styles={{
                            itemTitle: { borderBottom: "0.5px solid rgb(229 231 235)" }
                        }}
                    >
                        <Accordion.Item label={<AccordionLabel title='Password minimum and maximum date' subTitle='New password minimum and maximum date' />}>
                            <PasswordMinimumMaximumDateForm />
                        </Accordion.Item>
                    </Accordion>

                    <Accordion initialItem={0} iconPosition="right" className={`tw-bg-white tw-w-1/3 tw-ml-4`}
                        styles={{
                            itemTitle: { borderBottom: "0.5px solid rgb(229 231 235)" }
                        }}
                    >
                        <Accordion.Item label={<AccordionLabel title='Maximum failed attempts and default lockout' subTitle='New maximum failed attempts and default lockout' />}>
                            <MaximumFailedAttemptsLockoutForm />
                        </Accordion.Item>
                    </Accordion>

                </div>

            </div>


        </div>

    );

}

export default SuperAdministrationManagePage;