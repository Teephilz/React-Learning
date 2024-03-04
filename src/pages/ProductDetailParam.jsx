import React from 'react'
import { useParams } from 'react-router-dom';
import _productList from '../data/productData';

const ProductDetailParam = () => {
  
  const {id} = useParams();
const product = _productList.find(p => p.id === parseInt(id, 10));

  return (
    <div className='grid grid-cols-1'>
       <img src={product.img} alt="" />
    
    </div>
  )
}

export default ProductDetailParam
