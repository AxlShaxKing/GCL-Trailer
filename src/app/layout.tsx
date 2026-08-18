import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://gcl-rdc.com"),

  title: {
    default: "GCL RDC — Quelque chose se prépare",
    template: "%s | GCL RDC",
  },

  description:
    "Génération Contenu Local — RDC. Une nouvelle génération de contenu émerge en République démocratique du Congo.",

  keywords: [
    "GCL RDC",
    "Génération Contenu Local",
    "RDC",
    "République démocratique du Congo",
    "Kinshasa",
    "Lubumbashi",
    "Bukavu",
    "contenu local",
    "création de contenu",
    "média RDC",
  ],

  authors: [
    {
      name: "GCL RDC",
    },
  ],

  creator: "GCL RDC",
  publisher: "GCL RDC",

  applicationName: "GCL RDC",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_CD",
    url: "https://gcl-rdc.com",
    siteName: "GCL RDC",
    title: "GCL RDC — Quelque chose se prépare",
    description:
      "Génération Contenu Local — RDC. Quelque chose se prépare.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GCL RDC — Génération Contenu Local",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GCL RDC — Quelque chose se prépare",
    description:
      "Génération Contenu Local — RDC. Quelque chose se prépare.",
    images: ["/og-image.jpg"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CD">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  );
}