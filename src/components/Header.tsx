import React from 'react';
import { ShoppingCart, Heart, Menu } from 'lucide-react';
import PopButton from './PopButton';

interface HeaderProps {
  cartCount: number;
  favoriteCount: number;
  onCartClick: () => void;
  onFavoriteClick: () => void;
}

const Header = ({ cartCount, favoriteCount, onCartClick, onFavoriteClick }: HeaderProps) => {
  return (
    <header className="relative overflow-hidden">
      <div className="bg-pop-orange polka-dots border-b-8 border-black">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl font-handwritten font-bold text-white text-pop-shadow wiggle">
                POP! 🎨
              </div>
              <div className="comic-bubble hidden md:block">
                <span className="font-comic text-lg font-bold">超酷潮流店！</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <button className="md:hidden btn-pop p-2">
                <Menu className="w-5 h-5" />
              </button>
              
              {/* Desktop navigation */}
              <div className="hidden md:flex items-center space-x-4">
                <button 
                  onClick={onFavoriteClick}
                  className="relative btn-pop font-handwritten px-4 py-2 rounded-xl"
                >
                  <Heart className="w-5 h-5 inline mr-2" />
                  收藏
                  {favoriteCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold border-2 border-white">
                      {favoriteCount}
                    </span>
                  )}
                </button>
                
                <button 
                  onClick={onCartClick}
                  className="relative btn-pop btn-pop-pink font-handwritten px-4 py-2 rounded-xl"
                >
                  <ShoppingCart className="w-5 h-5 inline mr-2" />
                  购物车
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold border-2 border-white bounce-fun">
                      {cartCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;