import React from 'react';
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-900">
            Farm Fresh Eggs
          </span>
          <a href="#contact" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full font-semibold transition-colors">
            Order Now
          </a>
        </div>
      </div>
    </header>;
};
export default Header;