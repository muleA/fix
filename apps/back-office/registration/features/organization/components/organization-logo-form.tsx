import { Divider } from '@mantine/core';
import { IconDeviceFloppy, IconFile } from '@tabler/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from 'react';

const schema = yup.object({
    organizationLogo: yup.mixed()
        .required("You need to provide a file")
        .test("Empty", "Please upload a file", (value) => {
            return value.length != 0;
        })
        .test("fileType", "Only images are supported", (value) => {
            return ["image/jpeg", "image/png", "image/jpg"].includes(value[0]?.type)
        })
        .test("fileSize", "File Size should not exceed 3MB", (value) => {
            return value[0]?.size <= 3000000;
        })
}).required("This field is required");



const OrganizationLogoForm = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm({ resolver: yupResolver(schema) });
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

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
                    <IconFile className="tw-flex" color="#00bfd8" size={32} />
                </div>

                <Divider className='tw-mt-4' />

                <div className='tw-my-4'>
                    <input type="file" className='form-control' {...register("organizationLogo", { onChange: (e) => e.target.files.length == 0 ? setButtonDisabled(true) : setButtonDisabled(false) })} />
                    <p className='tw-text-red-500'>{errors?.organizationLogo && errors.organizationLogo.message}</p>
                </div>

                <Divider className='tw-mt-4' />

                <button disabled={buttonDisabled} type='submit' className='tw-mt-4 btn'>
                    <IconDeviceFloppy />
                    Save
                </button>

            </form>
        </div>
    );
}

export default OrganizationLogoForm;