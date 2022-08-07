import React, { useEffect, useState, useContext } from 'react'
import './oilPaintingBioComp.css'
import { useLocation } from 'react-router-dom'

import { ArtContext } from '../../contexts/ArtContext'


const OilPaintingsBioComp = () => {

    const { getOneOil, oneOil } = useContext(ArtContext)

    useEffect(() => {
        let path = location.pathname.split('/')
        getOneOil(path[2])
    }, [])

    const location = useLocation();

    function addToCart() {
        console.log('added to cart!')
    }

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
                {oneOil.inventory != 0 ? <button className='oil-btn' onClick={addToCart}>ADD TO CART</button> : <p style={{ color: 'red' }}>SOLD OUT</p>}

            </div>
        </div>
    )
}

export default OilPaintingsBioComp