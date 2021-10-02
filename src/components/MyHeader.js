import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Ecommerce from '../pages/Ecommerce'
import { Layout, Menu, Input,Space } from 'antd';
const { Header } = Layout;
const { Search } = Input;
export default function MyHeader() {
   const NavBarArray=["Shop","Stories", "About"]
    return (
        <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
      <Menu.Item key={0}><NavLink exact to="/">Ecommerce</NavLink></Menu.Item>
        {NavBarArray.map((item, index) => {
          const key = index + 1;
          return <Menu.Item key={key}><NavLink exact to={`/${item}`}>{item}</NavLink></Menu.Item>;
          
        })}
        <Menu.Item key={4} id="login"><NavLink exact to="/Login">Login</NavLink></Menu.Item>
        <Search placeholder="Search" id="input" style={{ width: 100 , position:"absolute",right:850,marginTop:"17px" }} />
      </Menu>
    </Header>
   
    
  </Layout>
  
  
    )
}
