import { Typography, Card, Space, Avatar, Row, Col, Statistic, Table, Tag, List } from 'antd';
import { UserOutlined, ShoppingCartOutlined, DollarOutlined, 
         CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

// Dummy data for recent activities
const recentActivities = [
  { key: '1', activity: 'Project Update', status: 'completed', date: '2024-03-15', time: '2 hours ago' },
  { key: '2', activity: 'Client Meeting', status: 'ongoing', date: '2024-03-15', time: '4 hours ago' },
  { key: '3', activity: 'Document Review', status: 'completed', date: '2024-03-14', time: '1 day ago' },
  { key: '4', activity: 'Team Discussion', status: 'ongoing', date: '2024-03-14', time: '1 day ago' },
];

// Table columns configuration
const columns = [
  {
    title: 'Activity',
    dataIndex: 'activity',
    key: 'activity',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      const statusConfig = {
        completed: { color: 'success', icon: <CheckCircleOutlined /> },
        ongoing: { color: 'processing', icon: <ClockCircleOutlined /> },
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
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
];

// Team members data
const teamMembers = [
  { name: 'John Smith', role: 'Project Manager', avatar: '#1890ff' },
  { name: 'Sarah Johnson', role: 'Developer', avatar: '#f56a00' },
  { name: 'Michael Brown', role: 'Designer', avatar: '#87d068' },
  { name: 'Emily Davis', role: 'Content Writer', avatar: '#9254de' },
];

const About = () => {
  return (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={16}>
          <Card>
            <Title level={2}>Client Dashboard</Title>
            <Paragraph>
              Welcome to your personalized dashboard. Here's an overview of your current projects and activities.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Statistic
              title="Project Completion"
              value={75.5}
              precision={1}
              suffix="%"
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={8}>
          <Card hoverable>
            <Statistic
              title="Active Projects"
              value={8}
              prefix={<ShoppingCartOutlined />}
              valueStyle={{ color: '#1890ff' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card hoverable>
            <Statistic
              title="Total Hours"
              value={164}
              prefix={<DollarOutlined />}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card hoverable>
            <Statistic
              title="Team Members"
              value={12}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#722ed1' }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card title="Recent Activities" extra={<a href="#">View All</a>}>
            <Table 
              columns={columns} 
              dataSource={recentActivities} 
              pagination={false}
              size="small"
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Team Members" extra={<a href="#">View All</a>}>
            <List
              itemLayout="horizontal"
              dataSource={teamMembers}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar style={{ backgroundColor: item.avatar }}>{item.name[0]}</Avatar>}
                    title={item.name}
                    description={item.role}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </Space>
  );
};

export default About;
