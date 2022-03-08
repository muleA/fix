import { Accordion, Divider, Button } from '@mantine/core';
import { IconDeviceFloppy } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const OrganizationAddressForm = () => {


    return (
        <Accordion className='tw-bg-white'
            styles={{
                itemTitle: { border: "0.5px solid rgb(229 231 235)", backgroundColor: "rgb(243 244 246)" }
            }}
        >
            <Accordion.Item label={"Organization Address"}>
                <div className='tw-my-4'>
                    <div className='tw-flex tw-items-center tw-mb-2'>
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

                <div className="tw-my-4">
                    <label className='tw-mb-2'>House number</label>
                    <input type="text" className="form-control" name="example-password-input" placeholder="Enter house number" />
                </div>

                <Divider className='tw-mt-4' />

                <div className="tw-my-4">
                    <label className='tw-mb-2'>P.O.Box</label>
                    <input type="text" className="form-control" name="example-password-input" placeholder="Enter house number" />
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className='tw-flex tw-items-center tw-mb-2'>
                        <span>Mobile number</span>
                    </div>
                    <div className="input-group tw-mb-2">
                        <span className="tw-mr-[0.5px]">
                            <select className="form-select" >
                                <option value="251">Ethiopia (+251)</option>
                                <option value="1">USA (+1)</option>
                                <option value="123">Government (+123)</option>
                            </select>
                        </span>
                        <input type="text" className="form-control" placeholder="Example: 9xxxxxxxx" />
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className='tw-flex tw-items-center tw-mb-2'>
                        <span>Telephone number</span>
                    </div>
                    <div className="input-group tw-mb-2">
                        <span className="tw-mr-[0.5px]">
                            <select className="form-select" >
                                <option value="251">Ethiopia (+251)</option>
                                <option value="1">USA (+1)</option>
                                <option value="123">Government (+123)</option>
                            </select>
                        </span>
                        <input type="text" className="form-control" placeholder="Enter telephone number" />
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className='tw-flex tw-items-center tw-mb-2'>
                        <span>Fax number</span>
                    </div>
                    <div className="input-group tw-mb-2">
                        <span className="tw-mr-[0.5px]">
                            <select className="form-select" >
                                <option value="251">Ethiopia (+251)</option>
                                <option value="1">USA (+1)</option>
                                <option value="123">Government (+123)</option>
                            </select>
                        </span>
                        <input type="text" className="form-control" placeholder="Enter fax number" />
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className="tw-my-4">
                    <label className='tw-mb-2'>Email</label>
                    <input type="text" className="form-control" placeholder="Enter email" />
                </div>

                <Button type="submit" leftIcon={<IconDeviceFloppy />} >
                    Connect to database
                </Button>

            </Accordion.Item>
        </Accordion>

    );
}

export default OrganizationAddressForm;