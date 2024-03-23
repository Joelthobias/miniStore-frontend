import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        prno: '',
        semester: '',
        department: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4040/signup', formData);
            console.log('Signup successful:', response.data);
            localStorage.setItem('user', response.data.user);

            window.location.href='/'
            // Redirect the user to the dashboard or homepage
        } catch (error) {
            console.error('Signup error:', error.response.data);
            // Handle signup error (e.g., display error message)
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="prno" className="form-label">PR No</label>
                            <input type="text" className="form-control" id="prno" name="prno" value={formData.prno} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="semester" className="form-label">Semester</label>
                            <input type="number" className="form-control" id="semester" name="semester" value={formData.semester} onChange={handleChange} min="1" max="6" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="department" className="form-label">Department</label>
                            <select className="form-select" id="department" name="department" value={formData.department} onChange={handleChange} required>
                                <option value="">Select Department</option>
                                <option value="Computer Engineering (CT)">Computer Engineering (CT)</option>
                                <option value="Electronics and Communication Engineering (EC)">Electronics and Communication Engineering (EC)</option>
                                <option value="Tool and Die (TD)">Tool and Die (TD)</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
