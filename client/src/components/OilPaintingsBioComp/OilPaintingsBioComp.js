import React from 'react'
import './oilPaintingBioComp.css'
import { useLocation } from 'react-router-dom'
import oilPaintingsData from '../OilPaintingsComp/oilPaintingsData';

const OilPaintingsBioComp = () => {

    const location = useLocation();

    let path = location.pathname.split('/')

    console.log(path[2]);

    let clickedPainting = oilPaintingsData.filter(painting => painting.id === parseInt(path[2]))

    console.log(clickedPainting)

    let art = clickedPainting[0]

    function addToCart() {
        console.log('added to cart!')
    }

    return (
        <div>
            <div className='painting-bio-img-container'>
                <img className='painting-bio-img' src={art.image} alt={clickedPainting[0].name} />
                <br />
                <br />
                <h1>{art.name}</h1>
                <h2>{art.size}</h2>
                <h2>{art.description}</h2>
                <br />
                <br />
                <h2>{art.price} USD</h2>
                <button onClick={addToCart}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default OilPaintingsBioComp