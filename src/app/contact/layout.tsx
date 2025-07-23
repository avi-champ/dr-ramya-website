import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Dr. R Ramya Bharathi - Paediatrician',
  description: 'Contact Dr. R Ramya Bharathi, experienced paediatrician at Newgen Speciality Clinics, Perumbakkam. Book appointments, get directions, and reach out for the best child healthcare.',
  keywords: ['contact paediatrician', 'book appointment', 'child doctor Chennai', 'Perumbakkam clinic', 'paediatric consultation'],
  openGraph: {
    title: 'Contact Dr. R Ramya Bharathi - Paediatrician',
    description: 'Get in touch with Dr. R Ramya Bharathi for expert paediatric care. Located at Newgen Speciality Clinics, Perumbakkam, Chennai.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
