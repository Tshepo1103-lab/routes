import { Layout, Menu, theme, Typography } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const ClientLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#fff', padding: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 24px' }}>
          <Title level={4} style={{ margin: '16px 24px 16px 0', flexShrink: 0 }}>
            Client Portal
          </Title>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ flex: 1, minWidth: 0 }}
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: <Link to="/client">Dashboard</Link>,
              },
              {
                key: '2',
                icon: <InfoCircleOutlined />,
                label: <Link to="/client/about">About</Link>,
              },
            ]}
          />
        </div>
      </Header>
      <Content style={{ padding: '24px 48px' }}>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Client Portal ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default ClientLayout;
