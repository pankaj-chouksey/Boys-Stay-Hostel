import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Boys Stay Hostel - Comfort. Safety. Community.',
  description: 'Premium boys hostel offering comfortable accommodation with modern facilities, 24/7 security, and a vibrant community atmosphere.',
  keywords: 'boys hostel, student accommodation, hostel booking, affordable housing, student housing',
  authors: [{ name: 'Boys Stay Hostel' }],
  openGraph: {
    title: 'Boys Stay Hostel - Comfort. Safety. Community.',
    description: 'Premium boys hostel offering comfortable accommodation with modern facilities.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

