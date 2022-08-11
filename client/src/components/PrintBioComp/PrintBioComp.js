import React, { useEffect, useState, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import NavComp from '../NavComp/NavComp';
import './printBioComp.css'

import { ArtContext } from '../../contexts/ArtContext'

const PrintBioComp = () => {

    const { getOnePrint, onePrint, addToCart, printIsInCart, addedToCart, setAddedToCart } = useContext(ArtContext)
    const [currentImg, setCurrentImg] = useState(0)

    useEffect(() => {
        let path = location.pathname.split('/')
        getOnePrint(path[2])
    }, [])

    useEffect(() => {

    }, [])

    const location = useLocation();

    function nextImg() {
        setAddedToCart('')
        if (currentImg === onePrint.src.length - 1) {
            setCurrentImg(0)
        } else {
            setCurrentImg((prev => prev + 1))
        }
    }

    function prevImg() {
        setAddedToCart('')
        if (currentImg === 0) {
            setCurrentImg(onePrint.src.length - 1)
        } else {
            setCurrentImg((prev => prev - 1))
        }
    }

    function createPrintObj(print, ind) {
        let printObj = {
            _id: print.src[ind].image,
            objId: print._id,
            name: print.name,
            bio: print.bio,
            src: print.src[ind].image,
            image_id: print.src[ind].image_id,
            inventory: print.src[ind].inventory,
            price: print.price,
            price_id: print.src[ind].price_id,
            cat: 'prints',
            srcUpdate: [{
                image: print.src[ind].image,
                image_id: print.src[ind].image_id,
                inventory: print.src[ind].inventory - 1
            }],
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

                {onePrint.src && onePrint.src[currentImg].inventory !== 0 && printIsInCart(onePrint.src && onePrint.src[currentImg].image) === false ? <button id={onePrint._id} className='oil-btn' onClick={() => createPrintObj(onePrint, currentImg)}>ADD TO CART</button> : printIsInCart(onePrint.src && onePrint.src[currentImg].image) === true ? <p style={{ color: 'red' }}>IN CART</p> : <p style={{ color: 'red' }}>SOLD OUT</p>}
                <p style={{ color: 'green' }}>{addedToCart}</p>
            </div>
        </div>
    )
}

export default PrintBioComp