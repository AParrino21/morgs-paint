import React, { createContext, useState, useContext } from 'react';
// import config from '../config/config'
import axios from 'axios';

export const ArtContext = createContext()

export function ArtProvider(props) {
    const [art, setArt] = useState([])

    const getAllArt = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/paintings')
          setArt(response.data)
          console.log(response.data)
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <ArtContext.Provider
            value={{
                art,
                getAllArt
            }}>
            {props.children}
        </ArtContext.Provider>
    );
}
