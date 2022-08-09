import React, { useState, useEffect } from 'react'
import NavComp from '../NavComp/NavComp'

const Cart = () => {

    const [cartItem, setCartItems] = useState([])
    const [cartTotalPrice, setCartTotalPrice] = useState()
    let storage = JSON.parse(localStorage.getItem('morgsArtCart'))

    useEffect(() => {
        setCartItems(storage)
    }, [])

    useEffect(() => {
        cartTotal(cartItem)
    }, [cartItem])

    function checkOutNow() {
        fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItem)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                // redirecting the page using url from the backend
                window.location.href = data.url
            })
    }

    function removeFromCart(e) {
        let newCart = cartItem.filter(item => item._id != e.target.id)
        if (newCart === []) {
            localStorage.removeItem('morgsArtCart')
        } else {
            localStorage.setItem('morgsArtCart', JSON.stringify(newCart))
            setCartItems(newCart)
        }
    }

    function cartTotal(item) {
        let total = 0
        for (let i = 0; i < item.length; i++) {
            total += item[i].price
        }

        setCartTotalPrice(total)
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <NavComp />
            {cartItem && cartItem.length === 0 || cartItem === null ?
                <div style={{ textAlign: 'center', padding: '350px 0' }}>
                    <h1 style={{ fontSize: '40px' }}>Cart is Empty</h1>
                </div>
                :
                <div>
                    <br />
                    <h3 style={{ borderBottom: '1px solid black', maxWidth: '500px', margin: '0 auto' }}>Your Cart ({cartItem && cartItem.length})</h3>
                    {cartItem.map((art, i) => (
                        <div style={{ padding: '80px' }} key={i}>
                            <h2>{art.name}</h2>
                            <img style={{ width: '100%', maxWidth: '600px' }} src={art.image ? art.image : art.src} alt="" />
                            <br />
                            <br />
                            <button id={art._id} onClick={(e) => removeFromCart(e)}>Remove Item</button>
                        </div>
                    ))}
                    <div>Cart Total: {cartTotalPrice && cartTotalPrice}</div>
                    <br />
                    <button onClick={checkOutNow}>Checkout</button>
                </div>
            }
        </div>
    )
}

export default Cart
