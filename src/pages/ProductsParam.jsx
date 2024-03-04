import React from 'react'
import ProductCardParam from '../components/productCardParam';
import _productList from '../data/productData';
import { useToggleContext } from '../../context/ThemeContext';

const ProductsParam = () => {
  const [isLight]= useToggleContext();
  return (
    <div className='py-10'>
    <h1 className={isLight? 'text-center text-black font-bold text-lg':'text-center text-white font-bold text-lg' }>Products to navigate to detail page using query params</h1>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
    {_productList.map((item, index)=>(
       <ProductCardParam key={item.id} id= {item.id} name={item.name} desc={item.desc} img={item.img}/>

    ))}
    </div>
    </div>
  
  )
}

export default ProductsParam
