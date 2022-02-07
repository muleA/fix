import tw from 'twin.macro';
import { useRouter } from 'next/router';
import { Input, Radio, Form } from 'antd';
import 'antd/dist/antd.css';

const Container = tw.div`
flex flex-col items-center justify-center h-full pt-12
`;

const UserNewForm = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Form layout="vertical">
        <Form.Item label="First Name" name="firstName">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="lastName">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Gender" name="layout">
          <Radio.Group>
            <Radio value="horizontal">Horizontal</Radio>
            <Radio value="vertical">Vertical</Radio>
            <Radio value="inline">Inline</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
      <button type="button">UI button</button>
    </Container>
  );
};

export default UserNewForm;
