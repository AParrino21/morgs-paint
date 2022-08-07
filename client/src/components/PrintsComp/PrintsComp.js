import React, { useEffect, useState, useContext } from 'react'
import './printsComp.css'

import { ArtContext } from '../../contexts/ArtContext'
import { useNavigate } from 'react-router-dom';

const PrintsComp = () => {

    const navigate = useNavigate();
    const { prints, getAllPrints } = useContext(ArtContext)

    useEffect(() => {
        getAllPrints()
    }, [])

    function handleClick(e) {
        let clicked = e.target.id;
        navigate(`/print-bio/${clicked}`)
    }

    return (
        <div className="prints-container">
            {prints.map(print => (
                <div key={print._id} onClick={handleClick} id={print._id} className="prints">
                    <h2 id={print._id} className='print-title'>{print.name}</h2>
                    <img id={print._id} className='cover' src={print.src && print.src[0].image} alt="print cover" />
                </div>
            ))}
        </div>
    )
}

export default PrintsComp