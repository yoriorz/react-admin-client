import React,{ Component } from "react";
import './login.less'
import { Form, Button, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import logo from './images/favicon.ico'
import memoryUtils from '../../utils/memoryUtils' 
import storageUtils from '../../utils/storageUtils' 
import { Redirect } from "react-router";

// import { reqLogin } from '../../api'

const Item = Form.Item //不能写在import之前

const NormalLoginForm = (props) => {
    const {routeHistory} = props
    const onFinish = (values) => {
        memoryUtils.user = {_id:1}//存到内存中
        routeHistory.replace('/')
        storageUtils.saveUser(memoryUtils.user)
    }
    // const onFinish = async (values) => {
    //   console.log('Received values of form: ', values);
    //   try{
    //       const response = await reqLogin(values.username, values.password)
    //       console.log('登陆成功')
            //  const result = response
            //  if(result.status === 0){ //登陆成功
            //     message.success('登陆成功')
                // memoryUtils.user = result.data //存到内存中
            //     //跳转到管理界面
                // this.props.history.replace('/')
            //  }else{ //登录失败
            //     message.error(result.msg)
            //  }
    //   }catch(error){
    //       console.log('登录失败',error)
    //   }
    // //   reqLogin(values.username,values.password).then(response => {
    //         // console.log('登陆成功')
    // // }).catch(error => {
    //         // console.log('登录失败',error)
    // // })
    // }
    return(
        <Form
            name="normal_login"
            className="login-form"
            onFinish={onFinish}
        >
            <Item name="username">
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Item>
            <Item name="password">
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
            </Item>
            <Item>
                <Button type="primary" htmlType="submit" className="login-form-button" >
                    登录 
                </Button>
            </Item>
        </Form>
    )
}
//  登录的路由组件
export default class Login extends Component{
    
    // handleSubmit = (event) => {

    // }

     render(){ 
         //判断用户是否登录，如果已经登录，就跳转到管理界面
        //  const user = storageUtils.getUser()
        //  if(user._id){
        //     return <Redirect to='/'/>
        //  }
        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="" srcset="" />
                    <h1>k8s容器管理界面</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <NormalLoginForm routeHistory={this.props.history}/>
                </section>
            </div>
        )
    }
 }

//  前台表单验证
//  搜集表单输入数据
