import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar() {
  // State for toggling mobile menu modal
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-3xl font-bold text-amber-500 hover:text-amber-600 transition duration-300">
          <Link to="/">BuildCo</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6">
          <Link to="/" className="text-lg text-gray-800 hover:text-amber-500 transition duration-300">Home</Link>
          <Link to="/about" className="text-lg text-gray-800 hover:text-amber-500 transition duration-300">About</Link>
          <Link to="/services" className="text-lg text-gray-800 hover:text-amber-500 transition duration-300">Services</Link>
          <Link to="/contact" className="text-lg text-gray-800 hover:text-amber-500 transition duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-amber-500 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
          <div className="bg-white w-3/4 p-6 rounded-lg shadow-lg">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-gray-800 hover:text-amber-500 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="space-y-6">
              <Link to="/" className="text-lg text-gray-800 hover:text-amber-500 transition duration-300 block">Home</Link>
              <Link to="/about" className="text-lg text-gray-800 hover:text-amber-500 transition duration-300 block">About</Link>
              <Link to="/services" className="text-lg text-gray-800 hover:text-amber-500 transition duration-300 block">Services</Link>
              <Link to="/contact" className="text-lg text-gray-800 hover:text-amber-500 transition duration-300 block">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
