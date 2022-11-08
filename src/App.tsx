import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Playlists from './pages/Playlists'
import Search from './pages/Search'
import PageLayout from './components/Pagelayout'


import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/playlists' element={<Playlists />} />
        <Route path='/search' element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
