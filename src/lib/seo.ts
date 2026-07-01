import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

export function generatePageMetadata({ title, description, path, noindex }: SEOConfig): Metadata {
  const url = `https://valcore.com${path}`;
  const fullTitle = `${title} | Valcore Infraestructura Tecnológica`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    robots: noindex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Valcore",
      type: "website",
      locale: "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Valcore",
    "url": "https://valcore.com",
    "logo": "https://valcore.com/logo.png",
    "description": "Proveedor de sistemas críticos de operación y software de infraestructura empresarial para organizaciones modernas.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-000-000-0000",
      "contactType": "ventas",
      "areaServed": "MX",
      "availableLanguage": "Spanish"
    }
  };
}

export function getSoftwareSchema(name: string, description: string, category: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "operatingSystem": "All",
    "applicationCategory": category,
    "description": description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
}

export function getFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}
