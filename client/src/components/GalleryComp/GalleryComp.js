import React from 'react';
import './galleryComp.css';
import NavComp from '../NavComp/NavComp';
import Oils from '../OilPaintingsComp/oilPaintingsData'
import Mixed from '../MixedMediaComp/MixedMediaData'

const GalleryComp = () => {

  console.log(Mixed)

  return (
    <div>
      <div className='nav-container'>
        <NavComp />
      </div>
      <div className='oilpainting-container'>
        {Mixed.map(mix => (
          <div key={mix.id}>
            <h1 className='oilpainting-name'>{mix.name}</h1>
            <p>{mix.bio}</p>
            <p>{mix.size}</p>
            <img id={mix.id} className='oilpainting-img' src={mix.src} alt="paintings" />
          </div>
        ))}

        {Oils.map(art => (
          <div key={Math.random()}>
            <h1 className='oilpainting-name'>{art.name}</h1>
            <p>{art.description}</p>
            <p>{art.size}</p>
            <img id={art.id} className='oilpainting-img' src={art.image} alt="paintings" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryComp