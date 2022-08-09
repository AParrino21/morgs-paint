import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import NavComp from '../NavComp/NavComp';
import './printBioComp.css'

import { ArtContext } from '../../contexts/ArtContext'

const PrintBioComp = () => {

    const { getOnePrint, onePrint, addToCart } = useContext(ArtContext)
    const [currentImg, setCurrentImg] = useState(0)

    useEffect(() => {
        let path = location.pathname.split('/')
        getOnePrint(path[2])
    }, [])

    const location = useLocation();

    function nextImg() {
        if (currentImg === onePrint.src.length - 1) {
            setCurrentImg(0)
        } else {
            setCurrentImg((prev => prev + 1))
        }
    }

    function prevImg() {
        if (currentImg === 0) {
            setCurrentImg(onePrint.src.length - 1)
        } else {
            setCurrentImg((prev => prev - 1))
        }
    }

    function createPrintObj(print, ind) {
        let printObj = {
            _id: print.src[ind].image,
            name: print.name,
            bio: print.bio,
            src: print.src[ind].image,
            price: print.price
        }

        addToCart(printObj)
    }

    return (
        <div>
            <NavComp />
            <div className="print-container">
                <h1 className='print-name'>{onePrint.name}</h1>
                <div className='print-bio-img-container'>
                    <button className='carousel-btn' onClick={prevImg}>&lt;</button>
                    <img className='print-bio-img' src={onePrint.src && onePrint.src[currentImg].image} alt='prints' />
                    <button className='carousel-btn' onClick={nextImg}>&gt;</button>
                </div>
                <h3 className='print-bio'>{onePrint.bio}</h3>
                <h4 className='print-price'>{onePrint.price} USD</h4>
                <button id={onePrint._id} className='print-cart-btn oil-btn' onClick={() => createPrintObj(onePrint, currentImg)}>Add To Cart</button>
            </div>
        </div>
    )
}

export default PrintBioComp