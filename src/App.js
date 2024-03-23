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

function App() {
  const isAdminRoute = window.location.pathname.startsWith('/admin');
  const isLoginPage = window.location.pathname === '/login'; // Check if current route is login page
  const isSignupPage = window.location.pathname === '/signup'; // Check if current route is signup page

  return (
    <Router>
      <div className="App">
        {/* Conditionally render the navbar */}
        {!isAdminRoute && !isLoginPage && !isSignupPage && <NavBar />}
        {isAdminRoute && <NavAdmin />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminDash />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/editProduct/:productID" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
