import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import ResponsiveLayout from '@/components/layout/ResponsiveLayout'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap'
})

const inter = Inter({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Dr. R Ramya Bharathi - Paediatrician | Expert Child Care',
  description: 'Dr. R Ramya Bharathi - Expert pediatrician with 15+ years experience. MBBS, DCH, DNB qualified. NICU specialist offering evidence-based care for children 0-18 years.',
  keywords: 'pediatrician, paediatrician, child doctor, baby doctor, vaccination, child health, Dr Ramya Bharathi, NICU specialist, Apollo Hospitals, evidence-based medicine, antibiotic stewardship, expert pediatric care, children healthcare',
  authors: [{ name: 'Dr. R Ramya Bharathi' }],
  openGraph: {
    title: 'Dr. R Ramya Bharathi - Expert Pediatric Care',
    description: '15+ years of dedicated pediatric care with sophisticated, evidence-based medicine',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. R Ramya Bharathi - Paediatrician',
    description: 'Expert pediatric care for children 0-18 years',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://drramya-paediatrics.vercel.app',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0b' }
  ],
  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="antialiased">
        <ResponsiveLayout>
          {children}
        </ResponsiveLayout>
      </body>
    </html>
  )
}