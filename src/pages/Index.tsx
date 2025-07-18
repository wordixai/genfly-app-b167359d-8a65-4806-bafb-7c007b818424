import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import PopButton from '../components/PopButton';
import { products, Product } from '../data/products';

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('¥', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-pop-gradient polka-dots-large">
      <Header 
        cartCount={getTotalItems()}
        favoriteCount={favorites.size}
        onCartClick={() => setIsCartOpen(true)}
        onFavoriteClick={() => {}} // TODO: Implement favorites view
      />

      <HeroSection />

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
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onToggleFavorite={toggleFavorite}
                isFavorited={favorites.has(product.id)}
              />
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

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              className="cart-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
            />
            <motion.div
              className="cart-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="p-6 border-b-4 border-black bg-pop-orange">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-handwritten font-bold text-white text-shadow-pop">
                    🛒 购物车
                  </h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-2 bg-white rounded-lg border-4 border-black hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                    <p className="font-handwritten text-xl text-gray-600 mb-4">购物车空空如也</p>
                    <p className="font-comic text-gray-500">快去添加一些心爱的商品吧！</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        className="flex items-center space-x-4 p-4 border-4 border-black rounded-lg bg-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg border-2 border-black"
                        />
                        <div className="flex-1">
                          <h4 className="font-handwritten font-bold text-lg">{item.name}</h4>
                          <p className="font-comic text-sm text-gray-600">{item.category}</p>
                          <p className="font-handwritten font-bold text-orange-500">{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="quantity-control">
                            <button
                              className="quantity-btn rounded-l-md"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                              className="quantity-input"
                              min="1"
                            />
                            <button
                              className="quantity-btn rounded-r-md"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-6 border-t-4 border-black bg-gray-50">
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-handwritten text-lg">总计:</span>
                      <span className="font-handwritten text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                        ¥{getTotalPrice().toFixed(2)}
                      </span>
                    </div>
                    <p className="font-comic text-sm text-gray-600">
                      共 {getTotalItems()} 件商品
                    </p>
                  </div>
                  
                  <PopButton
                    variant="pink"
                    size="lg"
                    className="w-full mb-2"
                    onClick={() => {
                      alert('跳转到结账页面！');
                      setIsCartOpen(false);
                    }}
                  >
                    💳 立即结账
                  </PopButton>
                  
                  <PopButton
                    variant="secondary"
                    size="md"
                    className="w-full"
                    onClick={() => setIsCartOpen(false)}
                  >
                    继续购物
                  </PopButton>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;