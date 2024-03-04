import React, { useEffect } from 'react'
import { useToggleContext } from '../../context/ThemeContext'
import { HiOutlineSun } from "react-icons/hi2";

const ThemeChange= () => {
  const [isLight, changeTheme]= useToggleContext();


  useEffect(()=>{
    if(isLight){
      document.body.style.background= 'white'
    }
    else{
      document.body.style.background= '#171717'
    }
  }, [isLight])
  
  return (
 
    <div className='flex justify-end'>
      

      <button onClick={
       ()=> changeTheme()} className='px-5 bg-gray-400 border-red-900 rounded-lg hover:scale-105 transition-colors ease-in-out duration-400'>
       <HiOutlineSun size={70} color={isLight? "black": "white"}/>
      </button>
   
      
    </div>
  )
}

export default ThemeChange
