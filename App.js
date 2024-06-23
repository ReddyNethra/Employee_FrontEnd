
import React from 'react';
import './App.css';
import UserTable from './Pages/UserTable';
import AddEmployee from './Pages/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<UserTable />} />
      <Route path='/create' element={<AddEmployee />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;


