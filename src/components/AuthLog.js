import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List, Typography } from 'antd';
import { getAuthlog } from '../actions';

const AuthLog = (props) => {
  const { authLog, getAuthlog } = props;
  useEffect(() => {
    getAuthlog();
  }, []);
  return (
    <div className="site-layout-background">
      <List
        header={<div>Auth Log</div>}
        bordered
        dataSource={authLog}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authLog: state.authLog,
  };
};

export default connect(mapStateToProps, { getAuthlog })(AuthLog);
