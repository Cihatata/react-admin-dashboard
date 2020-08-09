import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Dashboard from './components/Dashnoard';
import UserList from './components/UserList';
import SideMenu from './components/SideMenu';
import BreadcrumbMe from './components/BreadcrumbMe';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <SideMenu />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Switch>
            <Content style={{ margin: '0 16px' }}>
              <BreadcrumbMe />
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360, margin: '16px 0' }}
              >
                <Route exact path="/" component={Dashboard} />
                <Route path="/userlist" component={UserList} />
              </div>
            </Content>
          </Switch>
          <Footer style={{ textAlign: 'center' }}>
            React Admin Template with Ant Design © cihatata
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
