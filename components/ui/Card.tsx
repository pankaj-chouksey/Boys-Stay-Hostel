'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export default function Card({ children, className = '', hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -12, scale: 1.02 } : {}}
      className={`
        bg-white rounded-3xl p-6 md:p-8
        premium-shadow hover:premium-shadow-lg
        transition-all duration-400 ease-out
        ${hover ? 'card-hover' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

