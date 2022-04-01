import { Divider } from '@mantine/core';
import { IconDeviceFloppy } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
    minimumAge: yup.number().positive("This field must be greater than 0").required("This field is required"),
    maximumAge: yup.number().positive("This field must be greater than 0").required("This field is required"),
}).required();


const PasswordMinimumMaximumDateForm = () => {
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
                            <span>Minimum Age</span>
                        </div>
                        <div className="input-group tw-mb-4">
                            <input type="number" className={`tw-pr-3 form-control form-control-sm hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.minimumAge ? "is-invalid" : ""}`} {...register("minimumAge")} />
                            <span className="input-group-text">
                                days
                            </span>
                            {errors.minimumAge && <div className="invalid-feedback">{errors.minimumAge.message}</div>}
                        </div>
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className="tw-mb-4">
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <span>Maximum Age</span>
                        </div>
                        <div className="input-group tw-mb-4">
                            <input type="number" className={`tw-pr-3 form-control form-control-sm hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.maximumAge ? "is-invalid" : ""}`} {...register("maximumAge")} />
                            <span className="input-group-text">
                                days
                            </span>
                            {errors.maximumAge && <div className="invalid-feedback">{errors.maximumAge.message}</div>}
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

export default PasswordMinimumMaximumDateForm;