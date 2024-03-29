import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import NoPage from './components/NoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/registrarte' element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
