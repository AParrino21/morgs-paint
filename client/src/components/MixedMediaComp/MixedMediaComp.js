import React from 'react'
import './mixedMediaComp.css'
import NavComp from '../NavComp/NavComp';

const MixedMediaComp = () => {

    function handleClick(e) {
        window.location.href = '/mixed-media/' + e.target.id
    }

    return (
        <div>

            <div className='nav-container'>
                <NavComp />
            </div>
            <br />
            <br />
            <br />

            <div className='mixed-media-container'>
                <h1>Golden Goddess</h1>
                <img onClick={handleClick} id='1' className='mixed-img' src="https://ik.imagekit.io/bw0zmu9yh/Oil/0E9EA971-7AA5-45DF-A8F4-644EE0BF4A27_F0Xl44XUs.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655250557999" alt="golden goddes" />
                <br />
                <h1>Strawberry Sativa</h1>
                <img onClick={handleClick} id='2' className='mixed-img' src="https://ik.imagekit.io/bw0zmu9yh/Oil/9C50F39A-C449-472E-BA72-074F3B6CAD3E_23R6X98pb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655250560806" alt="strawberry sativa" />
                <br />
                <h1>The Dance of Duality</h1>
                <img onClick={handleClick} id='3' className='mixed-img' src="https://ik.imagekit.io/bw0zmu9yh/Oil/image_50411265_oE4PrW13Y.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1655250558658" alt="the dance of duality" />
                <br />
                <br />
                <br />
                <br/>
                <h1>Forest Foragers</h1>
                <img onClick={handleClick} id='4' style={{ width: '100%', maxWidth: '650px' }} className='mixed-img' src="https://ik.imagekit.io/bw0zmu9yh/Oil/804085C0-5974-468C-9CF0-4156B9DCF9A6_WIQPUIGxb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655250560404" alt="forest foragers" />
                <br />
                <br/>
                <br/>
                <h1>Spirit of the Wildflower</h1>
                <img onClick={handleClick} id='5' className='mixed-img' src="https://ik.imagekit.io/bw0zmu9yh/Oil/image_6487327__14__FuCA_1Vio.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1655254449201" alt="Spirit of the Wildflower" />
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default MixedMediaComp