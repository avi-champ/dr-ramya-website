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
  description: 'Dr. R Ramya Bharathi - MBBS, DCH, DNB(PAED). 15+ years of dedicated pediatric care with sophisticated, evidence-based medicine. Expert healthcare for children 0-18 years.',
  keywords: 'pediatrician, paediatrician, child doctor, baby doctor, vaccination, child health, Dr Ramya Bharathi, expert pediatric care, children healthcare',
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