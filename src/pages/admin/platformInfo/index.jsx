import React, { Component } from 'react';
import { Card } from 'antd';
import './index.less'
import { NodeIndexOutlined, BankFilled, UserOutlined} from '@ant-design/icons';
export default class UserInfo extends Component{
    render(){
        return (
            <div>
                <div className="site-card-border-less-wrapper">
                    <Card title="平台信息" bordered={false} style={{ width: '100%', height: 120,backgroundColor: 'transparent'}} headStyle={{position:'relative',top:30}}>
                        <div className='platform-wrapper'>
                            <div className='text'>
                                <div>3.1.0</div>
                                <div>平台版本</div>
                            </div>
                            <div className='text'>
                                <div>1</div>
                                <div>集群数量</div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="site-card-border-runstatus-wrapper">
                    <Card title="平台运行状态" bordered={false} style={{ width: '100%', backgroundColor: 'transparent'}} headStyle={{position:'relative',top:30}}>
                        <div className='runstate-wrapper'>
                            <div className='text-wrapper'>
                                <div className='text'>
                                    <span className='icon'><NodeIndexOutlined /></span>
                                    <div>
                                        <div>2021-06-11 14:00:42</div>
                                        <div>统计截止时间</div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-wrapper'>
                                <div className='text'>
                                    <span className='icon'><BankFilled /></span>
                                    <div>
                                        <div>1</div>
                                        <div>企业空间</div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-wrapper'>
                                <div className='text'>
                                    <span className='icon'><UserOutlined /></span>
                                    <div>
                                        <div>1</div>
                                        <div>账户</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div >
            </div>
        )
    }
}