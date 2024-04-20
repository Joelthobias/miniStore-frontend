import React, { useEffect, useState } from 'react';
import './Cart.css'; // Import your CSS file
import axios from 'axios';
import { port } from '../../Components/port';

const Cart = () => {
  const [cart, setCart] = useState({});
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const userID = localStorage.getItem('userID');

        const response = await axios.get(`${port}/cart`, {
          params: {
            userId: userID
          }
        });
        let carts = response.data.carts
        if (!carts) {
          setCart({});
          setProductsData([]);
          return;
        }
          setCart(response.data.carts);
          setProductsData(response.data.carts.products);
        

        console.log(cart);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    fetchCartData();
  }, []);

  const handleCheckout = async () => {
    try {
      const userID = localStorage.getItem('userID');
      await axios.post(`${port}/create-order`, { userId: userID });
      alert('Order completed successfully!');
      window.location.href='/orders'
      // Optionally, you can redirect the user to a confirmation page or clear the cart state
    } catch (error) {
      console.error('Error completing order:', error);
      alert('Failed to complete order. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row col-12">
        <div className="col-md-8">
          {productsData.length > 0 ? (
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {productsData.map(pds => (
                    <tr key={pds._id}>
                      <td>
                        {pds.product && pds.product.img && (
                          <img crossOrigin="anonymous" src={`${port}${pds.product.img}`} alt={pds.product.title} className="img-fluid p-2" style={{ height: '5rem' }} />
                        )}
                      </td>
                      <td>
                        {pds.product && pds.product.title && pds.product.title}
                      </td>
                      <td>
                        {pds.product && pds.product.price && `$${pds.product.price}`}
                      </td>
                      <td>
                        {pds.quantity}
                      </td>
                      <td>
                        {pds.totalPrice}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          ) : (
            <p>No products in cart</p>
          )}
        </div>
        <div className="col-md-4">
          {cart && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Cart Summary</h5>
                <p className='ps-3 mt-3'>Total Quantity: {cart.totalQuantity}</p>
                <p className='ps-3'>Total Price: {cart.totalPrice} &#36;</p>
                <button className="btn btn-outline-dark" onClick={() => { window.location.href = "/" }}>Continue Shopping</button>
                <button className="btn btn-success mt-2" onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
