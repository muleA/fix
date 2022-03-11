import { useForm } from 'react-hook-form';
import User from '../../../models/user';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../api/login.api';

const schema = yup
  .object({
    username: yup.string().required('This field is required'),
    password: yup.string().required('This field is required'),
  })
  .required();

const LoginForm = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<boolean>(false);
  const {register,handleSubmit,formState: { errors },} = useForm<User>({ resolver: yupResolver(schema) });
 
  typeof window !== 'undefined' && localStorage.user_name && router.back();
  
  const onSubmit = async (data: User) => {
    await login(data);
    typeof window !== 'undefined' && localStorage.user_name && router.reload();
  };

  return (
    <div className="md:tw-w-1/2 tw-px-4 sm:tw-w-full xs:tw-w-full">
      <h2 className="tw-text-2xl tw-text-center tw-mb-5">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="tw-mb-5">
          <label className="form-label">Username</label>
          <input
            type="text"
            className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${
              errors.username ? 'is-invalid' : ''
            }`}
            {...register('username')}
            placeholder="Enter your username"
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username.message}</div>
          )}
        </div>
        <div className="tw-mb-5">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]  ${
              errors.password ? 'is-invalid' : ''
            }`}
            {...register('password')}
            placeholder="Enter your password"
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>
        {loginError && (
          <div className="tw-mb-5 tw-p-3 tw-bg-[#fff1f0] tw-border tw-border-[#ffa39e]">
            <h3 className="tw-text-base">Login Error</h3>
            <p>Invalid username or password</p>
          </div>
        )}
        <div className="tw-mb-5">
          <button
            type="submit"
            className="btn btn-primary tw-w-full tw-bg-[#1d2861]"
          >
            {' '}
            Log in
          </button>
        </div>
      </form>
      <p className="tw-text-center tw-mb-5">
        <a className="hover:tw-no-underline" href="./haha baby">
          I forgot my password
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
