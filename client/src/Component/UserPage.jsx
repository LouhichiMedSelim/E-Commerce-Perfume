import React, { useState } from "react";
import Nav from "./subComponentUser/NavbarUser.jsx";
import AllProduct from "./subComponentUser/Allproduct.jsx";
const UserPage =({dataProduct})=>{
const [viewUser,setViewUser]=useState('AllProduct')
const changeView=()=>{
  if (viewUser==='AllProduct'){
    return <AllProduct dataProduct={dataProduct}/>
  }
}

    return (
        <div>
            <Nav/>
          {changeView()}
         
           
        </div>
    )
}
export default UserPage