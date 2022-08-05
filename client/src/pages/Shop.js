import React, { useEffect, useState, useContext } from 'react'
import ShopComp from '../components/ShopComp/ShopComp'

import { ArtContext } from '../contexts/ArtContext'

const Shop = () => {

  const { getAllArt } = useContext(ArtContext)

  useEffect(() => {
    getAllArt()
  }, [])


  return (
    <div>
      <ShopComp />
    </div>
  )
}

export default Shop