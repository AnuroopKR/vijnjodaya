import React from 'react'

const About = () => {
  return (
    <div className=''>
      <div className='bg-lime-200 h-96 mx-auto max-w-[1300px]'>
      


       
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-12 flex flex-col md:flex-row items-center md:items-start border-t-4 border-blue-500">
        <div className="w-full md:w-1/3 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=200&h=200&fit=crop" 
            alt="Vijnjodaya Arts and Sports Club" 
            className="w-40 h-40 rounded-full shadow-lg border-4 border-gray-300"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left md:pl-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 uppercase tracking-widest">About Us</h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <strong className="text-blue-600">Vijnjodaya Arts and Sports Club, Kottur</strong> was founded on <span className="text-gray-800 font-semibold">January 1, 2024</span>, with a vision to promote arts, sports, and cultural activities in the community. Our club serves as a platform for enthusiasts to showcase their talents, engage in meaningful activities, and foster community spirit.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We believe in nurturing young talent and providing opportunities for individuals to grow in various domains of arts and sports. <span className="font-bold text-blue-700">Join us</span> to be a part of a vibrant and passionate community!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105">
            Get Involved
          </button>
        </div>
      </div>
    </div>
 

  



      </div>
    </div>
  )
}

export default About
