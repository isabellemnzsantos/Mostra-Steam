import logo from './logo.png';
import './App.css';

import React from 'react';
import Navbar from './Navbar.js'; // Importe o componente Navbar
import ImageBanner from './ImageBanner';
import LoginForm from './login.js';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Renderize o componente Navbar */}
      <ImageBanner />
    </div>
  );
}

export default App;