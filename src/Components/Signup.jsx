import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    registrationNo: '',
    address: '',
    licenseFile: null,
    instituteName: '',
    branch: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!role) {
      setError('Please select your role.');
      return;
    }

    if (!formData.name || !formData.phone || !formData.email) {
      setError('All fields are required.');
      return;
    }

    // Navigate based on role
    if (role === 'Nurse' || role === 'Student') {
      navigate('/subscribe');
    } else {
      alert('Signup successful!');
      navigate('/subscription');
    }
  };

  return (
    <div className="signup-wrapper">
      {/* Bubble Background */}
      <div className="bubble-bg">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
      </div>

      <div className="signup-box">
        <h2>Create Account</h2>
        <p className="signup-subtext">Register to access MediScript</p>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-grid">
            <div className="form-group full">
              <label>Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="">Select Role</option>
                <option value="Doctor">Doctor</option>
                <option value="Pharmacist">Pharmacist</option>
                <option value="Nurse">Nurse</option>
                <option value="Student">Student</option>
              </select>
            </div>

            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            {(role === 'Doctor' || role === 'Pharmacist') && (
              <>
                <div className="form-group">
                  <label>Specialization</label>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Registration No.</label>
                  <input
                    type="text"
                    name="registrationNo"
                    value={formData.registrationNo}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group full">
                  <label>Address</label>
                  <textarea name="address" value={formData.address} onChange={handleChange} />
                </div>

                <div className="form-group full">
                  <label>Upload License</label>
                  <input type="file" name="licenseFile" onChange={handleChange} />
                </div>
              </>
            )}

            {(role === 'Student' || role === 'Nurse') && (
              <>
                <div className="form-group">
                  <label>Institute Name</label>
                  <input
                    type="text"
                    name="instituteName"
                    value={formData.instituteName}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label>Branch</label>
                  <input type="text" name="branch" value={formData.branch} onChange={handleChange} />
                </div>
              </>
            )}
          </div>

          <button type="submit" className="btn-submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
