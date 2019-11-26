import React from 'react'
import Head from 'next/head'
import {Affix, Row, Col,Breadcrumb, Icon} from 'antd'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import Header from '../components/Header';
import Author from '../components/author'
import Advert from '../components/advert'
import Footer from '../components/footer'
import '../static/style/pages/detailed.css'



const Home = () => {
  let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
  return (
    <>
      <Head>
        <title>detailed</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="detailed-left">
          <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a >详情</a></Breadcrumb.Item>
              </Breadcrumb>
          </div>
            <div className="detailed-context">
              <div className="detailed-title">
                React实战视频教程
              </div>
              <div className="list-icon center">
                <span><Icon type="calendar" />2019-06-28</span>
                <span><Icon type="folder" />视频教程</span>
                <span><Icon type="fire" />12453人</span>
              </div>
              <div className="detailed-content">
                  <ReactMarkdown
                    source={markdown}
                    escapeHtml = {false}
                  />
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
              <Author></Author>
              <Advert></Advert>
              
              <Affix offsetTop={5}>
                <div className="detailed-nav comm-box">
                    <div>文章目录</div>
                  <div className="nav-title">
                    <MarkNav
                      className="article-menu"
                      source={markdown}
                      ordered = {false}
                      />
                  </div>
              </div>
              </Affix>
        </Col>

      </Row>
      <div className="footer-context">
            <Footer></Footer>
          </div>
    </>
  )
}
export default Home

