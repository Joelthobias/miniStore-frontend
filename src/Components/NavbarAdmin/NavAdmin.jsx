import React from 'react'
import './navbar.css';
const NavAdmin = () => {
    return (
        <nav className='container my-5'>
            <h3><a href="/miniStore-frontend/admin">Admin panel</a></h3>
            <div className="nav-items">

                <button disabled className='btn btn-dark'>Logout</button>
            </div>
        </nav>
    )
}

export default NavAdmin