import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
    const { productID } = useParams(); // Get the product productID from the URL params
    const [product, setProduct] = useState({
        title: '',
        price: '',
        quantity: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:4040/admin/product/${productID}`);
                console.log(response.data);
                setProduct(response.data.product); // Assuming the response data contains product information
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productID]);

    const handleChange = e => {
        const { name, value } = e.target;
        setProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:4040/admin/update-product/${productID}`, product);
            alert('Product updated successfully!');
            window.location.href = "/admin"
            // Redirect or navigate to product details page
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:4040/admin/delete-product/${productID}`);
            alert('Product deleted successfully!');
            window.location.href = "/admin"
            // Redirect or navigate to product list page
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="container">
            <h2 className='col-12'>Edit Product</h2>
            <form className='col-4 m-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={product.title} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" className="form-control" id="price" name="price" value={product.price} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Quantity</label>
                    <input type="text" className="form-control" id="img" name="img" value={product.quantity} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary me-2">Save Changes</button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </form>
        </div>
    );
};

export default EditProduct;
