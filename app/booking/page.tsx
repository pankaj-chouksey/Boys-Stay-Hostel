'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Calendar, User, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react'
import { rooms } from '@/lib/data'
import Link from 'next/link'

function BookingForm() {
  const searchParams = useSearchParams()
  const roomId = searchParams.get('room')

  const [formData, setFormData] = useState({
    roomId: roomId || '',
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    additionalInfo: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState(
    rooms.find((r) => r.id === roomId) || null
  )

  useEffect(() => {
    if (roomId) {
      const room = rooms.find((r) => r.id === roomId)
      setSelectedRoom(room || null)
      setFormData((prev) => ({ ...prev, roomId }))
    }
  }, [roomId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (name === 'roomId') {
      const room = rooms.find((r) => r.id === value)
      setSelectedRoom(room || null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          roomId: '',
          name: '',
          email: '',
          phone: '',
          checkIn: '',
          checkOut: '',
          additionalInfo: '',
        })
        setSelectedRoom(null)
      } else {
        const data = await response.json()
        alert(data.error || 'Failed to submit booking. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to submit booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-royal to-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Room</h1>
            <p className="text-xl text-gray-200">
              Reserve your accommodation at Boys Stay Hostel
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-lg text-center"
          >
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">
              Booking Request Submitted!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Thank you for your booking request. We have received your information and will 
              contact you shortly to confirm your reservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/rooms"
                className="inline-flex items-center px-6 py-3 bg-royal dark:bg-gold text-white dark:text-navy rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                View More Rooms
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 border-2 border-royal dark:border-gold text-royal dark:text-gold rounded-lg font-semibold hover:bg-royal hover:text-white dark:hover:bg-gold dark:hover:text-navy transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-6">
              Booking Details
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Room Selection */}
              <div>
                <label htmlFor="roomId" className="block text-sm font-medium text-navy dark:text-white mb-2">
                  Select Room Type *
                </label>
                <select
                  id="roomId"
                  name="roomId"
                  required
                  value={formData.roomId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-royal dark:focus:ring-gold focus:border-transparent bg-white dark:bg-gray-700 text-navy dark:text-white"
                >
                  <option value="">Select a room type</option>
                  {rooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.type} Sharing - ₹{room.price.toLocaleString()}/month 
                      {room.available > 0 ? ` (${room.available} available)` : ' (Full)'}
                    </option>
                  ))}
                </select>
                {selectedRoom && (
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-semibold text-navy dark:text-white mb-2">
                      {selectedRoom.type} Sharing Room
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {selectedRoom.description}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Price:</span> ₹{selectedRoom.price.toLocaleString()}/month
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-semibold">Availability:</span> {selectedRoom.available} of {selectedRoom.total} rooms available
                    </p>
                  </div>
                )}
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy dark:text-white mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-royal dark:focus:ring-gold focus:border-transparent bg-white dark:bg-gray-700 text-navy dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy dark:text-white mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-royal dark:focus:ring-gold focus:border-transparent bg-white dark:bg-gray-700 text-navy dark:text-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy dark:text-white mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-royal dark:focus:ring-gold focus:border-transparent bg-white dark:bg-gray-700 text-navy dark:text-white"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-navy dark:text-white mb-2">
                    Preferred Check-in Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      required
                      min={today}
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-royal dark:focus:ring-gold focus:border-transparent bg-white dark:bg-gray-700 text-navy dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-navy dark:text-white mb-2">
                    Expected Duration (Months) *
                  </label>
                  <select
                    id="checkOut"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-royal dark:focus:ring-gold focus:border-transparent bg-white dark:bg-gray-700 text-navy dark:text-white"
                  >
                    <option value="">Select duration</option>
                    <option value="1">1 Month</option>
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                    <option value="24">24 Months</option>
                  </select>
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-navy dark:text-white mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-royal dark:focus:ring-gold focus:border-transparent bg-white dark:bg-gray-700 text-navy dark:text-white resize-none"
                  placeholder="Any special requirements or questions?"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.roomId}
                className="w-full px-6 py-3 bg-royal dark:bg-gold text-white dark:text-navy rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white dark:border-navy border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Booking Request</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                By submitting this form, you agree to our terms and conditions. 
                We will contact you within 24 hours to confirm your booking.
              </p>
            </form>
          </motion.div>
        )}
      </section>
    </div>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-royal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-navy dark:text-white">Loading...</p>
        </div>
      </div>
    }>
      <BookingForm />
    </Suspense>
  )
}

