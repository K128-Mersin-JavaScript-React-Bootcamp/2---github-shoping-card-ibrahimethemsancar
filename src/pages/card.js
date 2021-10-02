import React,{useState,useEffect} from 'react'
import { NavLink,useParams } from 'react-router-dom';
export default function Card() {
    const url="http://localhost:3001/products"
    let {id}=useParams()
    const [items,setItems]=useState([]);
    const getProduct=async ()=>{
        const api_call=await fetch(url)
        const response=await api_call.json()
        setItems(response)
        
        
    }
    useEffect(() => {
        
        getProduct()
     }, [])
     console.log(items)
    return (
        
        <div>
          
        {
            
        }
        </div>
    )
}
