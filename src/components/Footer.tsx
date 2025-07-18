import React from 'react';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path
            d="M1200,60 C900,0 300,120 0,60 L0,0 L1200,0 Z"
            fill="black"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </div>

      <div className="relative z-10 pt-20 pb-8">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full border-4 border-white flex items-center justify-center">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <h3 className="text-3xl font-bold pop-title text-white">POP SHOP</h3>
              </div>
              
              <div className="speech-bubble">
                <p className="text-black font-bold">
                  Making fashion fun and colorful since 2024! Join our pop art revolution! 🎨
                </p>
              </div>
              
              <div className="flex space-x-4">
                {[Facebook, Instagram, Twitter].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 border-4 border-white bg-pink-500 rounded-full flex items-center justify-center hover:animate-bounce transition-all duration-300"
                  >
                    <Icon size={20} className="text-white" />
                  </button>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {[
              {
                title: "SHOP",
                links: ["New Arrivals", "Fashion", "Art Pieces", "Sale Items", "Gift Cards"]
              },
              {
                title: "HELP",
                links: ["FAQ", "Size Guide", "Shipping", "Returns", "Contact Us"]
              },
              {
                title: "ABOUT",
                links: ["Our Story", "Pop Culture", "Sustainability", "Careers", "Press"]
              }
            ].map((column, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-2xl font-bold text-yellow-400 font-['Fredoka_One']">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-lg font-['Comic_Neue'] hover:text-pink-400 transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t-4 border-white pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-lg font-['Comic_Neue']">
                <span>Made with</span>
                <Heart size={20} className="text-pink-500 animate-pulse" />
                <span>in Pop Art Paradise</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm font-['Comic_Neue']">
                <span>&copy; 2024 Pop Shop. All rights reserved.</span>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 floating-element opacity-20">
        <div className="w-16 h-16 bg-orange-400 border-4 border-white rounded-full"></div>
      </div>
      <div className="absolute bottom-20 left-20 floating-element opacity-20" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-pink-500 border-4 border-white transform rotate-45"></div>
      </div>
    </footer>
  );
};

export default Footer;