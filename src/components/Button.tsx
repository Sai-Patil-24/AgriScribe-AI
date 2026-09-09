import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[var(--color-agri-forest)] hover:bg-[var(--color-agri-green)] text-white focus:ring-[var(--color-agri-green)]",
    secondary: "bg-[var(--color-agri-yellow)] hover:bg-[#d9a955] text-[var(--color-agri-dark)] focus:ring-[var(--color-agri-yellow)]",
    outline: "border-2 border-[var(--color-agri-earth)] text-[var(--color-agri-earth)] hover:bg-[var(--color-agri-earth)] hover:text-white focus:ring-[var(--color-agri-earth)]",
    ghost: "text-[var(--color-agri-dark)] hover:bg-black/5 focus:ring-gray-200"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props as any}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};
