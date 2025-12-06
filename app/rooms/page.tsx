'use client'

import { rooms } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Users, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function RoomsPage() {
  return (
    <div className="pt-20 pb-24">
      {/* Premium Header */}
      <section className="relative bg-gradient-to-br from-royal via-navy to-royal text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,197,66,0.1),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Our <span className="text-gold">Rooms</span>
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Choose from our range of comfortable and affordable room options designed for modern student living
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {rooms.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden premium-shadow hover:premium-shadow-lg transition-all duration-500 h-full flex flex-col">
                {/* Room Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={`${room.type} Room`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Price Badge */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.3 }}
                    className="absolute top-6 right-6 bg-gradient-to-br from-gold to-gold/90 text-navy px-6 py-3 rounded-2xl font-bold text-lg shadow-xl"
                  >
                    ₹{room.price.toLocaleString()}/mo
                  </motion.div>
                  
                  {/* Availability Badge */}
                  <div className="absolute bottom-6 left-6 glass-light dark:glass-dark px-4 py-2 rounded-xl">
                    <div className="flex items-center gap-2 text-white">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {room.available} / {room.total} Available
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Room Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
                    {room.type} Sharing
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-1">
                    {room.description}
                  </p>
                  
                  {/* Amenities */}
                  <div className="mb-8">
                    <h3 className="font-semibold text-navy dark:text-white mb-4 text-lg">
                      Amenities:
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.2 + i * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-5 h-5 bg-gold/20 dark:bg-gold/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-gold" />
                          </div>
                          {amenity}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <Button
                      href={`/booking?room=${room.id}`}
                      variant="primary"
                      className="flex-1"
                    >
                      Book Now
                    </Button>
                    <Button
                      href="/contact"
                      variant="outline"
                      className="flex-1"
                    >
                      Enquire
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Room Selection Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 md:p-12 premium-shadow"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-10 text-center">
            Room Selection <span className="gradient-text">Guide</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Single Room',
                description: 'Perfect for students who prefer privacy and quiet study environment. Ideal for focused learning and personal space.',
                color: 'from-royal to-navy',
              },
              {
                title: 'Double Room',
                description: 'Great balance between privacy and social interaction. Perfect for friends or roommates looking for affordable accommodation.',
                color: 'from-gold to-gold/80',
              },
              {
                title: 'Triple Room',
                description: 'Most economical option for budget-conscious students. Includes all essential facilities for comfortable living.',
                color: 'from-royal to-gold',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl premium-shadow"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl mb-4`}></div>
                <h3 className="text-xl font-semibold text-navy dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
