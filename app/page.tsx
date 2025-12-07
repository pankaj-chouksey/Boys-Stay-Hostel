'use client'

import { facilities, galleryImages } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Wifi, Shield, Utensils, Shirt, Home, Sparkles } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import AnimatedIcon from '@/components/ui/AnimatedIcon'
import Carousel from '@/components/ui/Carousel'

export default function HomePage() {

  return (
    <>
      {/* Premium Hero Section with Carousel */}
      <section 
        className="relative min-h-screen flex flex-col overflow-hidden pt-20"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-royal to-navy dark:from-navy dark:via-royal dark:to-navy">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,70,67,0.1),transparent_50%)]"></div>
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,70,67,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,70,67,0.15) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Floating 3D Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gold/20 rounded-3xl blur-xl floating"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-40 h-40 bg-royal/20 rounded-full blur-2xl floating"
          animate={{
            y: [0, -40, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Small Heading at Top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6"
        >
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              <span className="text-white">Boys Stay</span>
              <span className="text-gold ml-2">Hostel</span>
            </h1>
            
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light dark:glass-dark"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles className="w-4 h-4 text-white dark:text-gold" />
              <span className="text-xs font-medium text-navy dark:text-white">Premium Student Accommodation</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="h-[50vh] md:h-[60vh] lg:h-[65vh] w-full premium-shadow rounded-3xl overflow-hidden mb-4 md:mb-8 lg:mb-12"
          >
            <Carousel 
              images={galleryImages.slice(0, 6)} 
              autoPlay={true} 
              interval={4000}
            />
          </motion.div>
        </motion.div>

        {/* Hero Content Below Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12 text-center"
        >
          <motion.p
            className="text-base md:text-lg mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed"
          >
            Your home away from home. Experience premium accommodation with modern facilities 
            and a vibrant community atmosphere designed for student success.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button href="/booking" size="md" variant="primary">
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/rooms" size="md" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
              Explore Rooms
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Hostel Images Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy dark:text-white mb-3">
              Welcome to Our
              <span className="block gradient-text mt-1">Hostel</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Modern facilities, comfortable living spaces, and a supportive community await you.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop',
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
            ].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative h-48 md:h-56 rounded-3xl overflow-hidden premium-shadow group"
              >
                <Image
                  src={src}
                  alt={`Hostel image ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-navy dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(13,148,136,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-navy dark:text-white mb-6">
              Our <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Take a virtual tour of our hostel facilities, rooms, and common areas
            </p>
          </motion.div>
          
          <div className="overflow-x-auto pb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 scrollbar-hide">
            <div className="flex gap-4 md:gap-6 min-w-max">
              {galleryImages.slice(0, 8).map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative w-64 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 flex-shrink-0 rounded-2xl overflow-hidden premium-shadow group cursor-pointer"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button href="/gallery" variant="outline" size="lg">
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Facilities Highlights */}
      <section className="py-24 bg-white dark:bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,70,67,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-navy dark:text-white mb-6">
              Our <span className="gradient-text">Facilities</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need for a comfortable and productive stay
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facilities.slice(0, 4).map((facility, idx) => (
              <Card key={facility.id} delay={idx * 0.1} hover>
                <AnimatedIcon delay={idx * 0.1}>
                  <div className="w-16 h-16 bg-gradient-to-br from-royal to-navy dark:from-gold dark:to-gold/80 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-3xl">{facility.icon}</span>
                  </div>
                </AnimatedIcon>
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-3">
                  {facility.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {facility.description}
                </p>
              </Card>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button href="/facilities" variant="outline" size="lg">
              View All Facilities
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-royal via-navy to-royal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,70,67,0.1),transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Discover Our
              <span className="block text-gold mt-2">Girls Hostel</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl mx-auto">
              A safe, secure, and comfortable home away from home designed exclusively for female students. 
              Experience premium facilities, modern amenities, and a supportive community in a dedicated space that prioritizes your safety and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/booking" size="lg" variant="primary" className="text-navy">
                Explore Girls Hostel
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/contact" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
