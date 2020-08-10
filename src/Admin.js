import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

// import Dashboard from './components/Dashnoard';
import UserList from './components/UserList';
import SideMenu from './components/SideMenu';
import BreadcrumbMe from './components/BreadcrumbMe';
import HeaderMe from './components/HeaderMe';

const { Header, Content, Footer } = Layout;

const Admin = (props) => {
  const { isLogin } = props;
  useEffect(() => {
    if (isLogin) {
      console.log('Admin sayfasinda kal');
    } else {
      console.log('Logine yonlendir');
      props.history.push('/login');
    }
  }, [isLogin]);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout className="site-layout">
        <Header
          className="site-layout-background header"
          style={{ padding: '0 5%' }}
        >
          <HeaderMe />
        </Header>
        <Switch>
          <Content style={{ margin: '0 16px' }}>
            <BreadcrumbMe />
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, margin: '16px 0' }}
            >
              {/* <Route exact path="/" component={Dashboard} /> */}
              <Route path="/userlist" component={UserList} />
            </div>
          </Content>
        </Switch>
        <Footer style={{ textAlign: 'center' }}>
          React Admin Template with Ant Design © cihatata
        </Footer>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapStateToProps)(Admin);
