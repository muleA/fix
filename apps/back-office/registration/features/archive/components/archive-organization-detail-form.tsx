import { Divider } from '@mantine/core';
import { IconAsteriskSimple, IconArrowBackUp } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from 'react';

const schema = yup.object({
    amhName: yup.string().required("This field is required"),
    enName: yup.string().required("This field is required"),
    amhShortName: yup.string().required("This field is required"),
    enShortName: yup.string().required("This field is required"),
    amhDescription: yup.string().required("This field is required"),
    enDescription: yup.string().required("This field is required"),
    organizationType: yup.string().required("This field is required"),
}).required();


const ArchiveOrganizationDetailForm = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(schema) });

    useEffect(() => {
        setValue("amhName", "ራንደም ተቋም");
        setValue("enName", "Random organization data");
        setValue("amhShortName", "ብስዳፍ");
        setValue("enShortName", "afdf");
        setValue("amhDescription", "ራንደም ተቋም ኣስግስድ ስዳፍ ሳድፍ ውቀፍወቅ ፍወ ቅፍወፍ ውቀፍ ወፍ።");
        setValue("enDescription", "Hey there this is a random description");
        setValue("organizationType", "Ministry");
    }, []);

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
                        <input disabled={true} type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.amhName ? "is-invalid" : ""}`} {...register("amhName")} />
                        {errors.amhName && <div className="invalid-feedback">{errors.amhName.message}</div>}
                    </div>
                    <div className="input-group tw-mb-2">
                        <span className="input-group-text">
                            En
                        </span>
                        <input disabled={true} type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.enName ? "is-invalid" : ""}`} {...register("enName")} />
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
                        <input disabled={true} type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.amhShortName ? "is-invalid" : ""}`} {...register("amhShortName")} />
                        {errors.amhShortName && <div className="invalid-feedback">{errors.amhShortName.message}</div>}
                    </div>
                    <div className="input-group tw-mb-2">
                        <span className="input-group-text">
                            En
                        </span>
                        <input disabled={true} type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.enShortName ? "is-invalid" : ""}`} {...register("enShortName")} />
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
                        <textarea disabled={true} className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.amhDescription ? "is-invalid" : ""}`} {...register("amhDescription")}></textarea>
                        {errors.amhDescription && <div className="invalid-feedback">{errors.amhDescription.message}</div>}
                    </div>
                    <div className="input-group tw-mb-2">
                        <span className="input-group-text">
                            En
                        </span>
                        <textarea disabled={true} className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.enDescription ? "is-invalid" : ""}`} {...register("enDescription")}></textarea>
                        {errors.enDescription && <div className="invalid-feedback">{errors.enDescription.message}</div>}
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className='tw-flex tw-items-center tw-mb-2'>
                        <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                        <span>Organization type</span>
                    </div>
                    <select disabled={true} defaultValue={""} className={`form-select hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.organizationType ? "is-invalid" : ""}`} {...register("organizationType")}>
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

                <div className='tw-my-4 tw-p-4 tw-bg-[#e6f7ff] tw-border tw-border-[#91d5ff]'>
                    <h3 className='tw-text-base'>Reason for deletion</h3>
                    <p className='tw-text-sm'>
                        Some random reason homie :)
                    </p>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-flex tw-my-4'>
                    <button type='button' className='tw-ml-2 btn btn-danger tw-bg-[#ff4d4f]'>
                        <IconArrowBackUp />
                        Restore
                    </button>
                </div>

            </form>
        </div>
    );
}

export default ArchiveOrganizationDetailForm;