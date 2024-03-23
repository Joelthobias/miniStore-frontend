import React, { useEffect, useState } from 'react'
import './Dashboard.css'
const Dashboard = () => {
    const [products, setProducts] = useState({})
    useEffect(() => {
        const fectchPros = async () => {
            const url = `http://localhost:4040`;
            try {
                console.log("Api callied to fetch");



                const response = await fetch(url);
                const data = await response.json();
                console.log(data.products);

                setProducts(data.products)
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
                products.map(product => (
                    
                    <div className="card col-md-3 p-5 mx-5" >
                        <img crossOrigin='anonymous' src={`http://localhost:4040${product.img}`} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text fs-5">{product.price} <i class="fa-solid fa-indian-rupee-sign"></i></p>
                            <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                ))
            ):"NO products found"}
        </div>
    )
}

export default Dashboard