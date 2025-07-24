'use client';

export default function ContactPageSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "NewGen Multi Speciality Clinics",
    "url": "https://drramyabharathi.com",
    "logo": "https://drramyabharathi.com/logo.png",
    "description": "Premier pediatric care serving Perumbakkam, Sholinganallur, OMR, and surrounding Chennai areas",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A Block, 1A2, 363, Nookampalayam Rd, Arasankalani",
      "addressLocality": "Perumbakkam",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600126",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.8849434",
      "longitude": "80.2234567"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9363956784",
      "contactType": "customer service",
      "availableLanguage": ["English", "Tamil", "Hindi"],
      "areaServed": ["Perumbakkam", "Sholinganallur", "OMR", "Navalur", "Kelambakkam", "Siruseri", "Chennai"]
    },
    "openingHours": [
      "Mo-Sa 17:30-20:30",
      "Su emergency only"
    ],
    "medicalSpecialty": "Pediatrics",
    "hasMap": "https://maps.google.com/?q=NewGen+Multi+Speciality+Clinics+A+Block+1A2+363+Nookampalayam+Rd+Arasankalani+Perumbakkam+Chennai+600126",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
    "areaServed": {
      "@type": "City",
      "name": "Chennai",
      "containedInPlace": {
        "@type": "State",
        "name": "Tamil Nadu"
      }
    }
  };

  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Ramya Bharathi R",
    "givenName": "Ramya Bharathi",
    "familyName": "R",
    "honorificPrefix": "Dr.",
    "jobTitle": "Pediatrician",
    "description": "Experienced pediatrician specializing in child development assessment, behavioral pediatrics, and comprehensive pediatric care",
    "medicalSpecialty": ["Pediatrics", "Child Development", "Behavioral Pediatrics", "Neonatology"],
    "qualifications": ["MBBS", "DCH", "DNB(PAED)"],
    "yearsOfExperience": "15+",
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "NewGen Multi Speciality Clinics"
    },
    "areaServed": ["Perumbakkam", "Sholinganallur", "OMR", "Navalur", "Kelambakkam", "Siruseri", "Chennai"],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Child Development Assessment"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "Pediatric Consultation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Vaccinations"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Newborn Care"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://drramyabharathi.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact",
        "item": "https://drramyabharathi.com/contact"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://drramyabharathi.com/#localbusiness",
    "name": "Dr. Ramya Bharathi R - Pediatrician",
    "alternateName": "NewGen Multi Speciality Clinics - Pediatrics",
    "description": "Expert pediatric care in Perumbakkam, serving families from Sholinganallur, OMR, and surrounding Chennai areas",
    "url": "https://drramyabharathi.com",
    "telephone": "+91-9363956784",
    "email": "dr.ramyabharathi@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A Block, 1A2, 363, Nookampalayam Rd, Arasankalani",
      "addressLocality": "Perumbakkam", 
      "addressRegion": "Tamil Nadu",
      "postalCode": "600126",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.8849434",
      "longitude": "80.2234567"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:30",
        "closes": "20:30"
      }
    ],
    "servesCuisine": "Medical Services",
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
    "areaServed": [
      "Perumbakkam",
      "Sholinganallur", 
      "OMR",
      "Navalur",
      "Kelambakkam",
      "Siruseri",
      "Chennai"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
