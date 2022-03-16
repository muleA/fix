import { Divider } from '@mantine/core';
import { IconAsteriskSimple, IconDeviceFloppy, IconTrash, IconLock } from '@tabler/icons';
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

type OrganizationDetailFormProps = {
    mode: "new" | "update";
};

const OrganizationDetailForm = (props: OrganizationDetailFormProps) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(schema) });

    if (props.mode == 'update') {
        setValue("amhName", "ራንደም ተቋም");
        setValue("enName", "Random organization data");
        setValue("amhShortName", "ብስዳፍ");
        setValue("enShortName", "afdf");
        setValue("amhDescription", "ራንደም ተቋም ኣስግስድ ስዳፍ ሳድፍ ውቀፍወቅ ፍወ ቅፍወፍ ውቀፍ ወፍ።");
        setValue("enDescription", "Hey there this is a random description");
        setValue("organizationType", "Ministry");
        setValue("organizationSector", "test");
    }
    const onSubmit = async (data) => {
        try {
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
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
                        <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.amhName ? "is-invalid" : ""}`} {...register("amhName")} />
                        {errors.amhName && <div className="invalid-feedback">{errors.amhName.message}</div>}
                    </div>
                    <div className="input-group tw-mb-2">
                        <span className="input-group-text">
                            En
                        </span>
                        <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.enName ? "is-invalid" : ""}`} {...register("enName")} />
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
                        <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.amhShortName ? "is-invalid" : ""}`} {...register("amhShortName")} />
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
                        <option value="test">Test </option>
                        <option value="test 123">Test 123</option>
                        <option value="hahahaha">Hahaha</option>
                    </select>
                    {errors.organizationSector && <div className="invalid-feedback">{errors.organizationSector.message}</div>}
                </div>

                <Divider className='tw-mt-4' />
                {props.mode == 'new' &&
                    <button type='submit' className='tw-mt-4 btn btn-primary tw-bg-[#1d2861]'>
                        <IconDeviceFloppy />
                        Save
                    </button>
                }

                {props.mode == 'update' &&
                    <div className='tw-flex tw-my-4'>
                        <button type='submit' className=' btn btn-primary tw-bg-[#1d2861]'>
                            <IconDeviceFloppy />
                            Update
                        </button>
                        <button type='button' className='tw-ml-2 btn btn-danger tw-bg-[#ff4d4f]'>
                            <IconTrash />
                            Delete
                        </button>
                        <button type='button' className='tw-ml-2 btn hover:tw-border-[#1d2861]'>
                            <IconLock />
                            Deactivate
                        </button>
                    </div>
                }

            </form>
        </div>
    );
}

export default OrganizationDetailForm;