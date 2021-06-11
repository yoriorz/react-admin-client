import React,{ Component } from "react";
import { Redirect } from "react-router";
import memoryUtils from '../../utils/memoryUtils'
import { Layout} from 'antd';
import Header from '../../components/header'
import Content from '../../components/content'
import './admin.less'

//  管理的路由组件
export default class Admin extends Component{  
    render(){
        const user =  memoryUtils.user
        if(!user || !user._id){
         //自动跳转到登录界面
            return <Redirect to='/login'/>
        }
        return(
                <Layout>
                    <Header className="header">
                    </Header>
                    <Content style= {{height: '100%'}}/>
                </Layout>            
        )
    }
}