'use client'

import { facilities } from '@/lib/data'
import { motion } from 'framer-motion'
import { Shield, Wifi, Utensils, BookOpen, Home, Shirt, Clock, Users, CheckCircle } from 'lucide-react'
import Card from '@/components/ui/Card'
import AnimatedIcon from '@/components/ui/AnimatedIcon'

const iconMap: Record<string, any> = {
  '🍽️': Utensils,
  '🔒': Shield,
  '📚': BookOpen,
  '📶': Wifi,
  '🛏️': Home,
  '👕': Shirt,
}

export default function FacilitiesPage() {
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
              Our <span className="text-gold">Facilities</span>
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Everything you need for a comfortable and productive stay
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, idx) => {
            const IconComponent = iconMap[facility.icon] || Home
            return (
              <Card key={facility.id} delay={idx * 0.1} hover>
                <AnimatedIcon delay={idx * 0.1}>
                  <div className="w-20 h-20 bg-gradient-to-br from-royal to-navy dark:from-gold dark:to-gold/80 rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-white dark:text-navy" />
                  </div>
                </AnimatedIcon>
                <h2 className="text-2xl font-bold text-navy dark:text-white mb-4">
                  {facility.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {facility.description}
                </p>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Additional Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 md:p-12 premium-shadow"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-12 text-center">
            Additional <span className="gradient-text">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Round-the-clock assistance from our dedicated staff for any queries or emergencies.',
              },
              {
                icon: Users,
                title: 'Community Events',
                description: 'Regular events and activities to build a strong community and lasting friendships.',
              },
              {
                icon: Wifi,
                title: 'High-Speed Internet',
                description: 'Uninterrupted WiFi connectivity throughout the premises for all your online needs.',
              },
              {
                icon: Shield,
                title: 'CCTV Surveillance',
                description: 'Comprehensive security coverage with CCTV cameras at strategic locations.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ x: 5 }}
                className="flex items-start gap-6 bg-white dark:bg-gray-800 p-6 rounded-2xl premium-shadow"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-royal to-navy dark:from-gold dark:to-gold/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <item.icon className="w-7 h-7 text-white dark:text-navy" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
