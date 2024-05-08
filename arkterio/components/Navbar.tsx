"use client";

import React, { useState, useEffect } from 'react';
import { FiPhone, FiMenu } from 'react-icons/fi';
import Hero from './Hero'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="container mx-auto"> {/* Add container class here */}
      <nav
        className={`w-11/12 md:w-10/12 lg:w-11/12 ${
          isScrolled ? 'py-2' : 'py-4'
        } bg-gray-200 shadow-lg fixed top-0 z-10 transition duration-300 ease-in-out rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl rounded-br-3xl`}
        style={{ margin: '0 auto' }}
      >
        <div className="flex items-center justify-between" style={{ paddingLeft: '30px' }}>
          {/* Left side icons */}
          <div className="flex items-center space-x-4">
            <FiPhone className="text-gray-800" />
          </div>

          {/* Logo */}
          <a href="#" className="text-gray-800 font-bold text-xl">
            Logo
          </a>

          {/* Right side icons */}
          <div className="flex items-center space-x-4" style={{ paddingRight: '30px' }}>
            <FiMenu
              className="text-gray-800 cursor-pointer"
              onClick={toggleMenu}
            />
            {/* Hamburger Menu Content */}
            {menuOpen && (
              <div className="flex flex-col md:hidden items-center mt-4">
                <a href="#home" className="text-gray-800">Home</a>
                <a href="#about" className="text-gray-800">About</a>
                <a href="#contact" className="text-gray-800">Contact</a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
