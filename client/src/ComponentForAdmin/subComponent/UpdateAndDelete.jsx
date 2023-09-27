import React, { useState } from "react";
const UpdateAndDelete = ({ dataToUpdate, updateProduct,deleteProduct }) => {
      const [name, setName] = useState('')
      const [imgUrl, setImgUrl] = useState('')
      const [price, setPrice] = useState('')
      const [quantity, setQuantity] = useState('')
      return (
            <div>
                  {console.log(dataToUpdate)}


                  <input defaultValue={dataToUpdate.name} onChange={(e) => setName(e.target.value)} />
                  <input defaultValue={dataToUpdate.imgUrl} onChange={(e) => setImgUrl(e.target.value)} />
                  <input defaultValue={dataToUpdate.price} onChange={(e) => setPrice(e.target.value)} />
                  <input defaultValue={dataToUpdate.quantity} onChange={(e) => setQuantity(e.target.value)} />

                  <button type="button" className="btn btn-secondary" >Close</button>
                  <button type="submit" onClick={() => updateProduct({name , imgUrl ,price,quantity }
                        , dataToUpdate._id)} className="btn btn-primary">Save changes</button>
<button onClick={()=>deleteProduct(dataToUpdate.name)}>delete</button>

            </div>


      )
}
export default UpdateAndDelete