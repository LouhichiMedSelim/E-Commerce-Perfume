import React,{useState} from "react";

const Login =({login,setView ,signup})=>{
const [name,setName]=useState('')
const [password,setPassword]=useState('')
const [userName,setUserName]=useState('')
const [age,setAge]=useState('')
const [gender,setGender]=useState('')
const [email,setEmail]=useState('')
    return(
     
<div>
<h1 className="welcome">Welcome To Louhichi's Fragence</h1>
<ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul>


<div className="tab-content">
  <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div className="form-outline mb-4">
        <input type="email" id="loginName"onChange={(e)=>setEmail(e.target.value)}  className="form-control" />
        <label className="form-label" htmlFor="loginName">Email Or Username </label>
      </div>
      <div className="form-outline mb-4">
        <input type="password" id="loginPassword" onChange={(e)=>setPassword(e.target.value)} className="form-control" />
        <label className="form-label" htmlFor="loginPassword">Password</label>
      </div>
      <button type="submit"  onClick={()=>login({email,password})} className="btn btn-primary btn-block mb-4">Sign in</button>
    
    </form>
  </div>
  <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div className="form-outline mb-4">
        <input type="text"  onChange={(e)=>setName(e.target.value)} id="registerName" className="form-control" />
        <label className="form-label" htmlFor="registerName">Name</label>
      </div>
      <div className="form-outline mb-4">
        <input type="text" onChange={(e)=>setUserName(e.target.value)} id="registerUsername" className="form-control" />
        <label className="form-label" htmlFor="registerUsername">Username</label>
      </div>
      <div className="form-outline mb-4">
        <input type="email" id="registerEmail"onChange={(e)=>setEmail(e.target.value)}  className="form-control" />
        <label className="form-label" htmlFor="registerEmail">Email</label>
      </div>
 <div className="form-outline mb-4">
        <input type="text" onChange={(e)=>setAge(e.target.value)} className="form-control" />
        <label className="form-label" >Age</label>
      </div>
      <div className="form-outline mb-4">
        <input type="text" onChange={(e)=>setGender(e.target.value)} className="form-control" />
        <label className="form-label" >Gender</label>
      </div>
      
      <div className="form-outline mb-4">
        <input type="password" onChange={(e)=>setPassword(e.target.value)} id="registerPassword" className="form-control" />
        <label className="form-label" htmlFor="registerPassword">Password</label>
      </div>



      <button type="submit" onClick={()=>signup({name,userName,email,age,gender,password})} className="btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
</div>

  </div>)
}
export default Login
