import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import ResponsiveLayout from '@/components/layout/ResponsiveLayout'
import { SEOReportComponent } from '@/components/seo'

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
  metadataBase: new URL('https://drramya-paediatrics.vercel.app'),
  title: 'Dr. Ramya Bharathi R | Child Development Assessment Specialist in Perumbakkam | Pediatrician',
  description: 'Dr. Ramya Bharathi R | Pediatrician in Perumbakkam specializing in child development assessment, behavioral pediatrics, and comprehensive evaluations. MBBS, DCH, DNB(PAED) qualified with 15+ years of expertise in pediatric care and NICU care.',
  keywords: 'Dr Ramya Bharathi, pediatrician Perumbakkam, child development assessment Chennai, behavioral pediatrics, autism screening, ADHD assessment, speech delay evaluation, motor development, cognitive assessment, MBBS DCH DNB PAED, NICU specialist, vaccination Perumbakkam, children specialist Chennai, child evaluations, evidence-based pediatric care, children healthcare Chennai, baby doctor Sholinganallur',
  authors: [{ name: 'Dr. Ramya Bharathi R' }],
  openGraph: {
    title: 'Dr. Ramya Bharathi R | Child Development Assessment Specialist in Perumbakkam',
    description: 'Expert in autism screening, ADHD assessment, speech delay evaluation, motor development, and cognitive assessments. Comprehensive vaccination services and children\'s specialist treatments with evidence-based pediatric care.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Dr. Ramya Bharathi R - Developmental Paediatrician',
    images: [
      {
        url: '/apple-touch-icon.png',
        width: 180,
        height: 180,
        alt: 'Dr. Ramya Bharathi R - Developmental Paediatrician in Perumbakkam | Best Child Care | Vaccination',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Ramya Bharathi R | Child Development Assessment Specialist in Perumbakkam',
    description: 'Expert in autism screening, ADHD assessment, speech delay evaluation, motor development, and cognitive assessments. Comprehensive vaccination services and children\'s specialist treatments.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://drramya-paediatrics.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code', // To be added when available
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
  category: 'Healthcare',
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
        <SEOReportComponent />
      </body>
    </html>
  )
}