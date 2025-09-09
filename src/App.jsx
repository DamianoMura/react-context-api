import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import About from './pages/About';
import DefaultLayout from './layouts/DefaultLayout';
import LandingPage from './pages/LandingPage';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  
 
 return (
  
    <BrowserRouter>
      <Routes>
        <Route   element={<DefaultLayout/>}>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/about" element={<About/>}/>
          <Route  path="/products" >
            <Route index element={<Products/>}/>
            <Route path=":id" element={<ProductDetail/>}/>
          </Route>
            
          
         
        </Route>  
    </Routes>

//  </BrowserRouter>
  )
}

export default App
