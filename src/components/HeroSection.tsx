import React from 'react';
import { Zap } from 'lucide-react';
import PopButton from './PopButton';

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="relative inline-block">
          <h1 className="text-6xl md:text-8xl font-handwritten font-bold text-white text-3d mb-6 float">
            MEGA SALE!
          </h1>
          <div className="absolute -top-4 -right-4 text-6xl animate-spin">⚡</div>
          <div className="absolute -bottom-4 -left-4 text-4xl bounce-fun">✨</div>
        </div>
        
        <div className="comic-bubble inline-block mb-8">
          <p className="text-2xl font-comic font-bold text-black">
            复古波普风格 · 独特设计 · 限时特惠！
          </p>
        </div>
        
        <PopButton 
          variant="pink" 
          size="lg" 
          className="shake hover:shake text-2xl px-12 py-4"
        >
          <Zap className="w-8 h-8 inline mr-3" />
          立即抢购！
        </PopButton>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl text-orange-400 float animation-delay-100">🎨</div>
      <div className="absolute top-32 right-20 text-4xl text-pink-400 wiggle animation-delay-200">✨</div>
      <div className="absolute bottom-20 left-20 text-5xl text-yellow-400 bounce-fun animation-delay-300">⭐</div>
    </section>
  );
};

export default HeroSection;