import React, { useEffect, useState } from "react";
import Nav from "./subComponent/NavbarAdmin.jsx"
import AddProduct from "./subComponent/AddProduct.jsx";
import AllProduct from "./subComponent/Allproduct.jsx"
import UpdateAndDelete from "./subComponent/UpdateAndDelete.jsx";
import axios from "axios";



const AdminPage = ({ dataProduct ,getProducts}) => {
    const [viewAdmin, setViewAdmin] = useState('AllProduct')
    const [dataToUpdate, setDataToUpdate] = useState({})
    const [dataSearched,setDataSearched]=useState(dataProduct)
useEffect(()=>{
   getProducts() 
},[])
    const updateProduct = (x,y) => {
console.log(x)
        axios.put(`/api/product/updateProduct/${y}`,x)
        .then(()=>{setViewAdmin('AllProduct'),getProducts()})
        .catch((err)=>console.log(err))

    }
    const searchForPerfume=(x)=>{
        var arr=dataProduct.filter(e=>e.name.includes(x))
        setDataSearched(arr)
          }
    const deleteProduct=(x)=>{
        axios.delete(`/api/product/deleteProduct/${x}`)
        .then(()=>{setViewAdmin('AllProduct'),getProducts()})
        .catch((err)=>console.log(err))
    }
    const GetDataToUpdate = (x) => {
        console.log(x);
        setViewAdmin('UpdateAndDelete')
        var res = dataProduct.filter(e => e._id === x)
        setDataToUpdate(res[0])
    }
    const addProduct = (x) => {
        axios.post('/api/product/createProduct', x)
            .then(() =>{ setViewAdmin('AdminPage'),getProducts()})
            .catch((err) => console.log(err))
    }
    const changeViewAdmin = () => {

        if (viewAdmin === 'AddProduct') {
            return <AddProduct addProduct={addProduct} />
        }
        if (viewAdmin === 'AllProduct') {
            return <AllProduct GetDataToUpdate={GetDataToUpdate} setViewAdmin={setViewAdmin} dataSearched={dataSearched} />
        }
        if (viewAdmin === 'UpdateAndDelete') {
            return <UpdateAndDelete deleteProduct={deleteProduct} updateProduct={updateProduct} dataToUpdate={dataToUpdate} dataProduct={dataProduct} />
        }

    }

    return (
        <div>

            <Nav searchForPerfume={searchForPerfume} setViewAdmin={setViewAdmin} />
            <div>{changeViewAdmin()}</div>
          
        </div>
    )
}
export default AdminPage