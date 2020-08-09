import React from 'react';
import { withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const BreadcrumbMe = (props) => {
  const { pathname } = props.location;
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default withRouter(BreadcrumbMe);
