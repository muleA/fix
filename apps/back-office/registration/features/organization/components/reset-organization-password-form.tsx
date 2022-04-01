import { Divider } from '@mantine/core';
import { IconAsteriskSimple, IconDeviceFloppy, IconTrash, IconLock } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
    password: yup.string().required("This field is required"),
    confirmedPassword: yup.string().required("This field is required").oneOf([yup.ref('password')], 'Passwords must match')
}).required();



const ResetOrganizationPasswordForm = () => {
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
                    <div className='tw-flex tw-items-center tw-mb-2'>
                        <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                        <span>Password</span>
                    </div>
                    <div className="tw-mb-2">
                        <input type="password" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.password ? "is-invalid" : ""}`} {...register("password")} />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className='tw-flex tw-items-center tw-mb-2'>
                        <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                        <span>Confirm password</span>
                    </div>
                    <div className="tw-mb-2">
                        <input type="password" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.confirmedPassword ? "is-invalid" : ""}`} {...register("confirmedPassword")} />
                        {errors.confirmedPassword && <div className="invalid-feedback">{errors.confirmedPassword.message}</div>}
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <button type='submit' className='tw-mt-4 btn btn-primary tw-bg-[#1d2861]'>
                    <IconDeviceFloppy />
                    Save
                </button>

            </form>
        </div>
    );
}

export default ResetOrganizationPasswordForm;