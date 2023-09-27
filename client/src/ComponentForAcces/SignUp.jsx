import React, { useState } from "react";
const SignUp =({signup})=>{
const[name,setName]=useState('')
const[password,setPassword]=useState('')
const[age,setAge]=useState('')
const[gender,setGender]=useState('')
    return(<div>
              <h3>Sign Up</h3>      

 <input onChange={(e)=>setName(e.target.value)} type="text"placeholder="enter your name"/>  
     <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="enter your password"/>  
     <input onChange={(e)=>setAge(e.target.value)}type="text" placeholder="enter your age"/>
     <input onChange={(e)=>setGender(e.target.value)} />
     <button onClick={()=>signup({name,password,age,gender})}>Create</button>
    </div>)
}
export default SignUp