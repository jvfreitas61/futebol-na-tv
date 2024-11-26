import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BrasileiroSerieA from './Components/Competitions/BrasileiroSerieA';
import CopaDoBrasil from './Components/Competitions/CopaDoBrasil';
import Libertadores from './Components/Competitions/libertadores';

const App = () => {
  return <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/brasileiro-serie-a' element={<BrasileiroSerieA />}/>
      <Route path='/copa-do-brasil' element={<CopaDoBrasil />}/>
      <Route path='/libertadores' element={<Libertadores />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  </div>;
};

export default App;
