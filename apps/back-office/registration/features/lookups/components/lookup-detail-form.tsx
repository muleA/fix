import { Divider } from '@mantine/core';
import { IconAsteriskSimple, IconDeviceFloppy, IconTrash } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
    code: yup.string().required("This field is required"),
    amhName: yup.string().required("This field is required"),
    enName: yup.string().required("This field is required"),
    amhDescription: yup.string(),
    enDescription: yup.string()
}).required();

type LookupDetailFormProps = {
    mode: "new" | "update";
};

const LookupDetailForm = (props: LookupDetailFormProps) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(schema) });

    if (props.mode == 'update') {
        setValue("code", "12344");
        setValue("amhName", "ራንደም ተቋም");
        setValue("enName", "Random organization data");
        setValue("amhDescription", "ራንደም ተቋም ኣስግስድ ስዳፍ ሳድፍ ውቀፍወቅ ፍወ ቅፍወፍ ውቀፍ ወፍ።");
        setValue("enDescription", "Hey there this is a random description");
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
                        <span>Code</span>
                    </div>
                    <div className="tw-mb-4">
                        <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.code ? "is-invalid" : ""}`} {...register("code")} />
                        {errors.code && <div className="invalid-feedback">{errors.code.message}</div>}
                    </div>
                </div>

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
                    </div>
                }

            </form>
        </div>
    );
}

export default LookupDetailForm;