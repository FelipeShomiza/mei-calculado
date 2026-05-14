import { FAQItem } from "./FAQ";
import { canonicalUrl, siteUrl } from "@/data/seoKeywords";

type StructuredDataProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c")
      }}
    />
  );
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MEI Calculado",
    url: siteUrl,
    description: "Calculadoras e guias informativos para MEI.",
    inLanguage: "pt-BR"
  };
}

export function breadcrumbSchema(items: { path: string; name: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path)
    }))
  };
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function webApplicationSchema({ name, path, description }: { name: string; path: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url: canonicalUrl(path),
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web browser",
    isAccessibleForFree: true,
    inLanguage: "pt-BR"
  };
}
