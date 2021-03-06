import React from 'react'

import {Row,Col, Menu} from 'antd';
import {
    HomeOutlined,
    YoutubeOutlined,
    FireOutlined
  } from '@ant-design/icons';

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo">L.G.X</span>
            <span className="header-txt">专注前端开发,每年100集免费视频。</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal">
                <Menu.Item key="home">
                    <HomeOutlined/>
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                <YoutubeOutlined />
                    视频
                </Menu.Item>
                <Menu.Item key="life">
                <FireOutlined />
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header