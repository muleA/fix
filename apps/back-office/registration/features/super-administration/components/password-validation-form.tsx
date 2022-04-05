import { Divider, Checkbox } from '@mantine/core';
import { IconDeviceFloppy } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
    digitRequired: yup.boolean().required("This field is required"),
    lowercaseRequired: yup.boolean().required("This field is required"),
    uppercaseRequired: yup.boolean().required("This field is required"),
    nonAlphanumericRequired: yup.boolean().required("This field is required"),
    requiredLength: yup.number().positive("This field must be greater than 0").required("This field is required"),
    requiredUniqueChars: yup.number().positive("This field must be greater than 0").required("This field is required"),
}).required();


const PasswordValidationForm = () => {
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
                        <Checkbox label="Require Digit" color="indigo" {...register("digitRequired")} />
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className="tw-mb-4">
                        <Checkbox label="Require Lowercase" color="indigo" {...register("lowercaseRequired")} />
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className="tw-mb-4">
                        <Checkbox label="Require Uppercase" color="indigo" {...register("uppercaseRequired")} />
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className="tw-mb-4">
                        <Checkbox label="Require NonAlphanumeric" color="indigo" {...register("nonAlphanumericRequired")} />
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className="tw-mb-4">
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <span>Required Length</span>
                        </div>
                        <div className="tw-mb-4">
                            <input type="number" className={`tw-pr-3 form-control form-control-sm hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.requiredLength ? "is-invalid" : ""}`} {...register("requiredLength")} />
                            {errors.requiredLength && <div className="invalid-feedback">{errors.requiredLength.message}</div>}
                        </div>
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className="tw-mb-4">
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <span>Required Unique characters</span>
                        </div>
                        <div className="tw-mb-4">
                            <input type="number" className={`tw-pr-3 form-control form-control-sm hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.requiredUniqueChars ? "is-invalid" : ""}`} {...register("requiredUniqueChars")} />
                            {errors.requiredUniqueChars && <div className="invalid-feedback">{errors.requiredUniqueChars.message}</div>}
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

export default PasswordValidationForm;