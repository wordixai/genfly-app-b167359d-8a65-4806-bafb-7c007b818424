import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Zap, Sparkles } from 'lucide-react';

const Index = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState(new Set());

  const products = [
    {
      id: 1,
      name: "霓虹街头T恤",
      price: "¥299",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      tag: "HOT!",
      rating: 5
    },
    {
      id: 2,
      name: "波普艺术卫衣",
      price: "¥599",
      image: "https://images.unsplash.com/photo-1556821840-3a9fbc86dcd5?w=300&h=300&fit=crop",
      tag: "NEW",
      rating: 4
    },
    {
      id: 3,
      name: "复古波点裙",
      price: "¥399",
      image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=300&h=300&fit=crop",
      tag: "SALE",
      rating: 5
    },
    {
      id: 4,
      name: "涂鸦风夹克",
      price: "¥799",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
      tag: "LIMITED",
      rating: 4
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-pop-gradient polka-dots-large">
      {/* Header */}
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
              
              <div className="flex items-center space-x-6">
                <button className="relative btn-pop font-handwritten px-4 py-2 rounded-xl">
                  <Heart className="w-5 h-5 inline mr-2" />
                  收藏
                  <span className="absolute -top-2 -right-2 bg-pop-pink text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold border-2 border-white">
                    {favorites.size}
                  </span>
                </button>
                
                <button className="relative btn-pop btn-pop-pink font-handwritten px-4 py-2 rounded-xl">
                  <ShoppingCart className="w-5 h-5 inline mr-2" />
                  购物车
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold border-2 border-white bounce-fun">
                    {cart.length}
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
          
          <button className="btn-pop btn-pop-pink font-handwritten text-2xl px-12 py-4 rounded-3xl shake hover:shake">
            <Zap className="w-8 h-8 inline mr-3" />
            立即抢购！
          </button>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl text-orange-400 float animation-delay-100">🎨</div>
        <div className="absolute top-32 right-20 text-4xl text-pink-400 wiggle animation-delay-200">✨</div>
        <div className="absolute bottom-20 left-20 text-5xl text-yellow-400 bounce-fun animation-delay-300">⭐</div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-handwritten font-bold text-white text-pop-shadow mb-4 wiggle">
              🔥 热销商品 🔥
            </h2>
            <div className="comic-bubble inline-block">
              <p className="font-comic text-xl font-bold">每一件都是艺术品！</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="relative">
                <div className="product-card starburst" style={{animationDelay: `${index * 0.1}s`}}>
                  {/* Product Tag */}
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-pop-pink font-handwritten font-bold text-white px-3 py-1 rounded-full border-2 border-black transform rotate-12 bounce-fun">
                      {product.tag}
                    </div>
                  </div>
                  
                  {/* Product Image */}
                  <div className="pop-frame mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-handwritten text-xl font-bold text-black mb-2">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-handwritten font-bold text-pop-pink">
                        {product.price}
                      </span>
                      
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => toggleFavorite(product.id)}
                          className={`p-2 rounded-lg border-2 border-black transition-colors ${
                            favorites.has(product.id) 
                              ? 'bg-pink-500 text-white' 
                              : 'bg-white text-black hover:bg-pink-100'
                          }`}
                        >
                          <Heart className="w-4 h-4" />
                        </button>
                        
                        <button 
                          onClick={() => addToCart(product)}
                          className="btn-pop font-handwritten px-4 py-2 rounded-lg text-sm"
                        >
                          <Sparkles className="w-4 h-4 inline mr-1" />
                          加入购物车
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-pop-diagonal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="comic-bubble">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-handwritten text-2xl font-bold mb-2">极速发货</h3>
                <p className="font-comic">24小时内发货，让你快速收到心爱商品！</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="comic-bubble">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="font-handwritten text-2xl font-bold mb-2">品质保证</h3>
                <p className="font-comic">精选优质材料，每件商品都经过严格质检！</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="comic-bubble">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="font-handwritten text-2xl font-bold mb-2">惊喜礼品</h3>
                <p className="font-comic">每单都有神秘小礼品，给你意外惊喜！</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-4xl font-handwritten font-bold text-pop-shadow mb-2 wiggle">
              POP! 🎨
            </h3>
            <p className="font-comic text-lg">让生活更有色彩！</p>
          </div>
          
          <div className="flex justify-center space-x-8 mb-6">
            <a href="#" className="btn-pop font-handwritten px-4 py-2 rounded-lg hover:bounce-fun">关于我们</a>
            <a href="#" className="btn-pop btn-pop-pink font-handwritten px-4 py-2 rounded-lg hover:bounce-fun">联系客服</a>
            <a href="#" className="btn-pop font-handwritten px-4 py-2 rounded-lg hover:bounce-fun">配送信息</a>
          </div>
          
          <p className="font-comic text-gray-400">
            © 2024 POP! 复古波普艺术商店 - 让每一天都充满色彩！
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;