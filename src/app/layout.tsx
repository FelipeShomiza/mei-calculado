import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { defaultOpenGraphImage } from "@/data/seoKeywords";

const siteUrl = "https://meicalculado.com.br";
const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MEI Calculado - Calculadoras gratuitas para MEI",
    template: "%s | MEI Calculado"
  },
  description: "Calculadoras gratuitas para MEI: limite, faturamento, DAS e relatório mensal. Site independente e informativo.",
  applicationName: "MEI Calculado",
  keywords: ["MEI", "calculadora MEI", "limite MEI", "DAS MEI", "faturamento MEI"],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  },
  openGraph: {
    title: "MEI Calculado - Calculadoras gratuitas para MEI",
    description: "Calcule limite, faturamento, DAS e relatório mensal do MEI com ferramentas simples e gratuitas.",
    siteName: "MEI Calculado",
    locale: "pt_BR",
    type: "website",
    images: [defaultOpenGraphImage]
  },
  twitter: {
    card: "summary_large_image",
    title: "MEI Calculado - Calculadoras gratuitas para MEI",
    description: "Calcule limite, faturamento, DAS e relatório mensal do MEI com ferramentas simples e gratuitas.",
    images: [defaultOpenGraphImage.url]
  },
  robots: {
    index: true,
    follow: true
  },
  verification: verification ? { google: verification } : undefined
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
