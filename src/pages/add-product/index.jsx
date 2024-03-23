import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [id, setID] = useState('');
    const [image, setImage] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('productID', id);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:4040/admin/add-product', formData);
            console.log('Server response:', response.data);
            // Redirect to /admin after successful submission
            window.location.href='/admin'
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='container row'>
            <h3>Add Product</h3>
            <form className='mt-5 ms-5 col-5'>
                <div className="mb-3">
                    <label htmlFor="productTitle" className="form-label">Product Title</label>
                    <input type="text" className="form-control" value={title} id="productTitle" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" className="form-control" value={price} id="price" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="productID" className="form-label">Product ID</label>
                    <input type="text" className="form-control" value={id} id="productID" onChange={(e) => setID(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Product Image</label>
                    <input type="file" className="form-control" id="image" onChange={(e) => setImage(e.target.files[0])} />
                </div>

                <button onClick={submitHandler} type="submit" className="ms-auto btn btn-primary">ADD</button>
            </form>
        </div>
    );
};

export default AddProduct;
