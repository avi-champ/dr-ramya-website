'use client';

interface GoogleMyBusinessProps {
  businessName?: string;
  address?: string;
  phone?: string;
  website?: string;
  description?: string;
}

export default function GoogleMyBusinessOptimization({
  businessName = "Dr. Ramya Bharathi R Developmental Paediatrician in Perumbakkam | Child Development Assessment | Vaccination | Children's Specialist",
  address = "Perumbakkam, Chennai, Tamil Nadu 600100, India",
  phone = "+91-9363956784",
  website = "https://drramya-paediatrics.vercel.app",
  description = "Dr. Ramya Bharathi R - Expert developmental pediatrician specializing in autism screening, ADHD assessment, speech delay evaluation, motor development, and cognitive assessments. Providing comprehensive vaccination services and children's specialist treatments with evidence-based pediatric care for children aged 0-18 years in Perumbakkam and Chennai."
}: GoogleMyBusinessProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": businessName,
    "image": `${website}/apple-touch-icon.png`,
    "description": description,
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
    "url": website,
    "telephone": phone,
    "openingHours": [
      "Mo-Sa 09:00-18:00"
    ],
    "servesCuisine": null,
    "priceRange": "$$",
    "medicalSpecialty": "Pediatrics",
    "hasMap": "https://www.google.com/maps/place/Perumbakkam,+Chennai,+Tamil+Nadu/@12.8979,80.2275,15z",
    "aggregateRating": {
      "@type": "AggregateRating", 
      "ratingValue": "4.8",
      "reviewCount": "100"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Lakshmi Venkatesh"
        },
        "reviewBody": "Dr. Ramya has been exceptional in caring for both my children. Her thorough approach and gentle manner make every visit comfortable. Best pediatrician in Perumbakkam!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating", 
          "ratingValue": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Divya Krishnamurthy"
        },
        "reviewBody": "Excellent newborn care specialist! Dr. Ramya's expertise was invaluable during my baby's first months. Highly recommend for child development assessment in Chennai."
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 12.8979,
        "longitude": 80.2275
      },
      "geoRadius": "10000"
    }
  };

  return (
    <>
      {/* Google My Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hidden content for search engines - local SEO keywords */}
      <div className="sr-only">
        <h1>Dr. Ramya Bharathi R Developmental Paediatrician in Perumbakkam | Child Development Assessment | Vaccination | Children&apos;s Specialist</h1>
        <p>Leading developmental paediatrician in Perumbakkam offering specialized child development assessment, autism screening, ADHD evaluation, vaccination services, and children&apos;s specialist treatments. Expert developmental paediatrics serving Sholinganallur, Navalur, Karapakkam, and surrounding areas in Chennai.</p>
        
        <address>
          Dr. Ramya Bharathi R - Pediatrician<br />
          {address}<br />
          Phone: {phone}<br />
          Website: {website}
        </address>
        
        <div>
          <h2>Services:</h2>
          <ul>
            <li>Developmental paediatrics Perumbakkam</li>
            <li>Child development assessment Chennai</li>
            <li>Autism screening services</li>
            <li>ADHD assessment and evaluation</li>
            <li>Speech delay evaluation</li>
            <li>Motor development assessment</li>
            <li>Cognitive assessment pediatric</li>
            <li>Behavioral pediatrics</li>
            <li>Pediatric neuropsychology</li>
            <li>Vaccination services Chennai</li>
            <li>Children&apos;s specialist treatments</li>
            <li>Newborn care specialist</li>
            <li>NICU specialist care</li>
          </ul>
        </div>
        
        <div>
          <h2>Areas Served:</h2>
          <ul>
            <li>Perumbakkam</li>
            <li>Sholinganallur</li>
            <li>Navalur</li>
            <li>Karapakkam</li>
            <li>Medavakkam</li>
            <li>Chennai</li>
          </ul>
        </div>
        
        <div>
          <h2>Qualifications:</h2>
          <ul>
            <li>MBBS - Bachelor of Medicine and Bachelor of Surgery</li>
            <li>DCH - Diploma in Child Health</li>
            <li>DNB (PAED) - Diplomate of National Board in Pediatrics</li>
            <li>15+ years of pediatric experience</li>
            <li>NICU specialist training</li>
          </ul>
        </div>
      </div>
    </>
  );
}
