import React from 'react';
import Home from './component/Home';
import Fun from './component/Fun'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signup' element={<Home />}></Route>
      <Route path='/home' element={<Fun />}></Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App

