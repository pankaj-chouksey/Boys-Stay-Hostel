'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Eye, Award, Users, Heart, Shield } from 'lucide-react'
import Card from '@/components/ui/Card'
import AnimatedIcon from '@/components/ui/AnimatedIcon'

export default function AboutPage() {
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
              About <span className="text-gold">Us</span>
            </h1>
            <p className="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in student accommodation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          <Card delay={0} hover>
            <AnimatedIcon delay={0}>
              <div className="w-20 h-20 bg-gradient-to-br from-royal to-navy dark:from-gold dark:to-gold/80 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                <Eye className="w-10 h-10 text-white dark:text-navy" />
              </div>
            </AnimatedIcon>
            <h2 className="text-4xl font-bold text-navy dark:text-white mb-6">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              To be the leading provider of student accommodation, creating a home away from home 
              where students can thrive academically, socially, and personally. We envision a 
              community where every student feels safe, supported, and empowered to achieve their dreams.
            </p>
          </Card>

          <Card delay={0.2} hover>
            <AnimatedIcon delay={0.2}>
              <div className="w-20 h-20 bg-gradient-to-br from-royal to-navy dark:from-gold dark:to-gold/80 rounded-3xl flex items-center justify-center mb-6 shadow-lg">
                <Target className="w-10 h-10 text-white dark:text-navy" />
              </div>
            </AnimatedIcon>
            <h2 className="text-4xl font-bold text-navy dark:text-white mb-6">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              To provide affordable, comfortable, and secure accommodation with modern facilities 
              and a supportive community environment. We are committed to ensuring the well-being 
              and success of every student who chooses to stay with us.
            </p>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,197,66,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-navy dark:text-white mb-6">
              Why Choose <span className="gradient-text">Boys Stay Hostel?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We go beyond just providing a place to stay
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Safety First',
                description: '24/7 security with CCTV surveillance and dedicated security personnel ensuring your safety at all times.',
              },
              {
                icon: Heart,
                title: 'Caring Community',
                description: 'A supportive and inclusive community where students can build lasting friendships and memories.',
              },
              {
                icon: Award,
                title: 'Quality Service',
                description: 'Dedicated staff committed to providing excellent service and maintaining high standards.',
              },
              {
                icon: Users,
                title: 'Modern Facilities',
                description: 'State-of-the-art facilities including high-speed WiFi, study rooms, and fully furnished accommodations.',
              },
              {
                icon: Target,
                title: 'Affordable Pricing',
                description: 'Competitive pricing with flexible payment options to suit different budgets.',
              },
              {
                icon: Heart,
                title: 'Student-Focused',
                description: 'Everything we do is designed with students\' needs and success in mind.',
              },
            ].map((item, idx) => (
              <Card key={idx} delay={idx * 0.1} hover>
                <AnimatedIcon delay={idx * 0.1}>
                  <div className="w-16 h-16 bg-gradient-to-br from-royal to-navy dark:from-gold dark:to-gold/80 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <item.icon className="w-8 h-8 text-white dark:text-navy" />
                  </div>
                </AnimatedIcon>
                <h3 className="text-xl font-semibold text-navy dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-10 md:p-16 premium-shadow overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-white mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  Boys Stay Hostel was founded with a simple yet powerful vision: to create a 
                  home away from home for students pursuing their dreams. We understand the 
                  challenges students face when moving away from home, and we're here to make 
                  that transition as smooth and comfortable as possible.
                </p>
                <p>
                  With years of experience in student accommodation, our team is dedicated to 
                  providing not just a place to stay, but a community where students can grow, 
                  learn, and succeed. We believe that a comfortable living environment is 
                  essential for academic success and personal development.
                </p>
                <p>
                  Today, Boys Stay Hostel stands as a testament to our commitment to excellence, 
                  serving hundreds of students with pride and dedication. We continue to evolve 
                  and improve, always keeping our students' needs at the heart of everything we do.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative h-96 rounded-3xl overflow-hidden premium-shadow"
            >
              <Image
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop"
                alt="Hostel building"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
