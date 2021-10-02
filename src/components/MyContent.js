import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import MyRoutes from './MyRoutes';
import { Row, Col, Divider } from 'antd';
const { Header, Content, Footer } = Layout;
export default function MyContent() {
    return (
        <Content style={{ padding: '0 50px' }}>
      
      <div className="site-layout-content">
      
      <MyRoutes/>
      </div>
    </Content>
    )
}
