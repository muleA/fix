import { Accordion, Group, Text, Divider } from '@mantine/core';
import { IconAsteriskSimple } from '@tabler/icons';
import OrganizationAddressForm from './organization-address-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const BasicProfileForm = () => {

    const AccordionLabel = () => (
        <>
            <Group noWrap>
                <div>
                    <Text>Basic Profile</Text>
                    <Text size="sm" color="dimmed" weight={400}>
                        Modified basic profile
                    </Text>
                </div>
            </Group>
        </>
    );

    return (
        <Accordion iconPosition="right" className='tw-bg-white'
            styles={{
                itemTitle: { borderBottom: "0.5px solid rgb(229 231 235)" }
            }}
        >
            <Accordion.Item label={<AccordionLabel />}>
                <div className='tw-flex tw-mt-4'>
                    <div className='md:tw-w-1/2'>
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <IconAsteriskSimple className='tw-flex' color='red' size={10} />
                            <span className='tw-ml-2'>Name</span>
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

                    <div className='md:tw-w-1/2 md:tw-pl-4'>
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <IconAsteriskSimple className='tw-flex' color='red' size={10} />
                            <span className='tw-ml-2'>Short name</span>
                        </div>
                        <div className="input-group tw-mb-4">
                            <span className="input-group-text">
                                አማ
                            </span>
                            <input type="text" className="form-control" placeholder="ቀላል ስም" />
                        </div>
                        <div className="input-group tw-mb-2">
                            <span className="input-group-text">
                                En
                            </span>
                            <input type="text" className="form-control" placeholder="Short Name" />
                        </div>
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-flex tw-mt-4'>
                    <div className='md:tw-w-1/2'>
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <span className='tw-ml-2'>Description</span>
                        </div>
                        <div className="input-group tw-mb-4">
                            <span className="input-group-text">
                                አማ
                            </span>
                            <textarea className="form-control" placeholder="መግለጫ" />
                        </div>
                        <div className="input-group tw-mb-2">
                            <span className="input-group-text">
                                En
                            </span>
                            <textarea className="form-control" placeholder="Description" />
                        </div>
                    </div>

                    <div className='md:tw-w-1/2 md:tw-pl-4'>
                        <div>
                            <div className='tw-flex tw-items-center tw-mb-2'>
                                <IconAsteriskSimple className='tw-flex' color='red' size={10} />
                                <span className='tw-ml-2'>Organization Type</span>
                            </div>
                            <div className="tw-mb-4">
                                <select className="form-select" >
                                    <option value="1">Private Limited Company</option>
                                    <option value="2">Corporation</option>
                                    <option value="3">Government</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="tw-mb-2">Admin Account</label>
                            <input type="text" className="form-control" placeholder="asdf@admin.com" />
                        </div>
                    </div>
                </div>

                <Divider className='tw-my-4' />
                
                <OrganizationAddressForm />

            </Accordion.Item>
        </Accordion>

    );
}

export default BasicProfileForm;