import React from 'react'
import NavComp from '../NavComp/NavComp'
import './shopComp.css'
import Promo1 from './images/promo1.jpg';
import Promo2 from './images/promo2.jpg';
import Promo3b from './images/promo3b.jpg';
import PrintCover from '../PrintsComp/images/genisis-prints/gen-print-multi-side.jpg'


const ShopComp = () => {
    return (
        <div>
            <div className='nav-container'>
                <NavComp />
            </div>

            <div className='shop-container'>
                <div onClick={() => window.location.href = '/oilpaintings'}>
                    <div className='promo-container'>
                        <img className='promo-imgs' src={Promo1} alt="painting" />
                    </div>
                    <br />
                    <h2 className='shop-titles' onClick={() => window.location.href = '/oilpaintings'}>Oil Paintings</h2>
                </div>

                <div onClick={() => window.location.href = '/mixed-media'}>
                    <div className='promo-container'>
                        <img className='promo-imgs' src={Promo2} alt="mixed media" />
                    </div>
                    <br />
                    <h2 className='shop-titles' onClick={() => window.location.href = '/mixed-media'}>Mixed Media</h2>
                </div>

                <div onClick={() => window.location.href = '/prints'}>
                    <div className='promo-container'>
                        <img className='promo-imgs' src={PrintCover} alt="prints" />
                    </div>
                    <br />
                    <h2 className='shop-titles' onClick={() => window.location.href = '/prints'}>Prints</h2>
                </div>

                <div onClick={() => window.location.href = 'https://www.SOCIETY6.com/morgandanton '}>
                    <div className='promo-container'>
                        <img className='promo-imgs' src={Promo3b} alt="society 6" />
                    </div>
                    <br />
                    <h2 className='shop-titles' onClick={() => window.location.href = 'https://www.SOCIETY6.com/morgandanton '}>Society 6</h2>
                </div>
            </div>

        </div>
    )
}

export default ShopComp