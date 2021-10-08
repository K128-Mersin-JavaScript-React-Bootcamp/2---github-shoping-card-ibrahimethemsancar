import React,{useState,useEffect} from 'react'
import { Row, Col, Checkbox, List,Layout, Button, Select} from 'antd';
import CheckBox from '../components/CheckBox';
import CardInfo from "./CardInfo"
import { Link, NavLink } from 'react-router-dom';
const style = { background: '#0092ff', padding: '8px 0'  };
const { Header, Footer, Sider, Content } = Layout;
export default function Shop() {
    const url="http://localhost:3001/products"
   const [items,setItems]=useState([]);
   //const [firstValue,setFirstValue]=useState([])
   const [categoryList,setCategoryList]=useState([])
   const [filter,setFilter]=useState({})
   const [allFilters,setAllFilters]=useState(true)
   const [Listt,setListt]=useState("mostPopular")
   const [cart,setCart]=useState([])
   const [page,setPage]=useState('products')
   const sortList=[{
     name:"mostPopular",
     description:"Most Popular"
   },{
    name:"leastPopular",
    description:"Least Popular"
   },
   {
    name:"highestPrice",
    description:"Highest Price"
   },{
    name:"lowestPrice",
    description:"Lowest Price"
   }]
   const getProduct=async ()=>{
    const api_call=await fetch(url)
    const response=await api_call.json()
    setItems(response)
    //setFirstValue(response)
     
    console.log(items)
    const handleCategoryList=(response)=>{
        const categorySet = new Set()
        response.map((item,index)=>{
            categorySet.add(item.category)
            setCategoryList(categorySet)
            
        })
    }
    handleCategoryList(response)
}

    useEffect(() => {
        
       getProduct()
    }, [])
   
    const handleCheckbox=(e)=>{
        const filterName=e.target.name;
        const isChecked=e.target.checked
        const  newfilter={...filter,[filterName]:isChecked}
        let allFilters;
        for(const filt in newfilter){
            if(newfilter[filt]){
                allFilters=false
            }
            else{
              allFilters=true
            }
            console.log(allFilters)
            setAllFilters(allFilters)
            setFilter(newfilter)
        }
        console.log(newfilter)
    }
//console.log(filter)
    const handleCheckedItem=(categoryName)=>{
     // console.log(filter[categoryName])
      
    }

    const handleDataSource=()=>{
      let showProducts;
      if(allFilters){
        showProducts=items
      }
      else{
        showProducts=items.filter((pro)=>filter[pro.category])
      }
      return selectSortData(showProducts)
    }
    const handleClearFilters=()=>{
      setFilter({})
      setAllFilters(true)
    }
    const handleSelect=(select)=>{
        setListt(select)    
        console.log(select)
      
    }
    const selectSortData=(data)=>{
      if(Listt=="mostPopular"){
        return data.sort((a,b)=>a.rating.rate>b.rating.rate ? -1 : 1)
      }else if (Listt === 'leastPopular') {
        return data.sort((a, b) => a.rating.rate > b.rating.rate ? 1 : -1);
      } else if (Listt === 'highestPrice') {
        return data.sort((a, b) => a.price > b.price ? -1 : 1);
      } else if (Listt === 'lowestPrice') {
        return data.sort((a, b) => a.price > b.price ? 1 : -1);
      }
    }

    const addToCard=(item)=>{
      setCart([...cart,item])
      console.log(cart)
    }

    
    
    return (
       
        // <div style={{marginTop:"50px", textAlign:"center"}} id="productsView">
            <div>
           {/* <CheckBox sa={sa} setSa={setSa} /> */}
           <Layout>
           
           <button style={{width:"200px", float:"right"}} onClick={()=>setPage("cart")}>Go to Cart({cart.length})</button>
        <Layout>
        {page==="products" && (
          <>
          <Sider theme={'light'} style={{alignItems:"flex-start", textAlign:"start"}}>
                
                <List
                  header={<div>Filters
                    <Button onClick={handleClearFilters}>Clear Filters</Button><br />
                    Categories</div>}
                  
                  bordered
                  dataSource={categoryList}
                  renderItem={item => (
                    <List.Item>
                      <Checkbox name={item}
                        onChange={handleCheckbox} onClick={handleCheckedItem(item)}>{item}</Checkbox>
                    </List.Item>
                  )}
                />
              </Sider>
              <Content>
              
              <div style={{ alignItems: 'flex-end', textAlign: 'end' }}>
                  Sort By
                  <Select defaultValue={Listt} onSelect={handleSelect}>
                    {
                      sortList.map(sort => <Select.Option value={sort.name}>{sort.description}</Select.Option>)
                    }
                  </Select>
                  <br />
                  Showing  Products
                </div>
               <Row className="row">
              
              {handleDataSource().map(item => (
                  <Col span={6} className="products">
                      <img src={item.image} alt="" className="image"/>
                      <h3>{item.title}</h3>
                      <p>{item.price} TL</p>
                      <span><span> &#x2606;</span>{item.rating.rate}-{item.rating.count} Değerlendirme</span>
                      <button  onClick={()=>addToCard(item)} >Add to Card {item.price} TL</button>
                  </Col>
            ))}
              
              </Row>
              </Content>
          </>
        )}
           {page=="cart" &&(
                <>
                {cart.map(item => (
                  <div span={6} className="products">
                      <img src={item.image} alt="" className="image"/>
                      <h3>{item.title}</h3>
                      <p>{item.price} TL</p>
                      <span><span> &#x2606;</span>{item.rating.rate}-{item.rating.count} Değerlendirme</span>
                      <button >Remove</button>
                  </div>
            ))}
          
                </>
            
                )}
            
            </Layout>
            
           </Layout>
        </div>
      
    )
}







      
        
      

{/* <li key={item.id} className="liClass">
    <img src={`${item.image}`} alt="" className="image"/>
  <h3>{item.title}</h3>
  <p>{item.price}</p>
</li> */}
