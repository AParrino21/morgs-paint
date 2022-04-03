import React from 'react'
import './mixedMediaComp.css'
import NavComp from '../NavComp/NavComp';
import Golden from './images/golden.jpg';
import Strawberry from './images/strawberry.jpg';


const MixedMediaComp = () => {
    return (
        <div>

            <div className='nav-container'>
                <NavComp />
            </div>

            <div className='mixed-media-container'>
                <div>
                    <div className='mixed-media'>
                        <img className='mixed-media-img' src={Golden} alt="Golden" />
                    </div>
                    <div className='mixed-media'>
                        <img className='mixed-media-img' src={Golden} alt="Golden" />
                    </div>
                </div>
                <div>
                    <div className='mixed-media'>
                        <img className='mixed-media-img' src={Strawberry} alt="Strawberry" />
                    </div>
                    <div className='mixed-media'>
                        <img className='mixed-media-img' src={Strawberry} alt="Strawberry" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MixedMediaComp