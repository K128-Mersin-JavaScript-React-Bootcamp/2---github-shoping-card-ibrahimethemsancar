import React,{useState,useEffect} from 'react'
import { Row, Col, Divider } from 'antd';
import CheckBox from '../components/CheckBox';
import Card from "./card"
import { NavLink } from 'react-router-dom';
const style = { background: '#0092ff', padding: '8px 0'  };

export default function Shop() {
    const url="http://localhost:3001/products"
   const [items,setItems]=useState([]);
   const [firstValue,setFirstValue]=useState([])
   const getProduct=async ()=>{
    const api_call=await fetch(url)
    const response=await api_call.json()
    setItems(response)
    setFirstValue(response)
    console.log(items)
}
    useEffect(() => {
        
       getProduct()
    }, [])
   
   console.log(items)
    return (
       
        <div style={{marginTop:"50px", textAlign:"center"}} id="productsView">
            <div>
           <CheckBox items={items} setItems={setItems} firstValue={firstValue} />
           </div>
             <Row className="row">
            
            {items.map(item => (
                <Col span={6} className="products">
                    <NavLink exact to={`/card/${item.id}`}><img src={item.image} alt="" className="image"/></NavLink>
                    <h3>{item.title}</h3>
                    <p>{item.price} TL</p>
                    <span><span> &#x2606;</span>{item.rating.rate}-{item.rating.count} Değerlendirme</span>
                </Col>
          ))}
            <Card items={items}/>
            </Row>
            
        </div>
      
    )
}







      
        
      

{/* <li key={item.id} className="liClass">
    <img src={`${item.image}`} alt="" className="image"/>
  <h3>{item.title}</h3>
  <p>{item.price}</p>
</li> */}
