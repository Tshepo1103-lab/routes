import { Layout, Menu, theme, Typography } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { HomeOutlined, DashboardOutlined } from '@ant-design/icons';
import { ProductProvider } from "../providers/productProvider";
import Navbar from '../components/navbar';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const AdminLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ProductProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Navbar />
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
          >
            <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <HomeOutlined />,
                  label: <Link to="/admin">Dashboard</Link>,
                },
                {
                  key: '2',
                  icon: <DashboardOutlined />,
                  label: <Link to="/admin/home">Home</Link>,
                },
                {
                  key: '3',
                  icon: <DashboardOutlined />,
                  label: <Link to="/admin/products">Products</Link>,
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }}>
              <Title level={4} style={{ margin: '16px 24px' }}>Admin Dashboard</Title>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div
                style={{
                  padding: 24,
                  minHeight: 360,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }}
              >
                <Outlet />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Demo Admin Dashboard ©{new Date().getFullYear()}
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </ProductProvider>
  );
};

export default AdminLayout;
