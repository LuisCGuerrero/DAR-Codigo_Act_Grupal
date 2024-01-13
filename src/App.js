import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />      
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
