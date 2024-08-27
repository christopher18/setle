import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationMenu from './components/navmenu/navmenu';
import SetPuzzle from './components/SetPuzzle/setpuzzle';
import SetGame from './components/SetGame/setgame';
import Home from './components/Home/home';
import { Analytics } from '@vercel/analytics/react';

import './App.css';

function App() {
  return (
    <BrowserRouter className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <NavigationMenu />
      <Routes>
        <Route path="/puzzle" element={<SetPuzzle />} />
        <Route path="/" element={<Home style={{ height: '100%' }} />} />
        <Route path="/puzzle/:seed" element={<SetPuzzle />} />
        <Route path="/game" element={<SetGame />} />
        <Route path="/game/:seed" element={<SetGame />} />

        {/* Add more routes for other components */}
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
