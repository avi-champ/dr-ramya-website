// JSON-LD Structured Data for Services Page
export const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Dr. Ramya Pediatrics",
  "description": "Comprehensive pediatric care services for children aged 0-18 years",
  "url": "https://drramyapediatrics.com",
  "logo": "https://drramyapediatrics.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Clinic Address",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "Your ZIP",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-YOUR-PHONE",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"]
  },
  "medicalSpecialty": [
    "Pediatrics",
    "Child Development",
    "Vaccination",
    "Newborn Care"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Pediatric Services",
    "itemListElement": [
      {
        "@type": "MedicalService",
        "name": "Child Developmental Assessment",
        "description": "Comprehensive monitoring of your child's growth milestones and developmental progress with expert evaluation",
        "serviceType": "Pediatric Assessment",
        "provider": {
          "@type": "Person",
          "name": "Dr. Ramya",
          "jobTitle": "Pediatrician"
        },
        "areaServed": "All Ages 0-18 years",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "MedicalService",
        "name": "Vaccinations",
        "description": "Complete immunization programs following latest pediatric guidelines to protect your child from preventable diseases",
        "serviceType": "Immunization",
        "provider": {
          "@type": "Person",
          "name": "Dr. Ramya",
          "jobTitle": "Pediatrician"
        },
        "areaServed": "All Ages 0-18 years",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "MedicalService",
        "name": "Treatment Care",
        "description": "Expert medical treatment for childhood illnesses and conditions with personalized care plans",
        "serviceType": "Medical Treatment",
        "provider": {
          "@type": "Person",
          "name": "Dr. Ramya",
          "jobTitle": "Pediatrician"
        },
        "areaServed": "All Ages 0-18 years",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "MedicalService",
        "name": "Newborn Care",
        "description": "Specialized care for babies including feeding support, growth monitoring, and developmental guidance",
        "serviceType": "Newborn Care",
        "provider": {
          "@type": "Person",
          "name": "Dr. Ramya",
          "jobTitle": "Pediatrician"
        },
        "areaServed": "Ages 0-2 years",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-15:00"
  ]
};

export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://drramyapediatrics.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://drramyapediatrics.com/services"
    }
  ]
};
