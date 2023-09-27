import React from "react";

const Nav =({setViewAdmin})=>{

    return (<div>
        <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" onClick={()=>setViewAdmin('AddProduct')}>AddProduct</a>
    <a className="navbar-brand" onClick={()=>setViewAdmin('AllProduct')}>AllProduct</a>
    <a className="navbar-brand">AllUsers</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
 </div>   )
}
export default Nav