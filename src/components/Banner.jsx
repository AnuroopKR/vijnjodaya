import React from 'react'
import logo from "../assets/logo.png"
import child from "../assets/kids.png"
import { AiOutlineInstagram,AiOutlineFacebook, AiOutlineYoutube } from 'react-icons/ai'

const Banner = () => {
  return (
   

    <div className="">
      <div className="max-w-[1200px] mx-auto flex  px-12 pt-2 md:pt-1 ">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left pt-12 ">
          <img src={logo} alt="Vijnjodaya Logo" className="h-52 md:h-52 -z-30 " />
          <h1 className="text-4xl md:text-5xl font-bold mt-6">VIJNJODAYA</h1>
          <h4 className="tracking-widest mt-2">Arts and Sports Club Kottur</h4>
          <p className="mt-6 md:mx-36  text-2xl md:text-xl font-bold">
            Igniting Creativity, Shaping a New Tomorrow.
          </p>
          <ul className='flex py-6 gap-10 cursor-pointer text-4xl md:text-4xl'>
            <li>
              <a href="https://www.instagram.com/vijnjodaya_kottoor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className=' text-pink-600'><AiOutlineInstagram/></a>
            </li>
            <li>
              <a href="#" className=' text-sky-700'><AiOutlineFacebook/></a>
            </li>
            <li>
              <a href="#" className=' text-red-500'><AiOutlineYoutube/></a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex w-1/2 h-screen items-center justify-center">
        <img src={child} alt="child" className='h-auto'/>
          {/* <p className="text-2xl text-gray-700">Hello, Welcome!</p> Example content */}
        </div>
        </div>
    </div>
  )
}

export default Banner
