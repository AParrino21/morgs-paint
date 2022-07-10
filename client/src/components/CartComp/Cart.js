import React from 'react'

const Cart = () => {

    let storage = JSON.parse(localStorage.getItem('morgsArtCart'))
    if (storage === null || storage === []) {
        return (
            <div>Cart is Empty</div>
        )
    }

    function checkOutNow() {
        fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(storage)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                // redirecting the page using url from the backend
                window.location.href = data.url
            })
    }

    return (
        <div>
            {storage.map(art => (
                <div key={art.id}>
                    <h2>{art.name}</h2>
                </div>
            ))}
            <button onClick={checkOutNow}>Checkout</button>
        </div>
    )
}

export default Cart
