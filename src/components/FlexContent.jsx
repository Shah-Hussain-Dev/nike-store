import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const FlexContent = ({ifExists,endpoint:{title,heading,subtitle,text,img,url,btn}}) => {
  return (
   <>
     <div className={`flex items-center justify-between lg:flex-col lg:justify-center nike-container ${ifExists ? 'flex-row-reverse':'flex-row'}`} >
        <div className='max-w-lg lg:max-w-none w-full md:text-center grid items-center lg:justify-items-center '>
            <h1 className='text-gradient text-5xl sm:text-3xl font-bold cursor-pointer animate__animated animate__animated animate__zoomIn'>{heading}</h1>
            <h1 className='text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold animate__animated animate__animated animate__zoomIn cursor-pointer text-slate-900 filter drop-shadow-lg'>{title}</h1>
            <p className='xl:text-sm my-4 text-slate-900 animate__animated animate__animated animate__zoomIn'>{text}</p>
                <a href={url} className='flex items-center animate__animated animate__animated animate__zoomIn   py-3 pb-7' target='_blank' role='button'>
                    <button type='button' className='button-theme hover:scale-110 transition-all bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'>{btn}</button>
                </a>
            </div>
        <div className='flex items-center max-w-xl relative w-full justify-center lg:max-w-none'>
            <img src={img} alt={`img/${heading}`}
            className={`w-auto object-fill transitions-theme  animate__animated animate__zoomIn ${ifExists? ' h-60 lg:h-56  md:h-52 sm:h-44 xsm:h-36 rotate-6 hover:-rotate-[360deg]  ': ' h-72 lg:h-64 md:h-60 sm:h-48 xsm:h-40 rotate-[19deg] hover:-rotate-[360deg]'}`}
            />
        </div>
    </div>
   </>
  )
}

export default FlexContent