import React from 'react'
import { useLocation } from 'react-router-dom';
import NavComp from '../NavComp/NavComp';
import PrintData from './printData'
import './printBioComp.css'


const PrintBioComp = () => {

    const location = useLocation();

    let path = location.pathname.split('/')

    console.log(path[2])
    console.log('printdata', PrintData)

    let clickedPrint = PrintData.filter(print => print.name === path[2])
    console.log(clickedPrint)

    function addToCart(e) {
        console.log(e.target.id)
    }

    return (
        <div>
            <NavComp />
            <div className="print-container">
                <h1 className='print-name'>{clickedPrint[0].name.split('-').join(' ')}</h1>
                <div className='print-bio-img-container'>
                    {clickedPrint[0].src.map(img => (
                        <div key={Math.random()}>
                            <img className='print-bio-img' src={img} alt='prints' />
                        </div>
                    ))}
                </div>
                <h3 className='print-bio'>{clickedPrint[0].bio}</h3>
                <h4 className='print-price'>{clickedPrint[0].price} USD</h4>
                <button id={clickedPrint[0].name} className='print-cart-btn oil-btn' onClick={addToCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default PrintBioComp