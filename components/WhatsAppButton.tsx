'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const phoneNumber = '1234567890' // Replace with actual WhatsApp number
  const message = 'Hello! I am interested in booking a room at Boys Stay Hostel.'

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-2xl shadow-2xl flex items-center justify-center z-40 transition-all group overflow-hidden"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      <MessageCircle className="w-7 h-7 relative z-10" />
      <motion.div
        className="absolute inset-0 bg-green-400 rounded-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </motion.button>
  )
}
