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

    function handleClick(e) {
        let clicked = e.target.id;
        window.location.href = `/print-bio/${clicked}`
    }

    return (
        <div>
            <div className="prints-container">
                <div onClick={handleClick} id='reincarnation' className="prints">
                    <h2 id='reincarnation' className='print-title'>Reincarnation</h2>
                    <img id='reincarnation' className='cover' src={ReincarCover} alt="print cover" />
                </div>
                <div onClick={handleClick} id='serendipity' className="prints">
                    <h2 id='serendipity' className='print-title'>Serendipity</h2>
                    <img id='serendipity' className='cover' src={SerCover} alt="print cover" />
                </div>
                <div onClick={handleClick} id='genisis' className="prints">
                    <h2 id='genisis' className='print-title'>Genesis</h2>
                    <img id='genisis' className='cover' src={GenCover} alt="print cover" />
                </div>
                <div onClick={handleClick} id='bee-queen' className="prints">
                    <h2 id='bee-queen' className='print-title'>Bee Queen</h2>
                    <img id='bee-queen' className='cover' src={BeeCover} alt="print cover" />
                </div>
                <div onClick={handleClick} id='breathe' className="prints">
                    <h2 id='breathe' className='print-title'>Breathe</h2>
                    <img id='breathe' className='cover' src={BreathCover} alt="print cover" />
                </div>
                <div onClick={handleClick} id='norma-jeane' className="prints">
                    <h2 id='norma-jeane' className='print-title'>Norma Jeane</h2>
                    <img id='norma-jeane' className='cover' src={NormaCover} alt="print cover" />
                </div>
                <div onClick={handleClick} id='florida-foxtrot' className="prints">
                    <h2 id='florida-foxtrot' className='print-title'>Florida Foxtrot</h2>
                    <img id='florida-foxtrot' className='cover' src={FoxCover} alt="print cover" />
                </div>
                <div onClick={handleClick} id='poppy' className="prints">
                    <h2 id='poppy' className='print-title'>Poppy</h2>
                    <img id='poppy' className='cover' src={PoppyCover} alt="print cover" />
                </div>
                <div onClick={handleClick} id='maid-in-america' className="prints">
                    <h2 id='maid-in-america' className='print-title'>Maid In America</h2>
                    <img id='maid-in-america' className='cover' src={MaidCover} alt="print cover" />
                </div>
                <div onClick={handleClick} id='whale' className="prints">
                    <h2 id='whale' className='print-title'>Where There's A Whale There's A Way</h2>
                    <img id='whale' className='cover' src={WhaleCover} alt="print cover" />
                </div>
            </div>
        </div>
    )
}

export default PrintsComp