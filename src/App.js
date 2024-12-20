import React from 'react';
import Home from '../src/pages/Home';
import TopAnime from './pages/TopAnime';
import Test from './pages/Test';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/top" element={<TopAnime />}></Route>
          <Route path="/test" element={<Test />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
