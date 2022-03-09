import { Accordion, Group, Text, Divider } from '@mantine/core';
import { IconAsteriskSimple } from '@tabler/icons';
import OrganizationAddressForm from './organization-address-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const NewOrganizationForm = () => {

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
        <Accordion iconPosition="right" className='tw-bg-white tw-mt-4'
            styles={{
                itemTitle: { borderBottom: "0.5px solid rgb(229 231 235)" }
            }}
        >
            <Accordion.Item label={<AccordionLabel />}>
                <div className='tw-my-4'>
                    <div className='tw-flex tw-items-center tw-mb-2'>
                        <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                        <span>Region</span>
                    </div>
                    <div className="input-group tw-mb-4">
                        <span className="input-group-text">
                            አማ
                        </span>
                        <input type="text" className="form-control" placeholder="ስም" />
                    </div>
                    <div className="input-group tw-mb-2">
                        <span className="input-group-text">
                            En
                        </span>
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className='tw-flex tw-items-center tw-mb-2'>
                        <span>Zone/Subcity</span>
                    </div>
                    <div className="input-group tw-mb-4">
                        <span className="input-group-text">
                            አማ
                        </span>
                        <input type="text" className="form-control" placeholder="ስም" />
                    </div>
                    <div className="input-group tw-mb-2">
                        <span className="input-group-text">
                            En
                        </span>
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className='tw-flex tw-items-center tw-mb-2'>
                        <span>City</span>
                    </div>
                    <div className="input-group tw-mb-4">
                        <span className="input-group-text">
                            አማ
                        </span>
                        <input type="text" className="form-control" placeholder="ስም" />
                    </div>
                    <div className="input-group tw-mb-2">
                        <span className="input-group-text">
                            En
                        </span>
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className='tw-flex tw-items-center tw-mb-2'>
                        <span>Woreda/Kebele</span>
                    </div>
                    <div className="input-group tw-mb-4">
                        <span className="input-group-text">
                            አማ
                        </span>
                        <input type="text" className="form-control" placeholder="ስም" />
                    </div>
                    <div className="input-group tw-mb-2">
                        <span className="input-group-text">
                            En
                        </span>
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                </div>

                <Divider className='tw-mt-4' />

            </Accordion.Item>
        </Accordion>

    );
}

export default NewOrganizationForm;