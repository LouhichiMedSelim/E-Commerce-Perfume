import React, { useState } from "react";
const Nav = ({ setViewUser, searchForPerfume, dataProduct, setDataSearched }) => {
  const [word, setWord] = useState('')
  return (<div>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <p className="navbar-brand">Louhichi's Fragence</p>
        <a className="navbar-brand" onClick={() => { setViewUser('AllProduct'), setDataSearched(dataProduct) }}>All Perfumes </a>
        <a className="navbar-brand" onClick={() => setViewUser('Cart')}>Cart </a>
        <a className="navbar-brand" onClick={() => window.location.reload(false)}>Logout</a>
        <form className="d-flex">
          <input className="form-control me-2" onChange={(e) => { setWord(e.target.value), searchForPerfume(word) }} type="search" placeholder="Search" aria-label="Search" />

        </form>
      </div>
    </nav>
  </div>)
}
export default Nav