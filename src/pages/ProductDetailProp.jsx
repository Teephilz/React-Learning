import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetailProp = () => {
  const location= useLocation();
  const {mapData}= location.state
  return (
    <div className=' grid grid-cols-1 p-10'>
    <img src={mapData.image} alt="" /> 
    <h1 className='font-bold text-justify'>{mapData.name}</h1>
    <p>{mapData.desc}</p>
 
 </div>
  )
}

export default ProductDetailProp
