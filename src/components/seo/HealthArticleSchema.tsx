'use client';

interface ArticleSchemaProps {
  title: string;
  description: string;
  author?: string;
  datePublished?: string;
  dateModified?: string;
  url?: string;
  image?: string;
  category?: string;
  readingTime?: number;
  medicalSpecialty?: string;
}

export default function HealthArticleSchema({
  title,
  description,
  author = "Dr. Ramya Bharathi R",
  datePublished,
  dateModified,
  url,
  image = "/apple-touch-icon.png",
  category = "Healthcare",
  readingTime = 5,
  medicalSpecialty = "Pediatrics"
}: ArticleSchemaProps) {
  const siteUrl = "https://drramya-paediatrics.vercel.app";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": title,
    "description": description,
    "url": fullUrl,
    "image": {
      "@type": "ImageObject",
      "url": fullImage,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": author,
      "jobTitle": "Pediatrician",
      "medicalSpecialty": medicalSpecialty,
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
    "publisher": {
      "@type": "MedicalBusiness",
      "name": "Dr. Ramya Bharathi R - Pediatrician",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/apple-touch-icon.png`
      }
    },
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": dateModified || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "patient"
    },
    "about": {
      "@type": "MedicalCondition",
      "name": "Pediatric Health"
    },
    "specialty": medicalSpecialty,
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "genre": "Medical Information",
    "keywords": [
      "pediatrics",
      "child health",
      "medical advice",
      "healthcare",
      "children",
      "parents",
      medicalSpecialty.toLowerCase()
    ],
    "timeRequired": `PT${readingTime}M`,
    "articleSection": category,
    "reviewedBy": {
      "@type": "Person",
      "name": author,
      "jobTitle": "Pediatrician"
    },
    "potentialAction": {
      "@type": "ReadAction",
      "target": fullUrl
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
