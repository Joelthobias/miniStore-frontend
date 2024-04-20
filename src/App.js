import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import NavBar from './Components/Navbar/NavBar';
import Cart from "./pages/Cart/Cart";
import AdminDash from "./pages/admin-Dash";
import AddProduct from "./pages/add-product";
import EditProduct from "./pages/editProduct/editProduct";
import NavAdmin from "./Components/NavbarAdmin/NavAdmin";
import Login from './pages/UserLogin/login';
import Signup from './pages/signup/userSignup';
import Order from './pages/orders/order';

function App() {
  const isAdminRoute = window.location.pathname.startsWith('/miniStore-frontend/admin');
  const isLoginPage = window.location.pathname === '/miniStore-frontend/login'; // Check if current route is login page
  const isSignupPage = window.location.pathname === '/miniStore-frontend/signup'; // Check if current route is signup page

  return (
    <Router>
      <div className="App">
        {/* Conditionally render the navbar */}
        {!isAdminRoute && !isLoginPage && !isSignupPage && <NavBar />}
        {isAdminRoute && <NavAdmin />}
        <Routes>
          <Route path="/miniStore-frontend/" element={<Home />} />
          <Route path="/miniStore-frontend/login" element={<Login />} />
          <Route path="/miniStore-frontend/signup" element={<Signup />} />
          <Route path="/miniStore-frontend/cart" element={<Cart />} />
          <Route path="/miniStore-frontend/orders" element={<Order />} />
          <Route path="/miniStore-frontend/admin" element={<AdminDash />} />
          <Route path="/miniStore-frontend/admin/add-product" element={<AddProduct />} />
          <Route path="/miniStore-frontend/admin/editProduct/:productID" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
