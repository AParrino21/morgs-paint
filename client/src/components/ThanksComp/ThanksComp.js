import React, { useEffect, useState, useContext } from 'react'
import NavComp from '../NavComp/NavComp'

import { ArtContext } from '../../contexts/ArtContext'

const ThanksComp = () => {

    const { subtractInventory } = useContext(ArtContext)
    const [cart, setCart] = useState([])

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('morgsArtCart'))
        setCart(data)
    }, [])

    useEffect(() => {
        console.log(cart)
        if (cart && cart.length !== 0) {
            cart.map(item => {
                subtractInventory(item)
            })
        }
        localStorage.clear()
    }, [cart])


    return (
        <div>
            <NavComp />
            <div style={{ textAlign: 'center', padding: '150px 50px' }}>
                <h1>Thank you for your purchase!</h1>
                <br />
                <br />
                <p style={{ fontWeight: '600' }}>Check your email for your receipt.</p>
                <br />
                <br />
                <h5>I will email you to notify you once your item has been shipped along with tracking information!</h5>
                <br />
                <p style={{ fontWeight: '600' }}>- Morgan</p>
            </div>
        </div>
    )
}

export default ThanksComp