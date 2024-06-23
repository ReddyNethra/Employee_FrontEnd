import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch('https://localhost:7296/api/Employee')
      .then(response => response.json())
      .then(data => {
        if (data.isSuccess) {
          setEmployees(data.result);
        } else {
          console.error('Error fetching data:', data.errorMessages);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h3>Employee List</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.empname}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <br/>
      <a className="btn btn-primary" href="http://localhost:3000/create">Create</a>
      </div>
    </div>   
  );
};

export default EmployeeTable;
