import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:4040');
            setProducts(response.data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const addToCart = async (productId) => {
        try {
            await axios.post(`http://localhost:4040/add-to-cart/${productId}`);
            updateProductInCart(productId, true);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    const removeFromCart = async (userId, productId) => {
        try {
            await axios.delete(`http://localhost:4040/remove-from-cart/${userId}/${productId}`);
            updateProductInCart(productId, false);
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };


    const updateProductInCart = (productId, inCart) => {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.productID === productId) {
                    return { ...product, inCart };
                }
                return product;
            });
        });
    };

    return (
        <div className='container row'>
            {products && products.length > 0 ? (
                products.map(product => (
                    <div className="card col-md-3 p-5 mx-5" key={product.productID}>
                        <img crossOrigin='anonymous' src={`http://localhost:4040${product.img}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text fs-5">{product.price} <i className="fa-solid fa-indian-rupee-sign"></i></p>
                            {product.inCart ? (
                                <button className="btn btn-danger" onClick={() => removeFromCart(product.productID)}>Remove from Cart</button>
                            ) : (
                                <button className="btn btn-primary" onClick={() => addToCart(product.productID)}>Add to Cart</button>
                            )}
                        </div>
                    </div>
                ))
            ) : "No products found"}
        </div>
    );
};

export default Dashboard;
