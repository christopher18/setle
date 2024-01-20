import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationMenu from './components/navmenu/navmenu';
import SetPuzzle from './components/SetPuzzle/setpuzzle';
import SetGame from './components/SetGame/setgame';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavigationMenu />
      <Routes>
        <Route path="/puzzle" element={<SetPuzzle />} />
        <Route path="/" element={<SetGame />} />
        <Route path="/puzzle/:seed" element={<SetPuzzle />} />
        <Route path="/game" element={<SetGame />} />
        <Route path="/game/:seed" element={<SetGame />} />

        {/* Add more routes for other components */}
      </Routes>
  </BrowserRouter>
  );
}

export default App;
