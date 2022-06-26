import React from 'react'
import './contactComp.css'
import NavComp from '../NavComp/NavComp'
import PaletteIcon from '@mui/icons-material/Palette';
import BrushIcon from '@mui/icons-material/Brush';

const ContactComp = () => {
  return (
    <div>
      <div>
        <NavComp />
      </div>
      <div style={{ textAlign: 'center', padding: '100px', minHeight: '63vh' }}>
        <h2>Contact me with additonal questions at <br/> <a href='mailto:morgandantonart@gmail.com'>morgandantonart@gmail.com</a></h2>
        <br />

        <div>
          <PaletteIcon style={{fontSize: '30px' }} />
          <BrushIcon style={{fontSize: '30px' }} />
        </div>
      </div>
    </div>
  )
}

export default ContactComp