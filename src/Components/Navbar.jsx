import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LoginModal from "./LoginModal.jsx";

const navLinkClass = ({ isActive }) =>
  `block px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
    isActive
      ? "text-blue-700 bg-blue-50"
      : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
  }`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link className="flex items-center gap-3" to="/">
            <img
              src="/images/rentify-logo.png"
              width="170"
              height="30"
              className="inline-block align-top"
              alt="Rentify Logo"
            />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <NavLink className={navLinkClass} to="/">
              Home
            </NavLink>
            <NavLink className={navLinkClass} to="/offers">
              Offers
            </NavLink>
            <NavLink className={navLinkClass} to="/cars">
              Cars
            </NavLink>
            <NavLink className={navLinkClass} to="/blog">
              Blog
            </NavLink>
            <NavLink className={navLinkClass} to="/team">
              Team
            </NavLink>
            <NavLink className={navLinkClass} to="/about">
              About
            </NavLink>
            <NavLink className={navLinkClass} to="/contact">
              Contact Us
            </NavLink>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="text-sm font-semibold text-slate-700 hover:text-blue-700"
            >
              Sign In
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              Book Now
            </button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100"
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
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
        </nav>

        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden border-t border-slate-200 bg-white/95`}>
          <div className="px-4 py-3 space-y-1">
            <NavLink onClick={() => setIsMenuOpen(false)} className={navLinkClass} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => setIsMenuOpen(false)} className={navLinkClass} to="/offers">
              Offers
            </NavLink>
            <NavLink onClick={() => setIsMenuOpen(false)} className={navLinkClass} to="/cars">
              Cars
            </NavLink>
            <NavLink onClick={() => setIsMenuOpen(false)} className={navLinkClass} to="/blog">
              Blog
            </NavLink>
            <NavLink onClick={() => setIsMenuOpen(false)} className={navLinkClass} to="/team">
              Team
            </NavLink>
            <NavLink onClick={() => setIsMenuOpen(false)} className={navLinkClass} to="/about">
              About
            </NavLink>
            <NavLink onClick={() => setIsMenuOpen(false)} className={navLinkClass} to="/contact">
              Contact Us
            </NavLink>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsLoginOpen(true);
              }}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  );
};

export default Navbar;
