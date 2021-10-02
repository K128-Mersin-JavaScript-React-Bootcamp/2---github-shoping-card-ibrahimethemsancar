import React from "react";

import "antd/dist/antd.css";
import "./index.css";
import MyHeader from "./components/MyHeader";
import MyContent from "./components/MyContent";
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import MyBody from "./components/MyBody";

function App() {
  
  return (
  <div>
    <Router>
   <MyHeader/>
  <MyBody/>
  </Router>
 </div>
  );
}

export default App;
