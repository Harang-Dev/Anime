import React from 'react';
import { Dropdown, message, Space, Layout, Menu } from 'antd';
import { HomeOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const NavBar = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: '랭킹순',
      key: '1',
      onClick: () => {
        navigate('/top');
      },
    },
    {
      label: '2nd menu item',
      key: '2',
      onClick: () => {
        message.info('2nd menu item clicked');
      },
    },
    {
      label: '3rd menu item',
      key: '3',
      onClick: () => {
        message.info('3rd menu item clicked');
      },
    },
  ];

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
          backgroundColor: 'transparent',
        }}
      >
        <Menu.Item key="1" style={{ fontSize: 20, fontWeight: 'bold' }}>
          애니me
        </Menu.Item>
        <Menu.Item key="2" icon={<HomeOutlined />}>
          홈
        </Menu.Item>
        <Menu.Item key="3">
          <Dropdown
            menu={{ items }}
            overlayStyle={{ backgroundColor: 'transparent'}}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                애니메이션
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="4" icon={<SearchOutlined />}>
          검색
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
