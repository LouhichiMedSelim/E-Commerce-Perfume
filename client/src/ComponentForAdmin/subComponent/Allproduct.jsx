import React from "react";
const AllProduct =({dataProduct,GetDataToUpdate})=>{
return (
    <div>
        {dataProduct.map((e)=>{return (   
                   <div key={e._id} className="card" style={{width: "18rem"}}>
       
  <img src={e.imgUrl} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">{e.name}</h5>
    <p className="card-text">{e.price}</p>
    <p className="card-text">{e.quantity}</p>
    <button type="button" onClick={()=>GetDataToUpdate(e._id)}  className="btn btn-primary">Go somewhere</button>
  </div>


 </div>)
      })}
    </div>
)
}
export default AllProduct