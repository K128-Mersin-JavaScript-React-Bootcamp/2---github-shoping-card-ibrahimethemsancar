import React,{useState,useEffect} from 'react'
import { Checkbox } from 'antd';
export default function CheckBox({items,setItems,firstValue}) {
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      }



    const [checked, setChecked] = useState(false);
    const [value,setValue]=useState('')
    console.log(firstValue)
    const categories=["Jackets","Shirts","Fleece"]
    let filteredItems=[]
    function onHandleCheck(){
        setChecked(!checked)
        console.log(checked)
    }
    const onChangeCheckBox=()=>{
        console.log(value)
        if(checked==true){
            items.map((item,index)=>{
                if(item.title.includes(value.toLocaleLowerCase())){
                    console.log(item)
                    filteredItems[index]=item
                    
                }
                
            })
            setItems(filteredItems)
        }
        else if(checked==false){
           
            setItems(firstValue)

            
        }
      
    
      //console.log(items)
      
    }
    useEffect(()=>{
        
        onChangeCheckBox()
        
    },[value,checked])
    
     //console.log(filteredItems)
    
    return (
        <div className="checkDiv">
            <h3>Filter items</h3>
         <form>
          

           <br /><br /><br /> 
           
           <input type="checkbox" checked={checked} 
                 onClick={onHandleCheck}  value="men" 
                 onChange={((e)=>{setValue(e.target.value);
                })}/>
            <label htmlFor="cat1">Man</label><br />
           
              
           
   
           </form>
            
        </div>
    )
}



