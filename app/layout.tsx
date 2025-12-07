import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

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
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

