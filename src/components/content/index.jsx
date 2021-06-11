import React, { Component } from 'react';
import UserInfo from '../../pages/admin/userInfo'
import PlatformInfo from '../../pages/admin/platformInfo'

export default class Content extends Component{
    render(){
        return (
            <div className='content' style={{padding:'20px', height: '100%'}}>
                <UserInfo/>
                <PlatformInfo/>
            </div>
        )
    }
}