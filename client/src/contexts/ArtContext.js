import React, { createContext, useState } from 'react';
// import config from '../config/config'
import axios from 'axios';

export const ArtContext = createContext()

export function ArtProvider(props) {
  const [oils, setOils] = useState([])
  const [mixedMedia, setMixedMedia] = useState([])
  const [prints, setPrints] = useState([])
  const [oneOil, setOneOil] = useState({})
  const [onePrint, setOnePrint] = useState({})
  const [oneMixedMedia, setOneMixedMedia] = useState({})

  const getAllOils = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL_PRO + '/api/paintings/oils')
      setOils(response.data)
      console.log(response)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getOneOil = async (id) => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL_PRO + '/api/paintings/oils/' + id)
      setOneOil(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getAllMixedMedia = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL_PRO + '/api/paintings/mixedmedia')
      setMixedMedia(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getOneMixedMedia = async (id) => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL_PRO + '/api/paintings/mixedmedia/' + id)
      setOneMixedMedia(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getAllPrints = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL_PRO + '/api/paintings/prints')
      setPrints(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getOnePrint = async (id) => {
    try {
      const response = await axios.get(process.env.REACT_APP_URL_PRO + '/api/paintings/prints/' + id)
      setOnePrint(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ArtContext.Provider
      value={{
        oils,
        getAllOils,
        mixedMedia,
        getAllMixedMedia,
        prints,
        getAllPrints,
        oneOil,
        getOneOil,
        onePrint,
        getOnePrint,
        oneMixedMedia,
        getOneMixedMedia
      }}>
      {props.children}
    </ArtContext.Provider>
  );
}
