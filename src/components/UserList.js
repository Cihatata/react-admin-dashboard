import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table, Tag } from 'antd';
import { getUser } from '../actions';

const UserList = (props) => {
  const { userList, getUser } = props;
  useEffect(() => {
    // #Issue Birden fazla istek gidiyor
    getUser();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'first_name',
      key: 'name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'E-Mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'IP',
      dataIndex: 'ip_address',
      key: 'ip_address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  return (
    <div>
      <h1> UserList </h1>
      <Table columns={columns} dataSource={userList} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
  };
};

export default connect(mapStateToProps, { getUser })(UserList);
