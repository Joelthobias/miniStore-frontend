import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { port } from '../../Components/port';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${port}/admin`);
        console.log(response.data);
        setProducts(response.data.products); // Assuming the response data has a 'products' key containing an array of products
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEditProduct = (id) => {
    // Redirect to the edit product page with the product ID in the URL
    window.location.href = `/admin/editProduct/${id}`;
  };

  return (
    <div className="container mt-5">
      <div className="row col-12">
        <div className="ms-2 mt-5 col-6">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Image</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.productID}>
                  <td>{product.productID}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td><img crossOrigin='anonymous' src={`${port}${product.img}`} alt={product.title} style={{ width: '50px', height: '50px' }} /></td>
                  <td><i className="fa-solid fa-pen-to-square" onClick={() => handleEditProduct(product.productID)}></i></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-3 ms-auto list-group">
          <Link to="/admin/products" className="active list-group-item list-group-item-action">
            Manage Products
          </Link>
          <Link to="/admin/orders" className="list-group-item list-group-item-action">
            View Orders
          </Link>
          <Link to="/admin/add-product" className="list-group-item list-group-item-action">
            Add Product
          </Link>
          <Link to="/admin/edit-product" className="list-group-item list-group-item-action">
            Edit Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
