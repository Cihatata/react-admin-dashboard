import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { control } from '../actions';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideMenu = ({ testFunc }) => {
  const [collapsed, setCollapsed] = useState(false);
  const test = () => {
    testFunc({ ip: '22.22.22.22' });
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className="logo"> LOGO </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<PieChartOutlined />}>
          <Link to="/threats">Threats</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/userlist">UserList</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<DesktopOutlined />} title="Logs">
          <Menu.Item onClick={test} key="3">
            <Link to="/logs/authlog">Auth Log</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/logs/errorlog">Error Log</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    testFunc: ({ ip }) => dispatch(control({ ip })),
  };
};
export default connect(null, mapDispatchToProps)(SideMenu);
