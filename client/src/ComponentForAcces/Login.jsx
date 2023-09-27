import React,{useState} from "react";

const Login =({login,setView})=>{
const [name,setName]=useState('')
const [password,setPassword]=useState('')
    return(
              
              <div className="form-box">
<form className="form">
    <span className="title">login</span>
    <span className="subtitle">login with your usser name</span>
    <div className="form-container">
      <input type="text" onChange={(e)=>setName(e.target.value)} className="input" placeholder="enter your name"/>
      <input onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="enter your password"/>   

    </div>

    <button onClick={()=>login({name,password})}>Login</button> 
     <button onClick={()=>setView('signup')}>SignUp</button>
  </form> </div>)
}
export default Login

