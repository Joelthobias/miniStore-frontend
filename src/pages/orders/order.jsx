import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { port } from '../../Components/port';

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrdersData = async () => {
            try {
                const userID = localStorage.getItem('userID');

                const response = await axios.get(`${port}/orders`, {
                    params: {
                        userId: userID
                    }
                });

                setOrders(response.data.order);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrdersData();
        console.log(orders);
    }, []);

    return (
        <div>
            {orders && orders.length > 0 ? (
                orders.map(order => (
                    <div className="container mt-4" key={order._id}>
                        <div className="col-12" 
                            data-bs-toggle="collapse"
                            data-bs-target={`#orderCollapse${order._id}`}
                            aria-expanded="false"
                            aria-controls={`orderCollapse${order._id}`}>
                            <button
                                className="col-4 border border-dark btn btn-link"
                                type="button"

                            >
                                Order ID: {order._id}
                            </button>
                        </div>
                        <div className="collapse mt-3 col-8" id={`orderCollapse${order._id}`}>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.products.map(product => (
                                        <tr key={product._id}>
                                            <td>{product.product.title}</td>
                                            <td>{product.product.price}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.totalPrice}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div>
                                <p>Total Quantity: {order.totalQuantity}</p>
                                <p>Total Price: {order.totalPrice}</p>
                                <p>Status: {order.status}</p>
                                <p>User ID: {order.user}</p>
                                <p>Orderd At: {new Date(order.createdAt).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No orders found</p>
            )}
            <div className="container ">

                <button className="px-5 ms-auto btn btn-outline-dark" onClick={() => { window.location.href = "/miniStore-frontend/" }}>Continue Shopping</button>
            </div>

        </div>
    );
};

export default Order;
