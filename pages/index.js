import React,{ useState } from 'react'
import Head from 'next/head'
import {Row, Col,List,Icon} from 'antd'
import axios from 'axios'
import Link from 'next/link'
import Header from '../components/Header';
import Author from '../components/author'
import Advert from '../components/advert'
import Footer from '../components/footer'


const Home = (list) =>{
  const [myList, setMyList] = useState(list.data)
  console.log(list)
  return (
    <div>
        <Head>
          <title>Home</title>
        </Head>
        <Header />
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
            <div className="list-left">
            <List 
              header={<div>最新日志</div>}
              itemLayout="vertical" // 数值
              dataSource={myList}
              renderItem={item => (
                <List.Item>
                    <h3 className="list-title">
                    <Link href={{pathname:'/detailed',query:{id:item.id}}}>
                    <a>{item.title}</a>
                    </Link>
                    </h3>
                    <div className="list-icon">
                      <span><Icon type="calendar" />{item.addTime}</span>
                      <span><Icon type="folder" />{item.typeName}</span>
                      <span><Icon type="fire" />{item.view_count}人</span>
                    </div>
                    <div className="list-context">{item.introduce}</div>
                </List.Item>
              )}
            />
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
    </div>
  )
}
 
Home.getInitialProps = async () => {

  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getAerticleList').then((res) =>{
      console.log('------>',res.data)
      resolve(res.data)
    })
  })
  return  await promise
}

  
  

export default Home

