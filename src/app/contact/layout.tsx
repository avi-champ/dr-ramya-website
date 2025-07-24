import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Dr. Ramya Bharathi | Pediatrician in Perumbakkam, Chennai',
  description: 'Contact Dr. Ramya Bharathi R for pediatric care in Perumbakkam, Sholinganallur, OMR. Book appointments at NewGen Clinics. Expert child development specialist.',
  keywords: [
    'contact pediatrician perumbakkam', 
    'book appointment sholinganallur', 
    'child doctor OMR', 
    'pediatrician chennai', 
    'newgen clinics perumbakkam',
    'child development specialist contact'
  ],
  openGraph: {
    title: 'Contact Dr. Ramya Bharathi | Pediatrician in Perumbakkam, Chennai',
    description: 'Contact Dr. Ramya Bharathi R for expert pediatric care in Perumbakkam, Sholinganallur, OMR areas. Book appointments at NewGen Multi Speciality Clinics.',
    type: 'website',
    url: 'https://drramyabharathi.com/contact',
    siteName: 'Dr. Ramya Bharathi R - Pediatrician',
    images: [
      {
        url: '/api/og-image/contact',
        width: 1200,
        height: 630,
        alt: 'Contact Dr. Ramya Bharathi - Pediatrician in Perumbakkam, Chennai'
      }
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Dr. Ramya Bharathi | Pediatrician in Perumbakkam',
    description: 'Expert pediatric care in Perumbakkam, Sholinganallur, OMR areas. Book appointments today.',
    images: ['/api/og-image/contact'],
  },
  alternates: {
    canonical: 'https://drramyabharathi.com/contact',
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
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
