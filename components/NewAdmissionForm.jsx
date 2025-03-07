import React, { useState } from 'react';

const NewAdmissionForm = () => {
  const [formData, setFormData] = useState({
    country: 'India',
    state: 'Andhra Pradesh',
    district: 'Guntur',
    city: 'Guntur',
    address1: '',
    address2: '',
    pincode: '',
    sameAddress: 'yes'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Application Saved!');
  };

  return (
    <div className="form-container" style={{ maxWidth: '800px', margin: 'auto', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Address for Communication</h2>
      <form onSubmit={handleSubmit}>
        <label>Country *</label>
        <select name="country" value={formData.country} onChange={handleChange} disabled>
          <option value="India">India</option>
        </select>

        <label>State *</label>
        <select name="state" value={formData.state} onChange={handleChange} disabled>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
        </select>

        <label>District *</label>
        <select name="district" value={formData.district} onChange={handleChange} disabled>
          <option value="Guntur">Guntur</option>
        </select>

        <label>City *</label>
        <select name="city" value={formData.city} onChange={handleChange} disabled>
          <option value="Guntur">Guntur</option>
        </select>

        <label>Address Line 1 *</label>
        <input type="text" name="address1" value={formData.address1} onChange={handleChange} required />

        <label>Address Line 2</label>
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} />

        <label>Pincode *</label>
        <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />

        <label>Is permanent address same as address for communication? *</label>
        <div>
          <label><input type="radio" name="sameAddress" value="yes" checked={formData.sameAddress === 'yes'} onChange={handleChange} /> Yes</label>
          <label><input type="radio" name="sameAddress" value="no" checked={formData.sameAddress === 'no'} onChange={handleChange} /> No</label>
        </div>

        <div className="button-group" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button type="button" style={{ background: '#666', color: 'white' }}>Back</button>
          <button type="submit" style={{ background: '#ffaa00', color: 'white' }}>Save & Exit</button>
          <button type="button" style={{ background: '#28a745', color: 'white' }}>Next</button>
        </div>
      </form>
    </div>
  );
};

export default NewAdmissionForm;
