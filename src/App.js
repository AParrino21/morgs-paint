import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path ='/' element = {<Home/>} />
          <Route exact path ='/gallery' element = {<Gallery/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
