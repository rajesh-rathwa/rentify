import React from 'react'

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center flex items-center" 
         style={{ backgroundImage: "url('../public/images/car-rental-banner.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      <div className="absolute inset-0 bg-white bg-opacity-78"></div>
      <div className="relative z-10 container mx-auto mt-20 py-20 px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 lg:ml-12 max-w-4xl">
          Discover the Freedom of Wheels<br/>Unleash Your Journey with Premium Cars
        </h1>
        <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 mt-6 lg:ml-12 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default Hero