import React from 'react';
import { Carousel } from 'react-carousel3';
import product1 from "../assets/product10.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"
import product6 from "../assets/product6.png"
import product7 from "../assets/product7.png"
import product8 from "../assets/product8.png"
import product9 from "../assets/product9.png"
import Title from './utils/Title';
const style = {
  width: 297,
  height: 296,
};

const ProductSlider =() => (
 <div className=' nike-container  mt-7'>
   <div
  className='flex flex-col justify-center items-center  h-[50vh] xsm:hidden md:hidden animate__animated animate__zoomInUp'
  >
      <Title title={""} />
    <Carousel  height={460} width={950}  yOrigin={42} yRadius={48} autoPlay={true} className="" style={{display:'flex',alignItems:'center'}}>
      <div key={1} style={style}>
        <img alt="product1" src={product1}  className='hover:-rotate-12 transition-all transition-transform filter drop-shadow-xl'/>
      </div>
      <div key={2} style={style}>
        <img alt="product2"  className='hover:-rotate-12 transition-all transition-transform filter drop-shadow-xl' src={product2} />
      </div>
      <div key={3} style={style}>
        <img alt="product-1"  className='hover:-rotate-12 transition-all transition-transform filter drop-shadow-xl' src={product3} />
      </div>
      <div key={4} style={style}>
        <img alt="product-3"  className='hover:-rotate-12 transition-all transition-transform filter drop-shadow-xl' src={product4} />
      </div>
      <div key={5} style={style}>
        <img alt="product-4"  className='hover:-rotate-12 transition-all transition-transform filter drop-shadow-xl' src={product5} />
      </div>
      <div key={7} style={style}>
        <img alt="product-6"  className='hover:-rotate-12 transition-all transition-transform filter drop-shadow-xl' src={product9} />
      </div>
      <div key={8} style={style}>
        <img alt="product-8"  className='hover:-rotate-12 transition-all transition-transform filter drop-shadow-xl' src={product7} />
      </div>
      <div key={9} style={style}>
        <img alt=""  className='hover:-rotate-12 transition-all transition-transform filter drop-shadow-xl' src={product8} />
      </div>
   
    </Carousel>
  </div>
 </div>
);

export default ProductSlider;