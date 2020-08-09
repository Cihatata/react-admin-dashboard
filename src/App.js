import React from 'react';
import { Layout } from 'antd';

const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: 'yellow' }}>Header</Header>
      <Layout>
        <Sider style={{ height: '100vh' }}>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};

export default App;
