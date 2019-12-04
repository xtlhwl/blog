import React ,{useState,useEffect} from 'react';
import  '../static/style/components/header.css'

import {Row,Col,Menu,Icon} from 'antd'
import Head from 'next/head';
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'


const Header = (res) =>{

    const [navArray,setNavArrary ] = useState([])

    useEffect(()=>{
        const  fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then((res) => {
                console.log(res.data.data,'获取到了type')
                return res.data.data
            })
            setNavArrary(result)
        }
        fetchData()
    },[])


    const handleClick =(e)=>{
        if(e.key==0){
            Router.push('/index')
        }else{
            Router.push('/list?id='+e.key)
        }
    }

    return  (
        <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10} xl={15} xxl={12}>
                <span className="header-logo">Seven7</span>
                <span className="header-text">前端内容</span>
            </Col>
            <Col className="memu-dev" xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal" onClick={handleClick}>
                    <Menu.Item key="0">
                        <Icon type="home" />
                        首页
                    </Menu.Item>
                    {
                        navArray.map((item)=> {
                            return (
                                <Menu.Item key={item.id}>
                                <Icon type={item.icon} />
                                    {item.typeName}
                                </Menu.Item>
                            )
                        })
                    }
                    
                </Menu>
            </Col>
        </Row>
        
        </div>
    )
}
export default Header