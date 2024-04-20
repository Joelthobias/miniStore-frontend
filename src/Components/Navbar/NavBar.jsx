import React from 'react';
import './navbar.css';

const NavBar = () => {
  // Fetch user data from local storage
  const user = localStorage.getItem('user');

  return (
    <nav className='container my-5'>
      <h3><a href="/miniStore-frontend/">Mini-Store</a></h3>
      <div className="nav-items">
        {/* Render user name and logout button */}
        {user && (
          <div className="user-info">
            <span className="user-name">Welcome, {user}</span> <br />
            <button onClick={()=>{window.location.href='/miniStore-frontend/orders'}}  className='btn btn-dark'>Orders</button>
          </div>
        )}
        {/* If user doesn't exist, render login button */}
        {!user && (
          <button onClick={() => window.location.href = '/miniStore-frontend/login'} className='btn btn-dark'>Login</button>
        )}
        {/* Cart icon */}
        <i onClick={() => window.location.href = "/miniStore-frontend/cart"} className="fa-solid fa-cart-shopping ms-5"></i>
      </div>
    </nav>
  );
}

export default NavBar;
