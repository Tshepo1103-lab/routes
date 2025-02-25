import { Card, Form, Input, Button, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

interface LoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values: LoginForm) => {
    // Simulate API call
    if (values.username === 'admin' && values.password === 'admin') {
      localStorage.setItem('auth_token', 'dummy_token_12345');
      localStorage.setItem('user_role', 'admin');
      message.success('Login successful!');
      navigate('/admin');
    } else if (values.username === 'client' && values.password === 'client') {
      localStorage.setItem('auth_token', 'dummy_token_67890');
      localStorage.setItem('user_role', 'client');
      message.success('Login successful!');
      navigate('/client');
    } else {
      message.error('Invalid credentials!');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f0f2f5'
    }}>
      <Card style={{ width: 400, padding: '24px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
          Login
        </Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Username (admin or client)" 
              size="large" 
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password (same as username)"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login; 