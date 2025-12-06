import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Boys Stay Hostel',
  description: 'Get in touch with Boys Stay Hostel for inquiries, bookings, or any questions. We are here to help!',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

