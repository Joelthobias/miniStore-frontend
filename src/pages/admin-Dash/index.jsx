import React, { useEffect, useState } from 'react';
import './index.css'; // Import your CSS file

const AdminDash = () => {
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
    <h3>Admin Dashboard</h3>
  );
};

export default AdminDash;
