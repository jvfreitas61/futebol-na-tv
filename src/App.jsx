import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Campeonato from './Pages/Campeonato';
import PaginaJogo from './Pages/PaginaJogo';

const App = () => {
  return <div>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/futebol-na-tv/' end element={<Home />}/>
      <Route path='/futebol-na-tv/campeonato/:id' element={<Campeonato />}/>
      <Route path='/futebol-na-tv/jogo/:id' element={<PaginaJogo />}/>
    </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
