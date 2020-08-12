import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Legend,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';
import { getSysinfo, getRequestcount, getMaillog } from '../actions';

const Dashboard = (props) => {
  const {
    sysInfo,
    requestCount,
    mailLog,
    getSysinfo,
    getRequestcount,
    getMaillog,
  } = props;
  useEffect(() => {
    getSysinfo();
    getRequestcount();
    getMaillog();
  }, []);

  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row" xs={24} md={6}>
          <div className="site-layout-background demo-card">
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
      <Row style={{ marginTop: 16 }} gutter={16}>
        <Col className="gutter-row" xs={24} md={18}>
          <div className="site-layout-background chartjs-card">
            <h2>Request Hit</h2>
            <LineChart
              width={1000}
              height={250}
              data={requestCount}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                domain={['auto', 'auto']}
                name="Time"
                tickFormatter={(unixTime) => moment(unixTime).format('YYYY-MM')}
                type="number"
              />
              <YAxis dataKey="value" name="Request" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </div>
        </Col>
        <Col className="gutter-row" xs={24} md={6}>
          <div className="site-layout-background chartjs-card">
            <h1>Mail Security</h1>
            <BarChart width={300} height={250} data={mailLog}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="blocked" fill="red" />
              <Bar dataKey="allowed" fill="green" />
            </BarChart>
          </div>
        </Col>
      </Row>
      <Row style={{ margin: '16px 0' }} gutter={16}>
        <Col className="gutter-row" xs={24} md={12}>
          <div className="site-layout-background demo-card-bottom">Col-12</div>
        </Col>
        <Col className="gutter-row" xs={24} md={12}>
          <div className="site-layout-background demo-card-bottom">Col-12</div>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sysInfo: state.sysInfo,
    requestCount: state.requestCount,
    mailLog: state.mailLog,
  };
};

export default connect(mapStateToProps, {
  getSysinfo,
  getRequestcount,
  getMaillog,
})(Dashboard);
