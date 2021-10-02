import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router';
export default function Login() {
    const url="http://localhost:3001/users";
    const [text,setText]=useState('');
    const [password,setPassword]=useState('');
    const [user,setUser]=useState([])
    let login=[]
    let history=useHistory();
    const getUser=async()=>{
        const api_call=await fetch(url);
        const response=await api_call.json()
        setUser(response);
        
    }
    console.log(user)
    const clickLogin=(e)=>{
        e.preventDefault()
        user.forEach(function(item){
            console.log(item.email)
            if(item.email==text && item.password==password){
                login.push(item)
                console.log("welcome")
                alert("Succesful Login")
                history.push("/shop")

            }else{
                console.log("Please check your email or password")
            }
        })
        
    }
    useEffect(()=>{
       getUser()
    },[])
    return (
        <div className="loginForm">
            
            <form action="" className="form" >
            <h3 id="formHead">Welcome Back</h3><br />
            <h4 id="formh">Login with Email</h4>
                <input type="text" className="text" placeholder="Email" onChange={(e)=>setText(e.target.value)} /><br /><br />
                <input type="password" className="pass" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br />
                <button id="btnPass" onClick={clickLogin}>Login</button>
                </form>
        </div>
    )
}
