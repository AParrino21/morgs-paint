import React from 'react'
import { useLocation } from 'react-router-dom';
import NavComp from '../NavComp/NavComp';
import PrintData from './printData'
import './printBioComp.css'


const PrintBioComp = () => {

    const location = useLocation();

    let path = location.pathname.split('/')

    console.log(path[2].split('-').join(' '))

    let clickedPrint = PrintData.filter(print => print.name === path[2].split('-').join(' '))
    console.log(clickedPrint)

    return (
        <div>
            <NavComp />
            <div className="print-container">
                <h1>{clickedPrint[0].name}</h1>
                <div className='print-bio-img-container'>
                    {clickedPrint[0].src.map(img => (
                        <div key={Math.random()}>
                            <img className='print-bio-img' src={img} alt='prints' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PrintBioComp