import React from 'react';
import './galleryComp.css';
import NavComp from '../NavComp/NavComp';

const GalleryComp = () => {
  return (
    <div>
      <div className='nav-container'>
                <NavComp />
            </div>
            <div>
                Gallery
            </div>
    </div>
  )
}

export default GalleryComp