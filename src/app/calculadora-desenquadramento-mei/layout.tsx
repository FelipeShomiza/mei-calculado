import { canonicalUrl, defaultOpenGraphImage, seoKeywords } from "@/data/seoKeywords";
import { Metadata } from "next";

const seo = seoKeywords.desenquadramento;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [seo.primaryKeyword, ...seo.secondaryKeywords],
  alternates: {
    canonical: canonicalUrl(seo.path)
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: canonicalUrl(seo.path),
    images: [defaultOpenGraphImage]
  }
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
