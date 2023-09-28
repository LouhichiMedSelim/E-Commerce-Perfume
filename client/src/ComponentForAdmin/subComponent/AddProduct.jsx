import React, { useState } from "react";
const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  return (<div>
    <h1>Add product</h1>
    <form>
      <div className="form-group">
        <label >name of the Perfume</label>
        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">imgUrl of the perfume</label>
        <input type="text" className="form-control" onChange={(e) => setImgUrl(e.target.value)} placeholder="Enter ImgUrl" />
      </div>
      <div className="form-group">
        <label >Price of the Perfume</label>
        <input onChange={(e) => setPrice(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Price" />
      </div>
      <div className="form-group">
        <label >Quantity of the Perfume</label>
        <input onChange={(e) => setQuantity(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Quantity" />
      </div>
      <button type="submit" onClick={() => addProduct({ name, imgUrl, price, quantity })} className="btn btn-primary">Submit</button>
    </form>
  </div>)
}
export default AddProduct