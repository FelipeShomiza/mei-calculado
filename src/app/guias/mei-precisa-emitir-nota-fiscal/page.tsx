import { GuidePage } from "@/components/GuidePage";
import { guides } from "@/data/guides";
import { canonicalUrl, defaultOpenGraphImage, seoKeywords } from "@/data/seoKeywords";
import { Metadata } from "next";

const slug = "mei-precisa-emitir-nota-fiscal";
const guide = guides[slug];
const seo = seoKeywords[slug];
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: [seo.primaryKeyword, ...seo.secondaryKeywords],
  alternates: { canonical: canonicalUrl(seo.path) },
  openGraph: { title: seo.title, description: seo.description, url: canonicalUrl(seo.path), images: [defaultOpenGraphImage] }
};
export default function Page() { return <GuidePage {...guide} path={seo.path} />; }
