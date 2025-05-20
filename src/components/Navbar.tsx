import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-blue-600 font-bold text-xl">AquaHarvest</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              About
            </a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              Our Fish
            </a>
            <a href="#sustainability" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              Sustainability
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
              Contact
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
              Order Now
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Our Fish
            </a>
            <a href="#sustainability" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Sustainability
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
            <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
              Order Now
            </button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;