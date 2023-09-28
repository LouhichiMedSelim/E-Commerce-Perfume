import React from "react";
const AllProduct = ({ dataSearched, GetDataToUpdate }) => {
  return (
    <div > <div className="card-group">
      {dataSearched.map((e) => {
        return (

          <div key={e._id} className="wrapper" >
            <div className="product-img">
              <img src={e.imgUrl} height="420" width="327" />
            </div>
            <div className="product-info">
              <div className="product-text">
                <h1>{e.name}</h1>
                <h1>Quantity :{e.quantity}</h1>
                <p></p>
              </div>
              <div className="product-price-btn">
                <p><span>{e.price}</span>DT</p>
                <button type="button" onClick={() => GetDataToUpdate(e._id)}>Update Or Delete</button>
              </div>
            </div>
          </div>

        )
      })}</div>
    </div>
  )
}
export default AllProduct