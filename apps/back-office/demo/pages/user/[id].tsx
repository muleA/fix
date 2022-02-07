import tw from 'twin.macro';
import { useRouter } from 'next/router';
import { Input, Radio, Form } from 'antd';
import { Button } from '@ui';
import 'antd/dist/antd.css';
import UserNewForm from '../../features/user/new-form';

const User = () => {
  return <UserNewForm />;
};

export default User;
