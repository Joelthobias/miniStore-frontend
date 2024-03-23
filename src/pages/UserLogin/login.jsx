import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        mobile: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4040/login', formData);
            console.log('Login successful:', response.data.user);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', response.data.user.name);
            window.location.href = '/'

            // Redirect the user to the dashboard or homepage
            
        } catch (error) {
            console.error('Login error:', error.response.data);
            setError(error.response.data.error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row col-12 justify-content-center">
                <div className="col-md-6">
                    <h2>Login</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile</label>
                            <input type="tel" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter mobile number" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <p className="mt-3">Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
