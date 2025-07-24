'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'organization' | 'medicalBusiness' | 'person' | 'article' | 'breadcrumb';
  data?: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    let schemaData;

    switch (type) {
      case 'organization':
        schemaData = {
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Dr. Ramya Bharathi R Pediatrician in Perumbakkam | Best Child Care | Vaccination | Children's Specialist",
          "alternateName": "Dr. Ramya Bharathi R Pediatrics",
          "description": "Leading pediatrician in Perumbakkam, Chennai offering best child care, vaccination services, and children's specialist treatments with 15+ years of experience.",
          "url": "https://drramya-paediatrics.vercel.app",
          "telephone": "+91-9363956784",
          "email": "contact@drramya-paediatrics.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Perumbakkam",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600100",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.8979,
            "longitude": 80.2275
          },
          "openingHours": [
            "Mo-Sa 09:00-18:00"
          ],
          "medicalSpecialty": "Pediatrics",
          "priceRange": "$$",
          "currenciesAccepted": "INR",
          "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
          "hasMap": "https://maps.google.com/maps?q=Perumbakkam,Chennai",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "100",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Lakshmi Venkatesh"
              },
              "reviewBody": "Dr. Ramya has been exceptional in caring for both my children. Her thorough approach and gentle manner make every visit comfortable.",
              "datePublished": "2024-01-15"
            }
          ],
          "areaServed": [
            "Perumbakkam",
            "Sholinganallur", 
            "Navalur",
            "Karapakkam",
            "Medavakkam",
            "Chennai"
          ]
        };
        break;

      case 'person':
        schemaData = {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dr. Ramya Bharathi R",
          "jobTitle": "Pediatrician",
          "description": "Leading pediatrician in Perumbakkam with 15+ years of experience specializing in best child care, vaccination services, and children's specialist treatments in Chennai.",
          "url": "https://drramya-paediatrics.vercel.app/about",
          "worksFor": {
            "@type": "MedicalBusiness",
            "name": "Dr. Ramya Bharathi R Pediatrician in Perumbakkam"
          },
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Medical College"
            }
          ],
          "hasCredential": [
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "degree",
              "educationalLevel": "graduate",
              "name": "MBBS"
            },
            {
              "@type": "EducationalOccupationalCredential", 
              "credentialCategory": "degree",
              "educationalLevel": "postgraduate",
              "name": "DCH (Diploma in Child Health)"
            },
            {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "degree", 
              "educationalLevel": "postgraduate",
              "name": "DNB (Pediatrics)"
            }
          ],
          "medicalSpecialty": [
            "Pediatrics",
            "Neonatology",
            "Child Development",
            "Vaccination"
          ],
          "knowsAbout": [
            "Best Child Care",
            "Vaccination Services",
            "Children's Specialist Treatments",
            "Newborn Care",
            "Child Development Assessment",
            "Pediatric Emergency Care",
            "NICU Care"
          ]
        };
        break;

      case 'medicalBusiness':
        schemaData = {
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "@id": "https://drramya-paediatrics.vercel.app#medical-business",
          "name": "Dr. Ramya Bharathi R Pediatrician in Perumbakkam | Best Child Care | Vaccination | Children's Specialist",
          "description": "Leading pediatric clinic in Perumbakkam, Chennai providing expert child healthcare services.",
          "medicalSpecialty": "Pediatrics",
          "physician": {
            "@type": "Physician",
            "name": "Dr. Ramya Bharathi R",
            "medicalSpecialty": "Pediatrics"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Perumbakkam, Chennai",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "India"
          },
          "telephone": "+91-9363956784",
          "url": "https://drramya-paediatrics.vercel.app",
          "sameAs": [
            "https://drramya-paediatrics.vercel.app"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Pediatric Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Best Child Care",
                  "description": "Comprehensive child care services following latest pediatric guidelines"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Vaccination Services",
                  "description": "Complete vaccination programs including IAP and government schedules"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure", 
                  "name": "Children's Specialist Treatments",
                  "description": "Expert pediatric treatments for childhood illnesses and medical conditions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "MedicalProcedure",
                  "name": "Newborn & Development Care",
                  "description": "Specialized newborn care and comprehensive developmental assessments"
                }
              }
            ]
          }
        };
        break;

      default:
        schemaData = data;
    }

    if (schemaData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [type, data]);

  return null;
}
