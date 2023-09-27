import React,{useState} from "react";
const AddProduct =({addProduct})=>{
const [name,setName]=useState('')
const [imgUrl,setImgUrl]=useState('')
const [price,setPrice]=useState('')
const [quantity,setQuantity]=useState('')
    return (<div>
        <h1>Add product</h1>
<input onChange={(e)=>setName(e.target.value)}/>
<input onChange={(e)=>setImgUrl(e.target.value)}/>
<input onChange={(e)=>setPrice(e.target.value)}/>
<input onChange={(e)=>setQuantity(e.target.value)}/>
<button onClick={()=>addProduct({name,imgUrl,price,quantity})} >create </button>
    </div>)
}
export default AddProduct