import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Contact from './pages/Contact'
import MixedMedia from './pages/MixedMedia';
// import NavComp from './components/NavComp/NavComp';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <NavComp /> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/mixed-media' element={<MixedMedia />} />
          <Route exact path='/blog' element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
