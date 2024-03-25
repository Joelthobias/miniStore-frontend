import React, { useEffect, useState } from 'react';
import './Cart.css'; // Import your CSS file
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState({});
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const userID = localStorage.getItem('userID');

        const response = await axios.get(`http://localhost:4040/cart`, {
          params: {
            userId: userID
          }
        });

        if (response.data.carts.length === 0) {
          setCart({});
          setProductsData([]);
          return;
        }

        setCart(response.data.carts[0]);

        const productIds = response.data.carts[0].products.map(product => product.product);
        const productDetailsPromises = productIds.map(productId => {
          return axios.get(`http://localhost:4040/product/${productId}`)
            .then(res => res.data); // Use res.data instead of res.json()
        });

        const products = await Promise.all(productDetailsPromises);
        setProductsData(products);
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
      await axios.post(`http://localhost:4040/create-order`, { userId: userID });
      alert('Order completed successfully!');
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
            <div className="card">
              <div className="card-body">
                {productsData.map(product => (
                  <div className="row " key={product.product.productID}>
                    <div className="col-md-3">
                      <img crossOrigin='anonymus' src={`http://localhost:4040${product.product.img}`} alt={product.product.title} className="img-fluid p-2" style={{ height: '5rem' }} />
                    </div>
                    <div className="col-md-9">
                      <h5 className="card-title">{product.product.title}</h5>
                      <p className="card-text">Price: {product.product.price} &#36;</p>
                    </div>
                  </div>
                ))}
              </div>
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
                <p>Total Quantity: {cart.totalQuantity}</p>
                <p>Total Price: {cart.totalPrice} &#36;</p>
                <button className="btn btn-outline-dark" onClick={handleCheckout}>Continue Shopping</button>
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
