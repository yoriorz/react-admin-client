import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { BuildTwoTone,MailOutlined,AppstoreOutlined,SettingOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import './index.less'

export default class LeftNav extends Component{

    render(){
        const Sider = () => {
            const [openKeys, setOpenKeys] = React.useState(['sub1']);
            const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
            const onOpenChange = keys => {
              const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
              if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                setOpenKeys(keys);
              } else {
                setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
              }
            };
        
        const { SubMenu } = Menu;
        
        return (
            <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 200}}>
              <Menu.Item key="1">
                <Link to='/cluster/overview'>
                    概览
                </Link>
              </Menu.Item>
              <SubMenu key="sub1" icon={<MailOutlined />} title="节点管理">
                <Menu.Item key="2">
                  <Link to='/cluster/nodes'>
                    会话节点
                  </Link>
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="3">服务组件</Menu.Item>
              <Menu.Item key="4">项目管理</Menu.Item>
              <SubMenu key="sub2" icon={<AppstoreOutlined />} title="应用下载">
                <Menu.Item key="5">
                  <Link to='/cluster/deployments'>
                    工作负载
                  </Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to='/cluster/jobs'>
                    任务
                  </Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to='/cluster/pods'>
                    容器组
                  </Link>
                </Menu.Item>
                <Menu.Item key="8">服务</Menu.Item>
                <Menu.Item key="9">应用语音</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" icon={<SettingOutlined />} title="配置中心">
                <Menu.Item key="10">密码</Menu.Item>
                <Menu.Item key="11">配置</Menu.Item>
                <Menu.Item key="12">服务账号</Menu.Item>
              </SubMenu>
              <SubMenu key="sub5" icon={<SettingOutlined />} title="存储管理">
                <Menu.Item key="13">存储卷</Menu.Item>
                <Menu.Item key="14">存储卷快照</Menu.Item>
                <Menu.Item key="15">存储类型</Menu.Item>
              </SubMenu>
              <SubMenu key="sub6" icon={<SettingOutlined />} title="监控系统">
                <Menu.Item key="16">状态</Menu.Item>
                <Menu.Item key="17">应用资源</Menu.Item>
                <Menu.Item key="18">告知消息</Menu.Item>
                <Menu.Item key="19">思维策略</Menu.Item>
                <Menu.Item key="20">自定义监控</Menu.Item>
              </SubMenu>
              <SubMenu key="sub7" icon={<SettingOutlined />} title="设置">
                <Menu.Item key="21">基本信息</Menu.Item>
                <Menu.Item key="22">视觉性</Menu.Item>
              </SubMenu>
            </Menu>
          );
        }
        

        return(
            <div className='left-nav'>
                <div className='left-nav-header'>
                    <div className='icon'>
                        <BuildTwoTone  twoToneColor='hsla(0,0%,100%,.4)'/>
                    </div>
                    <div className='left-nav-header-info'>
                        <div className='user'>
                            主机
                        </div>
                        <div className='text'>
                            集群管理
                        </div>
                    </div>
                    
                </div>
                <div className='nav-info'>
                    <Sider/>
                </div>
            </div>
        )
    }
}