import React, { useState } from "react";
const UpdateAndDelete = ({ dataToUpdate, updateProduct,deleteProduct }) => {
      const [name, setName] = useState('')
      const [imgUrl, setImgUrl] = useState('')
      const [price, setPrice] = useState('')
      const [quantity, setQuantity] = useState('')
      return (
            <div>
                  {console.log(dataToUpdate)}

<label>Name of the perfume</label>
                 
                  <input className="form-control" defaultValue={dataToUpdate.name} onChange={(e) => setName(e.target.value)} />
               <label>ImageUrl of the Perfume</label>  
                  <input className="form-control" defaultValue={dataToUpdate.imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                  <label>Price of the Perfume </label>
                  
                  <input className="form-control" defaultValue={dataToUpdate.price} onChange={(e) => setPrice(e.target.value)} />
                  <label>Quantity of the Perfume</label>
                  <input className="form-control" defaultValue={dataToUpdate.quantity} onChange={(e) => setQuantity(e.target.value)} />

                  
                  <button type="submit" onClick={() => updateProduct({name:name?name:dataToUpdate.name ,
                   imgUrl:imgUrl?imgUrl:dataToUpdate.imgUrl ,
                   price:price?price:dataToUpdate.price,
                   quantity:quantity?quantity:dataToUpdate.quantity }
                        , dataToUpdate._id)} className="btn btn-primary">Save changes</button>
<button className="btn btn-secondary" onClick={()=>deleteProduct(dataToUpdate.name)}>delete</button>

            </div>


      )
}
export default UpdateAndDelete