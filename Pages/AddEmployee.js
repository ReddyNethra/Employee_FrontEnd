import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddEmployee = () => {
  const [empname, setEmpname] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const employee = {
      empname,
      department,
      salary: parseFloat(salary),
    };

    fetch('https://localhost:7296/api/Employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
    .then(response => response.json())
    .then(data => {
      if (data.isSuccess) {
        alert('Employee added successfully!');
        setEmpname('');
        setDepartment('');
        setSalary('');
      } else {
        console.error('Error adding employee:', data.errorMessages);
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
    <h3>Add New Employee</h3>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="empname" className="form-label">Name:</label>
        <input type="text" className="form-control" id="empname" value={empname} onChange={(e) => setEmpname(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="department" className="form-label">Department:</label>
        <input type="text" className="form-control" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label htmlFor="salary" className="form-label">Salary:</label>
        <input type="number" className="form-control" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Add Employee</button>
    </form>
  </div>
);
};

export default AddEmployee;
