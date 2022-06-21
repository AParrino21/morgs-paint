import React from 'react'
import './contactComp.css'
import NavComp from '../NavComp/NavComp'

const ContactComp = () => {
  return (
    <div>
        <div>
            <NavComp />
        </div>
        <div style={{textAlign: 'center', padding: '100px'}}>
            <h2>Contact me with additonal questions <a href='mailto:morganedanton@gmail.com'>HERE</a></h2>
        </div>
    </div>
  )
}

export default ContactComp