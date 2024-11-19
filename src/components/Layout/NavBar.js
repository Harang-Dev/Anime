import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, AppstoreAddOutlined, SearchOutlined } from '@ant-design/icons';

const { Header } = Layout;

const NavBar = () => {
  return (
    <Header style={{ backgroundColor: 'transparent' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{
          lineHeight: '64px',
          paddingLeft: 100,
          paddingRight: 100,
          backgroundColor: 'transparent'
        }}
      >
        <Menu.Item key="1" style={{ fontSize: 20, fontWeight: 'bold' }}>
          애니me
        </Menu.Item>
        <Menu.Item key="2" icon={<HomeOutlined />}>
          홈
        </Menu.Item>
        <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
          추가
        </Menu.Item>
        <Menu.Item key="4" icon={<SearchOutlined />}>
          검색
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
