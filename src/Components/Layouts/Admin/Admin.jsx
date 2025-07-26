import { useState } from 'react';
import {
    LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import logo from './../../../logo.svg'
import { links } from './Links';
import { useHref, useNavigate } from 'react-router-dom';
import Category from '../../Pages/Categroies/Category';
const { Header, Sider, Content } = Layout;

function Admin() {
    let navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(false);
    let user = JSON.parse(localStorage.getItem('user'))
    let uri = useHref()
    
    return (
        <Layout style={{height: '100vh'}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div style={{color: '#fff', fontSize: '20px', padding: '10px', display:'flex', alignItems: 'center'}}>
                    <img src={logo} height={40} alt="" />
                    {collapsed ? '' : '28-GURUH'}
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={uri}
                    items={links}
                />
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px' }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <h3>{user.name}</h3>
                    <Button icon={<LogoutOutlined />} type='primary' danger onClick={()=>{
                        localStorage.removeItem('token')
                        localStorage.removeItem('user')
                        navigate('/login')
                    }} />
                </Header>
                <Content
                    style={{
                        margin: '15px',
                        padding: 24,
                        borderRadius: '20px',
                        backgroundColor: '#fff',
                        height: '100%',
                        overflow: 'auto'
                    }}
                >
                    <Category />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Admin;