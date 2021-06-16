import React,{ Component } from "react";
import { Layout } from 'antd';
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../../components/header";
import LeftNav from '../../components/left-nav'
// import ClusterContent from './content'
import './index.less'
import Overview from '../overview'
import Nodes from '../nodes'
import Deployments from '../applications/deployments'
import Jobs from '../applications/jobs'
import Pods from '../applications/pods'



export default class clusterManager extends Component{
  render(){
    const { Sider, Content } = Layout;
    return(
      <Layout style={{height: '100%'}}>
        <Header>Header</Header>
        <Layout>
          <Sider style={{background: 'transparent'}}>
            <LeftNav></LeftNav>
          </Sider>
          <Content>
              <Switch>
                <Route path='/cluster/overview' component={Overview}/>
                <Route path='/cluster/nodes' component={Nodes}/>
                <Route path='/cluster/deployments' component={Deployments}/>
                <Route path='/cluster/jobs' component={Jobs}/>
                <Route path='/cluster/pods' component={Pods}/>
                <Redirect to='/cluster/overview'></Redirect>
              </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}