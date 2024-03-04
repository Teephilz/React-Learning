import React, { useState } from 'react';
import logo from '../assets/store.png'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-fit pb-10 w-v fixed top-0 z-10 w-full">
      {/* Header */}
      <header className="bg-gray-800 text-white ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <img src={logo} alt="Logo" className="h-15 w-20" /> {/* Adjust the logo source */}
          </div>
          <div className="hidden md:flex items-center  space-x-10 px-10">
           
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">Contact</a>
            </div>
          {/* Menu icon for small screens */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <a href="#" className="block py-2 hover:underline">Home</a>
            <a href="#" className="block py-2 hover:underline">About</a>
            <a href="#" className="block py-2 hover:underline">Services</a>
            <a href="#" className="block py-2 hover:underline">Contact</a>
            {/* Add more menu items as needed */}
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;