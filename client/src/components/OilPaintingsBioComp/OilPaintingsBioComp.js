import React, { useEffect, useState, useContext } from 'react'
import './oilPaintingBioComp.css'
import { useLocation } from 'react-router-dom'

import { ArtContext } from '../../contexts/ArtContext'


const OilPaintingsBioComp = () => {

    const { getOneOil, oneOil, addToCart, isInCart, addedToCart, setAddedToCart } = useContext(ArtContext)

    useEffect(() => {
        let path = location.pathname.split('/')
        getOneOil(path[2])
        setAddedToCart('')
    }, [])

    const location = useLocation();

    return (
        <div>
            <div className='painting-bio-img-container'>
                <button className='oil-btn' onClick={() => window.location.href = '/oilpaintings'}>BACK TO SHOP</button>
                <br />
                <br />
                <img className='painting-bio-img' src={oneOil.image} alt={oneOil.name} />
                <br />
                <br />
                <h1>{oneOil.name}</h1>
                <h2>{oneOil.size}</h2>
                <h2>{oneOil.description}</h2>
                <br />
                <br />
                <h2>{oneOil.price} USD</h2>
                {oneOil.inventory != 0 && isInCart(oneOil) === false ? <button id={oneOil._id} className='oil-btn' onClick={() => addToCart(oneOil)}>ADD TO CART</button> : isInCart(oneOil) === true ? <p style={{ color: 'red' }}>IN CART</p> : <p style={{ color: 'red' }}>SOLD OUT</p>}
                <p style={{color: 'green'}}>{addedToCart}</p>
            </div>
        </div>
    )
}

export default OilPaintingsBioComp