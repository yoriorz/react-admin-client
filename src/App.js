import React ,{ Component } from 'react';
// import { Button } from 'antd'
// import './App.less'
import 'antd/dist/antd.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Cluster from './pages/clustermanage/index'
// import Overview from './pages/overview'
// import Nodes from './pages/nodes'
// import Deployments from './pages/applications/deployments'
// import Jobs from './pages/applications/jobs'
// import Pods from './pages/applications/pods'


export default class App extends Component{

    render(){
         return (
            <BrowserRouter>
                <Switch>
                    {/* <Route path='/overview' component={Overview}/>
                    <Route path='/nodes' component={Nodes}/>
                    <Route path='/applications/deployments' component={Deployments}/>
                    <Route path='/applications/jobs' component={Jobs}/>
                    <Route path='/applications/pods' component={Pods}/> */}
                    <Route path='/cluster' component={Cluster}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route> 
                </Switch>    
            </BrowserRouter>
         )
    }
} 