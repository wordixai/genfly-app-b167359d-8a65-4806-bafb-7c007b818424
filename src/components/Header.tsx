import React from 'react';
import { ShoppingBag, Heart, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative z-50 bg-white border-b-8 border-black">
      <div className="halftone-bg h-2"></div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full border-4 border-black flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <h1 className="text-3xl font-bold pop-title">POP SHOP</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Fashion', 'Art', 'Sale'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xl font-bold text-black hover:text-orange-500 transition-colors duration-300 font-['Comic_Neue'] relative"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-pink-500 transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* ActionButtons */}
          <div className="flex items-center space-x-4">
            <button className="p-3 border-4 border-black bg-yellow-400 rounded-full hover:animate-bounce transition-all duration-300">
              <Search size={20} className="text-black" />
            </button>
            <button className="p-3 border-4 border-black bg-pink-400 rounded-full hover:animate-bounce transition-all duration-300">
              <Heart size={20} className="text-black" />
            </button>
            <button className="p-3 border-4 border-black bg-orange-400 rounded-full hover:animate-bounce transition-all duration-300">
              <ShoppingBag size={20} className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;