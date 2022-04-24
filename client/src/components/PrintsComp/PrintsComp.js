import React from 'react'
import './printsComp.css'
import ReincarCover from './images/reincar-prints/reincar-print-multi.jpg'
import SerCover from './images/ser-prints/ser-print-multi.jpg'
import GenCover from './images/genisis-prints/gen-print-multi.jpg'
import BeeCover from './images/bee-prints/bee-print-multi.jpg'
import BreathCover from './images/breath-prints/breath-print-multi.jpg'
import NormaCover from './images/norma-prints/norma-print-multi.jpg'
import FoxCover from './images/fox-prints/fox-print-multi.jpg'
import PoppyCover from './images/poppy-prints/poppy-print-multi.jpg'
import MaidCover from './images/maid-prints/maid-print-multi.jpg'
import WhaleCover from './images/whale-prints/whale-print-multi.jpg'

const PrintsComp = () => {
  return (
    <div>
        <div className="prints-container">
            <div className="reincar-prints prints">
                <h2 className='print-title'>Reincarnation</h2>
                <img className='reincar-cover cover' src={ReincarCover} alt="print cover" />
            </div>
            <div className="reincar-prints prints">
                <h2 className='print-title'>Serendipity</h2>
                <img className='reincar-cover cover' src={SerCover} alt="print cover" />
            </div>
            <div className="reincar-prints prints">
                <h2 className='print-title'>Genesis</h2>
                <img className='reincar-cover cover' src={GenCover} alt="print cover" />
            </div>
            <div className="reincar-prints prints">
                <h2 className='print-title'>Bee Queen</h2>
                <img className='reincar-cover cover' src={BeeCover} alt="print cover" />
            </div>
            <div className="reincar-prints prints">
                <h2 className='print-title'>Breathe</h2>
                <img className='reincar-cover cover' src={BreathCover} alt="print cover" />
            </div>
            <div className="reincar-prints prints">
                <h2 className='print-title'>Norma Jeane</h2>
                <img className='reincar-cover cover' src={NormaCover} alt="print cover" />
            </div>
            <div className="reincar-prints prints">
                <h2 className='print-title'>Florida Foxtrot</h2>
                <img className='reincar-cover cover' src={FoxCover} alt="print cover" />
            </div>
            <div className="reincar-prints prints">
                <h2 className='print-title'>Poppy</h2>
                <img className='reincar-cover cover' src={PoppyCover} alt="print cover" />
            </div>
            <div className="reincar-prints prints">
                <h2 className='print-title'>Maid In America</h2>
                <img className='reincar-cover cover' src={MaidCover} alt="print cover" />
            </div>
            <div className="reincar-prints prints">
                <h2 className='print-title'>Where There's A Whale There's A Way</h2>
                <img className='reincar-cover cover' src={WhaleCover} alt="print cover" />
            </div>
        </div>
    </div>
  )
}

export default PrintsComp