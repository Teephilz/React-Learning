import React from 'react'
import MyHeader from '../components/header'
import MyCollection from '../components/collection'
import ProductCard from '../components/productCardParam'
import ProductsParam from './ProductsParam'
import Layout from '../components/Layout'
import ProductsProp from './ProductsProp'
import Counter from './Counter'
import ThemeChange from './ThemeChange'
import Author from './Author'
import Loader from '../components/Loader'

const Home = () => {
  return (
       <div className='grid grid-cols gap-2 ' >
        <ThemeChange/>
        <MyCollection/>
        <ProductsParam/>
        <ProductsProp/>
        <Counter/>
        <Author/>
        <Loader/>
    </div>
  )
}

export default Home
