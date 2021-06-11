import React ,{ Component } from 'react';
// import { Button } from 'antd'
// import './App.less'
import 'antd/dist/antd.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login'
import Admin from './pages/admin/admin'



export default class App extends Component{

    render(){
         return (
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>    
            </BrowserRouter>
         )
    }
} 