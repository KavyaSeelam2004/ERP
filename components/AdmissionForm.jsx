import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdmissionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: ''
  });

  const departments = [
    "Mathematics",
    "Food Technology",
    "Advanced  Computer Science Engineering",
    "Computer Science and Engineering",
    "Electrical and Electronics Engineering",
    "Electronics and Communication Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biotechnology",
    "Biomedical Engineering",
    "Management Studies",
    "Pharmacy",
    "Agricultural Engineering",
    "Agricultural and Horticultural Sciences",
    "Law",
    "Information Technology",
    "English and Foreign Languages",
    "Social sciences and Humanities",
    "Textile Technology"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('selectedDepartment', formData.department);
    navigate('/departments');
  };
  

  return (
    <div className="form-container">
      <h2>Apply Now for Admission</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

        <label>Department:</label>
        <select name="department" value={formData.department} onChange={handleChange} required>
          <option value="">-- Select Department --</option>
          {departments.map((dept, index) => (
            <option key={index} value={dept}>{dept}</option>
          ))}
        </select>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default AdmissionForm;
