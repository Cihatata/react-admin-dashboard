import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { signIn } from '../actions';

const NormalLoginForm = (props) => {
  const { isLogin, signin } = props;
  const authControl = () => {
    if (isLogin) {
      props.history.push("/");
    }
  };

  useEffect(() => {
    authControl();
  }, [isLogin]);
  const auth = ({ username, password }) => {
    if (username === 'admin' && password === 'admin') {
      signin();
    } else {
      alert('Password or Username is incorrect');
    }
  };

  const onFinish = (values) => {
    console.log(values);
    auth(values);
  };

  return (
    <div className="form">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username: admin"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password: admin"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signin: () => dispatch(signIn()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(NormalLoginForm));
