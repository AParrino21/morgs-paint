import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import NavComp from '../NavComp/NavComp';
import PrintData from './printData'
import './printBioComp.css'


const PrintBioComp = () => {

    const [currentImg, setCurrentImg] = useState(0)

    const location = useLocation();

    let path = location.pathname.split('/')

    let clickedPrint = PrintData.filter(print => print.name === path[2])

    function addToCart(e) {
        console.log(e.target.id)
    }

    function nextImg() {
        if (currentImg === clickedPrint[0].src.length - 1) {
            setCurrentImg(0)
        } else {
            setCurrentImg((prev => prev + 1))
        }
    }

    function prevImg() {
        if (currentImg === 0) {
            setCurrentImg(clickedPrint[0].src.length - 1)
        } else {
            setCurrentImg((prev => prev - 1))
        }
    }

    return (
        <div>
            <NavComp />
            <div className="print-container">
                <h1 className='print-name'>{clickedPrint[0].name.split('-').join(' ')}</h1>
                <div className='print-bio-img-container'>
                    <button className='carousel-btn' onClick={prevImg}>&lt;</button>
                    <img className='print-bio-img' src={clickedPrint[0].src[currentImg]} alt='prints' />
                    <button className='carousel-btn' onClick={nextImg}>&gt;</button>
                </div>
                <h3 className='print-bio'>{clickedPrint[0].bio}</h3>
                <h4 className='print-price'>{clickedPrint[0].price} USD</h4>
                <button id={clickedPrint[0].name} className='print-cart-btn oil-btn' onClick={addToCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default PrintBioComp