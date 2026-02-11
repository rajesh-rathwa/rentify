import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900">
      <nav className="container mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          <Link className="flex items-center" to="/">
            <img src="./images/rentify-logo.png" width="200" height="30" className="inline-block align-top" alt="Rentify Logo"/>
          </Link>
          
          <button 
            className="md:hidden text-white p-2"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-gray-900 md:bg-transparent`}>
            <ul className="flex flex-col md:flex-row md:items-center space-y-0 md:space-x-6 p-4 md:p-0">
              <li>
                <Link className="block text-white hover:text-blue-400 py-2 md:py-0 transition-colors" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="block text-white hover:text-blue-400 py-2 md:py-0 transition-colors" to="/offers">
                  Offers
                </Link>
              </li>
              <li>
                <Link className="block text-white hover:text-blue-400 py-2 md:py-0 transition-colors" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="block text-white hover:text-blue-400 py-2 md:py-0 transition-colors" to="/team">
                  Team
                </Link>
              </li>
              <li>
                <Link className="block text-white hover:text-blue-400 py-2 md:py-0 transition-colors" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="block text-white hover:text-blue-400 py-2 md:py-0 transition-colors" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar