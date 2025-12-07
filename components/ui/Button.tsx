'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group'
  
  const variants = {
    primary: 'bg-gradient-to-r from-accent via-accent-light to-accent-dark text-white hover:from-accent-light hover:via-accent hover:to-accent shadow-lg hover:shadow-2xl hover:shadow-accent/50 hover:scale-110 focus:ring-accent active:scale-105',
    secondary: 'bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white hover:from-primary-light hover:via-primary hover:to-primary shadow-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-110 focus:ring-primary active:scale-105',
    outline: 'border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/30 hover:scale-110 focus:ring-accent active:scale-105 backdrop-blur-sm',
    ghost: 'text-navy dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400 hover:scale-105',
  }
  
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-12 py-5 text-lg',
  }
  
  const buttonContent = (
    <motion.span
      className="relative z-10 flex items-center gap-2 font-bold"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {/* Shimmer effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></span>
      {/* Glow effect */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white/20 via-white/40 to-white/20 blur-xl transition-opacity duration-500"></span>
    </motion.span>
  )
  
  if (href && !disabled) {
    return (
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Link
          href={href}
          className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
          {buttonContent}
        </Link>
      </motion.div>
    )
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {buttonContent}
    </motion.button>
  )
}

