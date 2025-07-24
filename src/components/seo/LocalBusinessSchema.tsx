'use client';

interface LocalBusinessSchemaProps {
  name?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  phone?: string;
  email?: string;
  website?: string;
  openingHours?: string[];
  rating?: number;
  reviewCount?: number;
  priceRange?: string;
  services?: string[];
}

export default function LocalBusinessSchema({
  name = "Dr. Ramya Bharathi R Developmental Paediatrician in Perumbakkam | Child Development Assessment | Vaccination | Children's Specialist",
  address = {
    street: "Perumbakkam",
    city: "Chennai", 
    state: "Tamil Nadu",
    zipCode: "600100",
    country: "India"
  },
  phone = "+91-9363956784",
  email = "contact@drramya-paediatrics.com",
  website = "https://drramya-paediatrics.vercel.app",
  openingHours = ["Mo-Sa 09:00-18:00"],
  rating = 4.8,
  reviewCount = 100,
  priceRange = "$$",
  services = [
    "Developmental Paediatrics",
    "Child Development Assessment",
    "Autism Screening",
    "ADHD Assessment", 
    "Speech Delay Evaluation",
    "Motor Development Assessment",
    "Cognitive Assessment",
    "Behavioral Pediatrics",
    "Pediatric Neuropsychology",
    "Vaccination Services",
    "Children's Specialist Treatment",
    "Newborn Care", 
    "NICU Care"
  ]
}: LocalBusinessSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "MedicalOrganization"],
    "@id": `${website}#medical-business`,
    "name": name,
    "alternateName": "Dr. Ramya Bharathi R Developmental Paediatrics",
    "description": "Dr. Ramya Bharathi R - Expert developmental pediatrician specializing in autism screening, ADHD assessment, speech delay evaluation, motor development, and cognitive assessments. Providing comprehensive vaccination services and children's specialist treatments with evidence-based pediatric care for children aged 0-18 years in Perumbakkam and Chennai.",
    "url": website,
    "telephone": phone,
    "email": email,
    "image": `${website}/apple-touch-icon.png`,
    "logo": `${website}/apple-touch-icon.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.state,
      "postalCode": address.zipCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.8979,
      "longitude": 80.2275
    },
    "openingHours": openingHours,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "medicalSpecialty": ["Developmental Paediatrics", "Pediatrics", "Neonatology", "Behavioral Pediatrics"],
    "priceRange": priceRange,
    "currenciesAccepted": "INR",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 12.8979,
        "longitude": 80.2275
      },
      "geoRadius": "10000"
    },
    "serviceArea": [
      {
        "@type": "Place",
        "name": "Perumbakkam"
      },
      {
        "@type": "Place", 
        "name": "Sholinganallur"
      },
      {
        "@type": "Place",
        "name": "Navalur"
      },
      {
        "@type": "Place",
        "name": "Karapakkam"
      },
      {
        "@type": "Place",
        "name": "Medavakkam"
      },
      {
        "@type": "Place",
        "name": "Chennai"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Developmental Paediatrics Healthcare Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": service,
          "provider": {
            "@type": "Physician",
            "name": "Dr. Ramya Bharathi R"
          }
        }
      }))
    },
    "physician": {
      "@type": "Physician",
      "name": "Dr. Ramya Bharathi R",
      "medicalSpecialty": "Developmental Paediatrics",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "MBBS",
          "credentialCategory": "degree"
        },
        {
          "@type": "EducationalOccupationalCredential", 
          "name": "DCH",
          "credentialCategory": "degree"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "DNB (Pediatrics)", 
          "credentialCategory": "degree"
        }
      ]
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": phone,
        "contactType": "customer service",
        "availableLanguage": ["English", "Tamil", "Hindi"],
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "email": email,
        "contactType": "customer service"
      }
    ],
    "sameAs": [
      website
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${website}/contact`,
        "inLanguage": "en",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Developmental Paediatrics Consultation"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
