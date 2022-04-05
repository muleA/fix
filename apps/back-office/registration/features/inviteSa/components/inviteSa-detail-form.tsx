import { Divider } from '@mantine/core';
import { useRouter } from 'next/router';
import { IconAsteriskSimple, IconDeviceFloppy} from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

const schema = yup.object({
    email: yup.string().email("Please enter a valid email").required("This field is required"),
    amhFirstName: yup.string().required("This field is required"),
    enFirstName: yup.string().required("This field is required"),
    amhLastName: yup.string().required("This field is required"),
    enLastName: yup.string().required("This field is required"),
}).required();

type InviteSaDetailFormProps = {
    mode: "new" | "update";
};

const InviteSaDetailForm = (props: InviteSaDetailFormProps) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: yupResolver(schema) });
    const router = useRouter();
    const { id } = router.query;

    const superAdministrators = [
        { fullName: "zz zz", email: "zz@gmail.com", status: "Pending", isActive: false },
        { fullName: "zasdfz", email: "testregistration@gmail.com", status: "Accepted", isActive: true },
        { fullName: "Test Super Admin", email: "testsupperadmin@gmail.com", status: "Accepted", isActive: true },
        { fullName: "NAbilzz", email: "zzddnabild@gmail.com", status: "Pending", isActive: false },
    ];

    let status = "";

    if (props.mode == 'update') {
        status = superAdministrators.find((item) => (item.fullName == id.toString())).status;
        setValue("email", "nabil@gmail.com");
        setValue("amhFirstName", "ራንደም አንደያ ስም");
        setValue("enFirstName", "Random first name");
        setValue("amhLastName", "ራንደም መጨረሻ ስም");
        setValue("enLastName", "Random last name");
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

                <div className='tw-my-4 tw-flex'>
                    <div className='tw-grow'>
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                            <span>First Name</span>
                        </div>
                        <div className="input-group tw-mb-4">
                            <span className="input-group-text">
                                አማ
                            </span>
                            <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.amhFirstName ? "is-invalid" : ""}`} {...register("amhFirstName")} />
                            {errors.amhFirstName && <div className="invalid-feedback">{errors.amhFirstName.message}</div>}
                        </div>
                        <div className="input-group tw-mb-2">
                            <span className="input-group-text">
                                En
                            </span>
                            <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.enFirstName ? "is-invalid" : ""}`} {...register("enFirstName")} />
                            {errors.enFirstName && <div className="invalid-feedback">{errors.enFirstName.message}</div>}
                        </div>
                    </div>
                    <div className='tw-grow tw-ml-4'>
                        <div className='tw-flex tw-items-center tw-mb-2'>
                            <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                            <span>Last Name</span>
                        </div>
                        <div className="input-group tw-mb-4">
                            <span className="input-group-text">
                                አማ
                            </span>
                            <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.amhLastName ? "is-invalid" : ""}`} {...register("amhLastName")} />
                            {errors.amhLastName && <div className="invalid-feedback">{errors.amhLastName.message}</div>}
                        </div>
                        <div className="input-group tw-mb-2">
                            <span className="input-group-text">
                                En
                            </span>
                            <input type="text" className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.enLastName ? "is-invalid" : ""}`} {...register("enLastName")} />
                            {errors.enLastName && <div className="invalid-feedback">{errors.enLastName.message}</div>}
                        </div>
                    </div>
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <div className='tw-flex tw-items-center tw-mb-2'>
                        <IconAsteriskSimple className='tw-flex tw-mr-[3px]' color='red' size={10} />
                        <span>Email</span>
                    </div>
                    <div className="tw-mb-4">
                        <input type="text" disabled={props.mode == 'update'} className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${errors.email ? "is-invalid" : ""}`} {...register("email")} />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
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
                        {status == "Accepted" &&
                            <button type='button' className='tw-ml-2 btn btn-danger tw-bg-[#ff4d4f]'>
                                Deactivate
                            </button>
                        }
                        {status == "Pending" &&
                            <button type='button' className='tw-ml-2 btn hover:tw-border-[#1d2861]'>
                                Activate
                            </button>
                        }

                    </div>
                }

            </form >
        </div >
    );
}

export default InviteSaDetailForm;