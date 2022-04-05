import { Divider } from '@mantine/core';
import { IconDeviceFloppy } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
    maximumFailedAttempts: yup.number().positive("This field must be greater than 0").required("This field is required"),
    lockoutTime: yup.number().positive("This field must be greater than 0").required("This field is required"),
}).required();


const MaximumFailedAttemptsLockoutForm = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(schema) });

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
                    <div className="tw-mb-4">
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <span>Maximum Failed Attempts</span>
                        </div>
                        <div className="tw-mb-4">
                            <input type="number" className={`tw-pr-3 form-control form-control-sm hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.maximumFailedAttempts ? "is-invalid" : ""}`} {...register("maximumFailedAttempts")} />
                            {errors.maximumFailedAttempts && <div className="invalid-feedback">{errors.maximumFailedAttempts.message}</div>}
                        </div>
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className="tw-mb-4">
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <span>Default Lockout Time</span>
                        </div>
                        <div className="input-group tw-mb-4">
                            <input type="number" className={`tw-pr-3 form-control form-control-sm hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.lockoutTime ? "is-invalid" : ""}`} {...register("lockoutTime")} />
                            <span className="input-group-text">
                                minute
                            </span>
                            {errors.lockoutTime && <div className="invalid-feedback">{errors.lockoutTime.message}</div>}
                        </div>
                    </div>
                </div>

                <Divider className='tw-mt-4' />


                <button type='submit' className='tw-mt-4 btn btn-primary tw-bg-[#1d2861]'>
                    <IconDeviceFloppy />
                    Save
                </button>

            </form >
        </div >
    );
}

export default MaximumFailedAttemptsLockoutForm;