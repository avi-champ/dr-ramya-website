import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Dr. R Ramya Bharathi - Pediatrician | Qualifications & Experience',
  description: 'Learn about Dr. R Ramya Bharathi\'s extensive qualifications: MBBS from Tirunelveli Medical College, DCH from Institute of Child Health Egmore, DNB from St. Philomena Bangalore. NICU specialist with Apollo Hospitals experience.',
  keywords: 'Dr Ramya Bharathi qualifications, pediatrician education, NICU specialist, Apollo Hospitals, Tirunelveli Medical College, Institute of Child Health Egmore, St Philomena Bangalore, evidence-based medicine',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
