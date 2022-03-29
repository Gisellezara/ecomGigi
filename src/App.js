import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SlideShow from './components/SlideShow';
// import { Router } from 'express';
// import { Routes } from 'react-router-dom';
import{
  BrowserRouter as Router,
  Route,
  Routes,
}from "react-router-dom"

function App() {
  return (
    <Router>
    <Navbar />
     <div className="App">
   
    <Routes>
    <Route path="/Home" element={<Home />}></Route>
    <Route path="/Shop" element={<Shop />}></Route>
    <Route path="/Contact" element={<Contact />}></Route>
   </Routes>
   
    </div>
   
    <Footer />
    </Router>
  );
}

export default App;
