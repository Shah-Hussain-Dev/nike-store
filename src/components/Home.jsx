import React from 'react'
import { Cart, Footer, Hero, Navbar, Sales, Stories } from '../components'
import {heroapi,popularsales,toprateslaes,highlight,sneaker,story,footerAPI} from "../data/data.js"
import FlexContent from '../components/FlexContent'
import ProductSlider from '../components/ProductSlider'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Cart/>
   <main className='flex flex-col gap-16'>
    <Hero heroApi={heroapi}/>
    <Sales endpoint={popularsales} ifExists/>
    <ProductSlider/>
    <FlexContent endpoint={highlight} ifExists/>
    <Sales endpoint={toprateslaes}/>
    <FlexContent endpoint={sneaker}/>
    <Stories story={story} />
    <Footer footerAPI={footerAPI} />
   </main>
   </>
  )
}

export default Home