import React from 'react';
import { motion } from 'framer-motion';

interface PopButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'pink';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const PopButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false 
}: PopButtonProps) => {
  const baseClasses = "font-handwritten font-bold border-4 border-black rounded-lg transition-all duration-150 transform";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-shadow-pop",
    secondary: "bg-white text-black hover:bg-gray-100",
    pink: "bg-gradient-to-r from-pink-500 to-pink-400 text-white text-shadow-pop"
  };
  
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const shadowClasses = disabled 
    ? "opacity-50 cursor-not-allowed" 
    : "shadow-pop hover:shadow-pop-hover active:shadow-pop-active hover:-translate-y-1 active:translate-y-1";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${shadowClasses} ${className}`}
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? {} : { y: -3 }}
      whileTab={disabled ? {} : { y: 1 }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default PopButton;