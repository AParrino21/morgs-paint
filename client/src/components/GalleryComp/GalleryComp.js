import React, { useEffect, useState, useContext } from 'react'
import './galleryComp.css';
import NavComp from '../NavComp/NavComp';

import { ArtContext } from '../../contexts/ArtContext'


const GalleryComp = () => {

  const { getAllOils, oils, getAllMixedMedia, mixedMedia } = useContext(ArtContext)

  useEffect(() => {
      getAllOils()
      getAllMixedMedia()
  }, [])


  return (
    <div>
      <div className='nav-container'>
        <NavComp />
      </div>
      <div className='oilpainting-container'>
        {mixedMedia.map(mix => (
          <div key={mix._id}>
            <h1 className='oilpainting-name'>{mix.name}</h1>
            <p>{mix.bio}</p>
            <p>{mix.size}</p>
            <img id={mix._id} className='oilpainting-img' src={mix.src} alt="paintings" />
          </div>
        ))}

        {oils.map(art => (
          <div key={art._id}>
            <h1 className='oilpainting-name'>{art.name}</h1>
            <p>{art.description}</p>
            <p>{art.size}</p>
            <img id={art._id} className='oilpainting-img' src={art.image} alt="paintings" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryComp