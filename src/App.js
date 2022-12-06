import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCard from './components/ItemCard';
import Navbar from './components/Navbar';
import Collection from './components/Collection';
import Layout from './components/Navbar';
import Home from './pages/Home/Home';

import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/:id' element={<ItemCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
