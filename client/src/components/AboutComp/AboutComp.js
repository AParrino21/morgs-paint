import React from 'react';
import './aboutComp.css';
import NavComp from '../NavComp/NavComp';
import AboutPic from './aboutPic.JPG'


const HomeComp = () => {
    return (
        <div>
            <div className='nav-container'>
                <NavComp />
            </div>
            <div style={{textAlign: 'center', padding: '20px'}}>
                <img style={{width:'80%', maxWidth:'400px', borderRadius:'50%'}} src={AboutPic} alt="profile picture"/>
            </div>
            <div style={{textAlign: 'center', padding: '20px'}}>
                <h2>Morgan Danton</h2>
                <p>Oil Painter & Mixed Media Artist</p>
                <p>Miami, Florida</p>
                <br/>
                <h4>Artist Statement</h4>
                <br/>
                <h4 style={{maxWidth: '800px', margin: '0 auto', color: 'white', backgroundColor: 'black', padding: '20px', borderRadius: '30px', fontFamily: 'monospace'}}>My paintings explore the search of individual personality in creativity. Comparative tendencies in a world with a constant flow of information, can be seen as a vehicle for destruction or an opportunity to enhance your own insight. Beauty is in the eye of the beholder, as is personal perception. By honoring my own life experience, I attempt to define creativity by my own terms. As an oil portrait artist, I opt for a pop of vibrancy in every piece as opposed to muted traditional oil painting tones, as my personal streak of rebellion seeps through my work as an extension of myself. Some could argue my lack of structural art education would prohibit my art of meaning or depth. Not able to be strictly categorized by style or defined by a movement. My counter argument ensues; isn’t the point of art, to create freely? A refusal to be defined. Art for art’s sake. Art speaks of the soul through the hands and into the eyes of the viewer, who themselves have an individual perception in their definition of creativity. My work includes the recipe of life lessons, an exposal of personal truths, a touch of whimsy to concepts personified. Aspiring to encapsulate a persona in each piece, I wish to bring inspiration to the viewer to do the same for themselves. To uplift them and encourage the question of “Am I projecting my personal truth to my own standards?” To find the bravery of self expression. To be proud of their personal awareness. To see the uniqueness that each of us holds. To turn self criticism into a vehicle for expansion and in turn, forge their own identity in their personal creativity. </h4>
            </div>
        </div>
    )
}

export default HomeComp

// My paintings explore the search of individual personality in creativity. Comparative tendencies in a world with a constant flow of information, can be seen as a vehicle for destruction or an opportunity to enhance your own insight. Beauty is in the eye of the beholder, as is personal perception. By honoring my own life experience, I attempt to define creativity by my own terms. As an oil portrait artist, I opt for a pop of vibrancy in every piece as opposed to muted traditional oil painting tones, as my personal streak of rebellion seeps through my work as an extension of myself. Some could argue my lack of structural art education would prohibit my art of meaning or depth. Not able to be strictly categorized by style or defined by a movement. My counter argument ensues; isn’t the point of art, to create freely? A refusal to be defined. Art for art’s sake. Art speaks of the soul through the hands and into the eyes of the viewer, who themselves have an individual perception in their definition of creativity. My work includes the recipe of life lessons, an exposal of personal truths, a touch of whimsy to concepts personified. Aspiring to encapsulate a persona in each piece, I wish to bring inspiration to the viewer to do the same for themselves. To uplift them and encourage the question of “Am I projecting my personal truth to my own standards?” To find the bravery of self expression. To be proud of their personal awareness. To see the uniqueness that each of us holds. To turn self criticism into a vehicle for expansion and in turn, forge their own identity in their personal creativity. 