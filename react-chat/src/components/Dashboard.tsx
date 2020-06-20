import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/es/layout/style/index.css';
import 'antd/dist/antd.css'
import {Chatbox} from './Chatbox';
import './Dashboard.css';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const { Header, Content, Footer, Sider } = Layout;
const {SubMenu } = Menu;

export class Dashboard extends React.PureComponent {
    constructor(props: {}, style: {}) {
       super(props);
    }

    
    render() {
       return (
        <div className="window">
            <h1 className="header" style={{ padding: 0 }}>
                Heyyo Chat
            </h1>
            <Chatbox />
        </div>
       );
    }
 }

 /*{
        [{from: 'user', msg: 'hi'}].map((chat, i)=>(
            <div className="chatWindow" key ={i}>
                <Typography className='user'>
                    {chat.from}
                </Typography>
                <Chip label={chat.msg} style={{}}/>
            </div>
        ))
    }*/

    /*<div className="sidebar">
                    <Sider className="disappear"/>
                    <div className="top">
                    </div>
                    <Menu className="topics">
                        {
                            ['user'].map(topic=>(
                                <Menu.Item key={topic} icon={<UserOutlined />}>
                                    {topic}
                                </Menu.Item>
                            ))
                        }
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            Brian
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}>
                            Helena
                        </Menu.Item>
                    </Menu>
                </div>*/