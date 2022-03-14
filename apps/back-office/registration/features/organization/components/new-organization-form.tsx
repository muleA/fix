import { Accordion, Group, Text, Divider } from '@mantine/core';
import { IconAsteriskSimple, IconDeviceFloppy } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
    amhName: yup.string().required("This field is required"),
    enName: yup.string().required("This field is required"),
    amhShortName: yup.string().required("This field is required"),
    enShortName: yup.string().required("This field is required"),
    amhDescription: yup.string().required("This field is required"),
    enDescription: yup.string().required("This field is required"),
    organizationType: yup.string().required("This field is required"),
    organizationSector: yup.string().required("This field is required"),
}).required();

type NewOrganizationFormProps = {
    isSideView:boolean;
};

const NewOrganizationForm = (props:NewOrganizationFormProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data) => {
        try {
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }
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
        <Accordion iconPosition="right" className={`tw-bg-white ${props.isSideView?"tw-w-7/12":"tw-w-full"}`}
            styles={{
                itemTitle: { borderBottom: "0.5px solid rgb(229 231 235)" }
            }}
        >
            <Accordion.Item label={<AccordionLabel />}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='tw-my-4'>
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                            <span>Name</span>
                        </div>
                        <div className="input-group tw-mb-4">
                            <span className="input-group-text">
                                አማ
                            </span>
                            <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.amhName ? "is-invalid" : ""}`} {...register("amhName")}  />
                            {errors.amhName && <div className="invalid-feedback">{errors.amhName.message}</div>}
                        </div>
                        <div className="input-group tw-mb-2">
                            <span className="input-group-text">
                                En
                            </span>
                            <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.enName ? "is-invalid" : ""}`} {...register("enName")}  />
                            {errors.enName && <div className="invalid-feedback">{errors.enName.message}</div>}
                        </div>
                    </div>

                    <Divider className='tw-mt-4' />

                    <div className='tw-my-4'>
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                            <span>Short name</span>
                        </div>
                        <div className="input-group tw-mb-4">
                            <span className="input-group-text">
                                አማ
                            </span>
                            <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.amhShortName ? "is-invalid" : ""}`} {...register("amhShortName")}  />
                            {errors.amhShortName && <div className="invalid-feedback">{errors.amhShortName.message}</div>}
                        </div>
                        <div className="input-group tw-mb-2">
                            <span className="input-group-text">
                                En
                            </span>
                            <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.enShortName ? "is-invalid" : ""}`} {...register("enShortName")} />
                            {errors.enShortName && <div className="invalid-feedback">{errors.enShortName.message}</div>}
                        </div>
                    </div>

                    <Divider className='tw-mt-4' />

                    <div className='tw-my-4'>
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                            <span>Description</span>
                        </div>
                        <div className="input-group tw-mb-4">
                            <span className="input-group-text">
                                አማ
                            </span>
                            <textarea className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.amhDescription ? "is-invalid" : ""}`} {...register("amhDescription")}></textarea>
                            {errors.amhDescription && <div className="invalid-feedback">{errors.amhDescription.message}</div>}
                        </div>
                        <div className="input-group tw-mb-2">
                            <span className="input-group-text">
                                En
                            </span>
                            <textarea className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.enDescription ? "is-invalid" : ""}`} {...register("enDescription")}></textarea>
                            {errors.enDescription && <div className="invalid-feedback">{errors.enDescription.message}</div>}
                        </div>
                    </div>

                    <Divider className='tw-mt-4' />

                    <div className='tw-my-4'>
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                            <span>Organization type</span>
                        </div>
                        <select defaultValue={""} className={`form-select hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.organizationType ? "is-invalid" : ""}`} {...register("organizationType")}>
                            <option value="" hidden={true} disabled={true}>Select organization type</option>
                            <option value="Agencies">Agencies</option>
                            <option value="Ministry">Minsitry</option>
                            <option value="Higher institution">Higher institution</option>
                            <option value="government">Government</option>
                            <option value="Education">Education</option>
                            <option value="Ngo">Ngo</option>
                        </select>
                        {errors.organizationType && <div className="invalid-feedback">{errors.organizationType.message}</div>}
                    </div>

                    <Divider className='tw-mt-4' />

                    <div className='tw-my-4'>
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                            <span>Organization sector</span>
                        </div>
                        <select defaultValue={""} className={`form-select hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.organizationSector ? "is-invalid" : ""}`} {...register("organizationSector")} >
                            <option value="" hidden={true} disabled={true}>Select organization sector</option>
                            <option value="Agencies">Test </option>
                            <option value="Ministry">Test 123</option>
                            <option value="Ministry">Hahaha</option>
                        </select>
                        {errors.organizationSector && <div className="invalid-feedback">{errors.organizationSector.message}</div>}
                    </div>

                    <Divider className='tw-mt-4' />

                    <button type='submit' className='tw-mt-4 btn btn-primary tw-bg-[#1d2861]'>
                        <IconDeviceFloppy />
                        Save
                    </button>
                </form>
            </Accordion.Item>
        </Accordion>

    );
}

export default NewOrganizationForm;