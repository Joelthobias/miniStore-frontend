import React, { useEffect, useState } from 'react';
import './Cart.css'; // Import your CSS file

const Cart = () => {
  const [cart, setCart] = useState({});
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchCartData = async () => {
      const cartUrl = `https://fakestoreapi.com/carts/5`;
      try {
        const response = await fetch(cartUrl);
        const data = await response.json();
        if (data.products) {
          const productIds = data.products.map(product => product.productId);

          const productDetailsPromises = productIds.map(productId => {
            return fetch(`https://fakestoreapi.com/products/${productId}`)
              .then(res => res.json());
          });

          const products = await Promise.all(productDetailsPromises);
          setProductsData(products);
        }

        setCart(data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    fetchCartData();
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-div">
        
          {productsData.map(product => (
            <div className="cart-product">
              <img src={product.image} alt={product.title} />
              <div className="cart-body">
                <h3 className="cart-title">
                  {product.title}
                </h3>
                <h5>{product.price} &#36;</h5>
              </div>
            </div>
          ))}
      </div>

    </div>
  );
};

export default Cart;
