import { BlinkBlur, Commet, FourSquare, Mosaic, OrbitProgress, Slab, ThreeDot, TrophySpin } from "react-loading-indicators";


import React from 'react'

const Loader = () => {
  return (
    <div className="grid grid-cols-3">
       <div>
      <OrbitProgress  color="#32cd32" size="small" text="Loading" textColor="" />
    
    </div>

      <div>
        <ThreeDot  color="#32cd32" size="medium" text="" textColor="" />
    </div> 

    <div>
    <FourSquare color="#32cd32" size="medium" text="" textColor="" />
    </div> 

    <Slab color="#32cd32" size="medium" text="" textColor="" />

    <TrophySpin color="#32cd32" size="medium" text="" textColor="" />

    <BlinkBlur color="#32cd32" size="medium" text="" textColor="" />
    <Mosaic color="#32cd32" size="medium" text="" textColor="" />
    <Commet color="#32cd32" size="medium" text="" textColor="" />
  
    </div>
    
    
 
  )
}

export default Loader

