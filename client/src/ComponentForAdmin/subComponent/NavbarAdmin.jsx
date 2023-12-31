import React, { useState } from "react";

const Nav = ({ setViewAdmin, searchForPerfume, getProducts, setDataSearched, dataProduct }) => {
  const [word, setWord] = useState('')

  return (<div>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <p className="navbar-brand" >Admin Side </p>

        <a className="navbar-brand" onClick={() => setViewAdmin('AddProduct')}>Add Perfume</a>
        <a className="navbar-brand" onClick={() => { setDataSearched(dataProduct), setViewAdmin('AllProduct'), getProducts() }}>All Perfumes</a>

        <a className="navbar-brand" onClick={() => window.location.reload(false)}>Logout</a>
        <form className="d-flex">
          <input className="form-control me-2" onChange={(e) => { setWord(e.target.value), searchForPerfume(word) }} type="search" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </nav>
  </div>)
}
export default Nav