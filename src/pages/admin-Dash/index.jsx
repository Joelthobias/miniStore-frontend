import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <div className="row">
      <h1 className="mb-4">Admin Dashboard</h1>
        <div className="col-6">
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6 list-group">
            <Link to="/admin/products" className="list-group-item list-group-item-action">
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
