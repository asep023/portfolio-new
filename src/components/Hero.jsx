import React from 'react'
import { useTheme } from '../ThemeContext';
import HeroImage from '../assets/12.jpg'

const Hero = () => {
    const { theme, toggleTheme } = useTheme();
  return (
    <div 
    >  
        <div className={` px-8 md:px-16 lg:px-24 ${theme === 'dark' ? 'bg-black text-white' : theme === 'blue' ? 'bg-blue-500 text-white' : 'bg-white text-black'} text-center py-16'`}>
    <img src={HeroImage} alt="" 
    className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
    transition-transform duration-300 hover:scale-105'/>
    <h1 className='text-4xl font-bold'>
        Saya {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Asep Saepuloh</span>
        , Desain Grafis & editor
    </h1>
    <p className='mt-4 text-lg text-gray-300'>
        Saya adalah seorang desain grafis profesional
    </p>
    <div className='mt-8 space-x-4'>
    <a href="mailto:aepul7825@gmail.com" className='hover:underline'>
    <button
        className='bg-gradient-to-r from-green-400 to-blue-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>epul7825@gmail.com</button>
            </a>
            <a href="https://wa.me/088224368530" className='hover:underline'>
            <button
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>+6288224368530</button>
            </a>
            
    </div>

</div>
</div>
   
  )
}

export default Hero