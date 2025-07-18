import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import PopButton from './PopButton';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  rating: number;
  tag?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: number) => void;
  isFavorited: boolean;
}

const ProductCard = ({ product, onAddToCart, onToggleFavorite, isFavorited }: ProductCardProps) => {
  return (
    <motion.div
      className="product-card starburst relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ rotate: -2, scale: 1.05 }}
    >
      {/* Product Tag */}
      {product.tag && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className="bg-gradient-to-r from-pink-500 to-pink-400 font-handwritten font-bold text-white px-3 py-1 rounded-full border-2 border-black transform rotate-12 bounce-fun">
            {product.tag}
          </div>
        </div>
      )}
      
      {/* Product Image */}
      <div className="pop-frame mb-4 overflow-hidden rounded-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-handwritten font-bold border-2 border-black">
          {product.category}
        </div>
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
          <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-2xl font-handwritten font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
          
          <button 
            onClick={() => onToggleFavorite(product.id)}
            className={`p-2 rounded-lg border-2 border-black transition-all duration-200 ${
              isFavorited 
                ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white transform rotate-12' 
                : 'bg-white text-black hover:bg-pink-100'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
        </div>
        
        <PopButton 
          variant="primary" 
          size="md" 
          className="w-full"
          onClick={() => onAddToCart(product)}
        >
          🛒 加入购物车！
        </PopButton>
      </div>
    </motion.div>
  );
};

export default ProductCard;