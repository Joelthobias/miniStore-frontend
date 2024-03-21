import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row col-12">
      <h1 className="mb-4">Admin Dashboard</h1>
        <div className="ms-2 mt-5 col-6">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Product ID</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><i class="fa-solid fa-pen-to-square"></i></td>
              </tr>
             
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
