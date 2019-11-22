import React from 'react';
import  '../static/style/components/header.css'

import {Row,Col,Menu,Icon} from 'antd'
import Head from 'next/head';

const Header = () => (
    <div className="header">
    <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={10} xl={15} xxl={12}>
            <span className="header-logo">Seven7</span>
            <span className="header-text">前端内容</span>
        </Col>
        <Col className="memu-dev" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Icon type="home" />
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                    <Icon type="youtube" />
                    视频
                </Menu.Item>
                <Menu.Item key="life">
                    <Icon type="smile" />
                    视频
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
    
    </div>
)
export default Header