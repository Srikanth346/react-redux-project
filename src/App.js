import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, YuqueOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './style.css';

import CryptoCard from './CryptoCard';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Crypto Art', '1', <YuqueOutlined />),
  getItem('Desktop', '2', <DesktopOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            textAlign: 'center',
          }}
        >
          <h2>React Application</h2>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
              margin: '16px 0',
            }}
          >
            <CryptoCard />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
