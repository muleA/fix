import { Divider } from '@mantine/core';
import { IconAsteriskSimple, IconDeviceFloppy, IconTrash, IconLock } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from 'react';

const schema = yup.object({
    amhName: yup.string().required("This field is required"),
    enName: yup.string().required("This field is required"),
    amhDescription: yup.string(),
    enDescription: yup.string(),
}).required();

const MandateDetailForm = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = async (data) => {
        try {
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        setValue("amhName", "ራንደም ማንዴት");
        setValue("enName", "Random mandate data");
        setValue("amhDescription", "ራንደም መንዴት ኣስግስድ ስዳፍ ሳድፍ ውቀፍወቅ ፍወ ቅፍወፍ ውቀፍ ወፍ።");
        setValue("enDescription", "Hey there this is a random description");
    }, []);


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
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

            </form>
        </div>
    );
}

export default MandateDetailForm;