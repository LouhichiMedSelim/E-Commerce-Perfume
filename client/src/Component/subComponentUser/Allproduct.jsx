import React from "react";
const AllProduct = ({ dataSearched, addToCart }) => {

  return (
    <div > <div class="card-group">
      {dataSearched.map((e) => {
        return (
          <div key={e._id} className="wrapper" >
            <div className="product-img">
              <img src={e.imgUrl} height="420" width="327" />
            </div>
            <div className="product-info">
              <div className="product-text">
                <h1>{e.name}</h1>
                <h1><span>{e.price}DT</span></h1>

              </div>
              <div className="product-price-btn">

                <button type="button" onClick={() => addToCart(e)}>Add To Cart</button>
              </div>
            </div>
          </div>


        )
      })}
    </div>
    </div>

  )
}
export default AllProduct