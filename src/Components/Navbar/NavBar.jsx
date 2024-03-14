import React from 'react'
import './navbar.css';
const NavBar = () => {
  return (
    <nav className='container my-5'>
      <h3><a href="/">Mini-Store</a></h3>
      <div className="nav-items">

        <button className='btn btn-dark'>Logout</button>
        <i onClick={()=>window.location.href="/cart"} className="fa-solid fa-cart-shopping ms-5"></i>
      </div>
    </nav>
  )
}

export default NavBar