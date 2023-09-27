import React, { useState } from "react";
import Nav from "./subComponentUser/NavbarUser.jsx";
import AllProduct from "./subComponentUser/Allproduct.jsx";
import Cart from "./subComponentUser/Cart.jsx";
const UserPage = ({ dataProduct }) => {
  const [viewUser, setViewUser] = useState('AllProduct')
  const [perfumeTobuy, setPerfumeToBuy] = useState([])
const[dataSearched,setDataSearched]=useState(dataProduct)

  const addToCart = (x) => {
    var arr = perfumeTobuy
    arr.push(x)
    setPerfumeToBuy(arr)
  }
  const removeFromCart = (x) => {
    function rr(c) {
      for (var i = 0; i < c.length; i++) {
        if (c[i].name === x.name) {
          return i
        }
      }
    }
    var index = rr(perfumeTobuy)
    var arr = perfumeTobuy
    arr.splice(index, 1);
    setPerfumeToBuy(arr)
    setViewUser('AllProduct')
  }
  const totalToPay = () => {
    var x=0
    for (var i = 0; i < perfumeTobuy.length; i++) {
      x=x+perfumeTobuy[i].price
    }
    return x
  }
  const searchForPerfume=(x)=>{
var arr=dataProduct.filter(e=>e.name.includes(x))
setDataSearched(arr)
  }

  const changeView = () => {
    if (viewUser === 'AllProduct') {
      return <AllProduct addToCart={addToCart} dataSearched={dataSearched} />
    }
    if (viewUser === 'Cart') {
      return <Cart totalToPay={totalToPay} removeFromCart={removeFromCart} perfumeTobuy={perfumeTobuy} />
    }
  }

  return (
    <div>
      <Nav dataProduct={dataProduct} setDataSearched={setDataSearched} searchForPerfume={searchForPerfume} setViewUser={setViewUser} />
      {changeView()}


    </div>
  )
}
export default UserPage