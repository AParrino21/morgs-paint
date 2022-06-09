import React from 'react'
import './oilPaintingsComp.css'
import NavComp from '../NavComp/NavComp'
import oilPaintingsData from './oilPaintingsData'

const OilPaintingsComp = () => {

    function handleClick(e) {
        window.location.href = '/oilpaintings/' + e.target.id
    }

    return (
        <div>
            <div className='nav-container'>
                <NavComp />
            </div>
            <div className='oilpainting-container'>
                {oilPaintingsData.map(art => (
                    <div key={Math.random()}>
                        <h1 className='oilpainting-name'>{art.name}</h1>
                        <img id={art.id} onClick={handleClick} className='oilpainting-img' src={art.image} alt="paintings" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OilPaintingsComp