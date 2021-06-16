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
                <Layout style={{height: '100%'}}>
                    <Header className="header" routeHistory={this.props.history}>
                    </Header>
                    <Content/>
                </Layout>            
        )
    }
}