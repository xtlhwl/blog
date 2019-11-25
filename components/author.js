// import React, { useState } from 'react';
import {Avatar,Divider} from 'antd'
import "../static/style/components/author.css"

const Author = () => {

    return (
        <div className="author-div">
            <div><Avatar size={100} src="../static/img/WeChatffe.png" /></div>
            <div className="author-introduction">
                <span>简单的个人博客而已</span>
                {/* <Divider>社交账号</Divider> */}
                <Avatar size={28} icon="github" className="account" srcSet="https://github.com/xtlhwl"/>
                <Avatar size={28} icon="qq" className="account" />
                <Avatar size={28} icon="wechat" className="account" />
            </div>
        </div>
    )
}

export default Author