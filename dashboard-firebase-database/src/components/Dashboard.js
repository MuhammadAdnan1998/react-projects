// src/components/Dashboard.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, FormOutlined, CommentOutlined, PictureOutlined, FileTextOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FormOutlined />}>
            <Link to="/posts">Posts</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<CommentOutlined />}>
            <Link to="/comments">Comments</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<PictureOutlined />}>
            <Link to="/albums">Albums</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<FileTextOutlined />}>
            <Link to="/photos">Photos</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<FileTextOutlined />}>
            <Link to="/todos">Todos</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<UserOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <h2 style={{ color: '#fff', textAlign: 'center' }}>Dashboard</h2>
        </Header>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            backgroundColor: '#fff',
            marginTop: '20px',
          }}
        >
          {/* Here you would render the current screen based on routing */}
          {/* Example of rendering a component dynamically */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
