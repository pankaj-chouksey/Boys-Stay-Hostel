'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/rooms', label: 'Rooms' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'glass-light dark:glass-dark shadow-lg py-3'
          : 'bg-transparent py-5'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative"
            >
              <div className="w-12 h-12 bg-orange rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                <span className="text-white font-bold text-xl">BS</span>
              </div>
              <div className="absolute inset-0 bg-orange/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
            </motion.div>
            <motion.span
              className={`text-2xl font-bold ${
                scrolled
                  ? 'text-black'
                  : 'text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Boys Stay Hostel
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group ${
                    scrolled 
                      ? 'text-black' 
                      : 'text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className={`ml-4 p-2.5 rounded-xl transition-colors ${
                scrolled 
                  ? 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700' 
                  : 'bg-white/10 dark:bg-gray-800 backdrop-blur-sm hover:bg-white/20'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className={`w-5 h-5 ${scrolled ? 'text-black' : 'text-white'}`} />
              ) : (
                <Sun className="w-5 h-5 text-orange" />
              )}
            </motion.button>
            
            {/* Book Now Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="ml-4"
            >
              <Button href="/booking" size="sm" variant="primary">
                Book Now
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 rounded-xl ${scrolled ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white/10 dark:bg-gray-800 backdrop-blur-sm'}`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className={`w-5 h-5 ${scrolled ? 'text-black' : 'text-white'}`} />
              ) : (
                <Sun className="w-5 h-5 text-orange" />
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className={`p-2.5 rounded-xl ${scrolled ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white/10 dark:bg-gray-800 backdrop-blur-sm'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-navy dark:text-white' : 'text-white'}`} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-light dark:glass-dark border-t border-gray-200 dark:border-gray-700 mt-2"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-navy dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-2"
              >
                <Button
                  href="/booking"
                  className="w-full"
                  variant="primary"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
