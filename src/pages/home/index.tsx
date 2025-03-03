  import { Typography, Card, Space, Statistic, Row, Col, Table, Tag, Progress, List } from 'antd';
  import { UserOutlined, ShoppingCartOutlined, DollarOutlined, LineChartOutlined, 
          CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
  const { Title, Paragraph } = Typography;

  // Dummy data for recent orders
  const recentOrders = [
    { key: '1', customer: 'John Doe', amount: 1200, status: 'completed', date: '2024-03-15' },
    { key: '2', customer: 'Jane Smith', amount: 850, status: 'pending', date: '2024-03-15' },
    { key: '3', customer: 'Bob Johnson', amount: 2300, status: 'completed', date: '2024-03-14' },
    { key: '4', customer: 'Alice Brown', amount: 920, status: 'cancelled', date: '2024-03-14' },
    { key: '5', customer: 'Charlie Wilson', amount: 1650, status: 'pending', date: '2024-03-13' },
  ];

  // Dummy data for top products
  const topProducts = [
    { title: 'Product A', sales: 234, progress: 90 },
    { title: 'Product B', sales: 187, progress: 75 },
    { title: 'Product C', sales: 156, progress: 65 },
    { title: 'Product D', sales: 132, progress: 55 },
  ];

  // Table columns configuration
  const columns = [
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount: number) => `$${amount.toLocaleString()}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        const statusConfig = {
          completed: { color: 'success', icon: <CheckCircleOutlined /> },
          pending: { color: 'warning', icon: <ClockCircleOutlined /> },
          cancelled: { color: 'error', icon: <CloseCircleOutlined /> },
        };
        return (
          <Tag icon={statusConfig[status as keyof typeof statusConfig].icon} 
              color={statusConfig[status as keyof typeof statusConfig].color}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  const Home = () => {
    return (
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Typography>
          <Title level={2}>Dashboard Overview</Title>
          <Paragraph>
            Welcome to your dashboard. Here's what's happening today.
          </Paragraph>
        </Typography>

        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable>
              <Statistic
                title="Active Users"
                value={1128}
                prefix={<UserOutlined />}
                valueStyle={{ color: '#3f8600' }}
              />
              <Paragraph type="secondary" style={{ marginTop: 8 }}>
                ↑ 12% from last week
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable>
              <Statistic
                title="Orders Today"
                value={93}
                prefix={<ShoppingCartOutlined />}
                valueStyle={{ color: '#cf1322' }}
              />
              <Paragraph type="secondary" style={{ marginTop: 8 }}>
                ↓ 5% from yesterday
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable>
              <Statistic
                title="Revenue"
                value={25600}
                prefix={<DollarOutlined />}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
              />
              <Paragraph type="secondary" style={{ marginTop: 8 }}>
                ↑ 18% from last month
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card hoverable>
              <Statistic
                title="Growth"
                value={38.2}
                prefix={<LineChartOutlined />}
                suffix="%"
                valueStyle={{ color: '#3f8600' }}
              />
              <Paragraph type="secondary" style={{ marginTop: 8 }}>
                Target: 40%
              </Paragraph>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={24} lg={16}>
            <Card title="Recent Orders" extra={<a href="#">View All</a>}>
              <Table 
                columns={columns} 
                dataSource={recentOrders} 
                pagination={false}
                size="small"
              />
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card title="Top Products" extra={<a href="#">More</a>}>
              <List
                dataSource={topProducts}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.title}
                      description={`${item.sales} sales`}
                    />
                    <Progress percent={item.progress} size="small" />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>

        <Card title="System Status">
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <Statistic title="System Uptime" value={99.9} suffix="%" />
            </Col>
            <Col span={8}>
              <Statistic title="Total Users" value={5489} />
            </Col>
            <Col span={8}>
              <Statistic title="Active Sessions" value={247} />
            </Col>
          </Row>
        </Card>
      </Space>
    );
  };

  export default Home;
