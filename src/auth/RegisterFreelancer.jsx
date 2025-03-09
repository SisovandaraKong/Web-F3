import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerFreelancer } from '../api/api';

const RegisterFreelancer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    address: '',
    email: '',
    username: '',
    profileImageUrl: '',
    phone: '',
    userType: 'FREELANCER',
    skills: [],
    portfolioUrl: '',
    experienceYears: 0,
    bio: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerFreelancer({ ...formData, skills: formData.skills.split(',') });
      navigate('/login');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register as Freelancer</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender:</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Profile Image URL:</label>
          <input type="text" name="profileImageUrl" value={formData.profileImageUrl} onChange={handleChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Skills (comma-separated):</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
        </div>
        <div>
          <label>Portfolio URL:</label>
          <input type="text" name="portfolioUrl" value={formData.portfolioUrl} onChange={handleChange} />
        </div>
        <div>
          <label>Experience Years:</label>
          <input type="number" name="experienceYears" value={formData.experienceYears} onChange={handleChange} />
        </div>
        <div>
          <label>Bio:</label>
          <textarea name="bio" value={formData.bio} onChange={handleChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterFreelancer;