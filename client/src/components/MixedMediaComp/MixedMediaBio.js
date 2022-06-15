import React from 'react'
import NavComp from '../NavComp/NavComp'
import MixedData from './MixedMediaData'
import { useLocation } from 'react-router-dom'


const MixedMediaBio = () => {

    const location = useLocation();

    let path = location.pathname.split('/')

    console.log(path[2]);

    let clickedPainting = MixedData.filter(painting => painting.id === path[2])

    console.log(clickedPainting)

    let art = clickedPainting[0]

    function addToCart() {
        console.log('added to cart!')
    }

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
                <h1>{art.name}</h1>
                <img style={{ width: '80%', maxWidth: '600px' }} src={art.src} alt={art.name} />
                <h3>{art.size}</h3>
                <h3 style={{ maxWidth: '400px', margin: '0 auto' }}>{art.bio}</h3>
                <br/>
                <h2>{art.price} USD</h2>
                <button className='oil-btn' onClick={addToCart}>Add To Cart</button>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default MixedMediaBio
