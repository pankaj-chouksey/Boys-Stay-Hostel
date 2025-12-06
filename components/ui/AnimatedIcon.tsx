'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedIconProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function AnimatedIcon({ children, delay = 0, className = '' }: AnimatedIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        type: 'spring',
        stiffness: 200,
        damping: 15,
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

