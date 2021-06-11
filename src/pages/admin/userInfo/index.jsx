import React, { Component } from 'react';
import { ContactsOutlined, DownCircleFilled } from '@ant-design/icons';
  
import './index.less'


export default class UserInfo extends Component{
    render(){
        return (
            <div className="userInfo">
                <div className="avatar">
                    <img src="./favicon.ico" alt=""/>
                </div>
                <div className="info">
                    <strong>你好admin</strong>
                    <div className="loginfo">
                        <p>
                            <span className="icon-fisrt"><ContactsOutlined/></span>
                            platform-admin
                        </p>
                        <p>
                            <span className="icon-second"><DownCircleFilled /></span>
                            最近登录: 2021-06-11 13:50:57
                        </p>
                        
                    </div>
                </div>
            </div>
        )
    }
}