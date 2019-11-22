import React, { useState } from 'react';
import {Avatar,Divider} from 'antd'
import "../static/style/components/author.css"
const Author = () => {

    return (
        <div className="author-div">
            <div><Author size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg" /></div>
            <div className="author-introduction">
                简单的个人博客而已
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" />
                <Avatar size={28} icon="qq" className="account" />
                <Avatar size={28} icon="wechat" className="account" />
            </div>
        </div>
    )
}

export default Author