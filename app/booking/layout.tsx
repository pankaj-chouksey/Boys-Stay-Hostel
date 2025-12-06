import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Your Room - Boys Stay Hostel',
  description: 'Reserve your accommodation at Boys Stay Hostel. Choose from Single, Double, or Triple sharing rooms with modern amenities.',
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

