import React from "react";
const Cart = ({ perfumeTobuy, removeFromCart, totalToPay, confirmBuy }) => {
  return (<div>
    <div className="total">
      <div >You have {perfumeTobuy.length} articles </div>
      <div>
        <button className="btn btn-danger" >Cancel All</button>
        <button className="btn btn-info" onClick={() => confirmBuy()}>Confirm </button></div>
      <div>Total :{totalToPay()}DT</div></div>
    {perfumeTobuy.map((e, i) => {
      return (
        <div key={i} className="wrapper" >
          <div className="product-img">
            <img src={e.imgUrl} height="420" width="327" />
          </div>
          <div className="product-info">
            <div className="product-text">
              <h1>{e.name}</h1>

              <p>{e.price}DT</p>
            </div>
            <div className="product-price-btn">

              <button type="submit" onClick={() => removeFromCart(e)}>remove</button>
            </div>
          </div>
        </div>


      )
    })}




  </div>)
}
export default Cart