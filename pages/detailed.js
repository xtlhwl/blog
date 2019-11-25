import React from 'react'
import Head from 'next/head'
import {Button, Row, Col,Breadcrumb, Icon} from 'antd'
import Header from '../components/Header';
import Author from '../components/author'
import Advert from '../components/advert'
import Footer from '../components/footer'
import '../static/style/pages/detailed.css'

const Home = () => (
  <>
    <Head>
      <title>detailed</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
        <div>
        <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a >详情</a></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-title">
              React实战视频教程
            </div>
            <div className="list-icon center">
              <span><Icon type="calendar" />2019-06-28</span>
              <span><Icon type="folder" />视频教程</span>
              <span><Icon type="fire" />12453人</span>
            </div>
            <div className="detailed-content">
              详细内容，下节课编写
            </div>
          </div>
        </div>
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author></Author>
            <Advert></Advert>
      </Col>
    </Row>
    <div className="footer-context">
          <Footer></Footer>
        </div>
  </>
)
export default Home

