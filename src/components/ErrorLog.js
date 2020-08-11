import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List, Typography } from 'antd';
import { getErrorlog } from '../actions';

const ErrorLog = (props) => {
  const { errorLog, getErrorlog } = props;
  useEffect(() => {
    getErrorlog();
  }, []);
  return (
    <div className="site-layout-background">
      <List
        header={<div>Error Log</div>}
        bordered
        dataSource={errorLog}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[ERROR]</Typography.Text> {item}
          </List.Item>
        )}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errorLog: state.errorLog,
  };
};

export default connect(mapStateToProps, { getErrorlog })(ErrorLog);
