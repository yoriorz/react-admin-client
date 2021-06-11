import React, { Component } from 'react';
import { Menu } from 'antd';
import { Button } from 'antd';
import './index.less'


export default class Header extends Component{
    render(){
        return (
            <div className="header">
                <div className="logo" />
                {/* <div className='menu'>
                    <div><Button type="text">平台管理</Button></div>
                    <div><Button type="text">工作台</Button></div>
                    <div><Button type="text">admin</Button></div>
                </div> */}
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} className="header-menu" style={{backgroundColor:'transparent'}}>
                    <Menu.Item key="1">平台管理</Menu.Item>
                    <Menu.Item key="2">工作台</Menu.Item>
                    <Menu.Item key="3" className="admin-menu">admin</Menu.Item>
                </Menu>
                <div className='header-bottom'></div>
            </div>
        )
    }
}