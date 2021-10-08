import React,{useState,useEffect} from 'react'
import { NavLink,useParams } from 'react-router-dom';
import { Card,Button } from 'antd';

export default function Info({items,sa,setSa}) {
    let [count,setCount]=useState(0);
    let {id}=useParams()
    console.log(items)
 
     const handleClick=(e)=>{
         if(e.target.value=="minus"){
             count--
         }
         else if(e.target.value=="plus"){
             count++
         }
         setCount(count)
     }
 
     const addToCard=(item)=>{
         
         
         
     }
    
     
    
    
     return (
         <div className="">
              <button className="cardbtn">My Cart</button>
           {
               
               items.map((item,index)=>{
                   if(id==item.id){
                       return(
                         
                         <div className="site-card-border-less-wrapper">
                             <button>Go To Card({sa.length})</button>
                         <Card title={item.title} bordered={true} style={{ width:500 , borderColor:"black"}}>
                         <img src={item.image} alt="" className="card-img" />
                         <hr />
                           <p>{item.price} TL</p>
                           <hr />
                           <p><span> &#x2606;</span> {item.rating.rate}</p>
                           <button  onClick={()=>addToCard(item)} >Add to Card {item.price} TL</button>
                         <div className="count">
                         <Button className="process" onClick={handleClick} value="minus">-</Button>
                         <label >{count}</label>
                         <Button className="process" onClick={handleClick} value="plus">+</Button>
                         </div>
                         </Card>
                       </div>
                       )
                   }
               })
           }
         
         </div>
         
         
     )
}
