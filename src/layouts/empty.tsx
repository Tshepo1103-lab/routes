import { Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const EmptyLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ justifyContent: 'center' }}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: <Link to="/">Home</Link>,
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: <Link to="/admin">Admin Portal</Link>,
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: <Link to="/client">Client Portal</Link>,
            },
          ]}
        />
      </Header>
      <Content style={{ padding: '48px 24px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            maxWidth: 1200,
            margin: '0 auto',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Demo Application ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default EmptyLayout;
