import React, { useState } from 'react';

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [id, setID] = useState('');
    const [imgurl, setImgUrl] = useState('');
    
    const submitHandler = (e) => {

        e.preventDefault();
        console.log('Title:', title);
        console.log('Price:', price);
        console.log('ID:', id);
        console.log('Image URL:', imgurl);
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
                    <label htmlFor="ImageUrl" className="form-label">Product Image</label>
                    <input type="text" className="form-control" value={imgurl} id="ImageUrl" onChange={(e) => setImgUrl(e.target.value)} />
                </div>

                <button onClick={submitHandler} type="submit" className="ms-auto btn btn-primary">ADD</button>
            </form>
        </div>
    );
};

export default AddProduct;
