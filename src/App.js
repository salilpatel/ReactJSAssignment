/*import React from 'react';
import './App.css';
import BMICalculator from './Problem1/BMICalculator';

function App() {
  return (
      <div>
        <BMICalculator></BMICalculator>
      </div>
  )
}

export default App;*/

/*
import CartContainer from "./Project/Shopping Cart/CartContainer";

function AppProject(){
    return(
        <>
        <CartContainer></CartContainer>
        </>
    )
}

export default AppProject;
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ImageGalleryElephant from './Problem3/ImageGalleryElephant'
import Preview from './Problem3/Preview'

function AppProject() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ImageGalleryElephant></ImageGalleryElephant>}></Route>
          <Route path='/view/:user' element={<Preview></Preview>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppProject