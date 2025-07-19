import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  updateQuantity: (id: number, quantity: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  removeItem,
  clearCart
}) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace('¥', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 polka-dots"
        onClick={onClose}
      ></div>
      
      {/* Cart Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white border-l-8 border-black shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-pop-orange polka-dots p-6 border-b-4 border-black">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-handwritten font-bold text-white text-pop-shadow">
                <ShoppingBag className="w-8 h-8 inline mr-2" />
                购物车
              </h2>
              <button
                onClick={onClose}
                className="btn-pop btn-pop-pink p-2 rounded-full hover:wiggle"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mt-2">
              <span className="font-comic text-white text-lg">
                {getTotalItems()} 件商品
              </span>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="comic-bubble">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="font-handwritten text-xl font-bold text-gray-600">
                    购物车空空如也
                  </p>
                  <p className="font-comic text-gray-500 mt-2">
                    快去挑选心爱的商品吧！
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="product-card p-4">
                    <div className="flex items-start space-x-4">
                      {/* Product Image */}
                      <div className="pop-frame w-20 h-20 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-handwritten text-lg font-bold text-black mb-2 truncate">
                          {item.name}
                        </h3>
                        
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-handwritten text-xl font-bold text-pop-pink">
                            {item.price}
                          </span>
                          
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-1 text-gray-500 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-8 h-8 bg-gray-200 border-2 border-black rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          
                          <span className="font-handwritten text-lg font-bold min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-gray-200 border-2 border-black rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t-4 border-black bg-gray-50 p-6">
              {/* Total */}
              <div className="comic-bubble mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-handwritten text-xl font-bold">总计:</span>
                  <span className="font-handwritten text-2xl font-bold text-pop-pink">
                    ¥{getTotalPrice().toLocaleString()}
                  </span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full btn-pop font-handwritten text-lg py-3 rounded-xl hover:bounce-fun">
                  🚀 立即结算
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-200 border-2 border-black font-handwritten text-lg py-2 rounded-xl hover:bg-gray-300 transition-colors"
                >
                  清空购物车
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;