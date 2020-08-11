import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { CloudServerOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSysinfo } from '../actions';

const Dashboard = (props) => {
  const { sysInfo, getSysinfo } = props;
  useEffect(() => {
    getSysinfo();
  }, []);
  return (
    <div>
      <h1> Dashboard </h1>
      <Row gutter={16}>
        <Col className="gutter-row" xs={24} md={6}>
          <div className="site-layout-background demo-card">
            <CloudServerOutlined style={{fontSize: 48}} twoToneColor="#fff" />
            CPU usage {sysInfo.CPU}
          </div>
        </Col>
        <Col className="gutter-row" xs={24} md={6}>
          <div className="site-layout-background demo-card">
            Memory usage {sysInfo.Memory}
          </div>
        </Col>
        <Col className="gutter-row" xs={24} md={6}>
          <div className="site-layout-background demo-card">
            Storage Usage {sysInfo.Storage}
          </div>
        </Col>
        <Col className="gutter-row" xs={24} md={6}>
          <div className="site-layout-background demo-card">
            Error Log {sysInfo.ErrorLog}
          </div>
        </Col>
      </Row>
      <Link to="/userlist"> UserList </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sysInfo: state.sysInfo,
  }
}

export default connect(mapStateToProps, { getSysinfo })(Dashboard);
