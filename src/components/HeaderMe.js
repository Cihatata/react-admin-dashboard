import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Dropdown, Menu } from 'antd';
import { logout } from '../actions';

const HeaderMe = (props) => {
  const { logOut } = props;
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://localhost:3000/dashboard"
        >
          User Info
        </a>
      </Menu.Item>
      <Menu.Item onClick={logOut} danger>
        Log Out
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <div>
         User <Avatar
            onClick={(e) => e.preventDefault()}
            className="ant-dropdown-link"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </div>
      </Dropdown>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(HeaderMe);
