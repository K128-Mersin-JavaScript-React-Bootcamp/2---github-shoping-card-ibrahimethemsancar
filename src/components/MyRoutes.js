import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import Ecommerce from '../pages/Ecommerce'
import Shop from "../pages/Shop"
import Login from "../pages/Login"
import CardInfo from '../pages/CardInfo'
export default function MyRoutes() {
    return (
        <Switch>
        <Route exact path="/" component={Ecommerce}/>
        <Route path="/Shop" component={Shop}/>
        <Route path="/Login" component={Login}/>
        <Route path="/CardInfo" component={CardInfo}/>
        </Switch>
    )
}
