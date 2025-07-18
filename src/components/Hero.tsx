import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 halftone-bg"></div>
      <div className="absolute inset-0 dots-pattern opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-element">
        <div className="w-20 h-20 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center">
          <span className="text-2xl">⭐</span>
        </div>
      </div>
      
      <div className="absolute top-40 right-20 floating-element" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 bg-pink-500 border-4 border-black transform rotate-45"></div>
      </div>
      
      <div className="absolute bottom-40 left-20 floating-element" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-orange-500 border-4 border-black rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-7xl md:text-9xl font-bold leading-none pop-title">
              WOW!
              <br />
              SUPER
              <br />
              SALE
            </h1>
            
            <div className="speech-bubble max-w-sm">
              <p className="text-xl font-bold text-black">
                50% OFF on all trendy fashion items! Limited time offer!
              </p>
            </div>
            
            <div className="space-y-4">
              <button className="pop-button text-white text-2xl px-8 py-4 rounded-xl font-bold">
                SHOP NOW!
              </button>
              <button className="ml-4 text-xl font-bold text-black border-4 border-black px-6 py-3 rounded-xl bg-white hover:bg-gray-100 transition-colors duration-300 font-['Comic_Neue']">
                Browse Collection
              </button>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="comic-frame rounded-3xl p-8 relative">
              <div className="starburst">
                HOT!
              </div>
              
              <div className="bg-white rounded-2xl p-6 border-4 border-black">
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=600&fit=crop"
                  alt="Featured Product"
                  className="w-full h-80 object-cover rounded-xl border-4 border-black"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-bold text-black font-['Fredoka_One']">
                    Retro Jacket
                  </h3>
                  <p className="text-3xl font-bold text-pink-500 font-['Permanent_Marker']">
                    $89.99
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;