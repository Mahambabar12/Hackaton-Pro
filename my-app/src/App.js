import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import Shop from './components/Shop.js'
import Cart from './components/Cart.js';
function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
