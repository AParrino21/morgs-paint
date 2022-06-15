import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import Contact from './pages/Contact'
import MixedMedia from './pages/MixedMedia';
import Blog from './pages/Blog';
import PrintsPage from './pages/PrintsPage';
import PrintBioComp from './components/PrintBioComp/PrintBioComp';
import OilPaintingsComp from './components/OilPaintingsComp/OilPaintingsComp';
import OilPaintingsBioComp from './components/OilPaintingsBioComp/OilPaintingsBioComp';
import MixedMediaBioComp from './components/MixedMediaComp/MixedMediaBio'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Shop />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/mixed-media' element={<MixedMedia />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/prints' element={<PrintsPage />} />
          <Route exact path='/print-bio/:print' element={<PrintBioComp />} />
          <Route exact path='/oilpaintings' element={<OilPaintingsComp />} />
          <Route exact path='/oilpaintings/:oil' element={<OilPaintingsBioComp />} />
          <Route exact path='/mixed-media/:mixed' element={<MixedMediaBioComp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
