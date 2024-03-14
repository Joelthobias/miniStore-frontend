import React, { useEffect, useState } from 'react'
import './Dashboard.css'
const Dashboard = () => {
    const [products, setProducts] = useState({})
    useEffect(() => {
        const fectchPros = async () => {
            const url = `https://fakestoreapi.com/products`;
            try {
                console.log("Api callied to fetch");



                const response = await fetch(url);
                const data = await response.json();
                console.log(data);

                setProducts(data)
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
        fectchPros()
    }, [])
    return (
        <div className='container row'>
            {products && products.length > 0 ? (
                products.map(prodcut => (
                    
                    <div className="card col-md-3 p-5 mx-5" >
                        <img src={prodcut.image} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{prodcut.title}</h5>
                            <p className="card-text fs-5">{prodcut.price} $</p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                ))
            ):"NO products found"}
        </div>
    )
}

export default Dashboard