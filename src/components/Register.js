import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    f_userName: '',
    f_Pwd: '',
    email: '',
    role: 'employee', // Default role
  });

  const { f_userName, f_Pwd, email, role } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login/register', formData);
      alert(response.data.msg);
      setFormData({ f_userName: '', f_Pwd: '', email: '', role: 'employee' });
    } catch (error) {
      alert(error.response.data.msg || 'An error occurred');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="f_userName" className="form-label">Username</label>
          <input
            type="text"
            id="f_userName"
            name="f_userName"
            value={f_userName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="f_Pwd" className="form-label">Password</label>
          <input
            type="password"
            id="f_Pwd"
            name="f_Pwd"
            value={f_Pwd}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={handleChange}
            className="form-select"
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
