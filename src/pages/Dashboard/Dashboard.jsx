import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const userID=localStorage.getItem('userID')
    console.log(userID);
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

    const addToCart = async (productId, userId, quantity) => {
    try {
        // Send userId, productId, and quantity in the request body
        const response = await axios.post(`http://localhost:4040/add-to-cart`, {
            userId: userId,
            productId: productId,
            quantity: 1
        });
        // Assuming the response contains updated cart information
        console.log('Cart updated:', response.data);
        // Call function to update UI or state to reflect the change
        updateProductInCart(productId, true);
    } catch (error) {
        console.error('Error adding item to cart:', error);
    }
};

    const removeFromCart = async (userId, productId) => {
        try {
            await axios.get(`http://localhost:4040/remove-from-cart/`,{
                userId: userId,
                productId: productId,
            });
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
                                <button className="btn btn-danger" onClick={() => removeFromCart(product.productID, userID)}>Remove from Cart</button>
                            ) : (
                                <button className="btn btn-primary" onClick={() => addToCart(product.productID,userID)}>Add to Cart</button>
                            )}
                        </div>
                    </div>
                ))
            ) : "No products found"}
        </div>
    );
};

export default Dashboard;
