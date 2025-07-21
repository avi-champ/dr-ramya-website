import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Health Articles & Resources - Dr. R Ramya Bharathi',
  description: 'Evidence-based pediatric health articles and resources sourced from IAP guidelines. Expert child care information for parents.',
  keywords: 'pediatric health articles, child care tips, IAP guidelines, fever management, vaccination schedule, pediatric emergency care',
}

export default function HealthArticlesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}