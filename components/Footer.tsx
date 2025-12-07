'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-cyprus to-cyprus/95 dark:from-gray-900 dark:to-gray-900/95 text-[#F0EDE5] dark:text-white mt-24 overflow-hidden">
      {/* Soft Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <span className="text-cyprus font-bold text-xl">BS</span>
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gold to-[#F0EDE5] dark:to-white bg-clip-text text-transparent">
                Boys Stay Hostel
              </span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed max-w-md">
              Premium student accommodation providing comfort, safety, and a vibrant community atmosphere. 
              Your trusted home away from home for academic success.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Instagram, href: '#', label: 'Instagram' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 dark:bg-white/10 hover:bg-gold rounded-xl flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/rooms', label: 'Rooms' },
                { href: '/facilities', label: 'Facilities' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' },
              ].map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-gold transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gold transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-gold">Contact Us</h3>
            <ul className="space-y-3">
              {[
                { icon: MapPin, text: '123 Hostel Street, City Name, State - 123456', href: null },
                { icon: Phone, text: '+1 (234) 567-890', href: 'tel:+1234567890' },
                { icon: Mail, text: 'info@boysstayhostel.com', href: 'mailto:info@boysstayhostel.com' },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-gold" />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-gold transition-colors text-sm leading-relaxed"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
                      {item.text}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="border-t border-white/10 dark:border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 dark:text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Boys Stay Hostel. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400 dark:text-gray-500">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
