import * as React from 'react'

interface SoftwareAppSchemaProps {
  name: string
  description: string
  operatingSystem: string
  applicationCategory: string
  price: string
}

/**
 * @description Inyecta dinámicamente el esquema SoftwareApplication en formato JSON-LD dentro del HEAD.
 * @see STUDIO KUALI PROTOCOL v3.0 (Regla 5: Seguridad e Integridad)
 */
export const SoftwareAppSchema: React.FC<SoftwareAppSchemaProps> = ({
  name,
  description,
  operatingSystem,
  applicationCategory,
  price
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "operatingSystem": operatingSystem,
    "applicationCategory": applicationCategory,
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "MXN"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface FAQSchemaProps {
  questions: { question: string; answer: string }[]
}

/**
 * @description Inyecta el esquema FAQPage para maximizar el CTR orgánico en Google México.
 */
export const FAQSchema: React.FC<FAQSchemaProps> = ({ questions }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
