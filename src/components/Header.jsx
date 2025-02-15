import React, { useState } from 'react'
import name from "../assets/logo.png"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
const Header = () => {
  const [nav,setNav]=useState(false)
  return (
    <div className='bg-cyan-50 h-20 text-5xl     '>
      <div className='flex items-center justify-between h-20'>
      <div className='flex md:m-14 gap-8'>
      <img src={name} alt="logo"  className='h-12 m-2  '/>
      <h1 className='font-semibold text-3xl lg:text-4xl p-3 lg:p-2'>vijnjodaya</h1>
      </div>
      
      <div >
        <ul className='hidden md:text-lg md:flex '>
          <li className='m-3 cursor-pointer '>Home</li>
          <li className='m-3 mr-12 cursor-pointer'>About</li>
        </ul>
        <div onClick={()=>setNav(!nav)} className='md:hidden cursor-pointer my-8 m-5'>{nav?<AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}</div>
      </div>
      </div>
      {nav&&<div className='bg-cyan-50 p-4 pb-0'>
      <ul className='text-lg text-center border-b-4'>
          <li className='p-3 cursor-pointer border-y-4' onClick={()=>setNav(false)}>Home</li>
          <li className='p-3 cursor-pointer' onClick={()=>(setNav(false))}>About</li>
        </ul>
      </div>}
      
    </div>   
  )
}

export default Header
 