import React, { Component } from 'react';
import { Button } from 'antd';
import { SettingOutlined, CloseOutlined, GatewayOutlined, KeyOutlined, ControlOutlined,CalendarOutlined,CaretDownOutlined } from '@ant-design/icons';
import './index.less'
import {Link} from 'react-router-dom'


export default class Header extends Component{

    
    state = {showMask: false}

    handleMask = () => {
        const showMask = this.state.showMask
        this.setState({showMask: !showMask})
    }
    render(){
        const {showMask,} = this.state
        return (
            <div className="header">
                <div className={showMask ? 'mask' : 'none-mask'}>
                    <div className='mask-content'>
                        <Link to='/cluster'>
                            <div className='left'>
                                <div className='route-content'>
                                    <span className='icon'><GatewayOutlined /></span>
                                    <div className='route-content-title'>集群管理</div>
                                    <div>对多集群以及每个集群的基础资源、服务组件和应用资源等的统一管理</div> 
                                </div>  
                                <div className='background-icon'><GatewayOutlined /></div>
                            </div>
                        </Link>
                        <div className='medium'>
                            <div className='route-content' style={{padding: "0 0 224px 0"}}>
                                <span className='icon'><KeyOutlined /></span>
                                <div className='route-content-title'>访问控制</div>
                                <div>对平台中的企业空间、帐户、以及角色权限进行统一管理</div>
                            </div>
                            <div className='background-icon'><KeyOutlined /></div>
                        </div>
                        <div className='right'>
                            <div className='route-content' style={{padding: "0 0 226px 0"}}>
                                <span className='icon'><SettingOutlined /></span>
                                <div className='route-content-title'>平台设置</div>
                                <div>定制化平台设置，如平台基本信息等</div>
                            </div>
                            <div className='background-icon'><SettingOutlined /></div>
                        </div>
                    </div>
                    <div className='mask-controle'>
                        <Button type="text" icon={<CloseOutlined style={{ color: '#fff' }}/>} block='true' onClick={this.handleMask}></Button>
                    </div>
                    
                </div>
                <div className='menu'>
                    <div className='menu-button'>
                        <div><Button type="text" shape="round" onClick={this.handleMask} icon={<ControlOutlined style={{color: 'gray'}}  />}>平台管理</Button></div>
                        <div>
                            <Link to='/admin'>
                                <Button type="text"  shape="round" icon={<CalendarOutlined  style={{color: 'gray'}} />}>工作台</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="logo">
                        logo
                        <img src="" alt="" />
                    </div>
                    <div className='admin-button'>
                        <Button type="text" shape="round">admin<CaretDownOutlined /></Button>
                        
                    </div>
                </div>
                <div className='header-bottom'></div>
            </div>
        )
    }
}