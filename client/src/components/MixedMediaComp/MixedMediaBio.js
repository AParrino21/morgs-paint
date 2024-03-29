import React, { useEffect, useState, useContext } from 'react'
import NavComp from '../NavComp/NavComp'
import { useLocation } from 'react-router-dom'

import { ArtContext } from '../../contexts/ArtContext'

const MixedMediaBio = () => {

    const location = useLocation();
    const { getOneMixedMedia, oneMixedMedia, addToCart, isInCart, addedToCart, setAddedToCart } = useContext(ArtContext)

    useEffect(() => {
        let path = location.pathname.split('/')
        getOneMixedMedia(path[2])
        setAddedToCart('')
    }, [])

    return (
        <div>
            <div className='nav-container'>
                <NavComp />
            </div>
            <br />
            <br />
            <button className='oil-btn' onClick={() => window.location.href = '/mixed-media'}>BACK TO SHOP</button>
            <br />
            <div style={{ textAlign: 'center' }}>
                <h1>{oneMixedMedia.name}</h1>
                <img style={{ width: '80%', maxWidth: '600px' }} src={oneMixedMedia.src} alt={oneMixedMedia.name} />
                <br />
                <br />
                <h3>{oneMixedMedia.size}</h3>
                <h3 style={{ maxWidth: '400px', margin: '0 auto' }}>{oneMixedMedia.bio}</h3>
                <br />
                <h2>{oneMixedMedia.price} USD</h2>
                {oneMixedMedia.inventory != 0 && isInCart(oneMixedMedia) === false ? <button id={oneMixedMedia._id} className='oil-btn' onClick={() => addToCart(oneMixedMedia)}>ADD TO CART</button> : isInCart(oneMixedMedia) === true ? <p style={{ color: 'red' }}>IN CART</p> : <p style={{ color: 'red' }}>SOLD OUT</p>}
                <p style={{ color: 'green' }}>{addedToCart}</p>
                <br />
                <br />
            </div>
        </div>
    )
}

export default MixedMediaBio
