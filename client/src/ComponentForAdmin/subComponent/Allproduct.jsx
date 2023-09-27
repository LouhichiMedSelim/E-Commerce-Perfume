import React from "react";
const AllProduct =({dataSearched,GetDataToUpdate})=>{
return (
    <div > <div class="card-group">
        {dataSearched.map((e)=>{return (   
                   
       


 
  <div class="card" key={e._id}>
    <img class="card-img-top" src={e.imgUrl} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{e.name}</h5>
      <p class="card-text">{e.quantity}</p>
      <p class="card-text">{e.price}</p>
      <button type="button" onClick={()=>GetDataToUpdate(e._id)}  className="btn btn-primary">Update Or Delete</button>
    </div>
  </div>
 




)
      })}</div>
    </div>
)
}
export default AllProduct