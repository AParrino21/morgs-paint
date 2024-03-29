import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ArtContext = createContext()

export function ArtProvider(props) {
  const [oils, setOils] = useState([])
  const [mixedMedia, setMixedMedia] = useState([])
  const [prints, setPrints] = useState([])
  const [oneOil, setOneOil] = useState({})
  const [onePrint, setOnePrint] = useState({})
  const [oneMixedMedia, setOneMixedMedia] = useState({})
  const [addedToCart, setAddedToCart] = useState('')

  const URL = process.env.REACT_APP_URL_PRO

  const getAllOils = async () => {
    try {
      const response = await axios.get(URL + '/api/paintings/oils')
      setOils(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getOneOil = async (id) => {
    try {
      const response = await axios.get(URL + '/api/paintings/oils/' + id)
      setOneOil(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getAllMixedMedia = async () => {
    try {
      const response = await axios.get(URL + '/api/paintings/mixedmedia')
      setMixedMedia(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getOneMixedMedia = async (id) => {
    try {
      const response = await axios.get(URL + '/api/paintings/mixedmedia/' + id)
      setOneMixedMedia(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getAllPrints = async () => {
    try {
      const response = await axios.get(URL + '/api/paintings/prints')
      setPrints(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const getOnePrint = async (id) => {
    try {
      const response = await axios.get(URL + '/api/paintings/prints/' + id)
      setOnePrint(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const subtractInventory = async (data) => {
    try {
      const response = await axios.put(URL + '/api/paintings/subtract', data)
    } catch (error) {
      console.log(error)
    }
  }

  function addToCart(clickedItem) {
    let storage = JSON.parse(localStorage.getItem('morgsArtCart'))
    if (storage === null) {
      storage = []
    }
    storage.push(clickedItem)
    localStorage.setItem('morgsArtCart', JSON.stringify(storage))
    setAddedToCart('Added to Cart!')
  }

  function isInCart(clickedItem) {
    let storage = JSON.parse(localStorage.getItem('morgsArtCart'))
    if(storage === null || storage.length === 0) {
      return false
    }
    let inCart = storage.filter(item => item._id === clickedItem._id)
    if (inCart.length !== 0) {
      return true
    }
    return false
  }

  function printIsInCart(clickedItem) {
    let storage = JSON.parse(localStorage.getItem('morgsArtCart'))
    if(storage === null || storage.length === 0) {
      return false
    }
    let inCart = storage.filter(item => item.src === clickedItem)
    if (inCart.length !== 0) {
      return true
    }
    return false
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
        getOneMixedMedia,
        addToCart,
        isInCart,
        addedToCart,
        setAddedToCart,
        subtractInventory,
        printIsInCart
      }}>
      {props.children}
    </ArtContext.Provider>
  );
}
