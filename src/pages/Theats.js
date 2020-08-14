import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table, Tag, Badge, Input } from 'antd';
import { getThreats } from '../actions';

const { Search } = Input;
const Threats = (props) => {
  const { urls, getThreats } = props;
  let [filterUrls, setFilterUrls] = useState(urls);

  useEffect(() => {
    // #Issue Birden fazla istek gidiyor
    getThreats();
  }, [filterUrls]);
  const arrFilter = (value, event) => {
    const { name } = event.target;
    filterUrls = urls.filter((url) => url[name].includes(value));
    console.log('filter', filterUrls);
    setFilterUrls(filterUrls);
  };
  const columns = [
    {
      title: 'URLHAUS REFERENCE',
      dataIndex: 'urlhaus_reference',
      key: 'urlhaus_reference',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: 'URL STATUS',
      dataIndex: 'url_status',
      key: 'urlStatus',
      render: (url_status) => (
        <>
          { (url_status === 'online') ? (<Badge color="green" text={url_status} />)
            : ( <Badge color="red" text={url_status} /> )
          }
          <Badge color="g" />
        </>
      ),
    },
    {
      title: 'HOST',
      dataIndex: 'host',
      key: 'host',
    },
    {
      title: 'DATE ADDED',
      dataIndex: 'date_added',
      key: 'date_added',
      render: (date_added) => <>{date_added.split(' ')[0]}</>,
    },
    {
      title: 'THREAT',
      key: 'threat',
      dataIndex: 'threats',
      render: (threats) => (
        <>
          <Tag color="#f50">{threats}</Tag>
        </>
      ),
    },
    {
      title: 'TAGS',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <>
          {tags.map((tag) => {
            const color = tag.length > 5 ? 'green' : 'red';
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
      <h1> Threat Analytics</h1>
      <Search
        placeholder="Host Address Filter"
        onSearch={(value, e) => arrFilter(value, e)}
        style={{ width: 200 }}
        name="host"
      />
      <Table
        style={{ marginTop: 30 }}
        columns={columns}
        dataSource={filterUrls}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    urls: state.urls,
  };
};

export default connect(mapStateToProps, { getThreats })(Threats);
